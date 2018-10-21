/**
 * Created by web on 2018/9/10.
 */
var txtRegister=document.forms[0].register;
var txtLog=document.forms[0].login;
var txtName=document.forms[0].uname;
var txtPwd=document.forms[0].pwd;
txtRegister.onclick=function(){
    location.href="http://localhost:3000/register.html"
}
txtLog.onclick=function(){
    var uname=txtName.value;
    var upwd=txtPwd.value;
    var str=`uname=${uname}&upwd=${upwd}`;
    (async function(){
        try{
            var res=await ajax({
                type:"post",
                url:`http://localhost:3000/user/login`,
                data:str
            })
            if(res=="wrong"){
                alert("用户名或密码错误")
            }else{
                location.href="http://localhost:3000/index.html?"+uname;
        }
        }catch(msg){
            console.log(msg)
        }
    })()
}
