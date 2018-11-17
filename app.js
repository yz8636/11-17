const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('this index');
})
const post=5000;
app.listen(post,()=>{
   console.log(`欢迎访问${post}`);
})
// ******************************************************************************
// 1引入试图引擎
const exphbs  = require('express-handlebars');
// 2设置试图引擎
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// 2设置试图引擎
app.set('view engine', 'handlebars');
// ******************************************************************************



/*
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
服务器app.js
views试图
    index.handlebars
    about.handlebars
    ideas/add.handlebars
    2个必须文件
    layouts/main.handlebars
    partials/_navbar.handlebars
*/
// <form action="/ideas" method="post">
// 表单的动作属性定义了目的文件的文件名
app.post('/ideas',(req,res)=>{
    res.send('ok')
})
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/ideas',urlencodedParser,(req,res)=>{
    // console.log(req.body);
    let errors=[];
    if(!req.body.title){
        errors.push({text:'请输入标题!'})
    }
    if(!req.body.details){
        errors.push({text:'请输入详情!'})
    }
    if(errors.length > 0){
        res.render('ideas/add',{
            errors:errors,
            title:req.body.title,
            details:req.body.details
        })
    }else{
        res.send('ok');
    }
    
})
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// url编码解析器=          body解析器 url编码  
// { title: 'aaa', details: 'xxx' }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
         // 处理表单提交的地方
        app.post('/name',(req,res)=>{
            // 创建一个数组接收点东西
            let errors=[];
            // 第一个input是空的
            // 数组开始接收
            if(!req.body.title){
                errors.push({text:'输入标题'})
            }
            // 第二个表单时空的
            // 数组开始接收
            if(!req.body.details){
                errors.push({text:'输入详情'})
            }
            
            // 数组接收完成
            if(errors.length > 0){
                // 做2件事  1显示当前页面 2将数组和input的值传个自己
                res.render('ideas/add',{
                    errors:errors,
                    title:req.body.title,
                    details:req.body.details
                })
            }
        })
        
   
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 启动本地数据库
// ./mongod --dbpath c:\data\db


// 想要链mongod接数据库先要安装mongoose
// npm install mongoose





// 一.链接数据库使用数据模型*******************
// 1引入
const mongoose=require('mongoose');
// 2链接数据库
mongoose.connect("mongodb://localhost/node-app",{useNewUrlParser:true})
        .then(()=>{// 链接成功之后
            console.log('链接成功') 
        })
        .catch(err=>{// 链接失败之后
            console.log(err)
        })
// 3引入页面
require('./models/Idea')
// 4使用数据模型
const Idea=mongoose.model('ideas')

// 二.创建数据模型********************************
// 1引入
const mongoose=require('mongoose');
// 2实例化一个IdeaSchema
const Schema=mongoose.Schema;
const IdeaSchema = new Schema({
// 3设计属性以及属性的类型
    title:{
      type:String,   //类型：字符串
      required:true ,//必须是字符串吗？ true
    },
    details:{
      type:String,
      required:true
    },
    date:{ 
      type:Date,            //时间
      default: Date.now    //当前时间
    }
  })
  //4将IdeaSchema放到mongoose.model中(模型创建成功)
  mongoose.model('ideas',IdeaSchema);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&















// 1引入
const mongoose=require('mongoose');
// 2链接数据库
mongoose.connect("mongodb://localhost/node-app",{useNewUrlParser:true})
        .then(()=>{// 链接成功之后
            console.log('链接成功') 
        })
        .catch(err=>{// 链接失败之后
            console.log(err)
        })
require('./models/Idea');
const idea=mongoose.model('idea');



const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const IdeaSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})
mongoose.model('idea',IdeaSchema)





// 1引入
const mongoose=require('mongoose');
// 2链接数据库
mongoose.connect("mongodb://localhost/node-app",{useNewUrlParser:true})
        .then(()=>{// 链接成功之后
            console.log('链接成功') 
        })
        .catch(err=>{// 链接失败之后
            console.log(err)
        })
require('./models/Idea');
const idea=mongoose.model('idea');
























































