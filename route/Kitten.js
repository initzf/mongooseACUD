/**
 * Created by Administrator on 2017/10/18.
 */
const userDbHelp = require('../db/KittenDbHelp').Kitten;

function getAll() {
    userDbHelp.find(function (err, doc) {
        console.log(doc);
    })
}

function insert() {
    userDbHelp.insertMany({"name":"zf"});
}

getAll();
