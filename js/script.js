	var nav = document.querySelector('.navbar');
	var span = document.getElementsByTagName('span');
	var brand = document.getElementById('brand');
	var links = document.getElementById('links').getElementsByTagName('a');
	const menuOne = document.querySelector('.menuOne');
	var toggleStatus = 1;



window.onscroll = function() {

		if (window.pageYOffset > 150) {
			nav.style.background = "rgb(0,0,0,0.7)";
			nav.style.height = "60px";
			

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


$(".carousel-control").focus(function(event){
    $(this).blur();
});

	function toggleMenu() {
		if (toggleStatus == 1) {
			document.getElementById('menu').style.width = '100%';
			$('body').addClass('stop-scrolling');

			for (j = 0; j < links.length; j++) {
				  links[j].style.fontSize = '0';
				}
			

			toggleStatus = 0;
			menuOne.classList.toggle("clickMenuOne");

		} else if (toggleStatus == 0) {
			document.getElementById('menu').style.width = '0';
			toggleStatus = 1;
			menuOne.classList.remove("clickMenuOne");
			$('body').removeClass('stop-scrolling')

			for (j = 0; j < links.length; j++) {
				  links[j].style.fontSize = '16px';
				}

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



var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    	
       		labels: ["HTML5", "CSS3", "JavaScript", "jQuery" , "PHP" , "Version Control (git)", "Bootstrap", "Java", "C++", "MySQL"],
       		datasets: [{
            label: '# of Votes',
            data: [50, 50, 50, 10, 15, 20, 15, 20, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132 )',
                'rgba(54, 162, 235 )',
                'rgba(255, 206, 86)',
                'rgba(25, 206, 255)',
                'rgba(255, 26, 86)',
                'rgba(55, 26, 86)',
                'rgba(255, 206, 186)',
                'rgba(25, 206, 8)',
                'rgba(55, 106, 86)',
                'rgba(55, 76, 86)'
            ],
            borderColor: [
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
            ],
            borderWidth: 1
        }]
    },
     options: {
    	
			    tooltips: {
			      callbacks: {
			        label: function(tooltipItem, data) {
			        var dataset = data.datasets[tooltipItem.datasetIndex];
			        var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
			            return previousValue + currentValue;
			        });
			          var currentValue = dataset.data[tooltipItem.index];
			          var percentage = Math.floor(((currentValue/total) * 100)+0.5);         
			          return percentage + "%";
			        }
			      }
			    }
			  }
});