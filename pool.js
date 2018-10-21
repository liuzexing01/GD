/**
 * Created by acer on 2018/8/22.
 */

const mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gudong',
    connectionLimit:10
})
module.exports=pool;
