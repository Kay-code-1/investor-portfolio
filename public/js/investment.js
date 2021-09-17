var modal = document.getElementById("myModal");
document.getElementById("symbol-lookup").addEventListener("click", () => {
  modal.style.display = "block";
});

document.getElementById("btn-lookup").addEventListener("click", async () => {
  var ticker = document.getElementById("ticker-symbol");

  console.log(ticker.value);
  if (ticker.value) {
    const response = await fetch("/api/tickers?symbol=" + ticker.value, {
      method: "GET",
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      const lookup = document.getElementById("lookup-result");
      lookup.style.display = "block";

      const rows = lookup.querySelector(".symbol-results");
      rows.innerHTML = "";
      const resultRows = result.map((r) => {
        return `<tr onclick="setData('${r.id}', '${r.symbol}', '${r.name}')">
        <td>${r.symbol}</td><td>${r.name}</td></tr>`;
      });

      rows.innerHTML = resultRows;
    } else {
      alert(response.statusText);
    }
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const setData = (id, symbol, name) => {
  const tickerSymbol = document.getElementById("tickerSymbol");
  tickerSymbol.value = symbol;

  const tickerName = document.getElementById("tickerName");
  tickerName.value = name;

  modal.style.display = "none";
};
