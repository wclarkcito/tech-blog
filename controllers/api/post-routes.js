const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const Blog = require('../../models/blogs');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {


    Product.findAll({
        include: [User, Post, Comment]
    }).then((blogData) => {
        res.json(blogData);
    });


});



router.post("/", withAuth, (req, res) => {

    Post.create({
        title: req.body.title,
        content: req.body.post_content,
        user_id: req.session.user_id
    })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



router.get('/:id', (req, res) => {

    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "title", "body", "created_at", "updated_at"],
        include: [{
            attributes: ["username"],
            model: User,

        }

        ]
    }).then((blogData) => {
        res.json(blogData);
    });
});





router.put('/:id', (req, res) => {

    Blog.update({
        category_name: req.body.body
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then((blogData) => {
            res.status(200).json(blogData);

        }).catch(err => {
            res.status(400).json(err)
        });

});

router.delete('/:id', (req, res) => {

    Blog.destroy({
        where: {
            id: req.params.id,
        }
    })

        .then((deletedBlog) => {
            res.status(200).json(deletedBlog);

        }).catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router;