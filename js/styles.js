($(document).ready(function(){

	$(".btn-group").on("click", function(){
		$(this).find(".btn").toggleClass("enabled").toggleClass("disabled");  
	});

}));