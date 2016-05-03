$(document).ready(function() {

});

<script>
	$('.carousel').carousel({
		interval: 5000
	})
</script>

$("p").on("swipe",function(){
  $("span").text("Swipe detected!");
});
