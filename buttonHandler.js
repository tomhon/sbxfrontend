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
    document.getElementById("progressBar").style.width = percentLanesComplete;
    document.getElementById("progressBar").innerHTML = percentLanesComplete;
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

    console.log('startDATA '+ raceData);

    postStatusUpdate('startData','saveStartButton', 'Race Data Saved');
};

function saveHoleData() {

    console.log('holeDATA '+ raceData);

    postStatusUpdate('holeData','saveHoleButton', 'Race Data Saved');
};

function saveSplitData() {

    console.log('splitDATA '+ raceData);

    postStatusUpdate('splitData','saveSplitButton', 'Race Data Saved');
};

function saveFinishData() {

    console.log('finishDATA '+ raceData);

    postStatusUpdate('finishData','saveFinishButton', 'Race Data Saved');
};