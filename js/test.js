$(document).ready(function() {
  $("#cover").addClass("loaded")

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  console.log('windowWidth: ' + windowWidth);
  console.log('windowHeight: ' + windowHeight);

  // upper 별 배치
  for(var i=0; i<1000; i++) {
    // x 좌표
    var toLeft = Math.round(Math.random() * windowWidth);
    // y 좌표
    var toTop = Math.round((Math.random() * windowHeight) / 2);

    // star-sm 클래스 추가하고 속성으로 top과 left 값 랜덤으로 찍힌것 그대로 넣고
    // #upper 아이디 박스의 자식으로 넣기 이정도로 요약시키면 될듯 종종 써먹을 듯 하다.
    // 즉, 내가 조정한 요소를 원하는 박스의 안에 넣는 방법이라 보면 될 듯하다. $("<div/>")
    $("<div/>")
    .addClass("star-sm")
    .attr("style", "top: " + toTop + "px; left: " + toLeft + "px;")
    .appendTo("#upper");

    

    if(i % 5 == 0) {
      // 조건문 동작 부분이 똑같은거 아닌가?
      $("<div/>")
      .addClass("star-md")
      .attr("style", "top: " + toTop + "px; left: " +toLeft + "px;")
      .appendTo("#upper");
    } else if(i % 25 == 0) {
      $("<div/>")
      .addClass("star-lg")
      .attr("style", "top: " + toTop + "px; left: " +toLeft + "px;")
      .appendTo("#upper");
    } 
  } // upper 별 배치


  // lower 별 배치
  for(var i=0; i<500; i++) {
    // x 좌표
    var toLeft = Math.round(Math.random() * windowWidth);
    // y 좌표
    var toTop = Math.round((Math.random() * windowHeight) / 2);

    // ???
    $("<div/>")
    .addClass("star-sm")
    .attr("style", "top: " + toTop + "px; left: " + toLeft + "px;")
    .appendTo("#lower");

    if(i % 5 == 0) {
      // 조건문 동작 부분이 똑같은거 아닌가?
      $("<div/>")
      .addClass("star-md")
      .attr("style", "top: " + toTop + "px; left: " +toLeft + "px;")
      .appendTo("#lower");
    } else if(i % 25 == 0) {
      $("<div/>")
      .addClass("star-lg")
      .attr("style", "top: " + toTop + "px; left: " +toLeft + "px;")
      .appendTo("#lower");
    } 
  }


})