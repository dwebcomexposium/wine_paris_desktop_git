;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var scrolledY = 0;

	//Animate Sections
	var $animated = $('.animated');

	var winHeight = $win.height();
	var winWidth = $win.width();
	var winScroll = $win.scrollTop();

	function animateElements() {
		winScroll = $win.scrollTop();

		if ( $animated.length === 0 ) {
			return;
		}			
	};

	
	function animate(winST) {
	$('.animate').each(function(){
		var $this = $(this);

		if (winST + ($win.outerHeight() / 1.3) > $this.offset().top) {
			$this.addClass('animated');
		} else if (winST + ($win.outerHeight() / 2) < $this.offset().top) {
			$this.removeClass('animated');
		}		
		});
	}

	$doc.ready(function() {
        $('.la-slider .slider-pagin').clone(true).appendTo('.observatoire')
		$('.pourquoi-exposer .slider-pagin').clone(true).appendTo('.pourquoi-exposer')


		$('.btn-down').on('click', function(e) {
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('.zone').next() ).offset().top
			})
		})

		//Countdown
		if ( $('#countdown').length ) {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>jour%!d</span></li>'
						    + '<li><span>%H</span> <span>heure%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
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
		$('.edito-vin').addClass('animate')
		$('.evenements .gla-item').addClass('animate')
		$('.observatoire').addClass('animate')
		$('.quicklinks.links-infos').addClass('animate')
        $('.partner.partenaires').addClass('animate')
        $('.pourquoi-exposer').addClass('animate')
		
        $('.list-articles .grid-la-list .gla-item').addClass('animate')
        $('.pagination').addClass('animate')
        
        $('.article-intro').addClass('animate')
        $('.article-content').addClass('animate')
        $('.article-content .cl-item').addClass('animate')
        $('.article-navigation').addClass('animate')


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
					timeoutDuration: 7000
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
        $('body.exposer header.site-banner .quicklinks-navigation ul').clone().appendTo('body.exposer .breadcrumb-nav li:last-child')
        $('body.exposer header.site-banner .links-subheader').clone().appendTo('body.exposer #zone1')


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
                    
            // Youmax Slider
            $('#youmax').youmax({
                apiKey: 'AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474',
                vimeoAccessToken: '',
                clientId: '438137961980-vlefbf8sgps4r5fqon9u92m93n0hc1pi.apps.googleusercontent.com',
                channel: '',
                youtube_playlist_videos: [{
                    name: 'Videos',
                    url: 'https://www.youtube.com/playlist?list=PLXejX05KCwBGpkz7nYFWQT0_VS7MLuZUM',
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
		$('.socials').toggleClass('socials-fixed', $win.scrollTop() > 301)
		$('.socials--hidden').toggleClass('socials-visible', $win.scrollTop() > $win.outerHeight())


	})

})(jQuery, window, document);
