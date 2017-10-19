/**
 * Created by Administrator on 2017/10/18.
 */

const mongoose = require('./Config').mongoose;

//所需字段
var userSchema = new mongoose.Schema({
    name: String,
    age: String,
    sex: String,
    data: Date
});

//建表 user
exports.user = mongoose.model('user', userSchema);


/**数据类型
 String    字符串
 Number    数字
 Date      日期
 Buffer    缓冲区
 Boolean   布尔值
 Mixed     混合
 Objectid  对象ID
 Array     数组

 */