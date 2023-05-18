const express = require('express')
const router = express.Router()
const ItemSchema = require('../models/Order.js')
const CustomerSchema = require('../models/Customer.js')
const CartSchema = require('../models/Order.js')

// ITEM SCHEMA
router.get('/item', (req, res) => {
  ItemSchema.find({})
  .then(item => {
    console.log("succesfully got one!")
    console.log(item)
    res.json(item)
  })
  .catch(err => {
    console.error(err)
    res.send(err) // debug: send back error on the request
  })
})

router.post('/item/add', (req, res) => {
  const Item = new ItemSchema(req.body) 
  
  Item.save()
  .then(item => {
    console.log("added")
    res.json(item) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.put('/item/:title', (req, res) => {
  ItemSchema.findOneAndUpdate({ title: req.params.title }, req.body)

  .then(item => {
    console.log("updated")
    res.json(item) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.delete('/item/:title', (req, res) => {
  ItemSchema.findOneAndDelete({ title: req.params.title }, req.body)  
  
  .then(item => {
    console.log("deleted")
    res.json(item) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

// CUSTOMER SCHEMA
router.get('/customer', (req, res) => {
  CustomerSchema.find({})
  .then(customer => {
    console.log("succesfully got one!")
    console.log(customer)
    res.json(customer)
  })
  .catch(err => {
    console.error(err)
    res.send(err) // debug: send back error on the request
  })
})

router.post('/customer/add', (req, res) => {
  const Customer = new CustomerSchema(req.body)

  Customer.save()
  .then(customer => {
    console.log("added")
    res.json(customer) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.put('/customer/:email', (req, res) => {
    CustomerSchema.findOneAndUpdate({ email: req.params.email }, req.body)

  .then(customer => {
    console.log("updated")
    res.json(customer) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.delete('/customer/:email', (req, res) => {
  CustomerSchema.findOneAndDelete({ email: req.params.email }, req.body)  
  
  .then(customer => {
    console.log("deleted")
    res.json(customer) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

// CART SCHEMA
router.get('/cart', (req, res) => {
  CartSchema.find({})
  .then(cart => {
    console.log("succesfully got one!")
    console.log(cart)
    res.json(cart)
  })
  .catch(err => {
    console.error(err)
    res.send(err) // debug: send back error on the request
  })
})

router.post('/cart/add', (req, res) => {
  const Customer = new CustomerSchema(
    { 
      items: req.body.items
  })

  Cart.save()
  .then(cart => {
    console.log("added")
    res.json(cart) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.put('/cart/:id', (req, res) => {
    CustomerSchema.findOneAndUpdate({ email: req.params.id }, req.body)

    User.save()
  .then(cart => {
    console.log("updated")
    res.json(cart) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

router.delete('/cart/:id', (req, res) => {
  CartSchema.findOneAndDelete({ email: req.params.id }, req.body)  
  
  Cart.save()
  .then(cart => {
    console.log("deleted")
    res.json(cart) 
  })
  .catch(err=> {
    console.log(err)
    res.send(err) // debug: send back error on the request
  })
})

module.exports = router
