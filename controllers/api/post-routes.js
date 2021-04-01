const router = require('express').Router();

// const { json } = require('sequelize/types');
// const { Session } = require('express-session');
const { Blogs } = require('../../models');
// const Blog = require('../../models/blogs');
const withAuth = require('../../utils/auth');






router.post("/", async (req, res) => {
    // router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await
            Blogs.create({
                title: req.body.title,
                body: req.body.post_content,
                user_id: req.session.user_id
            })
        res.json(newPost)

    } catch (err) {
        res.status(500).json(err)
    }
});







router.put('/:id', async (req, res) => {
    // router.put('/:id', withAuth, async (req, res) => {
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

    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    // router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = Blogs.destroy({
            where: {
                id: req.params.id,
            }
        })
        if (affectedRows > 0) {
            res.status(200).end()

        } else {
            res.status(404).end()
        }

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;