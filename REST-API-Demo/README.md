# REST API with Express and MongoDB

A simple REST API built with Express.js and MongoDB for managing subscribers.

## Features

- CRUD operations for subscribers
- MongoDB database integration
- RESTful endpoints

## API Endpoints

- `GET /subscribers` - Get all subscribers
- `GET /subscribers/:id` - Get a specific subscriber
- `POST /subscribers` - Create a new subscriber
- `PATCH /subscribers/:id` - Update a subscriber
- `DELETE /subscribers/:id` - Delete a subscriber

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```
   DATABASE_URL=mongodb://localhost:27017/your-database-name
   ```
4. Start the server:
   ```bash
   npm run devStart
   ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
