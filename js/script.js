	var nav = document.getElementById('nav');
	var spana = document.getElementsByTagName('span');
	var brand = document.getElementById('brand');
	var a = document.getElementById('links').getElementsByTagName('a');
	const menuOne = document.querySelector('.menuOne');
	var toggleStatus = 1;



window.onscroll = function() {

		if (window.pageYOffset > 150) {
			nav.style.background = "white";
			

			// brand.firstElementChild.style.color = "#000";



			// for (j = 0; j < links.length; j++) {
			// 	  links[j].style.color = '#000';
			// 	}

			// for (i = 0; i < span.length; i++) {
			// 	  span[i].style.background = '#000';
			// 	}
			
		}

	 	else {
	 		nav.style.background = "transparent";
			// brand.firstElementChild.style.color = "#f8f8f8";

			// for (i = 0; i < span.length; i++) {
			// 	  span[i].style.background = '#f8f8f8';
			// 	}
			// for (j = 0; j < links.length; j++) {
			// 	  links[j].style.color = '#f8f8f8';
			// 	}


		}
	}

	function toggleMenu() {
		if (toggleStatus == 1) {
			document.getElementById('menu').style.width = '400px';
			toggleStatus = 0;
			menuOne.classList.toggle("clickMenuOne");

		} else if (toggleStatus == 0) {
			document.getElementById('menu').style.width = '0';
			toggleStatus = 1;
			menuOne.classList.remove("clickMenuOne");
		}
	}

	jQuery(document).ready(function() {

		$('#links').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing'
		});
	});