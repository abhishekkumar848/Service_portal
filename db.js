const mongoose = require("mongoose");
const Signup = require("./models/userlogin");

main()
  .then(() => {
    console.log("connection is complete");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userLogin");
};

let userSign = [
  {
    name:"ABHISHEK",
    email:"abhi@gmail.com",
    password:"000000",
    age:"23",
    Number:123456789,
    profile:"./images/profile 1.jpeg",
},{
  name:"rahul",
  email:"rahul@gmail.com",
  password:"111111",
  age:"24",
  Number:8456597522,
  profile:"./images/user2.jpg",
}
];

Signup.insertMany(userSign)

module.exports= main