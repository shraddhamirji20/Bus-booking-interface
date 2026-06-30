function BookTicket() {

    let name =
    document.getElementById("name").value;

    let from =
    document.getElementById("from").value;

    let to =
    document.getElementById("to").value;

    let seat =
    document.getElementById("seat").value;

    if(name==""){
        alert("Please enter your name");
        return;
    }

    document.getElementById("result").innerHTML = 
    "✅ Ticket Booked Successfully!<br>" +
    "Passenger:  " + name +
    "<br>Route: " + from + " to " + to +
    "<br>Seat: " + seat;
}