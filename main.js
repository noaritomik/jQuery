$(window).ready(function () {
    // alert("It is working")
});

var testIdJs = document.getElementById("testId")
var testClassJs = document.getElementsByClassName("testClass")
var testh1 = document.getElementsByTagName("h1");

console.log(testIdJs)
console.log(testClassJs)
console.log(testh1)
console.log("----------------")
console.log($('h1'))
console.log($('.testClass'))
console.log($('#testId'))
console.log("----------------")
console.log($('a.test:first'))
console.log($('tr:odd'))
console.log($('#form :input'))


$('li').click(function () {
    alert("clicked")
});

//keydown
//keypress
//keyup
//mouseover
//mouseout
//focus
//resize

$('#btn').click(function () {
    console.log("test")
    console.log($('#h1').text())
    $('#h1').text("New text")
    $('#h1').append("Appended text")
})