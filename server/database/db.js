var Sequelize = require('sequelize');
var express = require('express');
var mysql = require("mysql2");
var sequelize = require('sequelize')
var db = {}

var sequelize = new Sequelize('users', 'root', 'mc1982118', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db