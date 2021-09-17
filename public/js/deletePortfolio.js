const deletePortfolioHandler = async (event) => {
    event.preventDefault();
  
    const portfolioID = document.getElementById('').value.trim();
      
    if (portfolioID) {
      const response = await fetch("/api/portfolio/:id", {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("User Portfolio has been Deleted");
        window.location = "/";
      } else {
        alert(response.statusText);
      }
    }
}

document
.getElementById('delete-portfolio')
.addEventListener('click', deletePortfolioHandler);