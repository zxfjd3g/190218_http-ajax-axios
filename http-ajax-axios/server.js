const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())



app.get('/posts', (req, res) => {
  const {id} = req.query
  res.send({
    id,
    title: 'axios very good',
    author: '张三'
  })
})

app.get('/get1', (req, res) => {
  const {id} = req.query
  res.send({
    id,
    name: 'xxx',
    price: 12
  })
})

app.post('/post1', (req, res) => {
  const {id} = req.body
  res.send({
    id,
    name: 'yyy',
    price: 23
  })
})

app.get('/products1', (req, res) => {
  
  setTimeout(() => {
    res.send([
      {id: 1, name: 'product1.1'},
      {id: 2, name: 'product1.2'},
      {id: 3, name: 'product1.3'}
    ])
  }, 1000 + Math.random()*2000);
  
})

app.get('/products2', (req, res) => {

  setTimeout(() => {
    res.send([{
        id: 1,
        name: 'product2.1'
      },
      {
        id: 2,
        name: 'product2.2'
      },
      {
        id: 3,
        name: 'product2.3'
      }
    ])
  }, 1000 + Math.random() * 2000);

})



app.listen(4000, () => {
  console.log('server app start on port 4000')
})