const captionText = document.getElementById('captionText');

$(document).ready(function()
{
    // preload the image for each link
    $("#image_list a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $("#image_list a").click(function(evt)
    {
        //swap image
        var imageURL = $(this).attr("href");
        $("#main_image").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        //cancel the default action of the link
        evt.preventDefault(); //jQuery cross-browser method
    }); //end click

    //move focus to first thumbnail
    $("li:first-child a").focus();

}); //end ready