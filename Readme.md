# 🍲 Recipes CRUD API

A complete CRUD (Create, Read, Update, Delete) REST API for managing recipes using **Node.js, Express.js, and MongoDB (Mongoose)**.  
The project follows the **MVC pattern** and includes **Postman API documentation** with sample requests and responses.

---

## 🚀 Tech Stack
- **Node.js** – Runtime
- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database + ODM
- **Postman** – API testing & documentation
- **dotenv** – Environment variable management

---

## 📂 Project Structure

recipes-api/
├─ config/
│ └─ db.js # MongoDB connection
├─ controller/
│ └─ recipeController.js # CRUD logic
├─ models/
│ └─ recipeModel.js # Recipe schema
├─ router/
│ └─ recipeRouter.js # Routes
├─ server.js # Entry point
├─ .env # Env variables
└─ README.md