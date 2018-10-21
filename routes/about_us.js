/**
 * Created by web on 2018/9/10.
 */
const express=require('express');
const router=express.Router();
//引入连接池
const pool=require('../pool.js');

router.get('/',(req,res)=>{
    var sql="select * from gd_cooperation"
    pool.query(sql,[],(err,result)=>{
        res.send(result)
    })
})

module.exports=router;