(async function(){
        var res=await ajax({
            type:"get",
            url:"http://localhost:3000/about_us/",
            dataType:"json"
        })
        var html="";
        var tds=document.querySelectorAll("#hezuo table td");
        var i=0;
        for(var c of res){
            var {cname,email}=c;
            var html=`<p>${cname}</p>${email}`
            tds[i].innerHTML=html;
            i++;
        }
})()