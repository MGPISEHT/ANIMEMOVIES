
# 🎬 ANIMEMOVIE 👿☠️

A modern, responsive movie browsing website built with **ReactJS**, **Vite**, **TailwindCSS**, and integrated with [The Movie Database (TMDB) API](https://www.themoviedb.org/).

---

## 🔧 Tech Stack

- ⚛️ **ReactJS** – Frontend JavaScript library  
- ⚡ **Vite** – Fast development build tool  
- 🎨 **TailwindCSS** – Utility-first CSS framework  
- 🎥 **TMDB API** – Movie database for fetching media content  

---

## 🚀 Getting Started

Follow these steps to install and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/MGPISEHT/TMDBMovies.git
cd ANIMEMOVIE
````

### 2. Install Dependencies

Using **npm**:

```bash
npm install
```

Or using **Yarn**:

```bash
yarn install
```
> **Note:** You need Install Tailwind CSS in React + Vite.

### 3. 🎨 Install Tailwind CSS in React + Vite
If TailwindCSS is not yet installed, follow these steps:
```bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then, update your tailwind.config.js file:
```

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

Next, in src/index.css, include the Tailwind directives:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. 🏃‍➡️ Run the Development Server
Using **npm**:

```bash
npm run dev
```

Or using **Yarn**:

```bash
yarn dev
```
Your project will run at [http://localhost:5173](http://localhost:5173) (or another port shown in the terminal).

---



## 🔑 TMDB API Configuration

> **Note:** You need your own TMDB API key. The project does not include a shared API key.

### Steps to Get Your API Key:

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Create an account or log in.
3. Navigate to **Settings > API** section.
4. Request a **Developer API Key** (v3).

### Add the API Key to Your Project

Create a `.env` file in the root directory of your project and add:

```env
VITE_THE_MOVIE_DB_API_KEY="YOUR_ACTUAL_TMDB_API_KEY_HERE"
```

Make sure to **replace** `"YOUR_ACTUAL_TMDB_API_KEY_HERE"` with your real API key.

---

## 📁 Project Structure (Optional)

```
TMDBMovies/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── App.jsx
├── .env
├── index.html
├── package.json
└── vite.config.js
```

