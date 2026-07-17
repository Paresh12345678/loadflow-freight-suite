# LoadFlow

LoadFlow is a modern web application built with **Vite**, **React**, and **Supabase**. It provides a fast, scalable, and secure platform with authentication, database integration, and a responsive user interface.

## 🚀 Features

* User authentication with Supabase
* Secure user sessions
* Real-time database integration
* Fast frontend development using Vite
* Responsive UI design
* Environment-based configuration
* Clean and scalable project structure

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript / TypeScript
* CSS

### Backend & Database

* Supabase

  * Authentication
  * PostgreSQL Database
  * API Services

### Deployment

* Vercel

## 📂 Project Structure

```
loadflow/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd loadflow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your Supabase project credentials.

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

## 🔐 Supabase Configuration

1. Create a project in Supabase.
2. Enable authentication providers.
3. Create required database tables.
4. Add Supabase URL and API key to `.env`.
5. Restart the development server.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment

The project is deployed using **Vercel**.

Steps:

1. Connect the GitHub repository to Vercel.
2. Add environment variables in Vercel settings.
3. Deploy the project.

## 🤝 Contribution

Contributions are welcome. Feel free to fork this repository and submit pull requests.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Paresh
