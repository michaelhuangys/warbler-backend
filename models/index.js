const mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://michael:1122wwo@ds253879.mlab.com:53879/heroku_5rc6gm0g',{
	keepAlive:true
})

module.exports.User=require('./user');
module.exports.Message=require('./message');