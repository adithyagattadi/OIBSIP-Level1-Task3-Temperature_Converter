document.addEventListener('DOMContentLoaded', function() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');
    const kelvinInput = document.getElementById('kelvin');

    fahrenheitInput.addEventListener('input', function() {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
        const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    });

    celsiusInput.addEventListener('input', function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        const kelvinValue = celsiusValue + 273.15;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    });

    kelvinInput.addEventListener('input', function() {
        const kelvinValue = parseFloat(kelvinInput.value);
        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = (kelvinValue * 9 / 5) - 459.67;
        celsiusInput.value = celsiusValue.toFixed(2);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    });
});
