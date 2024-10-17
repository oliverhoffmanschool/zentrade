document.addEventListener('DOMContentLoaded', function() {
    const stockTicker = document.getElementById('stock-ticker');
    let currentStock = { symbol: 'AAPL', price: 150.00, change: 2.5 };

    function updateStockTicker() {
        const newPrice = +(currentStock.price + (Math.random() - 0.5) * 2).toFixed(2);
        const newChange = +((newPrice - currentStock.price) / currentStock.price * 100).toFixed(2);

        currentStock = { ...currentStock, price: newPrice, change: newChange };

        const priceElement = stockTicker.querySelector('p');
        const changeElement = stockTicker.querySelector('div:last-child');

        priceElement.textContent = `$${currentStock.price.toFixed(2)}`;
        changeElement.textContent = `${currentStock.change >= 0 ? '+' : ''}${currentStock.change.toFixed(2)}%`;
        changeElement.className = `text-xl ${currentStock.change >= 0 ? 'text-blue-200' : 'text-blue-300'}`;
    }

    // Update stock ticker every 5 seconds
    setInterval(updateStockTicker, 5000);
});