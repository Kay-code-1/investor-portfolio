//IN PROGRESS
const deletePortfolioHandler = async (event) => {
    
  
    const checkedDelete = document.querySelector('#deleteBtn:checked') ? true : false;
      
    if (checkedDelete) {
      const response = await fetch("/api/portfolio/" + id, {
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
.querySelector('delete-btn-form')
.addEventListener('submit', deletePortfolioHandler);