$(document).ready(function(){
	var liElement=$(".nav-tabs li");
	var ulElement=$(".nav-tabs");
	var widthOfLi=liElement.width();
	var lengthOfLi=liElement.length;
	var widthOfUl=widthOfLi*lengthOfLi;

	$(".turn-icon:last").click(function(event){
		event.preventDefault();
		var property={
			right:widthOfLi+"px"
		};
		ulElement.animate(property,function(){
			ulElement.css("right","0px");
			ulElement.append($(".nav-tabs li:first").clone());
			$(".nav-tabs li:first").remove();
		});
	});

	$(".turn-icon:first").click(function(event){
		event.preventDefault();
		ulElement.prepend($(".nav-tabs li:last").clone());
		$(".nav-tabs li:last").remove();
		ulElement.css('right',widthOfLi+"px");
		var property={
			right:"0px"
		};
		ulElement.animate(property);
	});
});

