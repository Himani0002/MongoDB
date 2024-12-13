const mongoose = require("mongoose");

main()
  .then((rev) => {
    console.log("Connections successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discound: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Mathematics XII",
  author: "RD Sharma",
  price: 1200,
  category: "fiction",
});

book1.save();
