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



