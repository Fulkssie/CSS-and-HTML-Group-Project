
    var now = new Date();
    var hours = now.getHours();

    if (0 <= hours && hours < 12) {
        var type = "Morning";
    }
    if (12 <= hours) {
        var type = "Evening";
    }
    document.getElementById("Greeting").innerHTML = `Good ${type}`;