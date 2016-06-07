
var $searchBox = $("#image_search");


function searchEvent() {

    var bImageVisible = false;

    $('#imageGallery li a').each(function () {
        if ($searchBox.val() != "") {
            var dataString = $(this).attr("data-title");
            if (dataString != null) {

                if (dataString.indexOf($searchBox.val()) != -1) {
                    $(this).parent().show();
                    bImageVisible = true;
                }
                else {
                    $(this).parent().hide();
                }
            }
        }
        else {
            $(this).parent().show();
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

$searchBox.focus(searchEvent).keyup(searchEvent)
