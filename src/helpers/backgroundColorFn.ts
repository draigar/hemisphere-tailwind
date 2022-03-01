const bgColorCombo = (backgroundColor: any) => {
	
	const colorClass = backgroundColor?.colorClass;
	const brand = backgroundColor?.brand;
	const neutral = backgroundColor?.neutral;
	const black = backgroundColor?.black;
	const primary = backgroundColor?.primary;
	const colors =
		colorClass === 'brand'
			? `bg-brand-${brand}`
			: colorClass === 'neutral'
			? `bg-neutral-${neutral}`
			: colorClass === 'primary'
			? `bg-primary-${primary}`
			: colorClass === 'black'
			? `bg-black-${black}`
			: 'bg-white';
	return colors;
};

export default bgColorCombo