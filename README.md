🎵 Spotify Web Player Clone

A Spotify Web Player–inspired music streaming application built using HTML, CSS, JavaScript, and Node.js, featuring an admin-based login, dynamic playlists, recently played library, and a Spotify-themed audio player UI.

📌 Project Overview

This project replicates the core UI and functionality of the Spotify Web Player, focusing on:

Clean and modern user interface

Dynamic song loading

Movie-based playlists

Recently played songs tracking

Mini player and full-screen music player

Admin-controlled access

The application is designed as a web-based music streaming platform and demonstrates concepts of frontend development, client-side storage, and basic backend integration.

🚀 Features
🔐 Admin Authentication

Admin login system

Admin name displayed on dashboard

Secure logout with redirect to login page

Session handled using localStorage

🎧 Music Player

Spotify-style mini player at the bottom

Full-screen player with controls

Play / Pause / Next / Previous

Seek bar with time display (current & duration)

📂 Music Library

Trending Songs dynamically loaded from backend

Movie-based playlists (auto-generated from song metadata)

Recently Played Songs stored and shown in “Your Library”

Persistent data even after page refresh

🔍 Search

Search songs by song name or movie name

Real-time filtering of results

🎨 UI & UX

Spotify-themed dark UI

Hover animations

Custom progress bar

Separate styles for dashboard and player controls

Spotify favicon in browser tab

🛠️ Technologies Used
Layer	Technologies
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Storage	Browser localStorage
Media	HTML5 Audio API
📁 Project Structure
spotify-web-player/
│
├── public/
│   ├── dashboard.html
│   ├── login.html
│   ├── css/
│   ├── images/
│   │   ├── spotify-logo.png
│   │   ├── leo.jpg
│   │   ├── jailer.jpg
│   │   └── vikram.jpg
│   └── songs/
│       ├── naa-ready.mp3
│       ├── hukum.mp3
│       └── ...
│
├── server.js
├── package.json
└── README.md

🔄 Application Flow

Admin logs in using the login page

On successful login:

Admin name is stored in localStorage

User is redirected to the dashboard

Dashboard displays:

Trending songs

Movie playlists

When a song is played:

It is added to Recently Played

Clicking Logout:

Clears session

Redirects back to login page

🧠 Core Concepts Implemented

Client-side authentication

Dynamic DOM manipulation

Grouping data to create playlists

Persistent storage using localStorage

Single audio instance for smooth playback

Responsive UI using Flexbox

🧪 How to Run the Project

Install Node.js

Install dependencies:

npm install


Start the server:

node server.js


Open browser and go to:

http://localhost:3000/login.html

🔑 Admin Credentials (Demo)
Username: admin
Password: admin123

🎓 Viva / Interview Explanation (Short)

“This project is a Spotify Web Player clone that demonstrates frontend UI development, audio handling, and client-side data persistence using localStorage, along with a simple admin authentication flow.”

🔮 Future Enhancements

User-based playlists

Song favorites / likes

Volume control

Queue management

Backend database integration

Mobile responsive improvements

👤 Author

Praveenraj / Developer
🎓 Final Year Student
💻 Web Development Project

📜 Disclaimer

This project is built for educational purposes only.
Spotify name and design are referenced for learning and UI inspiration, not for commercial use.
