const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mca_department",
});


app.post("/signup", (req, res) => {
    console.log("entered into post");
    
    const FirstName = req.body.FirstName;
    const LastName=req.body.LastName;
    const Email=req.body.Email;
    const Phone=req.body.Phone;
    const Gender=req.body.Gender;
    const Birthdate=req.body.Birthdate;
    const Password=req.body.Password;
    const Cpassword=req.body.Cpassword;

  con.query(
    "INSERT INTO signup (fname,lname,eid,phno,gender,bdate,password,cpassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [FirstName,LastName,Email,Phone,Gender,Birthdate,Password,Cpassword],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "ENTER CORRECT ASKED DETAILS!" });
      }
    }
  );
});

app.listen(8081, () => {
  console.log("port listening ");
});
