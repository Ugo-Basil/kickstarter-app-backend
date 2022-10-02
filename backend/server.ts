import * as express from 'express'
import { PORT } from './utils/config'
import routes from './routes/projectRoute'
import { errorHandler } from './middleware/errorMiddleware'
import { connectDB } from './database/db'


connectDB()

const app = express()

app.use(express.json())

app.use('/api', routes )

app.use(errorHandler)

app.listen(PORT, ()=>(`server started on port ${PORT}`))