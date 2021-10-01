const readMoreBtn = document.querySelectorAll('[data-read-more]');

readMoreBtn.forEach(e => {
	e.addEventListener('click', (e) => {
	const target = e.target;
	const hiddenText = target.previousElementSibling;
	
	if(hiddenText.classList.contains('is-hidden')) {
		target.textContent = 'Less';
	} else {
		target.textContent = 'Read more';
	}
	hiddenText.classList.toggle('is-hidden');
});
});