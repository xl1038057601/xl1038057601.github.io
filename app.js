var express = require("express")
var fs = require("fs")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var multer = require("multer");
var app = express()
app.use(express.static("www"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post("/register2", function (req, res) {
    var fileName = "users/tel/" + req.body.tel + ".txt"
    fs.exists("users/", function (exists) {
        if (exists) {
            fs.exists("users/tel/", function (exists2) {
                if (exists2) {
                    fs.exists(fileName, function (exists3) {
                        if (exists3) {
                            // console.log(fileName)
                            res.status(200).json({
                                code: 1
                            })
                        } else {
                            res.status(200).json({
                                code: 0
                            })
                        }
                    })
                } else {
                    fs.mkdir("users/tel/", function (err) {})
                }
            })
        } else {
            fs.mkdir("users/", function (err) {})
        }
    })
})

app.post("/register3", function (req, res) {
    var fileName = "users/name/" + req.body.user + ".txt"
    // console.log(fileName)

    fs.exists("users/name/", function (exists) {
        if (exists) {
            fs.exists(fileName, function (exists2) {
                if (exists2) {
                    res.status(200).json({
                        code: 1
                    })
                } else {
                    res.status(200).json({
                        code: 0
                    })
                }
            })
        } else {
            fs.mkdir("users/name/", function (err) {})
        }
    })
})
app.post("/register", function (req, res) {
    var fileName = "users/tel/" + req.body.tel + ".txt"
    // console.log(fileName)
    fs.writeFile(fileName, JSON.stringify(req.body), function (err) {
        if (err) {
            res.status(200).json({
                info: "用户注册失败，系统错误",
                code: 3
            });
        } else {
            var date = new Date();
            date.setMonth(date.getMonth() + 1);
            res.cookie("user", req.body.user, date);
            res.cookie("password", req.body.password, date);          
            res.status(200).json({
                info: "注册成功",
                code: 0
            });
        }
    });
    fs.writeFile("users/name/" + req.body.user + ".txt", JSON.stringify(req.body), function (err) {});
})

app.post("/login", function (req, res) {
    // console.log("users/name/" + req.body.loginname + ".txt")
  
            fs.readFile("users/name/" + req.body.loginname + ".txt", function (err, data) {
                if (err) {
                    fs.readFile("users/tel/" + req.body.loginname + ".txt", function (err, data) {
                        if (err) {
                            res.status(200).json({
                                code: 3,
                                info: "用户不存在 "
                            });
                        } else {
                            data = JSON.parse(data.toString());
                            if (data.password != req.body.loginpassword) {
                                res.status(200).json({
                                    info: "密码错误，请重新登录",
                                    code: 2
                                });
                            }else{var date = new Date();
                                date.setMonth(date.getMonth() + 1);
                                res.cookie("userName", data.user, date);
                                res.cookie("usertel", data.tel, date);
                                res.cookie("password", req.body.loginpassword, date);
                                res.status(200).json({
                                    info: "登录成功",
                                    code: 0
                                });
                            }
        
                        }
                    });     
                } else {
                    data = JSON.parse(data.toString());
                    if (data.password != req.body.loginpassword) {
                        res.status(200).json({
                            info: "密码错误，请重新登录",
                            code: 2
                        });
                    }else{var date = new Date();
                        date.setMonth(date.getMonth() + 1);
                        res.cookie("userName", data.user, date);
                        res.cookie("usertel", data.tel, date);
                        res.cookie("password", req.body.loginpassword, date);
                        res.status(200).json({
                            info: "登录成功",
                            code: 0
                        });
                    }

                }
            });     
   
})
// var request = require('request');
// var cheerio = require('cheerio');
// var getNewsList=function(done) {
//     var news = new Array();
//     request('https://www.jd.com/', function (err, res) {
//         if (err) return console.error(err);
//         var $ = cheerio.load(res.body.toString());
//         // console.log($);
        
//         var table=$("#J_event_lk").attr("style");
//         // console.log(table);        
//         news.push(table)
//         console.log(news);
//     });
// };
// getNewsList();


app.post("/saveData", function(req, res) {
    // console.log(JSON.stringify(req.body))
    fs.writeFile("data.json", JSON.stringify(req.body),
        function(err) {
            err ? res.send("爬取数据失败") : res.send("爬取数据成功");
        });
});

app.post("/getData",function (req,res) {  
    fs.readFile("../jingdong/data.json", function (err, data) {
        if (err) {
            console.log("数据文件不存在")
        } else {
            data = JSON.parse(data.toString());
            // console.log(data)
            res.send(data)
        }
    }); 
})
app.listen(3000, function() {
    console.log("服务器开启中......");
});