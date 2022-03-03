import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import PlaylistRoutes from './src/routes/PlaylistRoutes.mjs'

const app = express()

// app.get('/', (req, res) => {
//     res.json('teste')
// })

app.use(express.json())
app.use('/playlist', PlaylistRoutes)

if (process.env.APP_ENV == 'development') {
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:'+process.env.APP_PORT}))    
}

app.listen(process.env.APP_PORT)


