/**
 * Created by acer on 2018/8/22.
 */
//设置服务器，引入包
const express=require('express');
const router=express.Router();
//引入连接池
const pool=require('../pool.js');
//添加路由
router.post('/add',(req,res)=>{
    var obj=req.body;
    var sql='insert into gd_user set ?';
    pool.query(sql,obj,(err,result)=>{
        if (err) throw err
        res.send("OK")
    })
})

router.get('/check',(req,res)=>{
    var uname=req.query.uname;
    var sql="select * from gd_user where uname=?"
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("已存在")
        }else{
            res.send("不存在")
        }
    })
})

router.post('/login',(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var sql='select * from gd_user where uname=? and upwd=?';
    pool.query(sql,[uname,upwd],(err,result)=>{
        if (err) throw err
        if(result.length>0) {
            var sql='update gd_user set IsOnline=1 where uname=?';
            pool.query(sql,[uname],(err,result)=>{
                if (err) throw err
            })
            res.send(`${uname}`)
        }else{
            res.send("wrong")
        }
    })
})

router.get('/isOnline',(req,res)=>{
    var uname=req.query.uname;
    var sql='update gd_user set IsOnline=0 where uname=?';
    pool.query(sql,[uname],(err,result)=>{
        if (err) throw err
        res.send("OK")
    })
})

//导出
module.exports=router;