## ❤️ HBM Life - Frontend

Welcome to **HBM Life**! This is a **React.js** web application that provides real-time heart rate monitoring and anomaly detection. It connects to the **HBM Backend API** via **WebSockets** to display live ECG (Electrocardiogram) data and analyze heartbeat irregularities. 🚀📊

---

## 🚀 Features

✅ **Real-time ECG Monitoring**: Displays heart rate updates as they arrive from the backend.  
⚠️ **Anomaly Detection**: Identifies and highlights irregular heartbeats (`BIP` and `BIP_BIP`).  
📉 **Live ECG Graph**: (Upcoming) Visualization of ECG data over time.  
📁 **Historical Data Retrieval**: Displays the last 30 days of ECG measurements.  
💡 **Modern UI with Atomic Design**: Uses **atoms, molecules, and organisms** for scalable component-based architecture.  
🌐 **WebSocket Integration**: Ensures instant updates without requiring manual refresh.  

---

## 🏗️ Project Structure

```
📂 hbm-frontend
 ├── 📂 src/
 │   ├── 📂 assets/ (Images, icons)
 │   │   ├── imgs/
 │   ├── 📂 components/
 │   │   ├── 📂 atoms/ (Small UI elements like buttons and labels)
 │   │   │   ├── Button.jsx
 │   │   │   ├── Label.jsx
 │   │   ├── 📂 molecules/ (Small component combinations like BPMDisplay)
 │   │   │   ├── BPMDisplay.jsx
 │   │   │   ├── StatusIndicator.jsx
 │   │   ├── 📂 organisms/ (Larger UI sections like HeartMonitorCard)
 │   │   │   ├── HeartMonitorCard.jsx
 │   ├── 📂 pages/
 │   │   ├── Home.jsx (Main dashboard for live monitoring)
 │   │   ├── History.jsx (Displays last 30 days of ECG records)
 │   ├── 📂 services/ (Handles API and WebSocket connections)
 │   │   ├── api.js
 │   │   ├── websocket.js
 │   ├── 📂 styles/ (Global and component styles)
 │   │   ├── global.css
 │   ├── 📂 utils/ (Helper functions)
 │   ├── main.jsx (React entry point)
 │   ├── App.jsx (Main application component)
 ├── 📂 public/
 ├── .env (Environment variables)
 ├── package.json (Dependencies and scripts)
 ├── README.md (This file)
```

---

## 🛠️ Setup & Installation

### **1️⃣ Prerequisites**
- 🏗️ **Node.js 18+**
- 🔧 **Vite** (bundler)
- 🌐 **HBM Backend API** and **HBM Generator** running

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/hbm-frontend.git
cd hbm-frontend
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Configure Environment Variables**
Create a `.env` file and set the **WebSocket** and **API** URLs:
```env
VITE_BACKEND_URL=http://localhost:8080
VITE_WEBSOCKET_URL=ws://localhost:8080/ws/measurements
```

### **5️⃣ Start the Development Server**
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API & WebSocket Integration

### **Receiving Real-Time ECG Data**
- The frontend listens to **WebSocket** messages from the backend.
- It updates the **BPM Display** and **Anomaly Indicator** in real time.

### **Data Format**
The backend sends the following JSON data:
```json
{
  "value": 86,
  "deviceId": "HBM-12345",
  "isAnomaly": false,
  "irregularityType": null
}
```

### **Interpreting Data**
- If `isAnomaly = true` and `irregularityType = "BIP"`, the **status label turns red** (`Irregular`).
- If `irregularityType = "BIP_BIP"`, the **status returns to green** (`Normal`).

---

## 🎨 UI Components

### **🏠 Home Page (`/`)**
- Displays **current heart rate**.
- Shows **ECG chart** (upcoming).
- Provides **status label** (`Normal` or `Irregular`).
- Allows navigation to the **History Page**.

### **📜 History Page (`/history`)**
- Fetches and displays **last 30 days of ECG data**.

---

## ✅ Future Improvements

🔹 **Dockerize the Application**  
- Deploy with **Docker & Docker Compose** for easier setup.  

🔹 **ECG Graph Enhancement**  
- Improve **data visualization** for better insights.  

🔹 **Authentication & User Management**  
- Allow multiple users with **OAuth/JWT authentication**.  

🔹 **PWA Support**  
- Enable **offline mode** and **push notifications**.  

---

## 🎯 Dependencies

This project depends on:
- **HBM Backend API** (Processes ECG data)
- **Heart Beat Generator** (Simulates real ECG signals)

🔗 **Backend Repo:** [HBM Backend](https://github.com/your-repo/hbm-backend)  
🔗 **ECG Simulator:** [Heart Beat Generator](https://github.com/your-repo/heart-beat-generator)  

------

## 🎯 Contributors
👤 **Amanda Castro** | [Portfolio](https://mandis.framer.website/)

---

## ⚖️ License

This project is **MIT Licensed**. See [LICENSE](LICENSE) for details.

---

✅ **If you found this project useful, don't forget to ⭐ the repo!** 🚀🔥
