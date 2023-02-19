window.onload=function(){
var longin_click = document.getElementById('in_bottom');

var user_info = new Map([
    ['admin','123456'],
    ['user','123456']
])

longin_click.onclick = function(){
    var user_name = document.getElementById('userNo_input').value;
    var user_pwd = document.getElementById('password_input').value;
    for(var [key, value] of user_info){
        if(user_name == key && user_pwd == value){
            alert('登录成功！');
            return;
        }
    }
    alert('账号或密码错误，登录失败');
    return;
}
}
