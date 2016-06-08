
var $searchBox = $("#image_search");


function searchEvent() {

    var bImageVisible = false;

    $('#imageGallery li a').each(function () {
        if ($searchBox.val() !== "") {
            var dataString = $(this).attr("data-title");
            if (dataString !== null) {

                if (dataString.indexOf($searchBox.val()) != -1) {
                    $(this).parent().fadeIn(500);
                    bImageVisible = true;
                }
                else {
                    $(this).parent().fadeOut(500);
                }
            }
        }
        else {

            $(this).parent().fadeIn(500);
            bImageVisible = true;
        }
    });

    if (!bImageVisible) {
        $("#imageMessage").show();
    }
    else {
        $("#imageMessage").hide();
    }
}

$searchBox.focus(searchEvent).keyup(searchEvent);

