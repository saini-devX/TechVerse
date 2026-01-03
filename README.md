# 🛍️ TechVerse — MERN eCommerce App

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-3C873A?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

## Overview
TechVerse is a modern MERN-stack eCommerce platform featuring intuitive product browsing, cart management, and Stripe-powered checkout. It is built with a scalable backend, clean REST APIs, and a responsive UI for a smooth online-shopping experience.

## Features
- 🛒 Product browsing & cart management  
- 💳 Stripe checkout integration  
- 🌐 REST API with MongoDB  
- 🎨 Fully responsive UI (Tailwind)

## Tech Stack
**Frontend:** React, Vite, TailwindCSS, Stripe.js  
**Backend:** Node.js, Express.js, MongoDB, Stripe SDK  

## Environment Variables

### Backend
```
MONGO_URI=your_mongo_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

### Frontend
```
VITE_API_BASE_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Run Locally
```
cd backend
npm install
npm run dev
```

```
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000  

## API Endpoints
| Method | Endpoint | Description |
|-------|----------|-------------|
| GET | /products | Get all products |
| GET | /products/:id | Get product details |
| POST | /checkout | Create Stripe session |

## License
MIT License — free for personal and commercial use.

---
Made with ❤️ using the MERN Stack.
