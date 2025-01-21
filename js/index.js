$(document).ready(function(){
  let sec_width = $(window).innerWidth();
  let sec_height = $(window).innerHeight();

  let sec_1_top = $('#sec_1').offset().top;
  let sec_1_bot = $('#sec_1').offset().top + $('#sec_1').height();

  let sec_2_top = $('#sec_2').offset().top;
  let sec_2_bot = $('#sec_2').offset().top + $('#sec_2').height();

  let sec_3_top = $('#sec_3').offset().top;
  let sec_3_bot = $('#sec_3').offset().top + $('#sec_3').height();
  let sec_3_result = false;

  let sec_4_top = $('#sec_4').offset().top;
  let sec_4_bot = $('#sec_4').offset().top + $('#sec_4').height();

  let sec_5_top = $('#sec_5').offset().top;
  let sec_5_bot = $('#sec_5').offset().top + $('#sec_5').height();


  let windowWidth = $(window).width();
  let windowHeight = $(window).height();

  // upper 별 배치
  for(let i=0; i<800; i++) {
    // x 좌표
    let toLeft = Math.round(Math.random() * windowWidth);
    // y 좌표
    let toTop = Math.round((Math.random() * windowHeight) / 2);

    // ???
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


  // 섹션 높이와 너비 화면에 맞게 지정
  function sec_result() {
    $('.sec').css({
        width : sec_width,
        height : sec_height
    })
  }

  // *********** resize 함수 ***********
  $(window).resize(function() {
    sec_width = $(window).innerWidth();
    sec_height = $(window).innerHeight();
    sec_result();
    // sec_polrfolio();

    // 화면 1500일때 포폴 섹션 높이 주기
    if($(window).width() + 17 <= 1500) {
      $('#sec_4').css({ height: '1500px'})
      $('#sec_4_1').css({ height: '1500px'})
    }
    if($(window).width() + 17 <= 1045) {
      $('#sec_4').css({ height: '1290px'})
      $('#sec_4_1').css({ height: '1290px'})
    }
  });

  function menu_item_color() {
    for(let i=0; i<$('.menu_item').length; i++) {
      $('.menu_item').eq(i).css({ color: '#000' })
      $('.menu_item_2').eq(i).css({ color: '#000' })
    }
  }


  // skill 게이지 파트
  // *********** scroll 함수 ***********
  $(window).scroll(function() {
    // let win_scroll_result = $(window).scrollTop(); 안됌

    // let w_top = $(window).scrollTop(); 계속 갱신되서 if문이 끝없이 돌아가 수정
    // skill 파트에 근접할 시 동작
    if($(window).scrollTop() >= sec_3_top - 400 && sec_3_result == false) {
      gauge();
      sec_3_result = true;
    }

    // 섹션에 있을 시 해당 섹션 메뉴에 색 입히기
    if($(window).scrollTop() >= sec_1_top && $(window).scrollTop() <= sec_1_bot) {
      menu_item_color();
      $('.menu_item').eq(0).css({ color: '#FF748B'})
      $('.menu_item_2').eq(0).css({ color: '#FF748B'})
    }
    else if($(window).scrollTop() >= sec_2_top && $(window).scrollTop() <= sec_2_bot) {
      menu_item_color();
      $('.menu_item').eq(1).css({ color: '#FF748B'})
      $('.menu_item_2').eq(1).css({ color: '#FF748B'})
    }
    else if($(window).scrollTop() >= sec_3_top && $(window).scrollTop() <= sec_3_bot) {
      menu_item_color();
      $('.menu_item').eq(2).css({ color: '#FF748B'})
      $('.menu_item_2').eq(2).css({ color: '#FF748B'})
    }
    else if($(window).scrollTop() >= sec_4_top && $(window).scrollTop() <= sec_4_bot - 50) {
      menu_item_color();
      $('.menu_item').eq(3).css({ color: '#FF748B'})
      $('.menu_item_2').eq(3).css({ color: '#FF748B'})
    }
    else if($(window).scrollTop() + 100 >= sec_5_top) {
      console.log("sec_5 test ")
      menu_item_color();
      $('.menu_item').eq(4).css({ color: '#FF748B'})
      $('.menu_item_2').eq(4).css({ color: '#FF748B'})
    }
  })

  // 스킬 게이지 바 함수
  function gauge() {
    let gauge_score = [75, 90, 70, 80, 70, 90, 70, 75];
    let gauge_time = 10;
    let gauge_interval = new Array(gauge_score.length);

    for(let i=0; i<gauge_interval.length; i++) {
      let tmp_score = 0;

      $('.var').eq(i).css({ width: `${gauge_score[i]}%` });

      gauge_interval[i] = setInterval(function() {
        $('.percent').eq(i).text(tmp_score + "%");

        if(tmp_score >= gauge_score[i])
          clearInterval(gauge_interval[i]);

        if(tmp_score % 5 == 0)
          gauge_time++;

        tmp_score += 1;
      }, gauge_time);
    }
  }


  // 헤더 메뉴 클릭시 해당되는 섹션으로 이동
  $('.menu_item > a').click(function() {

    // a태그의 기본 기능 없애기(섹션 순간 깜빡임 제거)
    event.preventDefault();
    
    let href = $(this).attr('href');
    let o_pos = $(href).offset().top;

    console.log('href: ' + href);
    console.log('o_pos: ' + o_pos);

    $('html, body').animate({
      scrollTop: o_pos
    }, 500);
  })

  $('.menu_item_2 > a').click(function() {

    // a태그의 기본 기능 없애기(섹션 순간 깜빡임 제거)
    event.preventDefault();
    
    let href = $(this).attr('href');
    let o_pos = $(href).offset().top;

    console.log('href: ' + href);
    console.log('o_pos: ' + o_pos);

    $('html, body').animate({
      scrollTop: o_pos
    }, 500);
  })


  $('.contact2').click(function() {
    location: 'https://open.kakao.com/o/sDGghkxg'
  }) 

})