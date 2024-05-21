$(function (){
    $("#show_chat").click(function (){
        $(".left_window").css("display", "none")
        $(".right_window").css("display", "block")
        $(".header_back").css("display", "block")
    })
    $(".header_back").click(function (){
        $(".left_window").css("display", "block")
        $(".right_window").css("display", "none")
        $(".header_back").css("display", "none")

})
})