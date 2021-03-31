const router = require('express').Router();

const Blog = require('../models/blogs');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await


            Blog.findAll({
                where: {
                    sid: req.session.user_id,
                }
            })


        const blogs = blogData.map((blog) => blog.get({ plain: true }));


        // const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            layout: 'dashboard',
            blogs

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, (req, res) => {


    res.render('create-post', {
        layout: 'dashboard',
    });
});


router.get('/edit/:id', withAuth, async (req, res) => {



    try {
        const blog = await Blog.findOne({
            where: {
                id: req.params.id

            },

        });
        if (blog) {
            const actualBlog = blog.get({ plain: true })
            res.render('edit', {
                layout: 'dashboard',
                actualBlog
            })
        } else {
            res.status(404).end()
        }

    } catch (err) {
        res.redirect('login')
    }


});













module.exports = router;