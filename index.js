const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Signup = require("./models/userlogin");
const { error } = require("console");



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

// connection mongodb
main()
  .then(() => {
    console.log("connection is complete");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userLogin");
}

// home route
app.get("/signup",(req,res)=>{
  res.render("sign.ejs")
})
 // new user sign up 

app.post("/signup/done",(req,res)=>{
  let {name,email,password,age,Number,profile} = req.body;
  console.log(req.body);
  let newUser = new Signup ({
    name:name,
    email:email,
    password:password,
    age:age,
    Number:Number,
    profile:profile,
  });
  newUser.save().then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
 res.render("profile.ejs",{name,email,password,age,Number,profile})
});

//login page

app.get("/login",(req,res)=>{
  res.render("login.ejs")
})

// POST route for handling login
app.post("/login/main", async (req, res) => {
  let { email, password } = req.body;
  console.log(`Received email: ${email}, password: ${password}`); // Debugging
  try {
      // Find the user by email
      let user = await Signup.findOne({ email: email,password:password });
      console.log(`User found: ${user}`); 
      if (user) {
        res.render("main.ejs", { user });
          console.log(`Password match: ${user}`); // Debugging
      } else {
          // User not found
          res.render("notfound.ejs")
      }
  } catch (error) {
      // Handle any other errors
      console.error(error);
      res.send("An error occurred");
  }
  console.log(req.body);
});

app.get("/",(req,res)=>{
  res.render("home.ejs")
})
// connection express
let ports = 8080;
app.listen(ports, (req, res) => {
  console.log("server is running now ", ports);
});
