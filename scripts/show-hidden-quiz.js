var button =document.getElementById('quiz-step-1-go-button');
button.onclick=function(){
    var firstStepDiv=document.getElementById('quiz-step-1');
    var secondStepDiv=document.getElementById('quiz-step-2');
    if (firstStepDiv.style.display !== 'none') {
        firstStepDiv.style.display = 'none';
        secondStepDiv.style.display='block';
    }
    else {
        firstStepDiv.style.display = 'block';
    }
}
v
////Test code
//var answersArr = ["a1", "a2", "a3"];
//var answersParent = null;
//
//var map = {
//    "a1": "dl-answers-1",
//    "a2": "dl-answers-2"
//};
//
//if (answersArr.length == 3) {
//    $(answersParent).addClass(map["a1"]);
//    removeAllAnswerClasses();
//}
//
//var step1 = $("...");
//
//step1.addClass("is-active");
//
//if (step1.hasClass("is-active")) {
//    //do it
//}
//
//function removeAllAnswerClasses() {
//    for (...) {
//        curElement.removeClass("...");
//    }
