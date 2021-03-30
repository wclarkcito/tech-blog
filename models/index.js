const User = require('./User');
const Blogs = require('./blogs');
const Session = require('./session');



User.hasMany(Blogs, {
    foreignKey: `user_id`,

})

User.hasMany(Session, {
    foreignKey: `user_id`,
    // onDelete: 'CASCADE',
})

Blogs.belongsTo(User, {
    through: ProductTag,
    foreignKey: `user_id`,
});

Blogs.hasMany(Session, {
    through: ProductTag,
    foreignKey: `blogs_id`,
});

Session.belongsto(User, {
    through: ProductTag,
    foreignKey: `blogs_id`,
});

Session.hasMany(Blogs, {
    through: ProductTag,
    foreignKey: `blogs_id`,
});



module.exports = {
    User,
    Blogs,
    Session,

};
// Product.belongsTo(Category, {
//     foreignKey: `category_id`,

// })

// Category.hasMany(Product, {
//     foreignKey: `category_id`,

// })

