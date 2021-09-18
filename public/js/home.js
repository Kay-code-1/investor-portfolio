function createChart(data) {

    const labels = [];
    let prices = [];

    for (let i = 0; i < 23; i++) {
        const openPrice = Math.floor(data.data[i].close);
        prices.push(openPrice);
        labels.push("");
    }

    console.log(prices);

    const inputs = {
        labels: labels,
        datasets: [{
            label: "Dow Jones - Last 30 Days",
            backgroundColor: "rgb(20, 50, 185)",
            borderColor: "rgb(20, 50, 185)",
            data: prices
        }]
    };

    const config = {
        type: "line",
        data: inputs,
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 24
                        }
                    }
                }
            }
        }
    };

    var myChart = new Chart(
        document.getElementById("myChart"),
        config
    );
};

async function getMarketData() {
    const apiKeyResponse = await fetch("/api/marketdata");
    const apiKey = await apiKeyResponse.json();

    const response = await fetch(`http://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=DJI.INDX`);
    if (response.status !== 200) {
        return await response.json({message: "Link not available"});
    }
    else {
        const responseData = await response.json();
        createChart(responseData);
    }
}

document.getElementById("create-portfolio")
    .addEventListener("click", () => {
        window.location = "/portfolio"
    })
    getMarketData();

//IN PROGRESS
document.getElementById("delete-portfolio")
    .addEventListener("click", () => {
        console.log('hello')
        deletePortfolioHandler();
    })

