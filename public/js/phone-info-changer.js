var requestURL = '/mock/phones-info.json';

var requestJSON = new XMLHttpRequest();

requestJSON.open('GET', requestURL);
requestJSON.responseType = 'json';
requestJSON.send();

var phonesInfo;

requestJSON.onload = function() {
    phonesInfo = requestJSON.response;

    var phoneColorsPicker = document.querySelectorAll('.phone-colors');

    phoneColorsPicker.forEach(function(colorsList) {
        colorsList.onmouseover = colorsEventOverHandler;
        colorsList.onmouseout = colorsEventOutHandler;
        colorsList.onclick = colorsEventOverHandler;
    })

};

var currentElem = null;

function colorsEventOverHandler (event) {
    if (currentElem) {
        return;
    }

    var target = event.target;

    while (target != this) {
        if (target.tagName == 'LABEL') break;
        target = target.parentNode;
    }

    if (target == this) return;

    currentElem = target;
    if(target.htmlFor !== undefined) {
        document.getElementById(target.htmlFor).checked = true;
        changePhoneCard(target.htmlFor);
    }
}

function colorsEventOutHandler (event) {
    if (!currentElem) return;

    var relatedTarget = event.relatedTarget;
    if (relatedTarget) {
        while (relatedTarget) {
            if (relatedTarget == currentElem) return;
            relatedTarget = relatedTarget.parentNode;
        }
    }
    currentElem = null;
}

function changePhoneCard(colorId) {
    var colorsIdComponents = colorId.split('-');

    // here we take name of color
    var color = colorsIdComponents[1];
    // here we take number of color
    var elementNumber = colorsIdComponents[2];

    document.getElementById('phone-image-' + elementNumber).src = phonesInfo[color].imgURL;
    document.getElementById('color-name-' + elementNumber).innerText = phonesInfo[color].colorName;
}

/* <-- search button logic */
document.addEventListener('DOMContentLoaded', function(){

    var toggleButton = document.querySelector("#search-toggle-btn");
    var searchWrap = document.querySelector(".search-wrap");
    var searchField = document.querySelector(".search-field");
    var btnToggleState = false;

    if(toggleButton !== null) {
        toggleButton.addEventListener('click', function () {
            if(btnToggleState === false) {
                searchWrap.classList.add('active');
                searchField.classList.add('active');
                btnToggleState = true;
            } else {
                searchWrap.classList.remove('active');
                searchField.classList.remove('active');
                btnToggleState = false;
            }
        })
    }

});
/* search button logic --> */