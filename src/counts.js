const countClicks = () => {
	let count = 0,
		isDelete = false;
	document.addEventListener("click", () => count++);
	return {
		delete() {
			document.removeEventListener("click", () => count++);
			isDelete = true;
		},
		showClicks() {
			if (isDelete) return null;
			return count;
		},
	};
};

const clicks = countClicks();
