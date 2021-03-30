const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


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



// router.get('/:id', (req, res) => {

//     Product.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: ["id", "content", "title", "created_at"],
//         include: [
//             attributes: ["username"], {
//                 model: User,

//             }
//         ]
//     }).then((blog) => {
//         res.json(blog);
//     });
// });