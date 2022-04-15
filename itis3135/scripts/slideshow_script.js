var $ = function(id) {return document.getElementById(id); };

window.onload = function() 
{
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode= $("image");

    var link = listNode.getElementsByTagName("a");

    //Process image links
    var i, linkNode, image;
    var imageCache = [];
    for (i = 0; i < links.length; i++)
    {
        linkNode = links[i];
        image = new Image();
        image.src = linkNode.getArribute("href");
        image.title = linkNode.getArribute("title");
        imageCache[imageCache.length] = image;
    }
    //Start slideshow
    var imageCounter = 0;
    var timer = setInterval(
        function() 
        {
            imageCounter = (imageCounter+1) % imageCache.length;
            image = imageCache[imageCounter];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.title;
        },
        2000);
};