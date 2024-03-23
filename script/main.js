var genderAns = '';
var educationAns ='';
var browsingAns = '';
var themeAns = '';
var careerAns = '';
var mobileAns = '';
var wpm = '';
var feedback = '';

// sets the variables to the provided value when a radio or checkbox is checked
function answerHandler(variable, value) {
    if (variable === 'genderAns') {
        genderAns = value;
    } else if (variable === 'educationAns') {
        educationAns = value;
    } else if (variable === 'browsingAns') {
        browsingAns = value;
    } else if (variable === 'themeAns') {
        themeAns = value;
    } else if (variable === 'careerAns') {
        careerAns = value;
    } else if (variable === 'mobileAns') {
        mobileAns = value;
    }
}

//saves answers to local storage. wpm and feedback are set and saved from here as well since they do not use onclick.
function saveAnswers() {
    wpm = document.getElementById('wpm').value;
    feedback = document.getElementById('feedback').value;
    localStorage.setItem("gender",genderAns);
    localStorage.setItem("education",educationAns);
    localStorage.setItem("browsing",browsingAns);
    localStorage.setItem("theme",themeAns);
    localStorage.setItem("career",careerAns);
    localStorage.setItem("mobile",mobileAns);
    localStorage.setItem("wpm",wpm);
    localStorage.setItem('feedback',feedback);
    alert("Successfully saved your answers!");
}

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
    var toggleButton = document.getElementById("viewModeButton");
    var buttons = document.querySelectorAll("button");

    if (currentBgColor === 'rgb(245, 245, 245)') {
        document.body.style.backgroundColor = "rgb(54, 54, 54)";
        document.body.style.color = "rgb(245, 245, 245)";

        buttons.forEach(function(button) {
            button.style.color = "rgb(245, 245, 245)";
        })

        toggleButton.innerHTML = "On";

    } else {
        document.body.style.backgroundColor = "rgb(245, 245, 245)";
        document.body.style.color = "rgb(54, 54, 54)";

        buttons.forEach(function(button) {
            button.style.color = "#555";
        })

        toggleButton.innerHTML = "Off";
    }
}