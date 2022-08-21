function addContact(id, refreshCallback) {
    refreshCallback();
}

function refreshContactList() {
    alert('Hello World');
}

addContact(1, refreshContactList);


// Q.2 : What’s the difference between window.onload vs document.onload?
// document.onload
// It gets fired prior to loading of images and other external content. document.onload event is fired before the window.onload.
// window.onload
// It gets fired when the complete page loads, which includes images, scripts, css, etc.

var imgObj = null;
         
function init() {
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative';
   imgObj.style.left = '0px';
}

function moveRight() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload =init;

//Q.3 :  What’s the fastest way to query DOM?
// Ans : The fastest way to get the DOM element is to use pure JavaScript and calling it by ID.
