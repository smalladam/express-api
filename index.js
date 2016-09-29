var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/smalladamdb');



var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log("success!");
// });


db.once('open', function() {
  var userSchema = mongoose.Schema({
      username: String,
      age:Number,
      password:Number
  });

  var User = mongoose.model("user", userSchema);
  // //user是实际数据库中的一条记录的名字
  // var kitty = new user({username:'hellokitty',age:'21',password:'123456'});
  //  console.log(kitty.username,kitty.age,kitty.password);
  //  //成功构建一条数据记录
  //  kitty.save()
  //
  //  kitty.username="smalladam"
  //  kitty.age="20"
  //  kitty.password="1234567890"
  //  kitty.save()

  //  console.log(user.find());

   //var result = user.find();  同步编程
  //  user.find().exec(function(err,users){
     //异步编码   exec———>（执行）
//      console.log(users);
//    })
// });

User.findById({_id: '57ecbac56ab2ff1e3dd681c5'}, function(err, user) {
     user.remove(function(err){
       console.log("删除了！！！");
     })
    // user.username = 'hello'
    // user.age = '18'
    // user.password = '19951026'
    // user.save(function(err){
    //   console.log('我更新了！')
      User.find().exec(function(err, users) {
        // 异步执行
        console.log(users);
      });
    // });
  });

  // console.log("我先出来了")


})









// // res就是response
//
// var express = require('express')
// var app = express()
//
// // app.get('/:names', function (req, res) {  //路由
// //   var username = req.params.name
// //   var page = "<html>"+
// //               "<body>"+
// //               "<h1>" +
// //               username +"的主页"+
// //               "</h1>"+
// //                "</body>"+
// //               "</html>"
// //   res.send(page)         //执行的代码
// // })
//
// app.post('/:name', function(req, res) {
//   res.send("a POST request received" + req.params.name)
// })
//
// app.get('/about.html', function (req, res) {
//   var page = "<html>"+
//               "<body>"+
//                "<h1> index.html</h1>"+
//                "</body>"+
//               "</html>"
//   res.send(page)
// })
//
// app.listen(3000,function(){
//   console.log("running on port 3000...please visit http://localhost:3000");
// })
