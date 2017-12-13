function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    }
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    }
function hideAllInputContainers() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("raceSetupContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "none";
    document.getElementById("holeContainer").style.display = "none";
    document.getElementById("split1Container").style.display = "none";
    document.getElementById("finishContainer").style.display = "none";
    document.getElementById("dashboardContainer").style.display = "none";
    };
function showRaceSetupContainer() {
    hideAllInputContainers();
    document.getElementById("raceSetupContainer").style.display = "block";
    }
function showStartContainer() {
    hideAllInputContainers()
    document.getElementById("startContainer").style.display = "block";
    }
function showHoleContainer() {
    hideAllInputContainers();
    document.getElementById("holeContainer").style.display = "block";
    }
function showSplit1Container() {
    hideAllInputContainers();
    document.getElementById("split1Container").style.display = "block";
    }
function showFinishContainer() {
    hideAllInputContainers();
    document.getElementById("finishContainer").style.display = "block";
    }
function showDashboardContainer() {
    hideAllInputContainers();
    document.getElementById("dashboardContainer").style.display = "block";
    }