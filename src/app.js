import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

// ✅ Middleware
app.use(express.json())
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)

// ✅ Security Middleware
app.use(helmet())
app.use(morgan('dev'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Serve static files from public

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

console.log('✅ Authentication and Waitlist Routes Registered')

// ✅ Error Handler at the end
app.use((err, req, res, next) => {
    console.error('❌ Error caught by middleware:', err)

    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
        error: message,
        details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })
})

export default app
