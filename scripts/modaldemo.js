/** modaldemo */

function show(dataUrl){
    $.get( dataUrl, function( data ) {
        $("#header").text(data.title);
        $("#content").html(data.content);
    });
}