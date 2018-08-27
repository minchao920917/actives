$(function(){
    var page = (function(){

    	//是否重新打开
    	var isReOpen = function(){

    	}
        //验证条件
        var validate = function(){
        	//手机号验证
        	$(".phone").bind('input propertychange', function() {
        		var string = $(this).val().trim();
        		if(string.length > 11){
        			string = string.substr(0, 11);
        			$(this).val(string)
        		}
				var pattern = /^1[34578]\d{9}$/;    
				if (pattern.test(string)) {  
				    $(this).removeClass("red");
				}   
			    $(this).addClass("red");
			});

        }
        

        function checkMobile(){
	    	var mobileReg = /^(13|14|15|17|18)[0-9]{8}[0-9]$/;
	    	var mobile = $('.phone').val();
	    	if(!mobileReg.test(mobile)){
	    		console.log('未输入手机号或手机格式有误');
	    		return false;
	    	}
	    	return true;
	    }
 
	    function checkVerifyCode(){
	    	var verifyCodeReg = /^[0-9]{6}$/;
	    	var verifyCode = $('.message').val();
	    	if(!verifyCodeReg.test(verifyCode)){
	    		console.log('未输入验证码或验证码格式有误');
	    		return false;
	    	}
	    	return true;
	    }

        //发送验证码
        function sendVerifyCode() {
        //发送验证码点击事件
        	$("#v").on('click',function(){
				s$.ajax({
				type: "POST",
				dataType: "json",
				url: URLPrefixJs.statics+"/login/sendRegisterVerifyCode.do",
				data: "mobile="+$('.phone').val(),
				success: function(data){
					if (data=="0"){
						console.log('发送短信成功，请注意接收');
						var countdown=59;
						var o=$("#v");
						var iCount = setInterval (function () {		
							o.text(countdown-- +"s后重试");
							o.addClass("disabled");
							if(countdown==0){
						         o.removeClass("disabled");
						         o.text("获取验证码");
						         clearInterval(iCount);//清除倒计时
								 countdown=60;//设置倒计时时间 
							};
						}, 1000);
					} else if (data=="005") {
						console.log('发送短信间隔需大于60秒');
					} else {
						console.log('发送短信失败，请重试');
					}
				}
			});
        	});
	    	
	    }

        
        var init = function(){
        	isReOpen();//是否发送过
            validate();//添加验证
            sendVerifyCode();//点击发送验证码
            
        };

        return{
            init: init
        }
    })();

    page.init();
})