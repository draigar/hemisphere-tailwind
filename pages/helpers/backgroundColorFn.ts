export const bgColorCombo = (backgroundColor) => {
	const colorClass = backgroundColor?.colorClass;
	const brand = backgroundColor?.brand;
	const neutral = backgroundColor?.neutral;
	const black = backgroundColor?.black;
	const primary = backgroundColor?.primary;
	const colors =
		colorClass === 'brand'
			? `brand.${brand}`
			: colorClass === 'neutral'
			? `neutral.${neutral}`
			: colorClass === 'primary'
			? `primary.${primary}`
			: colorClass === 'black'
			? `black.${black}`
			: 'white';
	return colors;
};
