function showName(x) {
    var name = prompt("Enter your name in the box below:","Carlo")

    var welcome = document.getElementById("welcomeText")

    // prevents user from entering empty name
    if (name === null || name === "") {
        welcome.innerHTML = "Welcome to my website! Thank you for visiting."
    } else {
        welcome.innerHTML = "Welcome to my website, "+name+"! Thank you for visiting.";
    }
}

function grow(x) {
    x.style.width = "50%";
}

function shrink(x) {
    x.style.width = "25%";
}

//toggles show when each respective button is clicked
function showPlatforms() {
    document.getElementById("platforms").classList.toggle("show");
}

function showPages() {
    document.getElementById("pages").classList.toggle("show");
}

//both menus are closed when clicking outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

