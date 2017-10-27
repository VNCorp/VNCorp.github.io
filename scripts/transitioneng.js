function changeView()
{
$("html").keydown(rev);
function rev(e)
{
        if(e.which==76)
                re();
}        
function re()
{
alert("Hel");
}
        var el = document.body;
        toggleFullscreen(el);
        $("#map").remove();
        $("#button").remove();
        $("#author").remove();
        var background = $("<div/>").appendTo("body");
        var bricks = $("<div/>").attr("id", "bricks");
        var player = $("<div/>").attr("id", "player");
        var quester = $("<div/>").attr("id", "quester");
        background.append(bricks);
        background.append(quester);
        background.css({
        "background-image":"url(images/thumb-1920-598236.png)",
        "position":"absolute",
        "top":"0px",
        "left":"0px",
        "width":"1920px",
        "height":"1060px"
        });

        bricks.css({
        "position":"absolute",
        "width":"2000px",
        "height":"50px",
        "top":"1010px",
        "left":"0px",
        "background-image":"url(images/pixel_bricks.jpg)",
        "background-size":"50px 50px"
        });

        quester.css({
                "background-image":"url(images/quester.gif)",
                "width":"220px",
                "height":"110px",
                "position":"absolute",
                "left":"400px",
                "top":"910px",
                "background-size":"220px 110px"
        });

                                function toggleFullscreen (el) {
                                if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement){
                                        if(document.exitFullscreen){
                                                document.exitFullscreen();
                                        }else if(document.mozCancelFullScreen){
                                                document.mozCancelFullScreen();
                                        }else if(document.webkitExitFullscreen){
                                                document.webkitExitFullscreen();
                                        }else if(document.msExitFullscreen){
                                                document.msExitFullscreen();
                                        }
                                }else{
                                        if(document.documentElement.requestFullscreen){
                                                el.requestFullscreen();
                                        }else if(document.documentElement.mozRequestFullScreen){
                                                el.mozRequestFullScreen();
                                        }else if(document.documentElement.webkitRequestFullscreen){
                                                el.webkitRequestFullscreen();
                                        }else if(document.documentElement.msRequestFullscreen){
                                                el.msRequestFullscreen();
                                        }
                                }
                        };  
}