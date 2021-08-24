
    function openPage(evt, pageName) {
    let i, tabContent, tabLink;
    // Get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    }
    // Get all elements with class="tabLink" and remove the class "active"
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = "tabLink inactive";
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className = "tabLink active";
}
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();