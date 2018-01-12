function initializeDataStructures() {

start = {
    'startLane1' : "Teal",
    'startLane2' : "Teal",
    'startLane3' : "Teal",
    'startLane4' : "Teal",
    'startLane5' : "Teal",
    'startLane6' : "Teal",
}

hole = {
    'hole1stPlace' : "Teal",
    'hole2ndPlace' : "Teal",
    'hole3rdPlace' : "Teal",
    'hole4thPlace' : "Teal",
    'hole5thPlace' : "Teal",
    'hole6thPlace' : "Teal",
}

split1 = {
    'split11stPlace' : "Teal",
    'split12ndPlace' : "Teal",
    'split13rdPlace' : "Teal",
    'split14thPlace' : "Teal",
    'split15thPlace' : "Teal",
    'split16thPlace' : "Teal",
}

finish = {
    'finish1stPlace' : "Teal",
    'finish2ndPlace' : "Teal",
    'finish3rdPlace' : "Teal",
    'finish4thPlace' : "Teal",
    'finish5thPlace' : "Teal",
    'finish6thPlace' : "Teal",
}

raceData = {
    'user': 'testUser',
    'raceCodex' : '',
    'phaseID': 'Heat1', //Heat1, Heat2, Heat3, Heat4, Heat5, Heat6, Quarter1, Quarter2, Quarter3, Quarter4, Semi1, Semi2, Final
    'sport': 'Snowboarding',
    'event': '', //Name of the venue and/or race
    'temp': 0, //celcius
    'precip': 'None', //None, Rain, Light Snow, Heavy Snow
    'gender': 'Women',
    'bibRedStartLane'           : 0,
    'bibGreenStartLane'         : 0,
    'bibBlueStartLane'          : 0,
    'bibYellowStartLane'        : 0,
    'bibBlackStartLane'         : 0,
    'bibWhiteStartLane'         : 0,
    'bibRedHolePosition'        : 0,
    'bibGreenHolePosition'      : 0,
    'bibBlueHolePosition'       : 0,
    'bibYellowHolePosition'     : 0,
    'bibBlackHolePosition'      : 0,
    'bibWhiteHolePosition'      : 0,
    'bibRedSplitPosition'       : 0,
    'bibGreenSplitPosition'     : 0,
    'bibBlueSplitPosition'      : 0,
    'bibYellowSplitPosition'    : 0,
    'bibBlackSplitPosition'     : 0,
    'bibWhiteSplitPosition'     : 0,
    'bibRedFinishPosition'      : 0,
    'bibGreenFinishPosition'    : 0,
    'bibBlueFinishPosition'     : 0,
    'bibYellowFinishPosition'   : 0,
    'bibBlackFinishPosition'    : 0,
    'bibWhiteFinishPosition'    : 0
    }
    var date = new Date();
    raceData.raceCodex = "R" + date.getHours().toString() + date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();
    document.getElementById('raceCodexInput').value = raceData.raceCodex;
;    console.log('Race Data Cleared');

showRaceSetupContainer();

};