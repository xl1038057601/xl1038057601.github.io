$.post({
    url: "getData",
    success: function (data) {
        $(".headerAd").attr("style", data.headerAd)
        $(".headerAdBackground").attr("style", data.headerAdBackground)
        // var lunboArr = ""
        // for(var i = 0 ;i <data.lunboImg.length;i++){
        //    lunboArr +='<div class="swiper-slide"><img src="'+ data.lunboImg[i] + '" alt=""></div>'
        // }
        // console.log(lunboArr)
        // $(".swiper-wrapper").html(lunboArr)
        var lunboArr = ""
        for (var i = 0; i < data.lunboImg.length; i++) {
            // $(".swiper-container1 .swiper-slide").eq(i + 1).html('<img src="' + data.lunboImg[i] + '" alt="">')
            $("#myCarousel1 .item").eq(i).html('<img src="' + data.lunboImg[i] + '" alt="">')
            //   console.log(data.lunboImg[i])

        }
        var lunboRighArr = ""
        for (var i = 0; i < 3; i++) {
            lunboRighArr += '<img src="' + data.lunboImgRight[i] + '" alt="">'
        }
        $(".fs_col3").html(lunboRighArr)
        var fsliArr = ""
        for (var i = 0; i < data.fs.length; i++) {
            var fsArr = ""

            for (var ii = 0; ii < data.fs[i].length; ii++) {
                fsArr += '<a href="#">' + data.fs[i][ii] + '</a> / '

            }
            fsArr = fsArr.slice(0, -2)
            fsliArr += '<li> ' + fsArr + '</li>'
            // console.log(fsArr)
        }
        $(".fs1>ul").html(fsliArr)
        $(".fs1 ul li").each(function (i) {
            $(this).mouseover(function () {
                $(".fs1_1").eq(i).attr("style", "display:block")
            })
            $(this).mouseleave(function () {
                $(".fs1_1").mouseover(function () {
                    $(".fs1_1").eq(i).attr("style", "display:block")
                })
                $(".fs1_1").mouseleave(function () {
                    $(".fs1_1").eq(i).attr("style", "display:none")
                })
                $(".fs1_1").eq(i).attr("style", "display:none")
            })
        })

        $("#treasure").css("background", data.J_promo_lk)
        for (var i = 0; i < 17; i++) {
            $(".fs1").append('<div class="fs1_1" style="display: none;"><div class="fs1_2"><div class="fs1_3"></div><div class="fs1_4"><dl><dt><a href="#">电视 ></a> </dt> <dd><a href="#"><div class="spacer"></div>曲面电视</a></dd><div class="clearfix"></div></dl></div></div></div>')
        }
        for (var i = 0; i < 17; i++) {
            var cateArr = ""
            for (var ii = 0; ii < data.cate[i].length; ii++) {
                cateArr += '<a href="#" style="margin-right:10px;">　' + data.cate[i][ii] + ' ></a>'
            }
            $(".fs1_3").eq(i).html(cateArr)


            var cateArr2 = ""
            var cate1 = data.cate2[i].split('_')
            //  var cate2 = cate1.split(',')
            //  console.log(cate1)
            var cateStr = ""
            for (var ii = 0; ii < cate1.length - 1; ii++) {
                // cateArr2 += '<a href="#" style="margin-right:10px;">　' + data.cate[i][iii] + ' ></a>'
                var cate2 = cate1[ii].split(',').slice(0, -1)
                //    console.log(cate2)
                var dd = ""
                for (var iii = 1; iii < cate2.length; iii++) {
                    dd += '<a href="#"><div class="spacer"></div>' + cate2[iii] + '</a>'
                    // console.log(cate2[iii])
                }
                cateStr += '<dl><dt><a href="#">' + cate2[0] + ' ></a> </dt> <dd>' + dd + '</dd><div class="clearfix"></div></dl>'
                $(".fs1_4").eq(i).html(cateStr)

            }
        }
        
        // for (var i = 0; i < data.sk.length; i++) {
        //     skStr += '<div class="swiper-slide"><img src="' + data.sk[i][0] + '" alt=""><p>' + data.sk[i][1] + '</p><div><span>' + data.sk[i][2] + '</span><span>' + data.sk[i][3] + '</span></div></div>'
        // }
        // console.log(skStr)
        // $(".swiper-container2>.swiper-wrapper").html(skStr)
        for (var i = 0; i < data.sk.length; i++) { console.log(i)}
               for (var ii = 0; ii < data.sk.length / 4 ; ii++) {
                    var skStr = ''
                   
                    for(var i=0;i<4;i++){
                     skStr += ' <div class="swiper-slide"><img src="' + data.sk[ii*4 +i][0] + '" alt="First slide"><p>' + data.sk[ii*4 +i][1] +'</p><div><span>' + data.sk[ii*4 +i][2] + '</span><span>' + data.sk[ii*4 +i][3] + '</span></div></div>'
                    }
                    $("#myCarousel2 .item").eq(ii).html(skStr)
                }


        // var swiper2 = new Swiper('.swiper-container2', {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //     slidesPerGroup: 4,
        //     loop: true,
        //     loopFillGroupWithBlank: true,
        
        //     navigation: {
        //         nextEl: '.swiper-button-next2',
        //         prevEl: '.swiper-button-prev2',
        //     },
        // });


        // $("#myCarousel3 item").eq(1).attr("src",data.skRight[0])
        // $("#myCarousel3 item").eq(2).attr("src",data.skRight[1])
        // $("#myCarousel3 item").eq(3).attr("src",data.skRight[3])

        $("#myCarousel3 .item").eq(0).html('<img src="' + data.skRight[0] + '">')
        $("#myCarousel3 .item").eq(1).html('<img src="' + data.skRight[1] + '">')

        
    }
})
$(".headerAdClose").click(function () {
    $(".headerAdBackground").attr("style", "display:none;")
})

$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
        $(this).attr("style", "background-color: white;")
    });

    $(".dropdown").mouseleave(function () {
        $(this).removeClass("open");
        $(this).attr("style", "")

    })

})



$("#userName").html($.cookie("userName") ? $.cookie("userName") : "你好,请登录");
$(".user_show p:last-of-type").html($.cookie("userName") ? $.cookie("userName") : '<a href="login.html" class="user_login">登录 </a><a href="index.html" class="user_reg">注册</a>');
$(".news_last").mouseover(function () {
    $(".news_tab_active").css("transform", "translateX(54px)")
    $("#J_news .news_list1").attr("style", "display:none;")
    $("#J_news .news_list2").attr("style", "display:block;")
})
$(".news_first").mouseover(function () {
    $(".news_tab_active").css("transform", "translateX(0px)")
    $("#J_news .news_list2").attr("style", "display:none;")
    $("#J_news .news_list1").attr("style", "display:block;")
})



// var time = new Date();
// console.log(time.getMinutes())
// console.log(time.getSeconds())
function time() {
    var date = new Date();
    var m = (60 - date.getMinutes()) > 9 ? (60 - date.getMinutes()) : "0" + (60 - date.getMinutes());
    var s = (60 - date.getSeconds()) > 9 ? (60 - date.getSeconds()) : "0" + (60 - date.getSeconds());
    $('.minute span').html(m);
    $('.second span').html(s);
}
time();
setInterval(time, 1000);



$(function(){
	$('.search2').hide();
	$(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>700){
				$('.search2').fadeIn(300);
				}
				else{$('.search2').fadeOut(200);}
			
			});
			
		
		})
	
	
	})
    $('.carousel').carousel('pause');