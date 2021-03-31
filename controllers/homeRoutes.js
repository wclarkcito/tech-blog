const router = require('express').Router();
const { Session } = require('express-session');
const { User } = require('../models');
const Blog = require('../models/blogs');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await


            Blog.findAll({
                include: [User]
            })
        // .then((blogData) => {
        //     res.json(blogData);
        // });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));


        // const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            blogs
            // users,
            // logged_in: req.session.logged_in,
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
router.get('/dashboard', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('homepage');
});
router.get('/singlepost/:id', async (req, res) => {

    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    try {
        const blog = await Blog.findOne({
            where: {
                id: req.params.id

            },
            include: [User, {
                model: Session,
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

    // attributes: ["id", "title", "body", "created_at", "updated_at"],

    //     {
    //     attributes: ["username"],
    //     model: User,

    // }


    // }).then((blogData) => {
    //     res.render('singlepost', {
    //         blogData
    //     });
});


// res.render('singlepost');
// });
// router.get('/create-post', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('create-post');
// });










module.exports = router;