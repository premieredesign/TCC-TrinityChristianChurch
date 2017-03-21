
$(document).ready(() => {
	// jQuery to collapse the navbar on scroll

	function collapseNavbar() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	        $(".welcome").find("h2").addClass("h2-change");
	        $('.welcome').find('h2').removeClass('ghost');
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	        $(".welcome").find("h2").removeClass("h2-change");
	        $('.welcome').find('h2').addClass('ghost');
	    }
	}
	$(window).scroll(collapseNavbar);
	








	//============================================
	//index Page==================================
	//============================================

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

	$('h2:hover').css({'z-index': '8000px'});



	//============================================
	//About Page==================================
	//============================================

	$('.we').mouseenter(function() {
		$('.photo-1').find('#faith').css('color','orange');
		$('.photo-1').find('.orange-hover').css('color','orange');
		$('.photo-1').find('#faith').css('font-size','50px');
	});
	$(".we").mouseleave(function(){
       $('.photo-1').find('#faith').css('color','#12051a');
       $('.photo-1').find('.orange-hover').css('color','#12051a');
       $('.photo-1').find('#faith').css('font-size','36px');
    });
	


	$('.doc-p').mouseenter(function() {
		$('.photo-1').find('#doc').css('color','orange');
		$('.photo-1').find('#doc').css('font-size','50px');
	});
	$(".doc-p").mouseleave(function(){
       $('.photo-1').find('#doc').css('color','#12051a');
       $('.photo-1').find('#doc').css('font-size','36px');
    });
	

	$('.god-tri-p').mouseenter(function() {
		$('.photo-1').find('#god-tri').css('color','orange');
		$('.photo-1').find('#god-tri').css('font-size','50px');
	});
	$(".god-tri-p").mouseleave(function(){
       $('.photo-1').find('#god-tri').css('color','#12051a');
       $('.photo-1').find('#god-tri').css('font-size','36px');
    });
	

	$('.god-father-p').mouseenter(function() {
		$('.photo-1').find('#god-father').css('color','orange');
		$('.photo-1').find('#god-father').css('font-size','50px');
	});
	$(".god-father-p").mouseleave(function(){
       $('.photo-1').find('#god-father').css('color','#12051a');
       $('.photo-1').find('#god-father').css('font-size','36px');
    });



    $('.jesus-p').mouseenter(function() {
		$('.photo-1').find('#jesus').css('color','orange');
		$('.photo-1').find('#jesus').css('font-size','50px');
	});
	$(".jesus-p").mouseleave(function(){
       $('.photo-1').find('#jesus').css('color','#12051a');
       $('.photo-1').find('#jesus').css('font-size','36px');
    });

	$(".jumbo-overlay").hide();



	//=========================================
	//Pastor Page==============================
	//=========================================

		$('p').css({'font-smoothing': 'antialiased'});
		$('p').hide();
	setTimeout(() => {
		$('p').slideToggle(2200, () => {});		
	}, 1000);

	
	$(".jumbotron").find("h1").css({
		"background-color": "silver"
	});
	
	$('.wade').css({'width': '50%'});
	
	$('.wade').animate({
		bottom: '-=200px',
		width: '40%'
	}, 2000, () => {});
	 


	//=========================================
	//Sermons Page=============================
	//=========================================



	$('.youtube-1').hover(function() {
		$('#tube-overlay').addClass('tubeMove')
		$('#tube-overlay').css({
			width: '450px',
			height: '260px'
		})
	});
	
	//===========================================
	//Events Page================================
	//===========================================

	$(".carousel").carousel({
        interval: 3000
    });
    



});

