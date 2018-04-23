/**
 * Created by lgh on 2018/3/8.
 */
//使用nodejs模拟首页幻灯片数据
var http = require('http');
var url = require('url');
var querystring = require('querystring');
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
        var obj = {
            head: {
                errorcode: 0
            },
            body: {
                count:3,
                lists:[
                    {
                        bannerTitle: '图片1', // 标题
                        imgSrc: '../nodeJs/images/banner1.jpg'
                    },
                    {
                        bannerTitle: '图片2', // 标题
                        imgSrc: '../nodeJs/images/banner2.jpg'
                    },
                    {
                        bannerTitle: '图片3', // 标题
                        imgSrc: '../nodeJs/images/banner3.jpg'
                    }
                ],
                navList:[
                    {
                        name:'业务系统'
                    },
                    {
                        name:'开发平台'
                    },
                    {
                        name:'数据服务'
                    },
                    {
                        name:'金融业务'
                    },
                    {
                        name:'监管服务'
                    },
                    {
                        name:'云平台'
                    }
                ]
            }
        };
        var qs = querystring.parse(req.url.split('?')[1]);
        var listNew = obj.body.lists;//先把lists的数组数据拿到
        if((qs.pageIndex*qs.pageSize) > obj.body.lists.length){
            obj.body.lists = listNew.splice((Math.ceil(obj.body.lists.length/qs.pageSize)-1)*qs.pageSize,qs.pageSize);
        }else{
            obj.body.lists = listNew.splice((qs.pageIndex-1)*qs.pageSize,qs.pageSize);
        }
        var callback = qs.jsoncallback+'('+ JSON.stringify(obj) +')';
        res.end(callback);
    }).listen(8888);
    console.log('启动成功');
