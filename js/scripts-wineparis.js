;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var scrolledY = 0;
	var $wrappedText= $('.article-wrapper h4');

	 var sliderTimer;
    var sliderNextTimer;

	

	

	function initHomepageSlider() {
	    var $slider = $('.observatoire .la-slider');
	    var $clone = $slider.clone();
	    var sliderArrow = '<a href="#" class="slider-next"/>';
	    var sliderPaging = '<div class="slider-paging">';
	    

	    sliderPaging += '</div>';
	    $slider.after($clone);
	    var $slidesContainer = $clone.find('.slider-content');
	    $clone.append(sliderArrow).append(sliderPaging);
	    $slider.remove();
	    $clone.find('.slider-paging a:first-child').addClass('active');
	    
	    $slidesContainer.carouFredSel({
	        width: '100%',
	        items: 1,
	        swipe: {
	            onTouch: true
	        },
	        auto: {
	            play: true,
	            timeoutDuration: 4000
	        },
	        scroll: {
				duration: 500,
				timeoutDuration: 2500
			},
	        infinite: true,
	        pagination: ".observatoire .slider-paging",
	        prev: {
	             button  : ".observatoire .slider-btn-prev"
            },
            next: {
                   button  : ".observatoire .slider-btn-next"
            }
	    });


	    $('.slider-paging a').each(function(i) {
	    	$(this).text('0' + (i+1))
	    })
	    
	    
	}

	




	//Animate Sections
	var $wbanimated = $('.wbanimated');

	var winHeight = $win.height();
	var winWidth = $win.width();
	var winScroll = $win.scrollTop();

	function animateElements() {
		winScroll = $win.scrollTop();

		if ( $wbanimated.length === 0 ) {
			return;
		}
	};


	function animate(winST) {
	$('.wbanimate').each(function(){
		var $this = $(this);

		if (winST + ($win.outerHeight() / 1.3) > $this.offset().top) {
			$this.addClass('wbanimated');
		} else if (winST + ($win.outerHeight() / 2) < $this.offset().top) {
			$this.removeClass('wbanimated');
		}
		});
	}

	$doc.ready(function() {
        $('.la-slider .slider-pagin').clone(true).appendTo('.observatoire')
		$('.pourquoi-exposer .slider-pagin').clone(true).appendTo('.pourquoi-exposer')


		$('.btn-down').on('click', function(e) {
			e.preventDefault();

			$('html, body').wbanimate({
				scrollTop: $( $(this).closest('.zone').next() ).offset().top
			})
		})

		// Popup Video 
		$('.video .js-btn-play').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-anim-in',
			midClick: true
		});

		//Countdown
		if ( $('#countdown').length ) {
			
			if ($('html').attr('lang') == 'fr') {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>jour%!d</span></li>'
						    + '<li><span>%H</span> <span>heure%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			} else {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>day%!d</span></li>'
						    + '<li><span>%H</span> <span>hour%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			}
			
		}

		//Slider Pagination
		$('.slider-pagin-nb .slider-pagin-item').on('click', function() {
			$(this).addClass('is-active').siblings().removeClass('is-active')
		})

		$('.slider-btn-next').on('click', function() {
			if ( $('.slider-pagin-nb .slider-pagin-item.is-active').next().length ) {
				$('.slider-pagin-nb .slider-pagin-item.is-active').next().trigger('click')
			} else {
				$('.slider-pagin-nb .slider-pagin-item:first-child').trigger('click')
			}
		})

		$('.slider-btn-prev').on('click', function() {
			if ( $('.slider-pagin-nb .slider-pagin-item.is-active').prev().length ) {
				$('.slider-pagin-nb .slider-pagin-item.is-active').prev().trigger('click')
			} else {
				$('.slider-pagin-nb .slider-pagin-item:last-child').trigger('click')
			}
		})




		// Class animation scroll
		$('.edito-vin').addClass('wbanimate')
		$('.evenements .gla-item').addClass('wbanimate')
		$('.observatoire').addClass('wbanimate')
		$('.quicklinks.links-infos').addClass('wbanimate')
        $('.partner.partenaires').addClass('wbanimate')
        $('.pourquoi-exposer').addClass('wbanimate')
	    $('.pagination').addClass('wbanimate')

//        $('.article-intro').addClass('animate')
//        $('.article-content').addClass('animate')
        $('.article-content .cl-item').addClass('wbanimate')
        $('.article-navigation').addClass('wbanimate')


		//Caroufredsel
		if ( $('.slider-alt .slider__slides').length ) {
			$('.slider-alt .slider__slides').carouFredSel({
				width: '1230px',
				items: 3,
				circular: true,
				infinite: true,
				responsive: true,
				swipe: true,
				auto: {
					play: true,
					timeoutDuration: 14000
				},
	            prev: {
	                   button  : "#prev"
	            },
	            next: {
	                   button  : "#next"
	            },
			});
		}

		if ( $('.partner-gallery .slider-content') ) {
			$('.partner-gallery .slider-content').carouFredSel({
				width: '100%',
				circular: true,
				infinite: true,
				responsive: true,
				auto: {
					play: true,
					timeoutDuration: 0
				},
				items: {
					visible: 9
				},
				scroll: {
					duration: 60000,
					easing: 'linear'
				}
			});
		}

	});

    var headerContent = '<div class="header-content"><a href="#" class="logo logo--small"></a> <i class="ico-date"></i> <h3>Paris Expo<span>Porte de versailles</span></h3></div>'

	$win.on('load', function() {
		if ( $('.observatoire').length ) {
			$('.observatoire .slider-item').each(function(i) {
				$(this).addClass('color' + i)
			})
			
			initHomepageSlider()
		}

		


		var lang = $('html').attr('lang');
		var $exposerLink = $('body.exposer .breadcrumb-nav ul li:nth-child(2) > a');
		var exposerLinkEnglish = 'EXHIBIT';
		var $quicklinksClone = $('body.exposer header.site-banner .quicklinks-navigation ul').clone();
		var has3rdLink = $('body.exposer .breadcrumb-nav li:nth-child(3)').length;

		if (has3rdLink) {
        	$('body.exposer .breadcrumb-nav li:nth-child(3)').html($quicklinksClone);
		} else {
			$('body.exposer .breadcrumb-nav ul li:nth-child(2)').append('<i class="icon icon-short-arrow-right"></i>');
			$('body.exposer .breadcrumb-nav ul').append($quicklinksClone);
		}

        $('body.exposer header.site-banner .links-subheader').clone().appendTo('body.exposer #zone1')

        $exposerLink.attr('href', '/Exposer');

		$wrappedText.wrapInner('<span></span>');

		if (lang == 'en') {
			$exposerLink.find('span').text(exposerLinkEnglish);
		}

		animateElements();

		setTimeout(function() {
			$('.intro-alt').addClass('animate-links')

		}, 300);

        if ( $('.slider-pagin-nb').length ) {
            $('.slider-pagin-nb span').each(function() {
                $(this).text('0' + ($(this).index() + 1) )
            })
        }

       	setInterval(function() {
       		if ( $('.slider-pagin-nb .slider-pagin-item.is-active').next().length ) {
       			$('.slider-pagin-nb .slider-pagin-item.is-active').next().trigger('click')
       		} else {
       			$('.slider-pagin-nb .slider-pagin-item:first-child').trigger('click')
       		}

       	}, 7000)
	   	
	   	


        if ( $('#youmax').length ) {
			
			if ($('html').attr('lang') == 'fr') {
						
            // Youmax Slider
            $('#youmax').youmax({
                apiKey: 'AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk',
                vimeoAccessToken: '',
                clientId: '28499349757-od8saulfhctvu2ao84569p6hls66396c.apps.googleusercontent.com',
                channel: '',
                youtube_playlist_videos: [{
                    name: 'Videos',
                    url: 'https://www.youtube.com/playlist?list=PLuy3B88HHXNlpB7NkVlN6F12mhs73CQam',
                    selected: true
                }],

                loadMode: 'paginate-sides',
                loadButtonSize: 'small',
                hideHeader: true,
                hideNavigation: true,
                hideComments: true,
                maxResults: 3,
                tabStyle: 'wire',
                youmaxBackgroundColor: '#ffffff',
                maxContainerWidth: 1170,
                fourColumnThumbnailWidth: '33.33%',
                fourColumnThumbnailLeftRightMargin: '0',
                videoProtocol: 'https:'
            });
			
			} else {
			 $('#youmax').youmax({
                apiKey: 'AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474',
                vimeoAccessToken: '',
                clientId: '438137961980-vlefbf8sgps4r5fqon9u92m93n0hc1pi.apps.googleusercontent.com',
                channel: '',
                youtube_playlist_videos: [{
                    name: 'Videos',
                    url: 'https://www.youtube.com/playlist?list=PLuy3B88HHXNkP3r5rO186govsS33bPMtX',
                    selected: true
                }],

                loadMode: 'paginate-sides',
                loadButtonSize: 'small',
                hideHeader: true,
                hideNavigation: true,
                hideComments: true,
                maxResults: 3,
                tabStyle: 'wire',
                youmaxBackgroundColor: '#ffffff',
                maxContainerWidth: 1170,
                fourColumnThumbnailWidth: '33.33%',
                fourColumnThumbnailLeftRightMargin: '0',
                videoProtocol: 'https:'
            });
			
			}
			
			
        };
		
		
		
		
		
		



	}).on('scroll', function() {
		scrolledY = $win.scrollTop();
		animate(scrolledY);

		$('.global-wrapper').toggleClass('fixed-header', $win.scrollTop() > 200)
		$('.global-wrapper').toggleClass('fixed-logo', $win.scrollTop() > 300)

		if ( $win.scrollTop() > 300 ) {
			$('header').addClass('fixed')
		}

		if ( $win.scrollTop() <= 0 ) {
			$('header').removeClass('is-stuck')
		}

		if ( $win.scrollTop() <= 300 ) {
			$('header').removeClass('fixed')
		}
	}).on('load scroll', function() {
		$('.socials').toggleClass('socials-fixed', $win.scrollTop() > 300)
		$('.socials--hidden').toggleClass('socials-visible', $win.scrollTop() > $win.outerHeight())


	})

})(jQuery, window, document);
