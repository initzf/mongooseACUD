/**
 * Created by Administrator on 2017/10/18.
 */

var mongoose = require('./Config.js').mongoose;

var kittySchema = mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', kittySchema)

exports.Kitten = Kitten;