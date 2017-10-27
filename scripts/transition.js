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
        $("#load").remove();
        $("#spinner").remove();
        $("#map").remove();
        $("#button").remove();
        $("#author").remove();
        var background = $("<div/>").appendTo("body");
        var bricks = $("<div/>").attr("id", "bricks");
        var player = $("<div/>").attr("id", "player");
        var quester = $("<div/>").attr("id", "quester");
        background.append(bricks);
        background.append(quester);
        bricks.css({
        "position":"absolute",
        "width":"2000px",
        "height":"50px",
        "top":"800px",
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
                "top":"10px",
                "background-size":"220px 110px"
        });

}