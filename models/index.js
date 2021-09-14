const User = require('./User');
const Portfolio = require('./Portfolio');
const Investment = require('./Investment');

User.hasOne(Portfolio, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Portfolio.belongsTo(User, {
  foreignKey: 'user_id'
});

Portfolio.hasMany(Investment, {
  foreignKey: 'portfolio_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Portfolio, Investment };