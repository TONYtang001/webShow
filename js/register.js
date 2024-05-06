// document.querySelector('.btn').addEventListener('click',()=>{
//     // 判断注册输入的用户名密码是否符合规定
//     // 如果符合（if）
//     location.href = "./login.html";
// })




document.querySelector('.btn').addEventListener('click', async function() {
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const confirmPassword = document.getElementsByName('confirmpassword')[0].value;

    if(password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/register', {
            username,
            password,
        });

        if(response.status === 201) {
            console.log(response.data.message);
            alert('User registered successfully!');
            // 清空表单或执行其他成功操作
            document.getElementById('registerForm').reset();
            location.href = "./login.html";
        } else {
            throw new Error(response.data.error || 'Unexpected response');
        }
    } catch(error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again later.');
    }
});