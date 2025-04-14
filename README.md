# ⚙️ Practical System – Backend

This repository contains the **backend** implementation of the Practical System project. It is built using **Node.js** and **Express.js**, and provides RESTful APIs to support core functionalities. This project does **not** include any frontend code.

---

## ✨ Features

- ✅ Well-structured modular architecture
- 📁 Organized folders for controllers, routes, models, and configuration
- 🌐 RESTful API development using Express
- ⚙️ Environment-based configuration support
- 🚀 Ready for deployment (configured for Vercel)

---

## 🗂️ Folder Structure

```
practical_system/
├── Controllers/        # Handles business logic
├── Routes/             # API route definitions
├── api/                # Additional API logic
├── config/             # Environment and configuration settings
├── models/             # MongoDB models or schema definitions
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Lock file for dependencies
└── vercel.json         # Vercel deployment configuration
```

---

## ⚙️ Setup Instructions

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Om976346/practical_system.git
   cd practical_system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root folder and add necessary environment variables. Example:

   ```
   PORT=3000
   DB_URI=your_mongodb_connection_string
   ```

---

## ▶️ Running the Server

```bash
npm start
```

By default, the server runs on `http://localhost:3000`.

---

## 📦 Deployment

This backend is pre-configured for deployment on **Vercel** using the `vercel.json` file.

To deploy:

1. Push the code to your GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically build and deploy the backend.

---

## 🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request with improvements or fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
