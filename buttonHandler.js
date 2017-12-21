function updateLaneColor(courseLocation, buttonSelected, colorSelected) {
    // colorSelected = document.getElementById(laneSelected).value;
    console.log(courseLocation, buttonSelected, colorSelected);
    var item;
    for (item in courseLocation) {
        if (courseLocation[item] === colorSelected) {courseLocation[item]='teal'}
    }

    courseLocation[buttonSelected] = colorSelected;
    
    for (item in courseLocation) {
        document.getElementById(item).style.backgroundColor = courseLocation[item];
        if (courseLocation[item] === 'Yellow' || courseLocation[item] === 'White' ) {
            document.getElementById(item).style.color = "Black";
        } else {
            document.getElementById(item).style.color = "White";
        }
    }

};

