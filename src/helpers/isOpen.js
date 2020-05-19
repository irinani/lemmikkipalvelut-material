function isOpenNow(hours) {
	if (hours === "Avoinna ympäri vuorokauden") {
		return true;
	}

	const curDate = new Date();

	const startTime = `${hours.split("-")[0]}:00`;
	const endTime = `${hours.split("-").pop()}:00`;

	const s = startTime.split(":");
	const startTimeSplitted = new Date(
		curDate.getFullYear(),
		curDate.getMonth(),
		curDate.getDate(),
		parseInt(s[0]),
		parseInt(s[1]),
		parseInt(s[2])
	);

	const e = endTime.split(":");
	const endTimeSplitted = new Date(
		curDate.getFullYear(),
		curDate.getMonth(),
		curDate.getDate(),
		parseInt(e[0]),
		parseInt(e[1]),
		parseInt(e[2])
	);

	return curDate >= startTimeSplitted && curDate <= endTimeSplitted
		? true
		: false;
}
function checkIfOpen(openingHours) {
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
	for (let i = 0; i < openingHours.length; i++) {
		if (openingHours[i].weekday !== curDay) {
			continue;
		}
		return isOpenNow(openingHours[i].hours);
	}
}

export default function isOpen(openingHours) {
	return checkIfOpen(openingHours);
}
