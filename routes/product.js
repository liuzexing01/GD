/**
 * Created by web on 2018/9/15.
 */
const express=require('express');
const router=express.Router();
//引入连接池
const pool=require('../pool.js');

router.get('/search',(req,res)=>{
    var obj=req.query.address;
    var sql="select * from gd_sports where address=?"
    pool.query(sql,[obj],(err,result)=>{
        res.send(result)
    })
})

module.exports=router;