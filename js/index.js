$(function(){

    /******************************滑过显示下拉部分***********************************/

    /*输入框滑过变色*/
   $("#suggest-align").hover(
       function(){
           $(".search-input").addClass("search-input-hover");
       },
       function(){
           $(".search-input").removeClass("search-input-hover");
       }
    );
    
    /*输入框获/失焦事件,切记事件对象为input框*/
    $(".placeholder").focus(function(){
        $(".search-input").addClass("search-input-focus");
    });
    $(".placeholder").blur(function(){
        $(".search-input").removeClass("search-input-focus");
    });
    
    //文本框自动获得焦点
    $(".placeholder").focus();
    
    //点击调出新闻弹窗
    $(".placeholder").click(function(){
        $("#news-list").show();
    });
    
        
    
    $(".placeholder").blur(function(){
        $("#news-list").hide();
    });
    
   
    /*自动获取数据*/
    /*自动监听动态生成的元素绑定事件*/
        $(document).on("mousedown","#news-list li",function () {
            var Ltxt = $(this).find("span").text();
            $(".placeholder").val(Ltxt);
        });


}); 
