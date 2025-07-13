# focusapi-template

## Overview

This is a minimal, production-ready JavaScript backend server template built with Express.js. It provides a clean starting point for building RESTful APIs with modern JavaScript (ES modules) and essential middleware configurations.

## Features

-   🚀 **Express 5.x** - Latest version of the popular Node.js framework
-   📦 **ES Modules** - Modern JavaScript module system
-   🔒 **Security** - Pre-configured with Helmet.js for security headers
-   🌐 **CORS** - Cross-Origin Resource Sharing enabled
-   📝 **Logging** - HTTP request logging with Morgan
-   🔧 **Environment Variables** - dotenv configuration
-   💅 **Code Formatting** - Prettier configuration included
-   🔄 **Hot Reload** - Nodemon for development
-   ☁️ **Vercel Ready** - Deployment configuration included

## Project Structure

```
focusapi-template/
├── src/
│   ├── app.js          # Express app configuration and middleware
│   ├── server.js       # Server entry point (create this for local dev)
│   └── public/         # Static files
│       └── index.html  # Welcome page
├── .gitignore          # Git ignore rules
├── .prettierrc         # Code formatting rules
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Prerequisites

-   Node.js (v14 or higher recommended)
-   npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/FocusoftHQ/focusapi-template.git
cd focusapi-template
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (optional):

```bash
touch .env
```

4. Create `src/server.js` and populate it with this code snippet:

```javascript
import app from './app.js' // ✅ Correct path to API

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`🚀 Server running locally at http://localhost:${PORT}`)
})
```

5. Run `npm run dev`

## Available Scripts

-   `npm start` - Start the production server
-   `npm run dev` - Start development server with hot reload
-   `npm run format` - Format code with Prettier
-   `npm test` - Run tests (not configured yet)

## Environment Variables

Create a `.env` file in the root directory. Example variables:

```env
PORT=5001
NODE_ENV=development
```

## API Endpoints

-   `GET /` - Serves the welcome page
-   Add your custom routes in `app.js`

## Middleware Stack

The application comes pre-configured with:

1. **express.json()** - Parse JSON request bodies
2. **cors()** - Enable CORS (currently allows all origins)
3. **helmet()** - Security headers
4. **morgan('dev')** - HTTP request logging
5. **Error Handler** - Centralized error handling middleware

## Deployment

### Vercel

This template is configured for easy deployment to Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

The `vercel.json` configuration is already set up to:

-   Build from `src/app.js`
-   Route all requests through the Express app

## Contributing

Feel free to submit issues and enhancement requests!

## Miscellaneous

Interesting read on prettier config: https://www.benpickles.com/articles/80-my-prettier-preferences-and-why

## License

[MIT](https://github.com/FocusoftHQ/focusapi-template/blob/main/LICENSE)
