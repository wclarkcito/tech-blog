const User = require('./User');
const Blogs = require('./blogs');
const Comment = require('./comments');



// User.hasMany(Blogs, {
//     foreignKey: `user_id`,

// })

// User.hasMany(Session, {
//     foreignKey: `user_id`,
//      onDelete: 'CASCADE',
// })

Blogs.belongsTo(User, {
    foreignKey: `id`,
    onDelete: 'CASCADE',
});

Blogs.hasMany(Comment, {
    foreignKey: `id`,
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: `id`,
    onDelete: 'CASCADE',
});

// Session.hasMany(Blogs, {
//     foreignKey: `blogs_id`,
// });



module.exports = {
    User,
    Blogs,
    Comment,

};
// Product.belongsTo(Category, {
//     foreignKey: `category_id`,

// })

// Category.hasMany(Product, {
//     foreignKey: `category_id`,

// })

