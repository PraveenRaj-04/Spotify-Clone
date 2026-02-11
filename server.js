const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve assets folder properly
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Songs API
app.get("/songs", (req, res) => {
    res.json([
        {
            name: "Naa Ready",
            movie: "Leo",
            file: "songs/Naa Ready.mp3",
            image: "/images/leo.jpg"
        },
        {
            name: "Badass",
            movie: "Leo",
            file: "/songs/Badass.mp3",
            image: "/images/leo.jpg"
        },
        {
            name: "Hukum",
            movie: "Jailer",
            file: "/songs/Hukum.mp3",
            image: "/images/jailer.jpg"
        },
        {
            name: "Kaavaalaa",
            movie: "Jailer",
            file: "/songs/Kaavaalaa.mp3",
            image: "/images/jailer.jpg"
        },
        {
            name: "Vandha Edam",
            movie: "Jawan",
            file: "/songs/Vandha Edam.mp3",
            image: "/images/jawan.jpg"
        },
         {
            name: "Bloody Sweet",
            movie: "Leo",
            file: "/songs/Bloody Sweet.mp3",
            image: "/images/leo.jpg"
        },
         {
            name: "Daavudi",
            movie: "Devara",
            file: "/songs/Daavudi.mp3",
            image: "/images/devara.jpg"
        },
         {
            name: "Marana Mass",
            movie: "Petta",
            file: "/songs/Marana Mass.mp3",
            image: "/images/petta.jpg"
        },
        
         {
            name: "Ullaallaa",
            movie: "Petta",
            file: "/songs/Ullaallaa.mp3",
            image: "/images/petta.jpg"
        },
         {
            name: "Verappa",
            movie: "Karuppu",
            file: "/songs/Verappa.mp3",
            image: "/images/karuppu.jpg"
        },
        
        
    ]);
});

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
