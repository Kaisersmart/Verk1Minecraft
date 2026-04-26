require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Mobs Minecraft" });
});

app.get("/about",(req,res) =>{
  res.render("about", { title: "Abaut Mobs"});
})

app.listen(PORT, ()=>{
    console.log(`Server kyrir á http://localhost:${PORT}`);
})

