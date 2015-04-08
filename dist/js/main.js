$(function(){
    $('.pathfinder').on('click', function(){
        var $currentNode = $(this);
        var cssPathForThisNode = $currentNode.getPath();
        $('#resultDiv').html(cssPathForThisNode);
    });
});
