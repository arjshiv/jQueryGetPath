var demo = function() {
    $(document).on({
        mouseenter: function () {
            var $currentNode = $(this);
            var cssPathForThisNode = $currentNode.getPath();
            $('#resultDiv').html(cssPathForThisNode);
        },
        mouseleave: function () {
            $('#resultDiv').html('Hover over a div to show its CSS path');
        }
    }, '.pathfinder');
};
$(function(){
    demo();
    $('#demoCode').html(demo.toString());
});
