const express=require("express");
const mysql=require('mysql')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Admin",
    database: "MCA_DEPT"

})
app.post('/signup'),(req,res)=>{
    const sql="insert into stud_reg(fname,lname,eid,phno,gender,bdate)values(?)";
    const values=[
        req.body.fname,
        req.body.lname,
        req.body.eid,
        req.body.phno,
        req.body.gender,
        req.body.bdate,
        req.bady.password,
        req.body.cpassword
    ]
    
    db.query(sql,[values],(err,data)=> {
        if(err){
            return res.json("Error");

        }
        return res.json("data");
    })
}


app.listen(8081,()=>{
    console.log("MCA_DEPT")
})