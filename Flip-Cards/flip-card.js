window.wdsFlip = {};
(function (window, $, app) {

	// Constructor
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things
	app.cache = function () {
		app.$c = {
			window: $(window),
			html: $('html'),
			grid: $('.content-grid'),
			card: $('.flip-card'),
			back: $('.back')
		};
	};

	// Combine all events
	app.bindEvents = function () {
		app.$c.window.on('load', app.showHeight);
		app.$c.grid.find('.icon-plus').on('keyup click', app.toggleCard);
		app.$c.back.on('keyup touchstart click', app.unFlip);
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return app.$c.card.length;
	};

	app.toggleCard = function () {

		var self = $(this).parent();
		self.addClass('flipped');

		return false;
	};

	// Allow unflipping when clicking anywhere in the card.
	app.unFlip = function () {

		var self = $(this).parent();
		self.removeClass('flipped');

		// Reset parent height to default.
		self.removeAttr('style');

		return false;
	};

	// Set height of parent to back content height if flipped.
	app.showHeight = function () {

		app.$c.card.each(function () {

			var tallestHeight = 0;

			$(this).children('.card-content').each(function () {
				if (Number($(this).outerHeight(true)) > tallestHeight) {
					tallestHeight = Number($(this).outerHeight(true));
				}
			});

			$(this).children('.icon-plus').on('click', function () {
				$(this).parent().outerHeight(tallestHeight);
			});
		});

		return false;
	};

	// Engage
	$(app.init);
})(window, jQuery, window.wdsFlip);
'use strict';
