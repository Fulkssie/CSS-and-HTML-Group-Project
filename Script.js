
    var now = new Date();
    var hours = now.getHours();

    if (hours < 12) {
        var type = "Morning";
    }

    else if (hours < 17) {
        var type = "Afternoon
        
    else {
        var type = "Evening";
    }
    document.getElementById("Greeting").innerHTML = `Good ${type}`;
