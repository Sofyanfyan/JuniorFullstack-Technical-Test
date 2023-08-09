const router = require('./routers');
const port = 8000
const express = require('express');
const app = express()
const cors = require('cors');

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})