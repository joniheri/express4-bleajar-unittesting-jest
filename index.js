const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const routerv1 = require('./src/routes/Routes')

app.use(cors())
app.use(express.json())
app.use('/api', routerv1)

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
