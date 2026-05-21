const API_URL = "http://localhost:8080/api"

async function createCustomer() {
    const customer = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    const response = await fetch(`${API_URL}/customers`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(customer)
    });

    showMessage(response.ok ? "Kund skapad" : "Kunden kunde inte skapas")
    
}


function showMessage(text) {
    document.getElementById("message").textContent = text;
}