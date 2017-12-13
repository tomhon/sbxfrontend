function postStatusUpdate (status, buttonID, buttonText) {
    console.log('postStatusUpdate called ' + status + ":" + buttonID + ":"+buttonText);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.responseText, this.responseText.split(':')[1]);
        if (this.readyState == 4 && this.status == 200 && this.responseText.startsWith(status,1)) {
            document.getElementById(buttonID).value = buttonText + ':' + this.responseText.split(':')[1];
            }
        };
    xhttp.open("GET", playerTrackingServer + "?user=" + userData.user + "&status=" + status);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded", "Access-Control-Allow-Origin: http://localhost");
    xhttp.send();
    };