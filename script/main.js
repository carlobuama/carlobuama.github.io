//copies text to the user's clipboard and alerts user
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied '"+text+"' to clipboard!")
}

//increases body text of items under "content"
function increaseTextSize() {
    body = document.getElementById("content");
    currentSize = parseInt(body.style.fontSize.replace("%", ""), 10);
    
    if (currentSize <= 400) {
        currentSize = currentSize + 50
        body.style.fontSize = currentSize.toString() + "%";
    }
}

//decreases body text of items under "content"
function decreaseTextSize() {
    body = document.getElementById("content");
    currentSize = parseInt(body.style.fontSize.replace("%", ""), 10);
    
    if (currentSize >= 150) {
        currentSize = currentSize - 50
        body.style.fontSize = currentSize.toString() + "%";
    }
}

//toggles between light and dark modes
function viewingModeToggle() {
    var currentBgColor = getComputedStyle(document.body).backgroundColor.toString();
    var buttons = document.querySelectorAll("button");

    var navMenu = document.querySelectorAll(".navbar.item");

    if (currentBgColor === 'rgb(245, 245, 245)') {
        document.body.style.backgroundColor = "rgb(54, 54, 54)";
        document.body.style.color = "rgb(245, 245, 245)";

        buttons.forEach(function(button) {
            button.style.color = "rgb(245, 245, 245)";
        })

        navMenu.forEach(function(navItem) {
            navItem.style.color = 'rgb(245, 245, 245)';
        })

        localStorage.setItem("darkModeStatus","dark");

    } else {
        document.body.style.backgroundColor = "rgb(245, 245, 245)";
        document.body.style.color = "rgb(54, 54, 54)";

        buttons.forEach(function(button) {
            button.style.color = "#555";
        })

        navMenu.forEach(function(navItem) {
            navItem.style.color = '#7E809C';
        })

        localStorage.setItem("darkModeStatus","light");
    }
}

function top() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//remembers the state of dark mode
window.onload = function() {
    var darkModeStatus = localStorage.getItem("darkModeStatus");
    var toggleButton = document.getElementById("viewModeButton");
    var buttons = document.querySelectorAll("button");

    if (darkModeStatus === 'dark') {
        document.body.style.backgroundColor = "rgb(54, 54, 54)";
        document.body.style.color = "rgb(245, 245, 245)";

        buttons.forEach(function(button) {
            button.style.color = "rgb(245, 245, 245)";
        })

    } else {
        document.body.style.backgroundColor = "rgb(245, 245, 245)";
        document.body.style.color = "rgb(54, 54, 54)";

        buttons.forEach(function(button) {
            button.style.color = "#555";
        })

    }
}
