const addInvestmentHandler = () => {
    document.getElementById("investment-form").style.display = "block";
} 

document
  .getElementById("add-investment")
  .addEventListener("click", addInvestmentHandler);