/**
 * Created by acer on 2018/9/23.
 */
$(function() {
    $(`<link rel="stylesheet" href="css/head.css">`).appendTo("head");
    $.ajax({
        url: "head.html",
        type: "get",
        success: function (res) {
            $(res).replaceAll("#head");
        }
    })
})
window.onload=function(){
    var uname=window.location.search.slice(1).split("#")[0];
    if(uname!=""){
        var header=document.getElementById("head");
        console.log(header)
        header.children[1].style.display="none";
        header.children[2].style.display="none";
        header.children[3].innerHTML="欢迎回来:"+uname;
        header.children[3].style.display="block";
    }
}

window.onbeforeunload=function(e){
    var uname=window.location.search.slice(1).split("#")[0];
    if(uname!=""){
        (async function(){
            try{
                var res=await ajax({
                    type:"get",
                    url:`http://localhost:3000/user/isOnline`,
                    data:`uname=${uname}`
                })
            }catch(msg){
                console.log(msg)
            }
        })()
    }
}
