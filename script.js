function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
function countDown() {
    if (document.getElementById("countDownButton").innerHTML <= 0) { return; }

    var currentVal = document.getElementById("countDownButton").innerHTML;
    i = 0
    while (i < 10) {
        document.getElementById("countDownButton").innerHTML = currentVal - 1;
        currentVal--;
        i++;
    }
}
function login() {
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    fullname = fname + ' ' + lname;
    document.getElementById("fullName").style.display = 'block';
    document.getElementById("fullName").innerHTML = fullname;
}