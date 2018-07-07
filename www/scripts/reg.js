$("[name=user]").focus(function () {
    $(".second>p:nth-of-type(1)").text("①支持中文、英文、数字、“-”、“_”的组合，4-20个字符")
})
$(".second>div>input").blur(function () {
    $(".second>p").text("")
})
$("[name=password]").focus(function () {
    $(".second>p:nth-of-type(2)").text("①建议使用字母、数字和符号两种及以上的组合，6-20个字符")
})
$("[name=password2]").focus(function () {
    $(".second>p:nth-of-type(3)").text("①请再次输入密码")
})
$("[name=tel]").focus(function () {
    $(".first>p:nth-of-type(1)").text("①验证完成后，你可以使用该手机登录或找回密码")
})
$("[name=tel]").blur(function () {
    $(".first>p:nth-of-type(1)").text("")
})
// $("form").submit(function (e) {  
//     e.preventDefault()
//     // console.log($(this).serialize())
//     if($("[name=password2]").val()!=$("[name=password]").val()){
//         alert("两次密码不一致，请重新输入")
//     }else{

//         $.post({
//             url:"/register",
//             data:$(this).serialize(),
//             success:function (data) {  
//                 alert(data.info)
//                 if(data.code == 0){
//                     location.href="index.html"
//                 }
//             }
//         })
//     }
// })
var interval

$("[name=tel]").blur(function () {
    $(".next").unbind()
    clearInterval(interval);
    $("[name=text]").val("")
    var re = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
    if (re.test($("[name=tel]").val())) {
        $(".first>div>p").attr("onclick", "yanzhenma()")
        clearInterval(interval);
        $(".first>div>p").text("获取验证码");

        $.post({
            url: "/register2",
            data: $(this).serialize(),
            success: function (data) {
                if (data.code == 1) {
                    alert("号码已注册")
                    $(".first>div>p").removeAttr("onclick")
                } else {
                    $(".first>div>p").attr("onclick", "yanzhenma()")


                }
            }
        })
    } else {
        alert("手机号码错误")
        $(".first>div>p").removeAttr("onclick")
        clearInterval(interval);
        $(".first>div>p").text("获取验证码");
    }

})
function yanzhenma() {
    var code = getCode();
    console.log(code)
    var t = 10;
    $(".first>div>p").text(t + "秒");
    $(".first>div>p").removeAttr("onclick")
    interval = setInterval(function () {
        t--;
        $(".first>div>p").text(t + "秒");
        $("[name=text]").blur(function () {
            if ($("[name=text]").val() == code) {
                $(".next").click(function () {
                    $(".first").attr("style", "display:none")
                    $(".second").attr("style", "display:block")
                    $(".greenBackground").attr("style", "background-position:0px 0px!important")
                    $(".greenBackground").text("")
                    $(".shengluehaoFirst").attr("style", "background-position:0px -130px!important")
                })
            } else {
                $(".next").unbind()
            }
        })
        if (t == 0) {
            clearInterval(interval);
            $(".first>div>p").attr("onclick", "yanzhenma()")
            $(".first>div>p").text("获取验证码");
        }
    }, 1000);
}

function getCode() {
    var str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    return str.split("").sort(function () {
        return Math.random() - 0.5;
    }).slice(0, 4).join("");
}


$("[name=user]").change(function () {
    // console.log($(this).serialize())
    $.post({
        url: "/register3",
        data: $(this).serialize(),
        success: function (data) {
            if (data.code == 1) {
                alert("用户名已存在")
                $("form").unbind()
            } else {

                $("form").submit(function (e) {
                    e.preventDefault()
                    // console.log($(this).serialize())
                    if ($("[name=password2]").val() != $("[name=password]").val()) {
                        alert("两次密码不一致，请重新输入")
                    } else {
                        $.post({
                            url: "/register",
                            data: $(this).serialize(),
                            success: function (data) {
                                // alert(data.info)
                                if (data.code == 0) {
                                    // location.href="index.html"
                                    $(".first").attr("style", "display:none")
                                    $(".second").attr("style", "display:none")
                                    $(".third").attr("style", "display:block")
                                    $(".greenBackground").attr("style", "background-position:0px 0px!important")
                                    $(".greenBackground2").attr("style", "background-position:0px 0px!important")
                                    $(".greenBackground").text("")
                                    $(".greenBackground2").text("")
                                    $(".shengluehaoFirst").attr("style", "background-position:0px -130px!important")
                                    $(".shengluehaoSecond").attr("style", "background-position:0px -130px!important")
                                    $(".third span").text($("[name=user]").val())
                                    $(".sectionFooter").attr("style", "display:none")
                                    $(".third>div>div").click(function () {
                                        location.href = "index.html"
                                    })
                                }
                            }
                        })
                    }
                })

            }
        }
    })
})