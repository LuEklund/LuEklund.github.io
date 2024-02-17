/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
$(document).ready(function () {
	var menuButton = $('#topNavButton')
	var sideBarButton = $('#sideBarButton')

	var sideBar = $('#sideBar')
	var sideBarOverlay = $('#sideBarOverlay')
	const DURATION = 200
	menuButton.click(function () {
	sideBarButton.delay(DURATION).show()
	sideBarOverlay.fadeIn(DURATION, function () {
		sideBar
			.delay(DURATION)
			.animate({ right: '0px', padding: '40px' }, DURATION)
		})
	})

	sideBarButton.click(function () {
	sideBarButton.delay(DURATION).hide()
	sideBar.animate({ right: '100%', padding: '0px' }, DURATION, function () {
			sideBarOverlay.delay(DURATION).fadeOut(DURATION)
			})
		})
	})
  