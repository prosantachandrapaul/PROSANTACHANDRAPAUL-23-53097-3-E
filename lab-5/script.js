let events = [];

function addEvent() {
    const eventInput = document.getElementById("event");
    const eventName = eventInput.value.trim();

    if (eventName === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventName);
    eventInput.value = "";
    document.getElementById("eventList").textContent =
        "Added events: " + events.join(", ");
    alert("Event Added");
}

function confirmRegistration() {
    const studentName = document.getElementById("studentName").value.trim();

    if (studentName === "") {
        alert("Please enter your name.");
        return;
    }

    if (events.length === 0) {
        alert("Please add at least one event.");
        return;
    }

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "confirm.html";
}
