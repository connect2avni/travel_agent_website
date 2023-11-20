
$('.btn1').on('click', function () {
    alert("this page doesn't exist")
});


$('.navbar_elements ul li a').on('click', function () {
    $(this).css('text-decoration', 'underline');
});

$('.card-image1').html(function () {
    return '<video src=""https://youtu.be/209P2YndRzM?si=Pp1Z2nwD_WlMVXJh" alt="konark Temple">';
});

$('.card-image1').on('mouseenter', function (e) {
    clip.play();
})
$('.card-image1').on('mouseout', function (e) {
    clip.pause();
})

function play_video(card_id) {
    var card_id = $('#' + card_id);
    var video = card_id.data('video-url')
    // card_id.html('<iframe class="card-image1" src="'+video+'?autoplay=1" height="100%" width="100%"> </iframe>');
    card_id.html('<iframe class="card-image1" src="' + video + '" height="100%" width="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> </iframe>');
}

function pause_video(card_id) {
    var card_id = $('#' + card_id);
    var image = card_id.data('image-url')
    card_id.html('<img class="card-image1" src="' + image + '">');
}

$('.btn5').on('click', function () {
    $('#middle_paragraph').css({
        'background-color': '#b0c1b0',
        'transition': '0.3s ease-in-out'
    });
});

$(".btn3").on('click', function () {
    $("#btns").fadeToggle(1000);
});