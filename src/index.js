import express from 'express'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const port = process.env.PORT || 8180
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log('__dirname:', __dirname)

// serve static assets normally
app.use(express.static(__dirname + '/spa/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.get('*', function (request, response) {
  response.sendFile(resolve(__dirname, '/spa/public/index.html'))
})

app.listen(port)

console.log("server started on port " + port)
