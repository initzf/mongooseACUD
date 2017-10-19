/**
 * Created by Administrator on 2017/10/18.
 */
const userDbHelp = require('../db/UserDbHelp').user;

/**
 * 查询所有的用户信息
 */
function find() {
    userDbHelp.find(function (err, doc) {
        console.log(doc);
    })
}

/**
 * 插入单条用户信息
 */
function insert(name, age, sex,data) {
    userDbHelp.insertMany({"name": name, "age": age, "sex": sex,"data":data});
}

//insert("new","0","男",new Date());

/**
 * 根据id 做查询
 * 不返回 _id ，__v  字段
 * @param id
 */
function findBayId(id) {
    userDbHelp.findById(id, {_id: 0, __v: 0}, function (err, doc) {
        console.log(doc);
    })
}

/**
 * 修改用户
 * 查询用户条件
 * 修改用户那些字段
 */
function update() {
    userDbHelp.update({_id: "59e6ee30d4423810b0c6f227"}, {$set: {"name": "ls", "age": "1111"}}, function (err, doc) {
        console.log(doc);
    })
}
