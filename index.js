const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let Books=[
    {
        id:uuidv4(),
        Author: "George Orwell",
        BookTitle: "1984",
        Price: "$10.99",
        Description: "1984 is a dystopian novel that explores themes of totalitarianism, surveillance, and the manipulation of truth. Set in a future where the government, led by the enigmatic Big Brother, monitors every aspect of citizens' lives, it follows the story of Winston Smith as he rebels against the oppressive regime.",
        Edition: "Revised Edition (Published by Penguin Books)"
    },
    {
        id:uuidv4(),
        Author: "Haruki Murakami",
        BookTitle: "Norwegian Wood",
        Price: "$14.95",
        Description: "Norwegian Wood is a poignant coming-of-age novel set in 1960s Japan. It follows Toru Watanabe as he navigates love, loss, and the complexities of human relationships. Murakami's prose weaves a mesmerizing tale that explores the themes of loneliness, nostalgia, and the search for meaning.",
        Edition: "Vintage International Edition"
    },
    
];

// Index Route
app.get("/Books",(req,res) => {
    res.render("index.ejs");
});

// All Books Route
app.get("/Books/info",(req,res) => {
    res.render("BooksInfo.ejs",{Books});
});

//Add a new book 
app.get("/Books/info/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/Books/info",(req,res) => {
    let {BookTitle,Author,Description,Price} = req.body;
    let id = uuidv4();
    Books.push({id,BookTitle,Author,Description,Price});
    res.redirect("/Books/info");
});

// View a single Book
app.get("/Books/info/:id",(req,res)=>{  
    let {id} = req.params;
    console.log(id);
    let book = Books.find((b) => b.id === id);
    res.render("show.ejs",{book});
});

// Update a Book
app.patch("/Books/info/:id",(req,res) => {
    let {id} = req.params;
    let newed = req.body.Edition;
    let newdes = req.body.Description;
    let book = Books.find((b) => b.id == id);
    book.Description = newdes;
    book.Edition = newed;
    res.redirect("/Books/info");
    
});

app.get("/Books/info/:id/edit",(req,res) => {
    let {id} = req.params;
    let book = Books.find((b) => b.id == id);
    res.render("update.ejs",{book});
});

// Delete a Book
app.delete("/Books/info/:id",(req,res) => {
    let {id} = req.params;
    Books = Books.filter((b) => b.id!=id);
    res.redirect("/Books/info");
});

app.listen(port,(req,res) => {
    console.log("Server is listening on port 8080");
})