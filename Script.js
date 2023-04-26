var now = new Date();
var hour = now.getHours();

if (hour < 12) {
    var type = "Morning";
}

else if (hour < 17) {
    var type = "Afternoon";
}
    
else {
    var type = "Evening";
}
document.getElementById("Greeting").innerHTML = `Good ${type}`;
