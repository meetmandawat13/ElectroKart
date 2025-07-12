# ElectroKart - MERN Stack eCommerce Platform

> ElectroKart is a full-featured eCommerce platform built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit.

<img src="./frontend/public/images/screens.png" alt="ElectroKart Screenshots" />

## About

ElectroKart is a customized and production-ready MERN eCommerce platform with features including:

- Product catalog with search and pagination
- User authentication and profiles
- Shopping cart and checkout with PayPal integration
- Admin dashboard for product, user, and order management
- Product reviews and ratings
- Responsive React frontend with Redux Toolkit state management
- Backend API with Express and MongoDB
- Secure JWT authentication
- File uploads for product images
- Pagination for product listings

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)
- PayPal Developer account (for payment integration)

### Environment Variables

Create a `.env` file inside the `backend` folder with these variables:

```env
NODE_ENV=production
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAGINATION_LIMIT=8
