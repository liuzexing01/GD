/**
 * Created by acer on 2018/8/26.
 */
var txtName=document.forms[0].uname;
var txtPwd=document.forms[0].pwd;
var txtPwdRe=document.forms[0].pwdRe;
var txtPhone=document.forms[0].phone;
var txtEmail=document.forms[0].email;
var btn=document.forms[0].button;
function check(text,reg){
    var div=text.parentElement.nextElementSibling.children[0];
    if(reg.test(text.value)){
        div.className="success";
        return true;
    }else{
        div.className="fail";
        return false;
    }
}
txtName.onblur=function(){
    var div=this.parentElement.nextElementSibling.children[0];
    var result=check(this,/^\w{4,8}$/)
    if(!result){
        div.innerHTML="请输入4-8位数字、字母或_的用户名"
    }else{
        (async function(){
            try{
            var res=await ajax({
                type:"get",
                url:`http://localhost:3000/user/check`,
                data:`uname=${txtName.value}`
            })
            if(res=="已存在"){
                div.innerHTML="用户名已存在"
                div.className="fail";
            }else{
                console.log(res)
                div.innerHTML=""
                div.className="success";
            }
            }catch(msg){
                console.log(msg)
            }
        })()
    }
}
txtPwd.onblur=function(){
    var div=this.parentElement.nextElementSibling.children[0];
    var result=check(this,/^\d{6,8}$/)
    if(!result){
        div.innerHTML="请输入6-8位数字、字母或_的密码"
    }else{
        div.innerHTML=""
    }
}
txtPhone.onblur=function(){
    var div=this.parentElement.nextElementSibling.children[0];
    var result=check(this,/^[0-9]{11}$/)
    if(!result){
        div.innerHTML="请输入正确的手机号"
    }
    else{
        div.innerHTML=""
    }
}
txtEmail.onblur=function(){
    var div=this.parentElement.nextElementSibling.children[0];
    var result=check(this,/[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?/)
    if(!result){
        div.innerHTML="请输入请输入正确的邮箱"
    }else{
        div.innerHTML=""
    }
}
txtPwdRe.onblur=function(){
    var div=this.parentElement.nextElementSibling.children[0];
    if(this.value!=txtPwd.value||this.value==""){
        div.innerHTML="两次密码不一致"
        div.className="fail";
    }else{
        div.innerHTML=""
        div.className="success";
    }
}
btn.onclick=function(){
    var uname=txtName.value;
    var upwd=txtPwd.value;
    var phone=txtPhone.value;
    var email=txtEmail.value;
    var str=`uname=${uname}&upwd=${upwd}&phone=${phone}&email=${email}`;
    if(check(txtName,/^\w{4,8}$/)&&check(txtPwd,/^\d{6,8}$/)&&check(txtPhone,/^[0-9]{11}$/)&&check(txtEmail,/[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?/)&&txtPwdRe.value==txtPwd.value){
        (async function(){
            try{
                var res=await ajax({
                    type:"post",
                    url:`http://localhost:3000/user/add`,
                    data:str
                })
                if(res=="OK"){
                    location.href="http://localhost:3000"
                }
            }catch(msg){
                console.log(msg)
            }
        })()
    }
}