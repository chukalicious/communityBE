# Project Documentation: CommunityBE

## Introduction

CommunityBE is a backend setup project that serves as the backend infrastructure for a community-based application. It provides API endpoints for managing users and posts within the community platform.

## Setup

### Prerequisites

- Node.js installed on your machine ([Node.js official website](https://nodejs.org))
- MongoDB database setup and running

### Installation

1. Clone the repository from [GitHub](https://github.com/your-repo-url).
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.

## Configuration

### Environment Variables

This project utilizes environment variables for configuration. Create a `.env` file in the root directory of the project and define the following variables:

You can copy and paste this Markdown directly into your documentation. It will render as follows:

---

## Configuration

### Environment Variables

This project utilizes environment variables for configuration. Create a `.env` file in the root directory of the project and define the following variables:

```plaintext
PORT=8000
MONGODB_URI=mongodb://localhost:27017/community_db
```

## Usage

### Starting the Server

To start the server, use one of the following npm scripts:

- `npm start`: Starts the server using Node.js.
- `npm run server`: Starts the server using Nodemon for automatic restarts during development.

### API Endpoints

#### Users

- **GET /api/users**: Get a list of all users.
- **GET /api/users/:id**: Get details of a specific user by ID.

#### Posts

- **GET /api/posts**: Get a list of all posts.

## File Structure

The project follows the following directory structure:

# Directory Structure

```
communitybe/

│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── middleware/
│ │ └── errorMiddleware.js
│ ├── routes/
│ │ ├── postRoutes.js
│ │ └── userRoutes.js
│ ├── controllers/
│ │ ├── postController.js
│ │ └── userController.js
│ └── server.js
│
├── models/
│ ├── Post.js
│ └── User.js
│
├── .env
├── package.json
└── README.md

```

## Database Schema

### User Schema

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
```

### Post Schema

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
```

This Markdown representation will display the Post Schema code snippet with proper syntax highlighting and formatting:

---

### Post Schema

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
```

## API Documentation

### User Routes

- **GET /api/users**

  - **Description**: Retrieves a list of all users.
  - **Controller**: `userController.getUsers`

- **GET /api/users/:id**
  - **Description**: Retrieves details of a specific user by ID.
  - **Controller**: `userController.getUserById`

### Post Routes

- **GET /api/posts**
  - **Description**: Retrieves a list of all posts.
  - **Controller**: `postController.getPosts`

## Dependencies

- **cors**: ^2.8.5
- **dotenv**: ^16.4.5
- **express**: ^4.19.2
- **express-async-handler**: ^1.2.0
- **mongodb**: ^6.6.1
- **mongoose**: ^8.3.4
- **nodemon**: ^3.1.0

## Author

- **Katiuska**

## License

This project is licensed under the MIT License.
