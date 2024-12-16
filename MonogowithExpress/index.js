const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.error("Database connection error:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Sample data to be saved in the database
let chat1 = new Chat({
  form: "Neha",
  to: "Priya",
  msg: "Send me your exam sheets",
  created_at: new Date(),
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
chat1
  .save()
  .then((res) => {
    console.log("Chat saved:", res);
  })
  .catch((err) => console.error("Error saving chat:", err));

app.get("/", (req, res) => {
  res.send("Root is Working");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body; // Extracting variables from req.body
  let newChat = new Chat({
    from: from, // Corrected the typo here
    to: to,
    msg: msg,
    created_at: new Date(), // Adding a timestamp
  });

  console.log(newChat);

  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });

  res.send("Working");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);

  res.render("edit.ejs", { chat });
});
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index", { chats }); // Keep this simple
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Error fetching chats");
  }
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
