const router = require('express').Router();
// const { Session, } = require('express-session');
const { User, Comment, Blogs } = require('../models');
// const Blog = require('../models/blogs');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await


            Blogs.findAll({
                include: [User]
            })


        const blogs = blogData.map((blog) => blog.get({ plain: true }));




        res.render('homepage', {
            blogs

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});
router.get('/homepage', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/singlepost/:id', async (req, res) => {



    try {
        const blog = await Blogs.findOne({
            where: {
                id: req.params.id

            },
            include: [User, {
                model: Comment,
                include: [User]
            }]
        });
        if (blog) {
            const actualBlog = blog.get({ plain: true })
            res.render('singlepost', {
                actualBlog
            })
        } else {
            res.status(404).end()
        }

    } catch (err) {
        res.status(500).json(err)
    }




});












module.exports = router;