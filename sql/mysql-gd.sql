set Names utf8;

drop database if exists gudong;

create database gudong charset=utf8;

use gudong;

create table gd_user(
  uid TINYINT primary key AUTO_INCREMENT,
  uname varchar(8),
  upwd varchar(12),
  phone bigint(11),
  email varchar(15),
  sex tinyint(1),
  pic varchar(128)
);