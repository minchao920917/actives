$(function(){
    var page = (function(){
    	/*
			请求参数
    	*/
       function getData(){
       		$.ajax({
		    url:"http://192.168.150.57:80/home/wechat/getData",    //请求的url地址
		    dataType:"json",   //返回格式为json
		    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
		    data:{},    //参数值
		    type:"GET",   //请求方式
		    beforeSend:function(){
		        //请求前的处理
		    },
		    success:function(data){
		        //请求成功时处理
		        console.log(JSON.stringify(data));
		        console.log(data);
		    },
		    complete:function(){
		        //请求完成的处理
		    },
		    error:function(){
		        //请求出错处理
		    }
		});
       }
        //初始化函数
        var init = function(){
            getData();//
            
        };

        return{
            init: init
        }
    })();

    page.init();
})


// {
// 	"status":1,
// 	"data":[
// 		{
// 			"id":17,
// 			"uid":1,
// 			"title":"erer",
// 			"tag":"erere",
// 			"author":"erere",
// 			"content":"<p>ereredfsdfdfdsfdfd</p>",
// 			"create_time":1535091570,
// 			"is_top":0,
// 			"short_time":"14:19"
// 		},
// 		{
// 			"id":16,
// 			"uid":0,
// 			"title":"英联股份",
// 			"tag":"",
// 			"author":"",
// 			"content":"<p>英联股份（002846）连续三个交易日跌停。</p><p><br/></p>",
// 			"create_time":1535073926,
// 			"is_top":0,
// 			"short_time":"09:25"
// 		}
// 	],
// 	"time":"2018年08月24日"
// }