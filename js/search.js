document.getElementById('searchBtn').addEventListener('click', function() {
    const employeeName = document.getElementById('employeeName').value.trim();
    let url = 'http://localhost:5000/attendance'; 
    let params = {};

    // 根据输入决定查询是特定员工还是所有员工
    if (employeeName) {
        params = { username: employeeName };
    } else {
        params = { all_records: 'true' };
    }

    fetch(url, {
        method: 'POST', // 或者使用 'GET' 根据您的后端接口设计
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params), // 发送JSON数据
    })
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json(); // 解析JSON响应
    })
    .then(data => {
        updateTable(data); // 使用返回的数据更新表格
    })
    .catch(error => {
        console.error('Error:', error);
        alert('查询失败，请检查输入或网络连接');
    });
});

function updateTable(records) {
    const tableBody = document.querySelector('#attendanceTable tbody');
    tableBody.innerHTML = ''; // 清空现有内容

    records.forEach(record => {
        const newRow = `
            <tr>
                <td>${record.AttendanceDate}</td>
                <td>${record.Name}</td>
                <td>${record.CheckInTime}</td>
                <td>${record.Status}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', newRow);
    });
}