# 📍 Real-Time Device Tracker

A real-time location tracking web application that allows multiple users to share and view live locations on an interactive map.

Built using Node.js, Express, Socket.IO, and Leaflet.js, this project demonstrates real-time communication and geolocation tracking in the browser.

---

## 🚀 Features

- 📡 Real-time location sharing using WebSockets  
- 🌍 Live map visualization with Leaflet.js  
- 👥 Multiple users tracked simultaneously  
- 🔄 Automatic location updates using Geolocation API  
- ❌ Removes marker when user disconnects  

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express  
- Real-time Communication: Socket.IO  
- Maps: Leaflet.js  
- Template Engine: EJS  

---

## 📂 Project Structure

```bash
project/
│── public/
│   ├── css/
│   └── js/
│
│── views/
│   └── index.ejs
│
│── app.js
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository  
```
git clone https://github.com/aditya-yadav1176/Real-Time-Device-Tracker.git
```

2. Navigate to the project folder  
```
cd Real-Time-Device-Tracker
```

3. Install dependencies  
```
npm install
```

4. Run the server  
```
node app.js
```

5. Open in browser  
```
http://localhost:3000
```

---

## 🌐 How It Works

- The browser uses the Geolocation API to fetch user coordinates  
- Coordinates are sent to the server via Socket.IO  
- The server broadcasts location updates to all connected clients  
- Each client updates markers on the map in real-time  

---

## 📌 Future Improvements

- 📱 Mobile UI optimization  
- 🗺️ Custom markers and user labels  
- 📊 Location history tracking  

---

## 📜 License

This project is open-source and available under the MIT License.
