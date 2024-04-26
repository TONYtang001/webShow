document.querySelector('.login').addEventListener('click', ()=>{

    
    // 跳转到指定的 URL 地址(登录页面)
    location.href = "./html/login.html";//相对路径
    // location.href = "D:/学校的杂七杂八/大二/大二下/杂/数据库课程设计/人员管理系统/html/login.html";
    // 用反斜杠'\'可以实现字符串分行书写

})

document.querySelector('.register').addEventListener('click', ()=>{
    
    // 跳转到指定的 URL 地址(注册页面)
    location.href = "./html/register.html";//相对路径

})