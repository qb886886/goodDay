const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const messages = []

// 列表页面

app.get('/', (req, res) => {
  res.render('index', { messages })
})

// 发布留言板
app.route('/publish').get((req, res) => {
  res.render('publish')
}).post((req, res) => {
  const {name, content} = req.body

  const now = ( new Date()).toLocaleDateString()
  messages.push({
    name,
    content,
    time: now
  })
  res.redirect('/')
})

app.listen('9898', () => {
  console.log('listen on 9898')
})
