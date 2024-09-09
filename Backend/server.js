const express=require("express");
const mysql=require('mysql')
const corn=require('cors')

const app=express();
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "MCA_DEPT"

})

app