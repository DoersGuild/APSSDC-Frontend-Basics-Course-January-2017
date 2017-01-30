(function($) { 
    'use strict';
    $.fn.showDateAndTime = function() {
        // Show the current date and time in the selected element
        var self = this,
            updateDateAndTime = function() {
                var date_and_time = new Date;
                self.each(function() {
                    var $this = $(this);
                    $this.html(date_and_time);
                });
            };
        updateDateAndTime();
        setInterval(updateDateAndTime, 1000);
        return self;
    };
    
})(jQuery);