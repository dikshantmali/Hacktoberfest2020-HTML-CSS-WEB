$('.select').each(function () {
	var $this = $(this),
		numberOfOptions = $(this).children('div').length;

	$this.addClass('select-hidden');
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');
	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('div').eq(0).text());

	var $list = $('<ul />', {
		class: 'select-options',
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('div').eq(i).text(),
			rel: $this.children('div').eq(i).val(),
		}).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function (e) {
		e.stopPropagation();
		$('div.select-styled.active')
			.not(this)
			.each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
		$(this).toggleClass('active').next('ul.select-options').toggle();
	});

	$listItems.click(function (e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this)[0].textContent);
		$list.hide();
	});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
	});
});
