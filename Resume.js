function button() {
    var btn = document.getElementsByClassName('btn');
    if (btn) {
        addEventListener('click', function () {
            alert("Button CLicked, You are directing to the next page");
        });
    }
}
button();
