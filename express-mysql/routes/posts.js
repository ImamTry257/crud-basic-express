var express = require('express')
var router = express.Router()

// import DB
var conn = require('../library/database')


// index posts
router.get('/index', (req, res, next) => {

    // query
    var query = 'SELECT * FROM posts ORDER BY id DESC'

    conn.query(query, (err, rows) => {
        if(err){
            req.flash('error', err)
            res.render('posts/index',{
                data : ''
            })
        }else{
            // render ke view posts index
            res.render('posts/index', {
                data : rows // data posts
            })
        }
    })
})

// show create page
router.get('/create', (req, res, next) => {
    res.render('posts/create', {
        title : '',
        content : ''
    })
})


// store router
router.post('/store', (req, res, next) => {
    
    let title = req.body.title
    let content = req.body.content
    let errors = false

    if(title.length === 0){
        errors = true

        // set flash message
        req.flash('error', 'Silakan masukkan Title')

        // render to add.ejs with flash message
        res.render('posts/create', {
            title : title,
            content : content
        })
    }

    if(content.length === 0){
        errors = true

        // set flash message
        req.flash('error', 'Silakan masukkan Content')

        // render to add.ejs with flash message
        res.render('posts/create', {
            title : title,
            content : content
        })
    }

    if(!errors){
        
        let formData = {
            title : title,
            content : content
        }

        // insert query
        conn.query('INSERT INTO posts SET ?', formData, (err, result) => {

            if(err){
                req.flash('error', err)

                // render to add.ejs
                res.render('posts/create', {
                    title : formData.title,
                    content : formData.content
                })
            }else{
                req.flash('sucess', 'Data berhasil disimpan')
                res.redirect('/posts/index')
            }
        })
    }
})


// show router
router.get('/edit/(:id)', (req, res, next) => {

    // get id
    let id = req.params.id

    conn.query('SELECT * FROM posts WHERE id = '+ id, (err, rows, fields) => {
        if(err) throw err

        // if user not found
        if(rows.length === 0){
            req.flash('error', 'Data Post dengan ID = '+id+' tidak ditemukan.')

            res.redirect('posts/index')
        }else{
            res.render('posts/edit', {
                id : rows[0].id,
                title : rows[0].title,
                content : rows[0].content
            })
        }
    })
})

// update router
router.post('/update/:id', (req, res, next) => {

    let id = req.params.id
    let title = req.body.title
    let content = req.body.content
    let errors = false

    if(title.length === 0){
        errors = true

        // set flash message
        req.flash('error', 'Silakan masukkan Title')

        // render to add.ejs with flash message
        res.render('posts/edit', {
            title : title,
            content : content
        })
    }

    if(content.length === 0){
        errors = true

        // set flash message
        req.flash('error', 'Silakan masukkan Content')

        // render to add.ejs with flash message
        res.render('posts/edit', {
            title : title,
            content : content
        })
    }

    if(!errors){

        let formData = {
            title : title,
            content : content
        }

        conn.query('UPDATE posts SET ? WHERE id = '+ id, formData, (err, result) => {

            if(err){

                req.flash('error', err)

                // render
                res.render('posts/edit', {
                    title : formData.title,
                    content : formData.content
                })
            }else{
                req.flash('sucess', 'Data berhasil diubah')

                res.redirect('/posts/index')
            }
        })
    }
})


// delete router
router.get('/delete/(:id)', (req, res, next) => {

    let id = req.params.id

    conn.query('DELETE FROM posts WHERE id = '+ id, (err, result) => {

        if(err){

            req.flash('error', err)

            res.redirect('/posts/index')
        }else{

            req.flash('success', 'Data berhasil dihapus')

            res.redirect('/posts/index')
        }
    })

})

module.exports = router;