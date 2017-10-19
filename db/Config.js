/**
 * Created by Administrator on 2017/10/18.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test',{useMongoClient: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function (callback) {
    console.log("打开mongoose")
});
exports.mongoose = mongoose;