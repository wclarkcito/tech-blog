const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comments-routes')

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;