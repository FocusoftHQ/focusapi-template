# rcfeed-backend-v2

## How to run the code locally:

1. Create `src/server.js` and populate it with this code snippet:

```javascript
import app from './app.js' // ✅ Correct path to API

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`🚀 Server running locally at http://localhost:${PORT}`)
})
```

2. Run `npm run dev`

## Miscellaneous

Interesting read on prettier config: https://www.benpickles.com/articles/80-my-prettier-preferences-and-why
