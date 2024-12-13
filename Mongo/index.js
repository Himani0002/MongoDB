const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successful");
  })

  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("", userSchema);

// const user1 = new User({
//   name: "Himani",
//   email: "himanigohil0002@gmail.com",
//   age: 24, // Replace with the correct age
// });

// const user2 = new User({
//   name: "Eve",
//   email: "Eve@gmail.com",
//   age: 24, // Replace with the correct age
// });

// const usre3 = new User({
//   name: "Tom",
//   email: "tom@gamil.com",
//   age: 24,
// });
// usre3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "tom", email: "tom@gmail.com", age: 23 },
//   { name: "Eve", email: "eve@gmail.com", age: 23 },
//   { name: "Roy", email: "roy@gmail.com", age: 23 },
// ]).then((res) => {
//   console.log(res);
// });

// User.find({ age: { $gt: 10 } }).then((res) => {
//   console.log(res);
// });

//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Himani" }, { age: 21 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 22 } }, { age: 56 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.deleteMany({ age: 23 }).then((res) => {
  console.log(res);
});

User.findByIdAndDelete("6759c2c3877b269e0d454374")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOneAndDelete("6759a6634a97bd193b9d8bf1")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// user1.save();
