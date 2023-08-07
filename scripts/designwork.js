function showWork(item) {
    let options = document.getElementsByClassName("design-work-option")
    for (i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    var window = document.getElementById(item);
    window.style.display = "grid"
}

function closeWork() {
    let options = document.getElementsByClassName("design-work-option")
    for (i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
}