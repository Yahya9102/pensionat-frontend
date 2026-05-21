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


async function loadRooms() {
    const response = await fetch(`${API_URL}/rooms`);

    const rooms = await response.json();

    const list = document.getElementById("rooms");

    list.innerHTML = ""

    rooms.forEach(room => {
        const li = document.createElement("li")
        li.textContent = `Rum ${room.roomNumber}, ${room.beds} sängar, ${room.pricePerNight} kr/natt`
        li.className = "list-group-item";
        list.append(li)
    })
}



async function createBooking() {
    const booking = {
        customerId: document.getElementById("customerId").value,
        roomId: document.getElementById("roomId").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value
    };

      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(booking)
    });

    showMessage(response.ok ? "Bokning skapad" : "Bokningen kunde inte skapas")

}




