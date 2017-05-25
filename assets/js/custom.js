function initialize() {

	//Hide scrollbar
	var parent = document.getElementById('barba-wrapper');
	var child = document.getElementById('barba-container');
	child.style.right = child.clientWidth - child.offsetWidth + "px";

	//Set min-height for categories
	if ($(window).width() > 767) {
		var footer_height = $('#main-footer').height() + $('.categories').outerHeight();
		$('.ind-category').css('min-height', '100vh').css('min-height', '-=' + footer_height);
	}

	//Scroll down animation for hero
	$(".next-cat").click(function(){
		event.preventDefault();
	    $('.barba-container').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
    });

	//Menu
	if ($('body').hasClass( 'cbp-spmenu-push-toleft' )) {
		$('body').toggleClass( 'cbp-spmenu-push-toleft' );
	}

	//Show social feeds in menu
	$("#showRightSocial").click(function(){
		if ($('#cbp-spmenu-s2').hasClass( 'cbp-spmenu-open' ) && $(this).hasClass('active')) {
			$('#cbp-spmenu-s2').toggleClass( 'cbp-spmenu-open' );
			$('body').toggleClass( 'cbp-spmenu-push-toleft' );
			$(this).toggleClass('active');
		}
		else if ($('#cbp-spmenu-s2').hasClass( 'cbp-spmenu-open' )) {
			$('#cbp-spmenu-s2 nav').hide();
			$("#showRightPush").toggleClass('open active');
			$('#cbp-spmenu-s2 .social-feed').fadeIn();
			$(this).toggleClass('active');
		}
		else {
			$(this).toggleClass('active');
			//$("#showRightPush").toggleClass('open');
			$('body').toggleClass( 'cbp-spmenu-push-toleft' );
			$('#cbp-spmenu-s2').toggleClass( 'cbp-spmenu-open' );
			$('#cbp-spmenu-s2 .social-feed').fadeIn();
			$('#cbp-spmenu-s2 nav').hide();
		}
	});

	//Show menu
	$("#showRightPush").click(function(){
		$("#showRightSocial").removeClass('active');
		if ($('#cbp-spmenu-s2').hasClass( 'cbp-spmenu-open' ) && $(this).hasClass('active')) {
			$('#cbp-spmenu-s2').toggleClass( 'cbp-spmenu-open' );
			$('body').toggleClass( 'cbp-spmenu-push-toleft' );
			$(this).toggleClass('active open');
		}
		else if ($('#cbp-spmenu-s2').hasClass( 'cbp-spmenu-open' )) {
			$('#cbp-spmenu-s2 .social-feed').hide();
			$('#cbp-spmenu-s2 nav').fadeIn();
			$(this).toggleClass('active open');
		}
		else {
			$(this).toggleClass('active open');
			$('body').toggleClass( 'cbp-spmenu-push-toleft' );
			$('#cbp-spmenu-s2').toggleClass( 'cbp-spmenu-open' );
			$('#cbp-spmenu-s2 .social-feed').hide();
			$('#cbp-spmenu-s2 nav').fadeIn();
		}
	});

	$('.mega-menu-link').click(function(){
		$('#cbp-spmenu-s2').removeClass( 'cbp-spmenu-open' );
		$("#showRightPush").removeClass('active open');
		$('body').removeClass( 'cbp-spmenu-push-toleft' );
		$(this).parent().removeClass('exp-menu-active');
		$(this).parent().hide();
		$(this).parent().prev().find('i').removeClass('fa-minus');
		$(this).parent().prev().find('i').addClass('fa-plus');
		$('.exp-menu').removeClass('exp-link-active');
	});
	$('.menu-link').click(function(){
		$('#cbp-spmenu-s2').removeClass( 'cbp-spmenu-open' );
		$("#showRightPush").removeClass('active open');
		$('body').removeClass( 'cbp-spmenu-push-toleft' );
	});

	//Menu expand 
	$('.exp-menu').click(function(){
		if ($(this).siblings().hasClass('exp-menu-active')) {
			if ($(this).next().hasClass('exp-menu-active')) {
				$(this).toggleClass('exp-link-active');
				$(this).next().toggleClass('exp-menu-active');
				$(this).find('i').toggleClass('fa-plus fa-minus');
				$(this).next().slideToggle();
			}
			else {
				$(this).siblings('.exp-menu-active').slideToggle();
				$(this).siblings('.exp-link-active').find('i').toggleClass('fa-plus fa-minus');
				$(this).siblings().removeClass('exp-menu-active');
				$(this).siblings().removeClass('exp-link-active');
				$(this).toggleClass('exp-link-active');
				$(this).next().slideToggle();
				$(this).next().toggleClass('exp-menu-active');
				$(this).find('i').toggleClass('fa-plus fa-minus');
			}
		}
		else {
			$(this).toggleClass('exp-link-active');
			$(this).next().toggleClass('exp-menu-active');
			$(this).next().slideToggle();
			$(this).find('i').toggleClass('fa-plus fa-minus');
		}
	});

	//Scroll on mousewheel
	scrollArrowShow();

    $(".selector").mousewheel(function(event, delta) {
    	var distanceToScroll = $(".intro-thumb")[0].scrollWidth;
        $('.selector').animate({
	        	scrollLeft: "-=" + (delta * distanceToScroll) + "px"
	    	}, function(){
	        	scrollArrowShow();
	    });
      	event.preventDefault();
   });

	//Football section selection
	$('.football-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.football-agent').hasClass('active-category')) {
	  		$('.football-info > div').hide();
			$('#football-agent-info').fadeIn();
		}

		if ($('.football-cfl').hasClass('active-category')) {
			$('.football-info > div').hide();
			$('#football-cfl-info').fadeIn();
		}

		if ($('.football-nfl').hasClass('active-category')) {
			$('.football-info > div').hide();
			$('#football-nfl-info').fadeIn();
		}

		if ($('.football-services').hasClass('active-category')) {
			$('.football-info > div').hide();
			$('#football-services-info').fadeIn();
		}
	});

  	$('a[href$=football-agent-info]').click(function() {
	  	$('.football-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.football-agent').addClass('active-category');
	    $('#football-agent-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#football-agent-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

  	if ( location.hash != 0 && location.hash == '#football-agent-info' ){
    	$('a[href$=football-agent-info]').trigger('click');
  	}

	$('a[href$=football-nfl-info]').click(function() {
	  	$('.football-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.football-nfl').addClass('active-category');
	    $('#football-nfl-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#football-nfl-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#football-nfl-info' ){
	     $('a[href$=football-nfl-info]').trigger('click');
	}

	$('a[href$=football-cfl-info]').click(function() {
	  	$('.football-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.football-cfl').addClass('active-category');
	    $('#football-cfl-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#football-cfl-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#football-cfl-info' ){
	    $('a[href$=football-cfl-info]').trigger('click');
	}

	$('a[href$=football-services-info]').click(function() {
	  	$('.football-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.football-services').addClass('active-category');
	    $('#football-services-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#football-services-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#football-services-info' ){
	    $('a[href$=football-services-info]').trigger('click');
	}

	//Basketball section selection
	$('.basketball-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.basketball-agent').hasClass('active-category')) {
	  		$('.basketball-info > div').hide();
			$('#basketball-agent-info').fadeIn();
		}
		if ($('.basketball-services').hasClass('active-category')) {
			$('.basketball-info > div').hide();
			$('#basketball-services-info').fadeIn();
		}
	});

  	$('a[href$=basketball-agent-info]').click(function() {
	  	$('.basketball-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.basketball-agent').addClass('active-category');
	    $('#basketball-agent-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#basketball-agent-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

  	if ( location.hash != 0 && location.hash == '#basketball-agent-info' ){
    	$('a[href$=basketball-agent-info]').trigger('click');
  	}

	$('a[href$=basketball-services-info]').click(function() {
	  	$('.basketball-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.basketball-services').addClass('active-category');
	    $('#basketball-services-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#basketball-services-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#basketball-services-info' ){
	     $('a[href$=basketball-services-info]').trigger('click');
	}

	//Hockey section selection
	$('.hockey-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.hockey-agent').hasClass('active-category')) {
	  		$('.hockey-info > div').hide();
			$('#hockey-agent-info').fadeIn();
		}

		if ($('.hockey-clients').hasClass('active-category')) {
			$('.hockey-info > div').hide();
			$('#hockey-clients-info').fadeIn();
		}

		if ($('.hockey-services').hasClass('active-category')) {
			$('.hockey-info > div').hide();
			$('#hockey-services-info').fadeIn();
		}
	});

  	$('a[href$=hockey-agent-info]').click(function() {
	  	$('.hockey-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.hockey-agent').addClass('active-category');
	    $('#hockey-agent-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#hockey-agent-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

  	if ( location.hash != 0 && location.hash == '#hockey-agent-info' ){
    	$('a[href$=hockey-agent-info]').trigger('click');
  	}

	$('a[href$=hockey-clients-info]').click(function() {
	  	$('.hockey-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.hockey-clients').addClass('active-category');
	    $('#hockey-clients-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#hockey-clients-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#hockey-clients-info' ){
	     $('a[href$=hockey-clients-info]').trigger('click');
	}

	$('a[href$=hockey-services-info]').click(function() {
	  	$('.hockey-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.hockey-services').addClass('active-category');
	    $('#hockey-services-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#hockey-services-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#hockey-services-info' ){
	    $('a[href$=hockey-services-info]').trigger('click');
	}

	//Motorsports section selection
	$('.motorsports-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.motorsports-clients').hasClass('active-category')) {
	  		$('.motorsports-info > div').hide();
			$('#motorsports-clients-info').fadeIn();
		}
		if ($('.motorsports-services').hasClass('active-category')) {
			$('.motorsports-info > div').hide();
			$('#motorsports-services-info').fadeIn();
		}
	});

  	$('a[href$=motorsports-clients-info]').click(function() {
	  	$('.motorsports-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.motorsports-clients').addClass('active-category');
	    $('#motorsports-clients-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#motorsports-clients-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

  	if ( location.hash != 0 && location.hash == '#motorsports-clients-info' ){
    	$('a[href$=motorsports-clients-info]').trigger('click');
  	}

	$('a[href$=motorsports-services-info]').click(function() {
	  	$('.motorsports-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.motorsports-services').addClass('active-category');
	    $('#motorsports-services-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#motorsports-services-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#motorsports-services-info' ){
	     $('a[href$=motorsports-services-info]').trigger('click');
	}

	//Coaches section selection
	$('.coaches-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.coaches-clients').hasClass('active-category')) {
	  		$('.coaches-info > div').hide();
			$('#coaches-clients-info').fadeIn();
		}
		if ($('.coaches-services').hasClass('active-category')) {
			$('.coaches-info > div').hide();
			$('#coaches-services-info').fadeIn();
		}
	});

  	$('a[href$=coaches-clients-info]').click(function() {
	  	$('.coaches-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.coaches-clients').addClass('active-category');
	    $('#coaches-clients-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#coaches-clients-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

  	if ( location.hash != 0 && location.hash == '#coaches-clients-info' ){
    	$('a[href$=coaches-clients-info]').trigger('click');
  	}

	$('a[href$=coaches-services-info]').click(function() {
	  	$('.coaches-info > div').hide();
	  	$('.active-category').removeClass('active-category');
	  	$('.coaches-services').addClass('active-category');
	    $('#coaches-services-info').fadeIn();
	    $('.barba-container').animate({
	        scrollTop: $("#coaches-services-info").offset().top - $('.categories').outerHeight()
	    }, 1000);
	});

	if ( location.hash != 0 && location.hash == '#coaches-services-info' ){
	     $('a[href$=coaches-services-info]').trigger('click');
	}

	//Partners section selection
	$('.partners-category div').click(function() {
		$('.active-category').removeClass('active-category');
	  	$(this).addClass('active-category');

	  	if ($('.partners-accessories').hasClass('active-category')) {
	  		$('.partners-info > div').hide();
			$('#partners-accessories-info').fadeIn();
		}
		if ($('.partners-automotive').hasClass('active-category')) {
			$('.partners-info > div').hide();
			$('#partners-automotive-info').fadeIn();
		}
		if ($('.partners-equipment').hasClass('active-category')) {
	  		$('.partners-info > div').hide();
			$('#partners-equipment-info').fadeIn();
		}
		if ($('.partners-fashion').hasClass('active-category')) {
			$('.partners-info > div').hide();
			$('#partners-fashion-info').fadeIn();
		}
		if ($('.partners-food').hasClass('active-category')) {
	  		$('.partners-info > div').hide();
			$('#partners-food-info').fadeIn();
		}
		if ($('.partners-national').hasClass('active-category')) {
			$('.partners-info > div').hide();
			$('#partners-national-info').fadeIn();
		}
		if ($('.partners-trading').hasClass('active-category')) {
	  		$('.partners-info > div').hide();
			$('#partners-trading-info').fadeIn();
		}
	});

	//Twitter
	(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){module.exports=factory();}else{factory();}}(this,function(){var domNode='';var maxTweets=20;var parseLinks=true;var queue=[];var inProgress=false;var printTime=true;var printUser=true;var formatterFunction=null;var supportsClassName=true;var showRts=true;var customCallbackFunction=null;var showInteractionLinks=true;var showImages=false;var targetBlank=true;var lang='en';var permalinks=true;var dataOnly=false;var script=null;var scriptAdded=false;function handleTweets(tweets){if(customCallbackFunction===null){var x=tweets.length;var n=0;var element=document.getElementById(domNode);var html='<ul>';while(n<x){html+='<li>'+tweets[n]+'</li>';n++;}
	html+='</ul>';element.innerHTML=html;}else{customCallbackFunction(tweets);}}
	function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s;}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,'');}
	function targetLinksToNewWindow(el){var links=el.getElementsByTagName('a');for(var i=links.length-1;i>=0;i--){links[i].setAttribute('target','_blank');}}
	function getElementsByClassName(node,classname){var a=[];var regex=new RegExp('(^| )'+classname+'( |$)');var elems=node.getElementsByTagName('*');for(var i=0,j=elems.length;i<j;i++){if(regex.test(elems[i].className)){a.push(elems[i]);}}
	return a;}
	function extractImageUrl(image_data){if(image_data!==undefined&&image_data.innerHTML.indexOf('data-srcset')>=0){var data_src=image_data.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(data_src).split('"')[1];}}
	var twitterFetcher={fetch:function(config){if(config.maxTweets===undefined){config.maxTweets=20;}
	if(config.enableLinks===undefined){config.enableLinks=true;}
	if(config.showUser===undefined){config.showUser=true;}
	if(config.showTime===undefined){config.showTime=true;}
	if(config.dateFunction===undefined){config.dateFunction='default';}
	if(config.showRetweet===undefined){config.showRetweet=true;}
	if(config.customCallback===undefined){config.customCallback=null;}
	if(config.showInteraction===undefined){config.showInteraction=true;}
	if(config.showImages===undefined){config.showImages=false;}
	if(config.linksInNewWindow===undefined){config.linksInNewWindow=true;}
	if(config.showPermalinks===undefined){config.showPermalinks=true;}
	if(config.dataOnly===undefined){config.dataOnly=false;}
	if(inProgress){queue.push(config);}else{inProgress=true;domNode=config.domId;maxTweets=config.maxTweets;parseLinks=config.enableLinks;printUser=config.showUser;printTime=config.showTime;showRts=config.showRetweet;formatterFunction=config.dateFunction;customCallbackFunction=config.customCallback;showInteractionLinks=config.showInteraction;showImages=config.showImages;targetBlank=config.linksInNewWindow;permalinks=config.showPermalinks;dataOnly=config.dataOnly;var head=document.getElementsByTagName('head')[0];if(script!==null){head.removeChild(script);}
	script=document.createElement('script');script.type='text/javascript';if(config.list!==undefined){script.src='https://syndication.twitter.com/timeline/list?'+'callback=__twttrf.callback&dnt=false&list_slug='+
	config.list.listSlug+'&screen_name='+config.list.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.profile!==undefined){script.src='https://syndication.twitter.com/timeline/profile?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.profile.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.likes!==undefined){script.src='https://syndication.twitter.com/timeline/likes?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.likes.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else{script.src='https://cdn.syndication.twimg.com/widgets/timelines/'+
	config.id+'?&lang='+(config.lang||lang)+'&callback=__twttrf.callback&'+'suppress_response_codes=true&rnd='+Math.random();}
	head.appendChild(script);}},callback:function(data){if(data===undefined||data.body===undefined){inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}
	return;}
	data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,'');if(!showImages){data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,'');}
	if(!printUser){data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,'');}
	var div=document.createElement('div');div.innerHTML=data.body;if(typeof(div.getElementsByClassName)==='undefined'){supportsClassName=false;}
	function swapDataSrc(element){var avatarImg=element.getElementsByTagName('img')[0];avatarImg.src=avatarImg.getAttribute('data-src-2x');return element;}
	var tweets=[];var authors=[];var times=[];var images=[];var rts=[];var tids=[];var permalinksURL=[];var x=0;if(supportsClassName){var tmp=div.getElementsByClassName('timeline-Tweet');while(x<tmp.length){if(tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]));}
	times.push(tmp[x].getElementsByClassName('dt-updated')[0]);permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);if(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]!==undefined){images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}else{var tmp=getElementsByClassName(div,'timeline-Tweet');while(x<tmp.length){if(getElementsByClassName(tmp[x],'timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(getElementsByClassName(tmp[x],'timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(getElementsByClassName(tmp[x],'timeline-Tweet-author')[0]));}
	times.push(getElementsByClassName(tmp[x],'dt-updated')[0]);permalinksURL.push(getElementsByClassName(tmp[x],'timeline-Tweet-timestamp')[0]);if(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]!==undefined){images.push(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}
	if(tweets.length>maxTweets){tweets.splice(maxTweets,(tweets.length-maxTweets));authors.splice(maxTweets,(authors.length-maxTweets));times.splice(maxTweets,(times.length-maxTweets));rts.splice(maxTweets,(rts.length-maxTweets));images.splice(maxTweets,(images.length-maxTweets));permalinksURL.splice(maxTweets,(permalinksURL.length-maxTweets));}
	var arrayTweets=[];var x=tweets.length;var n=0;if(dataOnly){while(n<x){arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:'Unknown Author',time:times[n].textContent,timestamp:times[n].getAttribute('datetime').replace('+0000','Z').replace(/([\+\-])(\d\d)(\d\d)/,'$1$2:$3'),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:(permalinksURL[n]===undefined)?'':permalinksURL[n].href});n++;}}else{while(n<x){if(typeof(formatterFunction)!=='string'){var datetimeText=times[n].getAttribute('datetime');var newDate=new Date(times[n].getAttribute('datetime').replace(/-/g,'/').replace('T',' ').split('+')[0]);var dateString=formatterFunction(newDate,datetimeText);times[n].setAttribute('aria-label',dateString);if(tweets[n].textContent){if(supportsClassName){times[n].textContent=dateString;}else{var h=document.createElement('p');var t=document.createTextNode(dateString);h.appendChild(t);h.setAttribute('aria-label',dateString);times[n]=h;}}else{times[n].textContent=dateString;}}
	var op='';if(parseLinks){if(targetBlank){targetLinksToNewWindow(tweets[n]);if(printUser){targetLinksToNewWindow(authors[n]);}}
	if(printUser){op+='<div class="user">'+strip(authors[n].innerHTML)+'</div>';}
	op+='<p class="tweet">'+strip(tweets[n].innerHTML)+'</p>';if(printTime){if(permalinks){op+='<p class="timePosted"><a href="'+permalinksURL[n]+'">'+times[n].getAttribute('aria-label')+'</a></p>';}else{op+='<p class="timePosted">'+
	times[n].getAttribute('aria-label')+'</p>';}}}else{if(tweets[n].textContent){if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}else{if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}}
	if(showInteractionLinks){op+='<p class="interact"><a href="https://twitter.com/intent/'+'tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+
	(targetBlank?' target="_blank">':'>')+'Reply</a><a href="https://twitter.com/intent/retweet?'+'tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+
	(targetBlank?' target="_blank">':'>')+'Retweet</a>'+'<a href="https://twitter.com/intent/favorite?tweet_id='+
	tids[n]+'" class="twitter_fav_icon"'+
	(targetBlank?' target="_blank">':'>')+'Favorite</a></p>';}
	if(showImages&&images[n]!==undefined&&extractImageUrl(images[n])!==undefined){op+='<div class="media">'+'<img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" />'+'</div>';}
	if(showImages){arrayTweets.push(op);}else if(!showImages&&tweets[n].textContent.length){arrayTweets.push(op);}
	n++;}}
	handleTweets(arrayTweets);inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}}};window.__twttrf=twitterFetcher;window.twitterFetcher=twitterFetcher;return twitterFetcher;}));

	var configProfile = {
	  "profile": {"screenName": 'isasports'},
	  "domId": 'twitter-feed',
	  "maxTweets": 2,
	  "enableLinks": true, 
	  "showUser": true,
	  "showTime": true,
	  "showImages": false,
	  "showInteraction": false,
	  "lang": 'en'
	};
	
	twitterFetcher.fetch(configProfile);

	var feed = new Instafeed({
		target: 'instafeed',
        get: 'user',
    	userId: '1418611479',
    	accessToken: '1418611479.1677ed0.698a8429f3b543b89d3a27ef661e076d',
    	template: '<div><a href="{{link}}" target="_blank"><img src="{{image}}" /></a><p>{{caption}}</p></div>',
    	limit: 2
    });
    feed.run();

 //    if (document.getElementById('twitter-feed-contact')) {
 //    	var configProfile = {
	// 	  "profile": {"screenName": 'isasports'},
	// 	  "domId": 'twitter-feed-contact',
	// 	  "maxTweets": 10,
	// 	  "enableLinks": true, 
	// 	  "showUser": true,
	// 	  "showTime": true,
	// 	  "showImages": false,
	// 	  "showInteraction": false,
	// 	  "lang": 'en'
	// 	};
	// 	twitterFetcher.fetch(configProfile);
	// }

	//Spash screen

	// Check distance to top and display back-to-top.
	$( '.barba-container' ).scroll( function() {
		if ( $( this ).scrollTop() > 100 ) {
			$( '.back-to-top' ).addClass( 'show-back-to-top' );
		} else {
			$( '.back-to-top' ).removeClass( 'show-back-to-top' );
		}
	});

	// Click event to scroll to top.
	$( '.back-to-top' ).click( function() {
		$( '.barba-container' ).animate( { scrollTop : 0 }, 800 );
		return false;
	});
}

if ($(window).width() > 767) {
	Barba.Dispatcher.on('transitionCompleted', initialize);
}
else {
	$(document).ready(function(){
		initialize();
	});
}

$(document).ready(function(){
	$( "#splash" ).delay( 1500 ).toggle("slide", {direction: "right"}, 1000); 
});

function scrollArrowShow() {
	if (typeof ($(".intro-thumb")[0]) !== 'undefined') {
		var totalScroll = (($(".intro-thumb")[0].scrollWidth) * 8 );
	    var maxScroll = (totalScroll - $('.selector').scrollLeft()) - $('.selector').width();
	    if ( 0 == $('.selector').scrollLeft()) {
	        $('#arrowL').css({visibility: 'hidden'});
	    }
	    else {
	    	$('#arrowL').css({visibility: 'visible'});
	    }
	    if (maxScroll <= 3) {

	        $('#arrowR').css({visibility: 'hidden'});
	    }else {
	        $('#arrowR').css({visibility: 'visible'});
	    }
    }
}

function scrollThumb(direction) {
	if (typeof ($(".intro-thumb")[0]) !== 'undefined') {
		var distanceToScroll = (($(".intro-thumb")[0].scrollWidth ) + 1);
		if (direction=='Go_L') {
	    	$('.selector').animate({
	        	scrollLeft: "-=" + distanceToScroll + "px"
	    	}, function(){
	        	scrollArrowShow();
	    	});
		}else if (direction=='Go_R') {
		   	$('.selector').animate({
		       	scrollLeft: "+=" + distanceToScroll + "px"
		    }, function(){
		        scrollArrowShow();
		    });
		}
	}
}