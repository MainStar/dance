$('directions_block').css({vasability:"hidden"});
$(document).ready(function(){
	var h = $(window).height();

	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#directions_block").offset().top) {
			$(".name_directions").css({visibility:"visible"});
			$(".national_dance").css({visibility:"visible"});
			$(".balet_dance").css({visibility:"visible"});
			$(".estrada_dance").css({visibility:"visible"});
			$(".nowdays_dance").css({visibility:"visible"});

			$(".blcok_prockladka_photo").css({visibility:"visible"});

			$(".national_dance").addClass('animated bounceInLeft');
			$(".balet_dance").addClass('animated bounceInRight');
			$(".estrada_dance").addClass('animated bounceInLeft');
			$(".name_directions").addClass('animated bounceInLeft');
			$(".nowdays_dance").addClass('animated bounceInRight');

			$(".blcok_prockladka_photo").slideDown();
		}		
		if ( $(this).scrollTop() == 0 ) {
			$(".national_dance, .balet_dance, .estrada_dance, .nowdays_dance").each(function(){
				if($(this).hasClass('national_dance')){
					$(this).removeClass().addClass('national_dance');
				}
				if($(this).hasClass('balet_dance')){
					$(this).removeClass().addClass('balet_dance');
				}
				if($(this).hasClass('estrada_dance')){
					$(this).removeClass().addClass('estrada_dance');
				}
				if($(this).hasClass('nowdays_dance')){
					$(this).removeClass().addClass('nowdays_dance');
				}
				$(this).css({visibility:"hidden"});
			});
		}
	});
});
