( function( $ ) {
$( document ).ready(function() {
$('#menu').prepend('<div id="menu-button">Menu</div>');
	$('#menu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.slideUp('fast');
			menu.removeClass('open');	
		}
		else {
			menu.slideDown('fast');
			menu.addClass('open');	
		}
	});
});
} )( jQuery );