# Student Management System

A Node.js app to manage student data with secure authentication, MongoDB integration, and APIs for student operations.

## Features

- Manage student records.
- Secure authentication using JWT and bcryptjs.
- Cross-origin support via CORS.
- MongoDB database with Mongoose.
- Environment variables with dotenv.
- Auto-restarts in development using Nodemon.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

## Setup

1. Clone the repository and navigate to the folder:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add a `.env` file with:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

Start the server:
```bash
npm start
```
Or run in development mode:
```bash
npm run dev
```

Server runs on `http://localhost:3000` by default.

## Dependencies

- **bcryptjs**: Password hashing.
- **cors**: Cross-origin support.
- **dotenv**: Loads `.env` variables.
- **express**: Web framework.
- **jsonwebtoken**: JWT management.
- **mongoose**: MongoDB modeling.
- **nodemon**: Development server restarts.

## License

Licensed under the [ISC License](LICENSE).

For API testing, see the Postman collection: [Postman Link](https://planetary-crescent-492103.postman.co/workspace/Tasks~cfafac11-0028-4d75-bfd8-96da8b6fe325/collection/30449018-3c409133-86ac-4f06-a447-d7081b1fbeff?action=share&source=copy-link&creator=30449018).

