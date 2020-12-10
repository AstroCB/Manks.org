const url = "http://api.manks.org/stock?symbol=IBM";
const vestedSharePrice = 240000 / 29;
function tc() {
    const req = new XMLHttpRequest();
    req.onload = () => {
        if (req.readyState == 4 && req.status === 200) {
            const data = JSON.parse(req.response);
            const price = parseInt(data["price"]);
            if (price) {
                const money = price * vestedSharePrice;
                const formatted = `$${money.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
                document.getElementById("price").textContent = formatted;
            }
        }
    }
    req.open("GET", url)
    req.send()
}

window.onload = tc;