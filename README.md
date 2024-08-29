# Contact Manager Application

## Overview

The Contact Manager Application is a RESTful API built with Node.js and Express.js that allows users to manage their contacts. Users can sign up, log in, and create, update, delete, and retrieve contacts. The application uses MongoDB as its database and JSON Web Tokens (JWT) for authentication.

## Features

- User authentication with JWT (JSON Web Tokens)
- Secure password storage using bcrypt
- CRUD operations for managing contacts
- Error handling middleware
- Protected routes for authenticated users
- MongoDB for database management

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Token (JWT)
- Bcrypt.js
- Express-async-handler
- dotenv

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/contact-manager.git
cd contact-manager
