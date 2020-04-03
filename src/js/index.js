//per search-in

$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});

// Navbar toggler
$(".toggler").on("click", function() {
    $(this).toggleClass("open");
    $("body").toggleClass("navbar-open");
});
$(".nav-links a").on("click", function() {
    if($("body").hasClass("navbar-open")) {
      $(".toggler").removeClass("open");
      $("body").removeClass("navbar-open");
    }
});

//videoja
var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
   // playButton.innerHTML = "Pause";
	//playButton.removeClass("active");
	playButton.classList.remove("active");
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.classList.add("active");
  }
});

//show all

$(document).ready(function(){
	$("#hide").click(function(){
		
	  $(".viewall").hide();
	  $(".karta").addClass('active');


	});
	$("#show").click(function(){
	  $(".viewall").show();
	});
  
  });