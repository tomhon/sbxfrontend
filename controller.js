
var userData = {playerName: "Name..", playerNumber: "Number..", playerTeam: "Team..", playerClub: "Club..",
opponentTeam: "Team..", opponentClub: "Club..", gameLocation: "Location..", gameField: "Field..", playerTeamHomeAway: "Home.." };
// document.getElementById("playerName").placeholder = userData.playerName;
// document.getElementById("playerNumber").placeholder = userData.playerNumber;
// document.getElementById("playerTeam").placeholder = userData.playerTeam;
// document.getElementById("playerClub").placeholder = userData.playerClub;
// document.getElementById("opponentTeam").placeholder = userData.opponentTeam;
// document.getElementById("opponentClub").placeholder = userData.opponentClub;
// document.getElementById("gameLocation").placeholder = userData.gameLocation;
// document.getElementById("gameField").placeholder = userData.gameField;
// document.getElementById("playerTeamHomeAway").placeholder = userData.playerTeamHomeAway;


function newPlayer(session) {
    session.userData.playerName = null;
    session.userData.playerNumber = null;
    session.userData.playerTeam = null;
    session.userData.playerClub = null;
}

function newGame(session) {
    session.userData.opponentTeam = null;
    session.userData.opponentClub = null;
    session.userData.gameLocation = null;
    session.userData.gameField = null;
    session.userData.playerTeamHomeAway = null;
}

closeSidebar();
showRaceSetupContainer();
// Dummy Data Delete
userData.user = "Test User";
playerTrackingServer = "http://localhost:3978";
// playerTrackingServer = "http://playertrackingbackend.azurewebsites.net";
// playerTrackingServer = "http://playerTrackingLogging.azurewebsites.net";



