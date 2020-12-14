$(document).ready(function(){
    $("#btn-down").click(function(event){
        $("#phone-bar").css("display", "block").animate("slow");
        $(".dp").css("fill","#ff0000");
        event.stopImmediatePropagation();
        return false;
    });
    $("#phone-bar").click(function(event){
        $("#phone-bar").css("display", "none");
        $(".dp").css("fill","#5b5b5b");
        event.stopImmediatePropagation();
        return false;
    });
    $("#btn-op").click(function(event){
        $(".close").css("display","none");
        $(".open").css("display","block");
        $(".dropdown-menu").css("display", "block").animate("slow");
        event.stopImmediatePropagation();
        return false;
    });
    $("#btn-cl").click(function(event){
        $(".open").css("display","none");
        $(".close").css("display","block");
        $(".dropdown-menu").css("display", "none");
        event.stopImmediatePropagation();
        return false;
    });
    var audio = $("#voice_dv")[0];

    $("#dartVaider").mouseenter(function() {
        audio.play();
        event.stopImmediatePropagation();
        return false;
    });

});