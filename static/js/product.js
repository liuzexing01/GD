/**
 * Created by web on 2018/9/5.
 */
/*fenye2图片切换*/
(function(){
    var sports=document.querySelectorAll("#fenye2 .data ul li");
    var data_picLi=document.querySelectorAll("#fenye2 .data_pic>ul>li");
    for(var i=0;i<data_picLi[1].children[1].children.length;i++){
        var div=data_picLi[1].children[1].children[i];
        div.style.top=`${25*i+80}px`
    }
    function s_hide(){
        for(var sport of sports){
            sport.children[1].style.opacity=0;
        }
    }
    function p_hide(i){
        var div0=data_picLi[0];
        var div1=data_picLi[1].children[1];
        var div2=data_picLi[2];
        for(var div of div0.children){
            div.style.display="none";
            div.children[1].style.width="0px"
        }
        for(var div of div1.children){
            div.style.width="0px"
        }
        for(var div of div2.children){
            div.style.display="none"
            div.children[1].style.width="0px"
        }

        div0.children[i].style.display="block";
        div2.children[i].style.display="block";

        setTimeout(function() {
            div0.children[i].children[1].style.width = "324px"
        },0);

        for(let m=0;m<div1.children.length;m++){
            var t=500+m*200;
            setTimeout(function(){
                div1.children[m].style.width="150px";
            },t)
        }
        setTimeout(function(){
            div2.children[i].children[1].style.width="324px"
        },2000)
    }
    s_hide();
    p_hide(0)
    sports[0].children[1].style.opacity=1;
    for(var sport of sports){
        sport.onmouseover = function () {
            s_hide();
            this.children[1].style.opacity = 1;
            for(i=0;i<sports.length;i++){
                if(this==sports[i])
                    break;
            }
            p_hide(i)
        }
    }
})();
/*fenye4图片切换*/
    var ul=document.querySelector("#fenye4 div.data ul");
    var person=document.querySelectorAll("#fenye4 div.person>div")
    var map=document.querySelectorAll("#fenye4 div.map>div")
    function select(msg){
        for(var div of map) {
            div.style.display = "none"
        }
        if(msg=="北京"){
            map[0].style.display="block";
            return map[0];
        }else if(msg=="深圳"){
            map[1].style.display="block";
            return map[1];
        }else if(msg=="成都"){
            map[2].style.display="block";
            return map[2];
        }
    }
    select("北京");
    ul.onclick=function(e){
        if(e.target.nodeName=="LI"){
            var li=e.target;
            for(var a of ul.children){
                a.className=""
            }
            li.className="active";
            var address=li.innerHTML;
            (async function(){
                var res=await ajax({
                    type:"get",
                    url:"http://localhost:3000/product/search",
                    dataType:"json",
                    data:`address=${address}`
                });
                var smap=select(li.innerHTML);
                for(let i=0;i<res.length;i++){
                    var {sname,details,background,pic}=res[i];
                    person[i].style.background=`url(${background}) no-repeat`;
                    person[i].innerHTML=`${sname}占领了${details}`;
                    smap.children[i].innerHTML=`<img src="${pic}"/>`;
                }
            })()
        }
    }

