/**
 * Created by acer on 2018/8/20.
 */
//ajax异步请求/
function ajax({url,type,data,dataType}){
    return new Promise(function(resolve,err){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                if(dataType!==undefined&&dataType.toLowerCase()==="json")
                    var res=JSON.parse(xhr.responseText);
                else
                    var res=xhr.responseText
                resolve(res)
            }
        }
        if(type.toLowerCase()=="get"&&data!=undefined){
            url+="?"+data;
        }
        //3.打开连接
        xhr.open(type,url,true);
        if(type.toLowerCase()==="post")
        //增加：设置请求消息头
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //4.发送请求
        if(type.toLowerCase()=="post"&&data!==undefined)
            xhr.send(data);
        else
            xhr.send(null);
    })
}