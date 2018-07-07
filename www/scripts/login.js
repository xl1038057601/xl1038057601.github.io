$(".formName>div:nth-of-type(2)").click(function () {  
    $("form").attr("style","display:block")
    $(".main").attr("style","display:none")
    $(".formName>.pull-right").css("color","#e4393c")
    $(".formName>.pull-right").css("font-weight","bold")
    $(".formName>.pull-left").css("color","black")
    $(".formName>.pull-left").css("font-weight","100")
    $("section>div>div").css("height","400px")
})
$(".formName>div:nth-of-type(1)").click(function () {  
    $("form").attr("style","display:none")
    $(".main").attr("style","display:block")
    $(".formName>.pull-left").css("color","#e4393c")
    $(".formName>.pull-left").css("font-weight","bold")
    $(".formName>.pull-right").css("color","black")
    $(".formName>.pull-right").css("font-weight","100")
    $("section>div>div").css("height","428px")
    
})



$(".main>img:nth-of-type(1)").mouseover(function () {  
    $(".main>img:nth-of-type(1)").animate({  
        left:"0"
    },500)
    setTimeout(function () {  $(".main>img:nth-of-type(2)").css("display","block") },500)
   
})

$(".main>img:nth-of-type(1)").mouseout(function () {  
    $(".main>img:nth-of-type(2)").css("display","none") 
    $(".main>img:nth-of-type(1)").animate({  
        left:"70px"
    },500)
   
})

$("form").submit(function (e) {  
    e.preventDefault()
    // console.log($(this).serialize())
    $.post({
        url:"/login",
        data:$(this).serialize(),
        success:function (data) {  
            alert(data.info)
            if(data.code == 0){
                location.href = "index.html"
            }
        }
    })
})
