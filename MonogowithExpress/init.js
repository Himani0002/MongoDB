const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connections successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.indestMany([
  {
    form: "neha",
    to: "Priya",
    msg: "send me your book",
    created_at: new Date(),
  },
]);

chat1.save().then((res) => {
  console.log(res);
});
