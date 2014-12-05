// VARIABLES
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var slide_number = parseInt(filename.substring(0, filename.lastIndexOf('.')));

var noprev = false;
var nonext = false;
if(slide_number <= 1) {
	noprev = true;
}
if(slide_number >= slide_count) {
	nonext = true;
}

// FUNCTIONS
function to_str(n) {
    if(slide_number < 10) {
        return "0"+n;
    } else {
        return ""+n;
    }
}
function hide_nav() {
    $(".slide-nav").hide();
}
function show_nav() {
    $(".slide-nav").show();
}
function slide_prev() {
    if(!noprev) {
        window.location.href = to_str(slide_number-1)+'.html'
    }
}
function slide_next() {
    if(!nonext) {
        window.location.href = to_str(slide_number+1)+'.html'
    }
}

// SET CONTENT
if(noprev) {
    $("#nav-prev").css('visibility', 'hidden');
}
if(nonext) {
    $("#nav-next").css('visibility', 'hidden');
}
$("#slide-num").text(slide_number);
$("#slide-count").text(slide_count);
$("[data-fill]").each(function() {
	var e = $(this);
	e.html(text[e.data('fill')]);
});

// CATCH EVENTS
$("footer").hover(show_nav, hide_nav);
$("#link-prev").click(function() {
	slide_prev();
})
$("#link-next").click(function() {
	slide_next();
})
$("body").keydown(function(e) {
	if(e.keyCode == 37) { // left
		slide_prev();
	} else if(e.keyCode == 39) { // right
		slide_next();
	}
})
