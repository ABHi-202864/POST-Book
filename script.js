const formAmountElemrnt = document.querySelector(".amount");
const convertedAmountElemrnt = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");

const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Ruppe" },
    { code: "KRW", name: "South Korean Won" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "PEN", name: "Peruvian Sol" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PLN", name: "Polish Złoty" },
    { code: "RON", name: "Romanian Leu" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "TWD", name: "Taiwan New Dollar" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "USD", name: "United States Dollar" },
    { code: "UYU", name: "Uruguayan Peso" },
    { code: "VND", name: "Vietnamese Đồng" },
    { code: "ZAR", name: "South African Rand" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "INR", name: "Indian Rupee" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "ARS", name: "Argentine Peso" }
];

countries.forEach((country) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
});

const getExchangeRate = async () => {
    const amount = parseFloat(fromCurrencyElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate);

    convertedAmountElemrnt.value = convertedAmount;
}

formAmountElemrnt.addEventListener("input", getExchangeRate);