const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/users');
const Admin = require('../models/admin');
const Movie = require('../models/movies');

router.get("/addadmin", (req,res) => {
    res.send("Add admin");
});

router.post('/addadmin',  (req, res) =>{
    const {  username, password, password2, role} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if( !username || !password || !password2  || !role){
        errors.push({ msg: "Please fill in all fields" });
        res.send({ msg: "Please fill in all fields" });
    } 
    // making sure passwords match
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }
    // password length should more than 6
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters" });
    }
    //making sure there are no errors
    if (errors.length > 0) {
        res.send(errors);
    }
    else {
        //
        Admin.findOne({ username: username }).exec((err, admin) => {
            if(admin)
            {
                errors.push({ msg: "Username already registered" });
                res.send({ msg: "Username already registered" });
            }
            else {
                const newAdmin = new Admin({
                    username: username,
                    password: password,
                    role: role,
                    
                });

                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                    if (err) throw err;
                    //save pass to hash
                    newAdmin.password = hash;
                    //save user
                    newAdmin
                        .save()
                        .then((value) => {
                        
                        res.send("Admin Created");
                        })
                        .catch((value) => console.log(value));
                    }) 
                
                )
            }
        });
    }
});

router.delete("/deletedmin/:id", (req, res) => {
    const aId = req.params.id;
    Admin.deleteOne({ _id: mongoose.Types.ObjectId(aId) }, (err) => {
      if(err){
          console.error(err);
          res.send({ error: err });
          return;
      }
   
      console.log("ADMIN DELETED");
      res.send({ msg: "Admin DELETED" });
   
    });
})

router.get("/addusers", (req,res) => {
    res.send("New User Added Successfuly");
});

router.post('/addusers',  (req, res) =>{
    const {  username, email, password, password2,  role} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!email || !username || !password || !password2 || !role){
        errors.push({ msg: "Please fill in all fields" });
        res.send({ msg: "Please fill in all fields" });
    } 
    // making sure passwords match
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }
    // password length should more than 6
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters" });
    }
    //making sure there are no errors
    if (errors.length > 0) {
        res.send(errors);
    }
    else {
        //
        User.findOne({ username: username }).exec((err, user) => {
            if(user)
            {
                errors.push({ msg: "Username already registered" });
                res.send({ msg: "Username already registered" });
            }
            else {
                const newUser = new User({
                    email: email,
                    username: username,
                    password: password,
                    role: role,
                  
                });

                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newStudent.password, salt, (err, hash) => {
                    if (err) throw err;
                    //save pass to hash
                    newUser.password = hash;
                    //save user
                    newUser
                        .save()
                        .then((value) => {
                        
                        res.send("User Created");
                        })
                        .catch((value) => console.log(value));
                    }) 
                
                )
            }
        });
    }
});

router.post('/addmovie',  (req, res) =>{
    const { title, cost, year, genre, description} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!title || !cost || !year ||!genre || !description){
        errors.push({ msg: "Please fill in all fields" });
        res.send({ msg: "Please fill in all fields" });
    } 

    //making sure there are no errors
    if (errors.length > 0) {
        res.send(errors);
    }
    else 
    {
        //Add to movie         
        const newMovie = new Movie({
            year: year,
            cost: cost,
            cost: cost,
            genre: genre,
            description: description,
                    
        });

        newMovie
            .save()
            .then((value) => {
                        
            res.send("Movie Added");
            })
            .catch((value) => console.log(value));


    }
        
    
});


router.get("/allusers", (req,res) => {
    Admin.find({},(err,admin) => {
      if(err){
          console.error(err);
          res.send({error : err});
          return;
      }
      adminNum = admin.length
      console.log("ADMIN LIST READ");
      
    });
  
  
  User.find({},(err,users) => {
    if(err){
        console.error(err);
        res.send({error : err});
        return;
    }
    num = users.length
    console.log("Users LIST READ");
    res.send({"Students" : num, "Admins" : adminNum, });

  });
});

router.get("/allmovies", (req,res) => {
    Menu.find({},(err,movie) => {
      if(err){
          console.error(err);
          res.send({error : err});
          return;
      }
      num = movie.length
      console.log("Movies LIST READ");
      res.send({"Movies" : num,  });
    });
  

});


module.exports = router;