// username
// password
// btn
document.querySelector('.btn').addEventListener('click',()=>{
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    // 判断登录输入的用户名密码是否符合数据库中查询到的数据
    // 如果符合（if）
    // location.href = "./main.html";

    axios({
        url:'http://localhost:5000/login',
        method:'post',
        data:{
            username,
            password
        }
    }).then(response=>{
         // 假设登录成功后，后端会返回一些信息，比如token或用户信息
         if (response.status === 200) {
            console.log(response.data.message); // 根据后端实际返回的信息调整
            // 登录成功，跳转到主页面
            location.href = "./main.html";
        } else {
            // 处理非200状态码的情况，例如后端返回了错误信息
            throw new Error(`登录失败，状态码：${response.status}`);
        }
    }).catch(error=>{
        // 捕捉到任何错误，包括网络错误和后端返回的错误信息
        console.error('登录失败:', error);
        alert('登录失败，请检查用户名和密码是否正确。');
    })



})