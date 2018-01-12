function postStatusUpdate (status, buttonID, buttonText) {
    console.log('postStatusUpdate called ' + status + ":" + buttonID + ":"+buttonText);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.responseText, this.responseText.split(':')[1]);
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(buttonID).value = buttonText;
            }
        };
    xhttp.open("GET", createLoggingURL(status, raceData));
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded", "Access-Control-Allow-Origin: http://localhost");
    xhttp.send();
    };


function createLoggingURL (status, raceData) {
    loggingURL = "https://sportstrackinglogger.azurewebsites.net";
    loggingURL += "?username=" + raceData.username;
    loggingURL += "&status=" + status; //raceData, Start, Hole, Split, Finish
    loggingURL += "&raceCodex=" + raceData.raceCodex;
    loggingURL += "&phaseID=" + raceData.phaseID;
    loggingURL += "&sport=" + raceData.sport;
    loggingURL += "&event=" + raceData.event;
    loggingURL += "&temp=" + raceData.temp;
    loggingURL += "&precip=" + raceData.precip;
    loggingURL += "&gender=" + raceData.gender;
    loggingURL += "&bibRedStartLane=" + raceData.bibRedStartLane;
    loggingURL += "&bibGreenStartLane=" + raceData.bibGreenStartLane;
    loggingURL += "&bibBlueStartLane=" + raceData.bibBlueStartLane;
    loggingURL += "&bibYellowStartLane=" + raceData.bibYellowStartLane;
    loggingURL += "&bibBlackStartLane=" + raceData.bibBlackStartLane;
    loggingURL += "&bibWhiteStartLane=" + raceData.bibWhiteStartLane;
    loggingURL += "&bibRedHolePosition=" + raceData.bibRedHolePosition;
    loggingURL += "&bibGreenHolePosition=" + raceData.bibGreenHolePosition;
    loggingURL += "&bibBlueHolePosition=" + raceData.bibBlueHolePosition;
    loggingURL += "&bibYellowHolePosition=" + raceData.bibYellowHolePosition;
    loggingURL += "&bibBlackHolePosition=" + raceData.bibBlackHolePosition;
    loggingURL += "&bibWhiteHolePosition=" + raceData.bibWhiteHolePosition;
    loggingURL += "&bibRedSplitPosition=" + raceData.bibRedSplitPosition;
    loggingURL += "&bibGreenSplitPosition=" + raceData.bibGreenSplitPosition;
    loggingURL += "&bibBlueSplitPosition=" + raceData.bibBlueSplitPosition;
    loggingURL += "&bibYellowSplitPosition=" + raceData.bibYellowSplitPosition;
    loggingURL += "&bibBlackSplitPosition=" + raceData.bibBlackSplitPosition;
    loggingURL += "&bibWhiteSplitPosition=" + raceData.bibWhiteSplitPosition;
    loggingURL += "&bibRedFinishPosition=" + raceData.bibRedFinishPosition;
    loggingURL += "&bibGreenFinishPosition=" + raceData.bibGreenFinishPosition;
    loggingURL += "&bibBlueFinishPosition=" + raceData.bibBlueFinishPosition;
    loggingURL += "&bibYellowFinishPosition=" + raceData.bibYellowFinishPosition;
    loggingURL += "&bibBlackFinishPosition=" + raceData.bibBlackFinishPosition;
    loggingURL += "&bibWhiteFinishPosition=" + raceData.bibWhiteFinishPosition;
    console.log(loggingURL);
    return loggingURL;
}