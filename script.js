(function () {
	let scrollpos = window.scrollY;
	let header = document.getElementById("header");

	function add_class(elem, _class) {
		elem.classList.add(_class);
	}

	function remove_class(elem, _class) {
		elem.classList.remove(_class);
	}

	window.addEventListener('scroll', function () {
		//Here you forgot to update the value
		scrollpos = window.scrollY;

		if(header) {
			if (scrollpos > 10) {
				add_class(header, "bg-black");
			} else {
				remove_class(header, "bg-black");
			}
		}
	});
})();