(function($) {
	$.fn.shuffleString = function(options) {
		var settings = $.extend({
			color: "#000000",
			done: null
		}, options);

		return this.each(function(){

			console.log(this);

		 $(this).text(shuffleString($(this).text()));
		 $(this).css('color',settings.color);
		 if($.isFunction(settings.done)){
		 	settings.done.call(this);
		 }

		 function shuffleString(str){
		 	return "OI";
		 }

		})
	}
}(jQuery));