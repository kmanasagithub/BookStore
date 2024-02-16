const mongoose = require("mongoose");
const Book = require("./Models/book");

mongoose.connect('mongodb+srv://Kurellamanasa:manasa204@cluster0.daubbfl.mongodb.net/BookDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to Mongodb");
})
.catch((err)=>{
    console.log(err.message);
})


let allbooks=[
    {
    
        Author: "George Orwell",
        BookTitle: "1984",
        Price: 10.99,
        Description: "1984 is a dystopian novel that explores themes of totalitarianism, surveillance, and the manipulation of truth. Set in a future where the government, led by the enigmatic Big Brother, monitors every aspect of citizens' lives, it follows the story of Winston Smith as he rebels against the oppressive regime.",
        Edition: "Revised Edition (Published by Penguin Books)"
    },
    {
        
        Author: "Haruki Murakami",
        BookTitle: "Norwegian Wood",
        Price: 14.95,
        Description: "Norwegian Wood is a poignant coming-of-age novel set in 1960s Japan. It follows Toru Watanabe as he navigates love, loss, and the complexities of human relationships. Murakami's prose weaves a mesmerizing tale that explores the themes of loneliness, nostalgia, and the search for meaning.",
        Edition: "Vintage International Edition"
    },
    
];

Book.insertMany(allbooks);



