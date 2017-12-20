function updateLaneColor(courseLocation, laneSelected, colorSelected) {
    // colorSelected = document.getElementById(laneSelected).value;
    console.log(courseLocation, laneSelected, colorSelected);
    refreshLaneButtonBackgrounds(courseLocation);
    // start.laneSelected = colorSelected;
    document.getElementById(laneSelected).style.backgroundColor = colorSelected;
    
};


function refreshLaneButtonBackgrounds(courseLocation) {
    document.getElementById("buttonLane1").style.backgroundColor = start.buttonLane1;
    document.getElementById("buttonLane2").style.backgroundColor = start.buttonLane2;
    document.getElementById("buttonLane3").style.backgroundColor = start.buttonLane3;
    document.getElementById("buttonLane4").style.backgroundColor = start.buttonLane4;
    document.getElementById("buttonLane5").style.backgroundColor = start.buttonLane5;
    document.getElementById("buttonLane6").style.backgroundColor = start.buttonLane6;
}
