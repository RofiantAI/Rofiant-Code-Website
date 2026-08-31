export function reveal(node: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return {};
	}

	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('is-visible');
				observer.disconnect();
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
