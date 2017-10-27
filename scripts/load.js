$(document).ready(function()
{
        var spinner = $("<div/>").attr("id", "spinner").appendTo("body");
        spinner.css({
        	"background-image":"url(images/spinner.gif)",
        	"width":"100px",
        	"height":"100px",
        	"background-size":"100px 100px",
        	"position":"absolute",
        	"top":"850px",
        	"left":"800px"
        });
        var load = $("<h1/>").appendTo("body").attr("id", "load");
        load.text("Loading...");
        load.css({
        	"color":"white",
        	"position":"absolute",
        	"top":"850px",
        	"left":"660px"
        });
        var timeout = setTimeout(change, 5000);
        function change()
        {
        	location="start.html"
        }

});