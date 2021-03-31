const router = require('express').Router();

// const { Session } = require('express-session');
const { Blogs } = require('../../models');
// const Blog = require('../../models/blogs');
const withAuth = require('../../utils/auth');






router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await
            Blogs.create({
                title: req.body.title,
                body: req.body.post_content,
                user_id: req.session.user_id
            })
        res.json(newPost)
        // .then((postData) => res.json(postData))
        // .catch((err) => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
    } catch (err) {
        res.status(500).json(err)
    }
});



// router.get('/:id', (req, res) => {

//     Product.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: ["id", "title", "body", "created_at", "updated_at"],
//         include: [{
//             attributes: ["username"],
//             model: User,

//         }

//         ]
//     }).then((blogData) => {
//         res.json(blogData);
//     });
// });





router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Blogs.update(req.body,

            {
                where: {
                    id: req.params.id
                }
            })

        if (affectedRows > 0) {
            res.status(200).end()

        } else {
            res.status(404).end()
        }
        // .then((blogData) => {
        //     res.status(200).json(blogData);

        // }).catch(err => {
        //     res.status(400).json(err)
        // });
    } catch (err) {
        res.status(500).json(err)
    }
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