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