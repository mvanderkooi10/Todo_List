//strikethrough todo's that are done
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on icon to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	//checking for enter (13)
	if(e.which === 13){
		//extract todo text
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});