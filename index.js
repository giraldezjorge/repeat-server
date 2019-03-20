const express = require('express')
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.post('/', function (req, res) {
  const word = getLastWord(req.body)

  const responseBody = JSON.stringify({
    'response_type': 'in_channel',
    'text': word
  })
  res.header('Content-Type', 'application/json')
  res.send(responseBody)
})

const getLastWord = (body) => {
  const words = body.text.split(' ')
  const word = words[words.length - 1]

  return word
}

app.listen(port, function () {
  console.log(`Server started at localhost:${port}`)
})
