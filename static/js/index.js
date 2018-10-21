/**
 * Created by web on 2018/8/25.
 */
/*fenye1中图片高度随页面高度变化*/
(function(){setInterval(function(){
    var aHeight=document.documentElement.clientHeight;
    var oImg=document.getElementById('fenye1');
    oImg.style.height=`${aHeight}px`;
},20)})()
/*fenye1中图片渐变消失*/
setInterval(task,3000)
function task(){
    var img1=fenye1.children[1];
    if(img1.style.opacity=="0"){
        img1.style.opacity=1
    }else{
        img1.style.opacity=0
    }
}
/*fenye2中的轮播*/
(function(){
    var divOut=document.querySelector(".pic>div")
    function a(){
        for(var i=0;i<divOut.children.length;i++){
            divOut.children[i].style.left=i*14.3+"%";
            divOut.children[i].style.margin="25px 6px 0";
            divOut.children[i].style.width="180px"
            divOut.children[i].style.height="318px"
        }
    }
    a()
    function big(){
        var divBig=divOut.children[3];
        divBig.style.margin="0";
        divBig.style.width="198px";
        divBig.style.height="350px";
    }
    big();
    setInterval(function(){
        var divFirst=divOut.firstElementChild;
        divOut.appendChild(divFirst);
        a()
        var divSec=divOut.children[1];
        var divLast=divOut.lastElementChild;
        divFirst.innerHTML=divSec.innerHTML;
        divLast.innerHTML=divSec.innerHTML;
        big()
    },3000)
}())
/*fenye3中的轮播*/
    //图片定位
    var divOut=document.querySelector(".pic3>div")
    function paixu(){
        for(var i=0;i<divOut.children.length;i++){
            divOut.children[i].style.left=i*11.1+"%";
        }
    }
    paixu()
//定时器中的方法
    function lunbo(){
        var divFirst=divOut.firstElementChild;
        divOut.appendChild(divFirst)
        paixu()
        var divMsg=divOut.children[4].children[0].src
        if(divMsg.indexOf("bra")!=-1){
            divOut.nextElementSibling.children[0].innerHTML="咕咚智能运动BRA"
        }
        if(divMsg.indexOf("walk")!=-1){
            divOut.nextElementSibling.children[0].innerHTML="咕咚智能健步鞋WF"
        }
        if(divMsg.indexOf("run")!=-1){
            divOut.nextElementSibling.children[0].innerHTML="咕咚智能跑鞋RF"
        }}
    var time=setInterval(lunbo,3000)
    /*鼠标拖动事件(没写完)
    var canMove=false,offsetX,offsetY;
    var pic=document.querySelector("#fenye3 .pic3 div div img")
    pic.onmousedown=function(e){
        canMove=true;
        offsetX=e.offsetX;
        clearInterval(time)
        // offsetY=e.offsetY;
    }
    window.onmousemove=function(e){
        if(canMove==true){
            var left=e.clientX-offsetX;
            pic.style.left=`${left}px`
        }
    }
    window.onmouseup=function(){
        canMove=false;
        time=setInterval(lunbo,3000)
    }
    */






