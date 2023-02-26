window.onload = function () {
	const cardNumberInput = document.getElementById("card-number");
	const cardNumber = document.querySelector(".card-number");
	const numberPlaceholder = "0000 0000 0000 0000";
	const cardNameInput = document.getElementById("name");
	const cardName = document.querySelector(".card-name");
	const namePlaceholder = "e.g. Jane Appleseed";
	const cardExpiryInput = document.getElementById("card-expiry-month");
	const cardExpiry = document.querySelector(".card-expiry-month");
	const expiryPlaceholder = "MM";
	const cardExpiryInputYear = document.getElementById("card-expiry-year");
	const cardExpiryYear = document.querySelector(".card-expiry-year");
	const expiryYearPlaceholder = "YY";
	const cardCVCInput = document.getElementById("cvc");
	const cardCVC = document.querySelector(".card-cvc");
	const cardCVCPlaceholder = "000";

	fillCard(cardNameInput, cardName, namePlaceholder);
	fillCard(cardNumberInput, cardNumber, numberPlaceholder);
	fillCard(cardExpiryInput, cardExpiry, expiryPlaceholder);
	fillCard(cardExpiryInputYear, cardExpiryYear, expiryYearPlaceholder);
	fillCard(cardCVCInput, cardCVC, cardCVCPlaceholder);

	// filling input
	function fillCard(input, card, placeholder) {
		input.addEventListener("input", function (e) {
			if (input.value.length === 0) {
				card.innerHTML = placeholder;
			} else {
				card.innerHTML = e.target.value;
			}
		});
	}

	// add spaces
	cardNumberInput.addEventListener(
		"input",
		() =>
			(cardNumberInput.value = formatNumber(
				cardNumberInput.value.replaceAll(" ", "")
			))
	);
};

// restrics to numbers
function preventNonNumericalInput(e) {
	e = e || window.event;
	var charCode = e.keyCode;
	var charStr = String.fromCharCode(charCode);

	if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

// restricts amount
const formatNumber = number =>
	number.split("").reduce((seed, next, index) => {
		if (index !== 0 && !(index % 4)) seed += " ";
		return seed + next;
	}, "");
