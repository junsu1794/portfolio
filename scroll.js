const win = $(window);
const sections = $('section');
let speed = Math.floor(win.height() * 0.5);
let topArr = [];
let winSCT;
console.log(sections);
console.log(sections.offset().top);

sections.each(function (i, o) {
	const sectionTop = $(o).offset().top;
	topArr.push(sectionTop);
});
win.on('scroll', () => {
	winSCT = win.scrollTop();

	if (winSCT > topArr[0] - speed) {
		sections.eq(0).addClass('is-animated');
		pipScroll();
	}
	if (winSCT > topArr[1] - speed) {
		sections.eq(1).addClass('is-animated');
		pipScroll();
	}
});

function pipScroll() {
	const devices = $('.mockup.pc, .mockup.mobile,.mockup mobile2');
	devices.each(function (i, deviceEl) {
		let device = $(this);
		let screen = device.find('.mask>img');
		const mask = device.find('.mask');
		const hightDifference = screen.innerHeight() - mask.innerHeight();
		console.log('hightDifference', hightDifference);
		device.on({
			mouseenter: function () {
				screen.stop().animate({ top: -hightDifference }, 1500);
			},
			mouseleave: function () {
				screen.stop().animate({ top: 0 }, 1500);
			},
		});
	});
}
win.on('resize', function () {
	pipScroll();
});

//ani
var animation = bodymovin.loadAnimation({
	container: document.getElementById('lottie',), // Required
	path: '/ani.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
})