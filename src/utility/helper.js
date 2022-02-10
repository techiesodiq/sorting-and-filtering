/** @format */

const ascSort = (a, b) => {
	if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
	if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
	return 0;
};

const descSort = (a, b) => {
	if (b.title.toLowerCase() < a.title.toLowerCase()) return -1;
	if (b.title.toLowerCase() > a.title.toLowerCase()) return 1;
	return 0;
};

const lowToHighPriceSort = (a, b) => {
	return a.price - b.price;
};
const highToLowPriceSort = (a, b) => {
	return b.price - a.price;
};

export const ascSortData = (unsortData) => {
	unsortData.sort(ascSort);
	return [...unsortData];
};

export const descSortData = (unsortData) => {
	unsortData.sort(descSort);
	return [...unsortData];
};

export const lowToHighPriceSortData = (unsortData) => {
	unsortData.sort(lowToHighPriceSort);
	return [...unsortData];
};

export const highToLowPriceSortData = (unsortData) => {
	unsortData.sort(highToLowPriceSort);
	return [...unsortData];
};
