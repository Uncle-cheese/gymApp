const express = require("express");
const pool = require("../database/db_Connection"); // db connection
const bcrypt = require("bcryptjs");

//create new user
module.exports.createUser = (req, res) => {
  const { name, email, phone, password } = req.body;

  //hash password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  // console.log("hashed password:", hashedPassword);

  //setting the user table
  pool.query(
    "INSERT INTO users(name,email,phone,password) VALUES($1,$2,$3,$4) RETURNING id",
    [name, email, phone, hashedPassword],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(201).send(`user with id ${results.rows[0].id} has been saved successfully`);
      }
    }
  );
};

//get users
module.exports.getAllUsers = (req,res)=>{
    pool.query("SELECT * FROM users",(error,results)=>{
      if(error){
        throw error 
      }else{
        res.status(200).json(results.rows)
      }
    })
}
