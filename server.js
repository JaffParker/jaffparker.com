const express = require('express')
const app = express()
const PORT = process.env.PORT || 80

app.use(express['static']('dist'))
app.use('/assets', express['static']('assets'))

app.listen(PORT)
