/* globals jQuery */
jQuery.fn.extend({
    getPath: function () {
        "use strict";
        var path;
        var node = this;
        /*Include only names and IDs since you can always programmatically add/remove classes*/
        var uniqueTags = ['name', 'id'];
        while (node.length) {
            var realNode = node[0],
                name = realNode.localName;
            if (!name) {
                break;
            }
            name = name.toLowerCase();
            var parent = node.parent();
            var uniqueIdentifierFound = false;
            for (var i = uniqueTags.length - 1; i >= 0; i--) {
                var tag = uniqueTags[i];
                var tagValue = node.attr(tag);
                if (tagValue && (tagValue.trim !== '')) {
                    name = '[' + tag + '=\"' + tagValue + '\"]';
                    //we've found a unique identifier so we're done
                    uniqueIdentifierFound = true;
                    break; //exit for loop
                }
            }
            if (!uniqueIdentifierFound) {
                var sameTagSiblings = parent.children(name);

                //As soon as you know you have sibling nodes, use nth-of-type so you can better find a unique match
                if (sameTagSiblings.length > 1) {
                    var allSiblings = parent.children();
                    var index = allSiblings.index(realNode) + 1;
                    name += ':nth-child(' + index + ')';
                }
                path = name + (path ? '>' + path : '');
                node = parent;
            } else {
                path = name + (path ? '>' + path : '');
                break; //exit while loop
            }
        }
        return path;
    }
});
