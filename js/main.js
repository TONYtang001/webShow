document.getElementById('attendanceButton').addEventListener('click', function() {
    var status = document.getElementById('attendanceStatus');
    if (status.textContent === '未打卡') {
        status.textContent = '已打卡';
        this.disabled = true; // 点击后禁用按钮
    } else {
        status.textContent = '未打卡';
        this.disabled = false; // 如果再次点击，恢复按钮状态
    }
});