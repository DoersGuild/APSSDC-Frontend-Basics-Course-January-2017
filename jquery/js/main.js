(function($) { 'use strict';
    $(document).ready(function() {
        // Is executed only when the document has loaded
        console.log('all h3 tags', $('h3, body'));
        var $h3 = $('h3'); // Creates a jQuery object holding all h3 tags
        console.log($h3.get(0)); // Gets the 1st (zeroth index) h3 tag element
        console.log($h3.first()); // Gets the first h3 tag element as a jQuery object
        $h3.hide(); // Hides the tags represented by this jQuery object
        $h3.first().show().css({
            'font-size': '25px',
            'background': 'yellow'
        }); // .css sets the CSS properties of all the elements represented by a jQuery obhect
    });
})(jQuery);