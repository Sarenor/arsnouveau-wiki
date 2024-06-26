import { getIdFromResourceLocation } from '$lib/utils/idResolver';

const mapSpecialCategories = (category: string) => {
	if (['spells_1', 'spells_2', 'spells_3'].includes(category)) {
		return category.replace('spells', 'glyphs');
	}
	return category;
};

export const preparePatchouli = (
	categories: { [x: string]: App.PatchouliCategory } | undefined,
	entries: { [x: string]: App.PatchouliEntry } | undefined,
	source: string
) => {
	if (categories && entries) {
		Object.entries(categories).forEach(([key, category]) => {
			category.id = key;
			if (!category.source) {
				category.source = source;
			}
		});
		Object.entries(entries).forEach(([key, value]) => {
			let category = mapSpecialCategories(getIdFromResourceLocation(value.category)) || '';
			value.category = category;
			value.source = source;
			// If we can't find the category, it's ok if the entry vanishes
			categories[category].entries = { ...categories[category].entries, [key]: value };
		});
	}
	return categories;
};
