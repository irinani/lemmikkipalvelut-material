export default function todaysOpeningHours(openingHours) {
	const weekdays = [
		"Sunnuntai",
		"Maanantai",
		"Tiistai",
		"Keskiviikko",
		"Torstai",
		"Perjantai",
		"Lauantai",
	];
	const curDay = weekdays[new Date().getDay()];
	return openingHours.map((item) => {
		if (item.weekday === curDay) {
			return item.hours === "Avoinna ympäri vuorokauden"
				? item.hours
				: `Avoinna: ${item.hours}`;
		}
	});
}
