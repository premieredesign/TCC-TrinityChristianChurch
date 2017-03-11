
$(document).ready(() => {


	// jQuery to collapse the navbar on scroll
	function collapseNavbar() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	        $(".welcome").find("h2").addClass("h2-change");
	        //$(".navbar-custom").find("li > a").css({"color":"white"});
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	        $(".welcome").find("h2").removeClass("h2-change");
	        //$(".navbar-custom").find("li > a").css({"color":"#350854"});
	    }
	}
	$(window).scroll(collapseNavbar);
	

	//index Page==================================
	$('.navbar-nav').hover(
		function(){ $(this).addClass('hover-style')},
		function(){ $(this).removeClass('hover-style')}
	)

	$('.navbar-custom').hover(
		function(){ $(this).addClass('hover-style')},
		function(){ $(this).removeClass('hover-style')}
	)
	
	$('#begin').hide();
	setTimeout(() => {
		$('#begin').fadeToggle(3000);
	}, 6000);
	$('#words').hide();
	setTimeout(() => {
		$('#words').fadeToggle(6000);	
	}, 6000);

	$('.welcome h1').hide();
	$('.welcome h1').each(function(i) {
    	$(this).delay(i * 1500).fadeIn(1000).fadeOut(1000);
	});
	$('.welcome h6').hide();
	setTimeout(() => {
		$('.welcome h6').fadeIn(3000);
	}, 25000);

	/*$('.welcome h2').each(function(i) {
		$(this).delay(i*1500).fadeIn(1000).fadeOut(1000);
	});*/
	
	/*setTimeout(() => {
		$('.welcome h2').hide();
		$('.welcome h2').show();
		//$('.welcome h2').removeClass();
		//$('.welcome h2').css({'position': 'fixed'});
	}, 8000);*/

	$('h2:hover').css({'z-index': '8000px'});






	//About Page==================================
	/*
	$(".navbar-custom").find("li a").css("color", "black");
	$(".navbar-custom").find("li a").hover(
		function() {$(this).addClass(".navbar-color")},
		function() {$(this).removeClass(".navbar-color")}
	)
	$(".jumbotron").addClass("jumbo-overlay");
	*/
	
	$('.photo-1').find('h1').addClass('hover-style');
	

	$(".jumbo-overlay").hide();






	//Pastor Page==============================
		$('p').css({'font-smoothing': 'antialiased'});
		$('p').hide();
	setTimeout(() => {
		$('p').slideToggle(2200, () => {});		
	}, 1000);

	
	$(".jumbotron").find("h1").css({
		"background-color": "silver"
	});
	
	
	//$('.wade').hide();
	//$('p').css('display', 'none');
	//$('p').css({'width': '100%'});
	$('.wade').animate({
		bottom: '-=200px',
		width: '49%'
	}, 2000, () => {});








	



	//Ministries Page=============================



	//Events Page================================

	$(".carousel").carousel({
        interval: 3000
    });
    

});

