import * as express from 'express'
import { PORT } from './utils/config'
import routes from './routes/projectRoute'

const app = express()

app.use(express.json())

app.use('/api', routes )


app.listen(PORT, ()=>(`server started on port ${PORT}`))