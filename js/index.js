// --- MOBILNÍ NAVIGACE ---
const menu = document.querySelector(".maxa-nav-wrap");
const hamburger = document.querySelector(".maxa-hamburger-btn");
const menuItems = document.querySelectorAll(".maxa-nav-link");

if (hamburger && menu) {
	hamburger.addEventListener("click", () => {
		menu.classList.toggle("showMenu");
		hamburger.classList.toggle("is-active");
	});

	menuItems.forEach((item) => {
		item.addEventListener("click", () => {
			if (window.innerWidth < 992) {
				menu.classList.remove("showMenu");
				hamburger.classList.remove("is-active");
			}
		});
	});
}

// --- STATUSY ZÁPASŮ ---
document.querySelectorAll('.maxa-status-badge').forEach(badge => {
	const status = badge.getAttribute('data-status');
	
	if (status === 'done') {
		badge.innerHTML = `
			<svg class="hokej-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="9"></circle>
				<polyline points="9 12 11 14 15 9"></polyline>
			</svg> ODEHRÁNO`;
	} else if (status === 'upcoming') {
		badge.innerHTML = `
			<svg class="hokej-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="9"></circle>
				<polyline points="12 6 12 12 16 14"></polyline>
			</svg> ČEKÁ NÁS`;
	}
});
