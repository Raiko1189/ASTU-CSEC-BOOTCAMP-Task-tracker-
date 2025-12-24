
# 📝 Task Tracker – Modern React Frontend

A **modern, responsive Task Tracker web application** built with **React + Vite** and **Tailwind CSS v4**, featuring **dark/light mode**, smooth animations, and a clean professional UI.

This project was developed as part of the **ASTU CSEC Bootcamp**, focusing on real-world frontend practices and UI quality.

---

## 🌐 Live Demo

👉 **Deployment URL:**  
https://astu-csec-bootcamp-task-tracker.vercel.app

---

## ✨ Features

- ✅ Add, complete, and delete tasks
- 🌗 Dark / Light mode with persistent theme
- 💾 Tasks stored in LocalStorage
- 📊 Statistics page (total, completed, remaining)
- 🎨 Modern UI with animations
- 📱 Fully responsive design
- ⚡ Fast development using Vite

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS v4**
- **React Router DOM**
- **Context API**
- **LocalStorage**

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── Header.jsx
│   ├── TaskInput.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
│
│── pages/
│   ├── Home.jsx
│   └── Stats.jsx
│
│── store/
│   └── taskContext.jsx
│
│── App.jsx
│── main.jsx
│── index.css
````

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/task-tracker-frontend.git
cd task-tracker-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 🌙 Dark Mode Implementation

Dark mode is implemented using **React Context + Tailwind’s `dark` class**.

* Theme preference is saved in **LocalStorage**
* The `dark` class is toggled on `<html>`

```js
document.documentElement.classList.toggle("dark", darkMode);
```

---

## 📊 Stats Page

The Stats page dynamically shows:

* Total number of tasks
* Completed tasks
* Remaining tasks

All values update instantly based on task state.

---

## 🎯 Learning Outcomes

* React Context API for global state
* Persistent data using LocalStorage
* Tailwind CSS v4 utility-first styling
* Clean component architecture
* Professional UI/UX patterns
* Routing with React Router

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Author

**Reiko Wakbeka**
Frontend Developer
ASTU CSEC Bootcamp

````

---

