function updateLaneColor(courseLocation, buttonSelected, colorSelected) {
    // colorSelected = document.getElementById(laneSelected).value;
    console.log(courseLocation, buttonSelected, colorSelected);
    var item;
    for (item in courseLocation) {
        if (courseLocation[item] === colorSelected) {courseLocation[item]='Teal'}
    }

    courseLocation[buttonSelected] = colorSelected;

    completeLanes = 0;
    totalLanes = 0;
      

    for (item in courseLocation) {
        totalLanes++;
        if (courseLocation[item] == 'Teal') {} else {completeLanes++};
        document.getElementById(item).style.backgroundColor = courseLocation[item];
        console.log('tweaking style' + item);
        document.getElementById(item).parentElement.children[1].style.display = "";

        if (courseLocation[item] === 'Yellow' || courseLocation[item] === 'White' ) {
            document.getElementById(item).style.color = "Black";
        } else {
            document.getElementById(item).style.color = "White";
        }
    }
    
    percentLanesComplete = Math.round(completeLanes / totalLanes * 100) + '%';
    console.log('completeLanes ', completeLanes);
    console.log('totalLanes ', totalLanes);
    console.log('%Complete ', percentLanesComplete);
    // document.getElementById("progressBar").style.width = percentLanesComplete;
    // document.getElementById("progressBar").innerHTML = percentLanesComplete;
};

function saveRaceData() {
    raceData.username = document.getElementById('usernameInput').value;
    raceData.event = document.getElementById('eventInput').value;
    raceData.gender = document.getElementById('raceGenderInput').value;
    raceData.phaseID = document.getElementById('racePhaseInput').value;
    raceData.raceCodex = document.getElementById('raceCodexInput').value;
    raceData.temp = document.getElementById('tempInput').value;
    raceData.precip = document.getElementById('precipInput').value;
    console.log('RaceDATA '+ raceData);

    postStatusUpdate('raceData','saveRaceDataButton', 'Race Data Saved');
};

function saveStartData() {

    racePositionComplete = (start.startLane1 != 'Teal') && (start.startLane2 != 'Teal') && (start.startLane3 != 'Teal') && (start.startLane4 != 'Teal') && (start.startLane5 != 'Teal') && (start.startLane6 != 'Teal');
    if (!racePositionComplete) {return}

    switch (start.startLane1) {
        case "Red" : raceData.bibRedStartLane = 1; break;
        case "Green" : raceData.bibGreenStartLane = 1; break;
        case "Blue" : raceData.bibBlueStartLane = 1; break;
        case "Yellow" : raceData.bibYellowStartLane = 1; break;
        case "Black" : raceData.bibBlackStartLane = 1; break;
        case "White" : raceData.bibWhiteStartLane = 1;
    }
    switch (start.startLane2) {
        case "Red" : raceData.bibRedStartLane = 2; break;
        case "Green" : raceData.bibGreenStartLane = 2; break;
        case "Blue" : raceData.bibBlueStartLane = 2; break;
        case "Yellow" : raceData.bibYellowStartLane = 2; break;
        case "Black" : raceData.bibBlackStartLane = 2; break;
        case "White" : raceData.bibWhiteStartLane = 2;
    }
    switch (start.startLane3) {
        case "Red" : raceData.bibRedStartLane = 3; break;
        case "Green" : raceData.bibGreenStartLane = 3; break;
        case "Blue" : raceData.bibBlueStartLane = 3; break;
        case "Yellow" : raceData.bibYellowStartLane = 3; break;
        case "Black" : raceData.bibBlackStartLane = 3; break;
        case "White" : raceData.bibWhiteStartLane = 3;
    }
    switch (start.startLane4) {
        case "Red" : raceData.bibRedStartLane = 4; break;
        case "Green" : raceData.bibGreenStartLane = 4; break;
        case "Blue" : raceData.bibBlueStartLane = 4; break;
        case "Yellow" : raceData.bibYellowStartLane = 4; break;
        case "Black" : raceData.bibBlackStartLane = 4; break;
        case "White" : raceData.bibWhiteStartLane = 4;
    }
    switch (start.startLane5) {
        case "Red" : raceData.bibRedStartLane = 5; break;
        case "Green" : raceData.bibGreenStartLane = 5; break;
        case "Blue" : raceData.bibBlueStartLane = 5; break;
        case "Yellow" : raceData.bibYellowStartLane = 5; break;
        case "Black" : raceData.bibBlackStartLane = 5; break;
        case "White" : raceData.bibWhiteStartLane = 5;
    }
    switch (start.startLane6) {
        case "Red" : raceData.bibRedStartLane = 6; break;
        case "Green" : raceData.bibGreenStartLane = 6; break;
        case "Blue" : raceData.bibBlueStartLane = 6; break;
        case "Yellow" : raceData.bibYellowStartLane = 6; break;
        case "Black" : raceData.bibBlackStartLane = 6; break;
        case "White" : raceData.bibWhiteStartLane = 6;
    }
    console.log('startDATA '+ raceData);

    postStatusUpdate('startData','saveStartButton', 'Race Data Saved');
};

function saveHoleData() {


    racePositionComplete = (hole.hole1stPlace != 'Teal') && (hole.hole2ndPlace != 'Teal') && (hole.hole3rdPlace != 'Teal') 
    && (hole.hole4thPlace != 'Teal') && (hole.hole5thPlace != 'Teal') && (hole.hole6thPlace != 'Teal');
    if (!racePositionComplete) {return} 

    switch (hole.hole1stPlace) {
        case "Red" : raceData.bibRedHolePosition = 1; break;
        case "Green" : raceData.bibGreenHolePosition = 1; break;
        case "Blue" : raceData.bibBlueHolePosition = 1; break;
        case "Yellow" : raceData.bibYellowHolePosition = 1; break;
        case "Black" : raceData.bibBlackHolePosition = 1; break;
        case "White" : raceData.bibWhiteHolePosition = 1;
    }
    switch (hole.hole2ndPlace) {
        case "Red" : raceData.bibRedHolePosition = 2; break;
        case "Green" : raceData.bibGreenHolePosition = 2; break;
        case "Blue" : raceData.bibBlueHolePosition = 2; break;
        case "Yellow" : raceData.bibYellowHolePosition = 2; break;
        case "Black" : raceData.bibBlackHolePosition = 2; break;
        case "White" : raceData.bibWhiteHolePosition = 2;
    }
    switch (hole.hole3rdPlace) {
        case "Red" : raceData.bibRedHolePosition = 3; break;
        case "Green" : raceData.bibGreenHolePosition = 3; break;
        case "Blue" : raceData.bibBlueHolePosition = 3; break;
        case "Yellow" : raceData.bibYellowHolePosition = 3; break;
        case "Black" : raceData.bibBlackHolePosition = 3; break;
        case "White" : raceData.bibWhiteHolePosition = 3;
    }
    switch (hole.hole4thPlace) {
        case "Red" : raceData.bibRedHolePosition = 4; break;
        case "Green" : raceData.bibGreenHolePosition = 4; break;
        case "Blue" : raceData.bibBlueHolePosition = 4; break;
        case "Yellow" : raceData.bibYellowHolePosition = 4; break;
        case "Black" : raceData.bibBlackHolePosition = 4; break;
        case "White" : raceData.bibWhiteHolePosition = 4;
    }
    switch (hole.hole5thPlace) {
        case "Red" : raceData.bibRedHolePosition = 5; break;
        case "Green" : raceData.bibGreenHolePosition = 5; break;
        case "Blue" : raceData.bibBlueHolePosition = 5; break;
        case "Yellow" : raceData.bibYellowHolePosition = 5; break;
        case "Black" : raceData.bibBlackHolePosition = 5; break;
        case "White" : raceData.bibWhiteHolePosition = 5;
    }
    switch (hole.hole6thPlace) {
        case "Red" : raceData.bibRedHolePosition = 6; break;
        case "Green" : raceData.bibGreenHolePosition = 6; break;
        case "Blue" : raceData.bibBlueHolePosition = 6; break;
        case "Yellow" : raceData.bibYellowHolePosition = 6; break;
        case "Black" : raceData.bibBlackHolePosition = 6; break;
        case "White" : raceData.bibWhiteHolePosition = 6;
    }

    console.log('holeDATA '+ raceData);

    postStatusUpdate('holeData','saveHoleButton', 'Race Data Saved');
};

function saveSplitData() {

    racePositionComplete = (split1.split11stPlace != 'Teal') && (split1.split12ndPlace != 'Teal') && (split1.split13rdPlace != 'Teal') 
    && (split1.split14thPlace != 'Teal') && (split1.split15thPlace != 'Teal') && (split1.split16thPlace != 'Teal');
    if (!racePositionComplete) {return}

    switch (split1.split11stPlace) {
        case "Red" : raceData.bibRedSplitPosition = 1; break;
        case "Green" : raceData.bibGreenSplitPosition = 1; break;
        case "Blue" : raceData.bibBlueSplitPosition = 1; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 1; break;
        case "Black" : raceData.bibBlackSplitPosition = 1; break;
        case "White" : raceData.bibWhiteSplitPosition = 1;
    }
    switch (split1.split12ndPlace) {
        case "Red" : raceData.bibRedSplitPosition = 2; break;
        case "Green" : raceData.bibGreenSplitPosition = 2; break;
        case "Blue" : raceData.bibBlueSplitPosition = 2; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 2; break;
        case "Black" : raceData.bibBlackSplitPosition = 2; break;
        case "White" : raceData.bibWhiteSplitPosition = 2;
    }
    switch (split1.split13rdPlace) {
        case "Red" : raceData.bibRedSplitPosition = 3; break;
        case "Green" : raceData.bibGreenSplitPosition = 3; break;
        case "Blue" : raceData.bibBlueSplitPosition = 3; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 3; break;
        case "Black" : raceData.bibBlackSplitPosition = 3; break;
        case "White" : raceData.bibWhiteSplitPosition = 3;
    }
    switch (split1.split14thPlace) {
        case "Red" : raceData.bibRedSplitPosition = 4; break;
        case "Green" : raceData.bibGreenSplitPosition = 4; break;
        case "Blue" : raceData.bibBlueSplitPosition = 4; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 4; break;
        case "Black" : raceData.bibBlackSplitPosition = 4; break;
        case "White" : raceData.bibWhiteSplitPosition = 4;
    }
    switch (split1.split15thPlace) {
        case "Red" : raceData.bibRedSplitPosition = 5; break;
        case "Green" : raceData.bibGreenSplitPosition = 5; break;
        case "Blue" : raceData.bibBlueSplitPosition = 5; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 5; break;
        case "Black" : raceData.bibBlackSplitPosition = 5; break;
        case "White" : raceData.bibWhiteSplitPosition = 5;
    }
    switch (split1.split16thPlace) {
        case "Red" : raceData.bibRedSplitPosition = 6; break;
        case "Green" : raceData.bibGreenSplitPosition = 6; break;
        case "Blue" : raceData.bibBlueSplitPosition = 6; break;
        case "Yellow" : raceData.bibYellowSplitPosition = 6; break;
        case "Black" : raceData.bibBlackSplitPosition = 6; break;
        case "White" : raceData.bibWhiteSplitPosition = 6;
    }

    console.log('splitDATA '+ raceData);

    postStatusUpdate('splitData','saveSplitButton', 'Race Data Saved');
};

function saveFinishData() {

    racePositionComplete = (finish.finish1stPlace != 'Teal') && (finish.finish2ndPlace != 'Teal') && (finish.finish3rdPlace != 'Teal') 
    && (finish.finish4thPlace != 'Teal') && (finish.finish5thPlace != 'Teal') && (finish.finish6thPlace != 'Teal');
    if (!racePositionComplete) {return}

    switch (finish.finish1stPlace) {
        case "Red" : raceData.bibRedFinishPosition = 1; break;
        case "Green" : raceData.bibGreenFinishPosition = 1; break;
        case "Blue" : raceData.bibBlueFinishPosition = 1; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 1; break;
        case "Black" : raceData.bibBlackFinishPosition = 1; break;
        case "White" : raceData.bibWhiteFinishPosition = 1;
    }
    switch (finish.finish2ndPlace) {
        case "Red" : raceData.bibRedFinishPosition = 2; break;
        case "Green" : raceData.bibGreenFinishPosition = 2; break;
        case "Blue" : raceData.bibBlueFinishPosition = 2; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 2; break;
        case "Black" : raceData.bibBlackFinishPosition = 2; break;
        case "White" : raceData.bibWhiteFinishPosition = 2;
    }
    switch (finish.finish3rdPlace) {
        case "Red" : raceData.bibRedFinishPosition = 3; break;
        case "Green" : raceData.bibGreenFinishPosition = 3; break;
        case "Blue" : raceData.bibBlueFinishPosition = 3; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 3; break;
        case "Black" : raceData.bibBlackFinishPosition = 3; break;
        case "White" : raceData.bibWhiteFinishPosition = 3;
    }
    switch (finish.finish4thPlace) {
        case "Red" : raceData.bibRedFinishPosition = 4; break;
        case "Green" : raceData.bibGreenFinishPosition = 4; break;
        case "Blue" : raceData.bibBlueFinishPosition = 4; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 4; break;
        case "Black" : raceData.bibBlackFinishPosition = 4; break;
        case "White" : raceData.bibWhiteFinishPosition = 4;
    }
    switch (finish.finish5thPlace) {
        case "Red" : raceData.bibRedFinishPosition = 5; break;
        case "Green" : raceData.bibGreenFinishPosition = 5; break;
        case "Blue" : raceData.bibBlueFinishPosition = 5; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 5; break;
        case "Black" : raceData.bibBlackFinishPosition = 5; break;
        case "White" : raceData.bibWhiteFinishPosition = 5;
    }
    switch (finish.finish6thPlace) {
        case "Red" : raceData.bibRedFinishPosition = 6; break;
        case "Green" : raceData.bibGreenFinishPosition = 6; break;
        case "Blue" : raceData.bibBlueFinishPosition = 6; break;
        case "Yellow" : raceData.bibYellowFinishPosition = 6; break;
        case "Black" : raceData.bibBlackFinishPosition = 6; break;
        case "White" : raceData.bibWhiteFinishPosition = 6;
    }

    console.log('finishDATA '+ raceData);

    postStatusUpdate('finishData','saveFinishButton', 'Race Data Saved');
};