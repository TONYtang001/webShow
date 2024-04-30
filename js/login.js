// username
// password
// btn
document.querySelector('.btn').addEventListener('click',()=>{
    const uname = document.querySelector('.username').value
    const pword = document.querySelector('.password').value
    console.log(uname+pword);
    // 判断登录输入的用户名密码是否符合数据库中查询到的数据
    // 如果符合（if）
    location.href = "./main.html";

})