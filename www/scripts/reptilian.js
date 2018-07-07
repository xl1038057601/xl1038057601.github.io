    window.onload = function () {
        var lunboArr = []
        $(".focus_item_img").each(function () {
            lunboArr.push($(this).attr("src"))
        })
        var lunboArrRight = []
        $(".fs_col3 .lazyimg_img").each(function () {
            lunboArrRight.push($(this).attr("src"))
        })
        var fsArr = []
        $(".cate_menu_item").each(function (i) {
            var fsArr2 = []
            $(this).find("a").each(function () {
                fsArr2.push($(this).text())
            })
            fsArr.push(fsArr2)
        })
        var cateArr = []
        $("#J_popCtn>.cate_part").each(function (i) { 
            // console.log(this) 
            var cateArr2 = []
            $(this).find(".cate_channel_lk").each(function (ii) {  
                re = new RegExp("","g")
              cateArr2.push( $(this).text().replace(re,""))

            })
            cateArr.push(cateArr2)
        })
        // console.log(cateArr)
        var cateArr3 = []
        
        $("#J_popCtn>.cate_part").each(function (i) { 
            var cateArr5 =""
            $(this).find(".cate_detail>.cate_detail_item").each(function (ii) {  
                re = new RegExp("","g")
                cateArr5 +=  $(this).find(".cate_detail_tit_lk").text().replace(re,"") + ","            
                $(this).find(".cate_detail_con_lk").each(function (iii) {  
                cateArr5 += $(this).text() + ","
                })
                cateArr5 +="_"
            })
           
            cateArr3.push(cateArr5)
            // console.log(cateArr3)
            
         })  
        // console.log(cateArr3)
        var skArr=[]
         $(".sk_item ").each(function (i) {
             var skArr2=[]  
             skArr2.push($(this).find(".lazyimg_img").attr("src"))
             skArr2.push($(this).find(".sk_item_name").text())
             skArr2.push($(this).find(".sk_item_price_new").text())
             skArr2.push($(this).find(".sk_item_price_origin").text())
             skArr.push(skArr2)
         })
        //  console.log(skArr)
         var skRight = []
         $(".sk_chn_img").each(function(i){
            
            skRight.push($(this).find("img").attr("src"))
         })

        $.post({
            url: "/saveData",
            data: {
                headerAd: $("#J_event_lk").attr("style"),
                headerAdBackground: $("#J_event").attr("style"),
                lunboImg: lunboArr,
                lunboImgRight: lunboArrRight,
                fs:fsArr,
                J_promo_lk:$("#J_promo_lk").css("background"),
                cate:cateArr,
                cate2:cateArr3,
                sk:skArr,
                skRight:skRight
            },
            success: function (data) {
                alert(data);
            },
            error: function () {
                alert("爬取数据失败");
            }
        });
        
    }

 window.onerror =function() { return true;}