document.addEventListener("DOMContentLoaded", function() {
    const finsecurePrice = document.getElementById('finsecure-price');
    const paywavePrice = document.getElementById('paywave-price');
    const globaltechPrice = document.getElementById('globaltech-price');
    const skynetPrice = document.getElementById('skynet-price');

    // Initial prices
    let currentFinSecurePrice = 120.5;
    let currentPayWavePrice = 98.3;
    let currentGlobalTechPrice = 450.75;
    let currentSkyNetPrice = 320.9;

    // Function to generate a random price variation between -5 and +5
    function randomPriceChange() {
        return (Math.random() * 10 - 5).toFixed(2);
    }

    // Function to update stock prices
    function updateStockPrices() {
        // Decrease FinSecure price to simulate short selling spike
        currentFinSecurePrice -= 2.0; // Fixed decrease to simulate price drop
        if (currentFinSecurePrice < 0) {
            currentFinSecurePrice = 0;
        }

        // Update PayWave price by a random amount each time
        currentPayWavePrice += parseFloat(randomPriceChange());
        if (currentPayWavePrice < 0) {
            currentPayWavePrice = 0;
        }

        // Update GlobalTech price by a random amount each time
        currentGlobalTechPrice += parseFloat(randomPriceChange());
        if (currentGlobalTechPrice < 0) {
            currentGlobalTechPrice = 0;
        }

        // Update SkyNet price by a random amount each time
        currentSkyNetPrice += parseFloat(randomPriceChange());
        if (currentSkyNetPrice < 0) {
            currentSkyNetPrice = 0;
        }

        // Update the text content for each company
        finsecurePrice.textContent = `₹${currentFinSecurePrice.toFixed(2)}`;
        paywavePrice.textContent = `₹${currentPayWavePrice.toFixed(2)}`;
        globaltechPrice.textContent = `₹${currentGlobalTechPrice.toFixed(2)}`;
        skynetPrice.textContent = `₹${currentSkyNetPrice.toFixed(2)}`;
    }

    // Update stock prices every 5 seconds
    setInterval(updateStockPrices, 5000);
});

