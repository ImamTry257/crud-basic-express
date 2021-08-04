const express = require('express')
const router = express.Router()

// add models
const models = require('../models/index')

// get all data
router.get('/', async (req, res, next) => {
    try{
        // get all data
        const posts = await models.posts.findAll({})

        if(posts.length != 0){
            res.json({
                'status' : 'OK',
                'messages' : '',
                'data' : posts
            })
        }else{
            res.json({
                'status' : 'EMPTY',
                'messages' : 'Data is empty',
                'data' : {}
            })
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error',
            'note' : err
        })
    }
})


// get data by id
router.get('/:id', async (req, res, next) => {
    
    try{
        const id = req.params.id
        const post = await models.posts.findByPk(id)

        if(post.length != 0){
            res.json({
                'status' : 'OK',
                'messages' : '',
                'data' : post
            })
        }else{
            res.json({
                'status' : 'EMPTY',
                'messages' : 'Data is empty',
                'data' : {}
            })
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error',
            'note' : err
        })
    }
    

})


// create data
router.post('/', (req, res, next) => {
    res.send('create data')
})


// update data
router.put('/:id', (req, res, next) => {
    res.send('update data')
})


// delete data
router.delete('/:id', (req, res, next) => {
    res.send('delete data')
})


module.exports = router;