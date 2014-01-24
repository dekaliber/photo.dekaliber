$(document).ready(function() {
	/*
	var bar_canvas = document.getElementById("bar");
	var bar_context = bar_canvas.getContext("2d");
	if (bar_canvas.getContext) {
		for (var x = 0; x < 618; x += 3) {
			bar_context.moveTo(x, 0);
			bar_context.lineTo(x-18, 18);
		}
		bar_context.strokeStyle = "#696969";
		bar_context.stroke();
	}
	$("#bar").hide();
	*/

	function drawImgBgCanvas() {
		/*
		var imgbg_canvas = document.getElementById("imgbg");
		var imgbg_context = imgbg_canvas.getContext("2d");
		if (imgbg_canvas.getContext) {
			for (var x = 0; x < 1000; x += 3) {
				imgbg_context.moveTo(x, 0);
				imgbg_context.lineTo(x-400, 400);
			}
			imgbg_context.strokeStyle = "#696969";
			imgbg_context.stroke();
		}
		*/
	}
	
	function drawAboutCanvas() {
		var about_canvas = document.getElementById("about_box");
		var about_context = about_canvas.getContext("2d");
		if (about_canvas.getContext) {
			for (var x = 0; x < 150; x += 3) {
				about_context.moveTo(x, 0);
				about_context.lineTo(x-95, 95);
			}
			about_context.strokeStyle = "#696969";
			about_context.stroke();
		}
	}


	//hide header and menu items at first
	$('header').fadeTo(0,0);
	$('#image').fadeTo(0,0);
	$('#nextimage').fadeTo(0,0);
	$('#portfolio_button').fadeTo(0,0);
	$('#about_button').fadeTo(0,0);
	$('#contact_button').fadeTo(0,0);

	//fade in header and buttons
	$('header').fadeTo(400,1, function() {
		//$('#image').load(function() { 
			$('#preload').animate({height: "402px"}, 400, function() {
				//fade image and menu items in after finishing
				$('#maincontent').css("background-image:","url('image_bg.png')");
				$('#image').fadeTo(500,1);
				$('#portfolio_button').fadeTo(400,1);
				$('#about_button').delay(320).fadeTo(400,1);
				$('#contact_button').delay(100).fadeTo(400,1);
			});
		//}).attr('src', 'main_image.jpg');
	});

/*
	$('#primary_menu a').click(function () {
		console.log($(this).attr('id'));
		//this.blur();
		return false;
	});	s
*/			

	//hide all of the black bars and the mouseovers
	$('#portfolio_bar').fadeTo(0,0);
	$('#about_bar').fadeTo(0,0);
	$('#contact_bar').fadeTo(0,0);
	$('#portfolio_mouseover').fadeTo(0,0);						
	$('#about_mouseover').fadeTo(0,0);						
	$('#contact_mouseover').fadeTo(0,0);

	//portfolio button event handlers
	$('#portfolio_button').hover(function() {
		if ($('#portfolio_menu').is(":hidden") == true) {
			animatePrimaryHoverOn($(this).attr('id'));
		}
	}, function() {
		$('#portfolio_button span').removeClass("light");		// mouseover for button link
		if ($('#portfolio_menu').is(":hidden") == true) {
			animatePrimaryHoverOut($(this).attr('id'));
		}
	});

	$('#portfolio_button').click(function(event) {
		if ($('#aboutcontent').is(":visible") == true) {
			hideAboutContent();
		}
		if ($('#portfolio_menu').is(":hidden") == true) {
			//show the menu and black bar
			showPortfolioMenu();
			$('#about_button span').removeClass("light");
		}
		event.preventDefault();
	});

	//about button event handlers
	$('#about_button').hover(function() {
		if ($('#aboutcontent').is(":hidden") == true) {			
			animatePrimaryHoverOn($(this).attr('id'));
		}
	}, function() {
		if ($('#aboutcontent').is(":hidden") == true) {
			$('#about_button span').removeClass("light");		// mouseover for button link
		}
		animatePrimaryHoverOut($(this).attr('id'));
	});

	$('#about_button').click(function(event) {
		//show the menu and black bar
		if ($('#portfolio_menu').is(":visible") == true) {
			hidePortfolioMenu();
		}
		if ($('#aboutcontent').is(":hidden") == true) {
			showAboutContent();
			$('#portfolio_button span').removeClass("light");
		}
		event.preventDefault();
	});

	//contact button event handlers
	$('#contact_button').hover(function() {	
		animatePrimaryHoverOn($(this).attr('id'));
	}, function() {
		$('#contact_button span').removeClass("light");
		animatePrimaryHoverOut($(this).attr('id'));
	});

	function animatePrimaryHoverOn(buttonid) {
		var id = buttonid.split("_");
		var moid = id[0] + "_mouseover";					// set the id of link for the id of the mouseover
		var barid = id[0] + "_bar";							// set the id of link for the id of the bar
		$('#' + id[0] + '_button span').addClass("light"); 	// mouseover for button link
		$('#' + barid).fadeTo(0,1);							// fade in the bar
		$('#' + moid).css("margin-top", "5px");				// set the mouseover text below its default position
		$('#' + moid).animate({								// move the mouseover text up
			"marginTop":"-3px", "opacity": ".5"
		}, 140, function() {								// and then slightly back down
			$('#' + moid).animate({
			"marginTop":"0", "opacity": "1"
			}, 140);	
		});
	}

	function animatePrimaryHoverOut(buttonid) {
		var id = buttonid.split("_");
		var moid = id[0] + "_mouseover";					// set the id of link for the id of the mouseover
		var barid = id[0] + "_bar";							// set the id of link for the id of the bar
		$('#' + barid).fadeTo(80,0);						// fade out the bar
		$('#' + moid).animate({
			"marginTop":"5px", "opacity": "0"				// move the mouseover text down and fade
			}, 140, function() {
				$('#' + moid).fadeTo(0,0);
				$('#' + moid).css("margin-top", "0px");		// reset this to the default location
		});
	}

	//animations for the portfolio menu
	$('#portfolio_menu_mousover li').fadeTo(0,0);

	$('#portfolio_menu li a').hover(portfolioMenuHoverOn, portfolioMenuHoverOut);
	$('#portfolio_menu li a').click(portfolioMenuHoverClick);

	function portfolioMenuHoverOn() {
		var id = $(this).attr('id');
		var moid = id + "_mo";
		$('#' + moid).css("margin-left", "-10px");
		$('#' + moid).animate({				
			"marginLeft":"0px", "opacity": "1"
		}, 140);
	}

	function portfolioMenuHoverOut() {
		var id = $(this).attr('id');
		var moid = id + "_mo";
		$('#' + moid).animate({							
			"marginLeft":"10px", "opacity": "0"
		}, 140);
	}

	function portfolioMenuHoverClick() {
		var id = $(this).attr('id');
		if (id != currGalleryId) {
			var moid = id + "_mo";
			$('#' + moid).hide(40).show(40).hide(40).show(40).delay(170).fadeTo(180,0);
			currGalleryId = id;
			loadGallery(id);
		}
	}

	var imgfolder = "photos/";

	var gl_faces = [
				["faces_alina.jpg", 0],
				["faces_matt.jpg", 0],
				["faces_miki.jpg" , 0],
				["faces_shawn.jpg", 70],
				["faces_cafe.jpg", 0],
				["faces_hillary.jpg", 0],
				["faces_somewhere.jpg", 0],
				["faces_icemen.jpg", 0],
				["faces_kevin.jpg", 0],
				["faces_olga.jpg", 100],
				["faces_mfbt.jpg", 0],
				["faces_fading.jpg", 0],
				["faces_stew.jpg", 0],
				["faces_stranger.jpg", 234]
				];

	var gl_lightplay = [
				["light_sunset1.jpg", 0],
				["light_sunset2.jpg", 0],
				["light_sunset3.jpg", 0],
				["light_sunset4.jpg", 0],
				["light_rfaw1.jpg", 0],
				["light_rfaw2.jpg", 0],
				["light_rfaw3.jpg", 0],
				["light_rfaw4.jpg", 0]
				];

	var gl_ditl = [
				["day_rise.jpg", 0],
				["day_hygiene.jpg", 0],
				["day_options.jpg", 0],
				["day_dinner.jpg", 0],
				["day_laundry.jpg", 0],
				["day_teevee.jpg", 0]
				];

	var gl_places = [
				["places_souvenir.jpg", 0],
				["places_river.jpg", 0],
				["places_slicks.jpg", 0],
				["places_lantern.jpg", 0],
				["places_prospectpark.jpg", 0],
				["places_convcent.jpg", 0],
				["places_gatea8.jpg", 0],
				["places_ftwf.jpg", 0],
				["places_forest.jpg", 134],
				["places_sunset.jpg", 0],
				["places_walls.jpg", 0],
				["places_touched.jpg", 0]
				];

	var currGallery = gl_faces;
	var currGalleryId = "";
	var galleryTitle = "faces and figures";
	var currimage = 0;
	var navLoaded = false;

	$('#prev').bind('click', loadPrevImage);
	$('#next').bind('click', loadNextImage);

	function loadGallery(id) {
		currimage = 0;
		switch(id) {
			case "gl_faces": 
				currGallery = gl_faces;
				galleryTitle = "faces and figures";
				break;
			case "gl_lightplay": 
				currGallery = gl_lightplay;
				galleryTitle = "lightplay";
				break;
			case "gl_ditl": 
				currGallery = gl_ditl;
				galleryTitle = "a day in the life";
				break;
			case "gl_places": 
				currGallery = gl_places;
				galleryTitle = "places";
				break;
		}

		//preload the images
		var imgs = new Array();
		for (var i = 0; i < currGallery.length; i++) {
			imgs[i] = new Image();
			imgs[i].src = imgfolder + currGallery[i][0];
		}
		//$('#image').fadeTo(280,0, function() {
			//var xOffset = currGallery[currimage][1];
			//$('#image').attr('src',imgfolder + currGallery[currimage][0]).css("margin-left", xOffset + 1 + "px").fadeTo(280,1); // apply horiz offset
			loadImage();
			
			if (!navLoaded) {
				$('#gallery_title').text(galleryTitle);
				$('#current_image').text(currimage+1);
				$('#total_images').text("/" + currGallery.length);
				$('#image_nav').find('*').fadeTo(0,0);		// hide everything in these divs first
				$('#gallery_info').find('*').fadeTo(0,0);
				$('#image_nav').show();
				$('#gallery_info').show();
				$('#image_nav_bar').fadeTo(400,1);
				$('#next').delay(120).fadeTo(400,1);
				$('#gallery_title').delay(120).fadeTo(400,1);
				$('#gallery_info_bar').delay(200).fadeTo(400,1);
				$('#prev').delay(260).fadeTo(400,1);
				$('#current_image').delay(400).fadeTo(400,1);
				$('#total_images').delay(400).fadeTo(400,1);
				navLoaded = true;
			} else {
				//fade out the stuff that changes
				$('#gallery_title').fadeTo(200,0);
				$('#current_image').fadeTo(200,0);
				$('#gallery_info_bar').fadeTo(200,0);
				$('#total_images').fadeTo(200,0, function() {
					$('#gallery_title').text(galleryTitle);
					$('#current_image').text(currimage+1);
					$('#total_images').text("/" + currGallery.length);
					//fade back in
					$('#gallery_title').fadeTo(200,1);
					$('#gallery_info_bar').delay(100).fadeTo(200,1);
					$('#current_image').delay(400).fadeTo(200,1);
					$('#total_images').delay(260).fadeTo(200,1);
				});
			}
		//});
	}

	function loadPrevImage() {
		if (currimage > 0) {
			currimage = currimage - 1;
			$('#prev').fadeTo(0,0).delay(40).fadeTo(0,1).delay(40).fadeTo(0,0).delay(40).fadeTo(0,1);
			loadImage();
			$('#current_image').text(currimage+1);
			/*
			$('#image').fadeTo(0,1);
			$('#image').fadeTo(200,0, function() {
				$('#image').attr('src',imgfolder + currGallery[currimage][0]).css("margin-left", xOffset).fadeTo(200,1);
				$('#current_image').text(currimage+1);
			});*/
		}
	}

	function loadNextImage() {
		if (currimage < currGallery.length-1) {
			currimage = currimage + 1;
			$('#next').fadeTo(0,0).delay(40).fadeTo(0,1).delay(40).fadeTo(0,0).delay(40).fadeTo(0,1);
			loadImage();
			$('#current_image').text(currimage+1);
			/*$('#image').fadeTo(0,1);
			$('#image').fadeTo(200,0, function() {
				$('#image').attr('src',imgfolder + currGallery[currimage][0]).css("margin-left", xOffset).fadeTo(200,1);
				$('#current_image').text(currimage+1);
			});*/
		}
	}

	function loadImage() {
		var xOffset = currGallery[currimage][1];
		var oldImg = $('#maincontent img');
		var img = new Image();

		img.src = imgfolder + currGallery[currimage][0];
		var newImg = $(img).hide();
		$('#maincontent').append(img);

		oldImg.stop(true).fadeOut(500, function() {
			$(this).remove();
		});
		newImg.css("margin-left", xOffset + 1 + "px").fadeIn(500);
	}

	function showPortfolioMenu() {
		//preload the first image of every gallery
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();

		img1.src = imgfolder + gl_faces[0][0],
		img2.src = imgfolder + gl_lightplay[0][0],
		img3.src = imgfolder + gl_ditl[0][0],
		img4.src = imgfolder + gl_places[0][0],

		//drawImgBgCanvas();
		$('#portfolio_mouseover').fadeTo(150,0, function() {
			$('#secondary_menu').show();
			$('#portfolio_menu').show().fadeTo(0,0);
			$('#gl_faces').show().fadeTo(0,0);
			$('#gl_lightplay').show().fadeTo(0,0);
			$('#gl_ditl').show().fadeTo(0,0);
			$('#gl_places').show().fadeTo(0,0);
			$('#primary_menu_mouseover_bar ul').show();
			//fade in the menu 
			$('#portfolio_menu').show().fadeTo(0,1, function() {
				$('#gl_faces').delay(140).fadeTo(400,1);
				$('#gl_lightplay').delay(480).fadeTo(400,1);
				$('#gl_ditl').delay(400).fadeTo(400,1);
				$('#gl_places').delay(340).fadeTo(400,1);
			});
		});
	}

	function hidePortfolioMenu() {
		$('#portfolio_menu').fadeTo(280,0, function() {
			$('#portfolio_menu').hide();
		});
		$('#portfolio_bar').fadeTo(280,0, function() {
			$('#portfolio_bar').hide();
		});

	}

	function showAboutContent() {
		$('#about_mouseover').fadeTo(150,0);
		$('#about_bar').fadeTo(150,0);
		$('#maincontent').fadeTo(280,0, function() {
			$('#maincontent').hide();
			$('#aboutcontent').show();					// bring in the about content box but hide it
			$('#aboutcontent').find('*').fadeTo(0,0);	// hide everything first
			$('#about_firstline').fadeTo(0,1);			// except for the first line paragraph container
			drawAboutCanvas();							// render the canvas
			$('#about_box').fadeTo(800,1);
			$('#about_city').fadeTo(400,1);
			$('#about_country').delay(200).fadeTo(400,1);
			$('#about_location_bar').delay(280).fadeTo(400,1);
			$('#about_ph').delay(720).fadeTo(400,1);
			$('#about_em').delay(880).fadeTo(400,1);
			$('#about_email').delay(1040).fadeTo(400,1);
			$('#about_phone').delay(1180).fadeTo(400,1);
		});
	}

	function hideAboutContent() {
		$('#about_box').fadeTo(600,0, function() {
			$('#about_box').hide();
		});
		$('#about_phone').fadeTo(300,0);
		$('#about_email').delay(80).fadeTo(300,0);
		$('#about_em').delay(160).fadeTo(300,0);
		$('#about_location_bar').delay(160).fadeTo(300,0);
		$('#about_ph').delay(260).fadeTo(300,0);
		$('#about_city').delay(260).fadeTo(300,0);
		$('#about_country').delay(300).fadeTo(300,0, function () {
			$('#aboutcontent').hide();
			$('#maincontent').show().fadeTo(400,1);
		});		
	}
});