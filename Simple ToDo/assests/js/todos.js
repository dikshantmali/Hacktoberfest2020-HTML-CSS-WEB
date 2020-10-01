

$("#container").on("click", ".text", function () {
	$(this).toggleClass("completed");
});

$("#container").on("click", ".trash", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if($(this).val() !== "") {
			var todoText = $(this).val();
			$(this).val("");
			$("#list").prepend("<div class=\"entry\"><div class=\"trash\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></div><div class=\"text\">" + todoText + "</div></div>");
			trash();
		}
	}
});

$(".fa-minus").click(function() {
	$("input[type='text']").fadeToggle();
})

function trash() {
	var entryHeight = $(".entry").first().css("height");
	$(".trash").first().css("lineHeight", entryHeight);
} 