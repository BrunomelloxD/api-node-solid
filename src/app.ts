import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { router } from './router'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(router)

export { app }
