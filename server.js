const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* Serve frontend (WEBSITE) */
app.use(express.static(path.join(__dirname, "../public")));

/* Serve assets */
app.use("/songs", express.static(path.join(__dirname, "../assets/songs")));
app.use("/images", express.static(path.join(__dirname, "../assets/images")));

/* Dummy user */
const USER = {
    username: "admin",
    password: "admin123"
};

/* Login API */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === USER.username && password === USER.password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

/* Songs API */
app.get("/songs", (req, res) => {
    res.json([
        {
            name: "Naa Ready",
            movie: "Leo",
            file: "/songs/Naa Ready.mp3",
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


/* Default route → login page */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

/* Start server */
app.listen(PORT, () => {
    console.log(`🚀 Spotify Clone running at http://localhost:${PORT}`);
});
