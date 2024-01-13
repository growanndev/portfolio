$(function () {
  /* 커스텀 cursor */
  const cursor = document.querySelector(".cursor");

  const animateCursor = (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  };
  window.addEventListener("mousemove", animateCursor);

  /* 로드 페이지 */
  setTimeout(function () {
    $(".load-page").css({ display: "none" });
    setTimeout(function () {
      $(".wrap").css({ overflow: "visible" });
    }, 200);
    // $('.load-page').stop().animate({opacity:0},100, function(){
    //     $('.wrap').css({overflow:'visible'});
    // })
  }, 1400);

  /* 햄버거바 클릭하면 메뉴 페이지 나옴 */
  let hamClick = 0;
  $(".ham-menu").click(function () {
    /* 햄버거바 변화 */
    // $(this).toggleClass("on");
    // if (hamClick == 0) {
    //   $(".ham-menu p").text("CLOSE");
    //   hamClick = 1;
    //   //console.log(hamClick);
    // } else {
    //   $(".ham-menu p").text("MENU");
    //   hamClick = 0;
    // }
    if (hamClick == 0) {
      $(".wrap>.header").stop().animate({ opacity: 0 });
      hamClick = 1;
    } else {
      setTimeout(function () {
        $(".wrap>.header").stop().animate(
          {
            opacity: 1,
          },
          1000
        );
      }, 500);
      hamClick = 0;
    }
    $(".menu-page").toggleClass("active");
  });

  //로드 페이지 약 1600 소요
  // 로드 페이지 후 비주얼 부분 나오는 효과
  setTimeout(function () {
    $(".right").addClass("on");
    $(".left").addClass("on");
    // $(".header").stop().animate({ opacity: 1 }, 1000);

    // $('.visual-main-text').stop().animate({opacity:1});
  }, 1700);

  /* con2 skill-list 마우스 올리면 늘어나며 내용 보이는 효과 */
  $(".skill-list li").mouseenter(function () {
    $(".skill-list li").removeClass("active");
    $(this).addClass("active");
  });

  $(".skill-list li").mouseleave(function () {
    $(".skill-list li").removeClass("active");
  });

  /* con3 포트폴리오 기획안 모달박스 */
  $(".plan1").click(function () {
    $(".p-modal1").css({ display: "block" });
    $("body").css({ overflowY: "hidden" });
  });

  $(".plan2").click(function () {
    $(".p-modal2").css({ display: "block" });
    $("body").css({ overflowY: "hidden" });
  });

 



/* close 클릭하면 모든 모달 display:none; */
  $(".close").click(function () {
    $(".modal-wrap").css({ display: "none" });
    $("body").css({ overflowY: "auto" });
  });


/* artbox 모달박스 */

$('.artbox').click(function(){
  let idx = $(this).index();
//  console.log(idx);
  $('.con4 .modal-wrap').eq(idx).css({
    display:'flex'
  })
})


  /* 스크롤 제어 */
  /* 스크롤 제어 */
  /* 스크롤 제어 */
  /* 스크롤 제어 */

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    // console.log(scroll);

    // 스크롤 함수안에 넣으면 됨
    let baseline = -350;
    let visual_bar = $(".visual-bar-wrap").offset().top;
    let con1 = $(".con1").offset().top;
    let con2 = $(".con2").offset().top + baseline;
    let con3 = $(".con3").offset().top + baseline;
    let con4 = $(".con4").offset().top + baseline;
    let con5 = $(".con5").offset().top + baseline;

    // 스크롤하면 헤더 나옴
    $(".header").stop().animate({ opacity: 1 }, 500);

    // 메뉴 페이지에서 메뉴 누르면 메뉴 페이지 들어가고
    // 해당 페이지로 스크롤 됨

    $(".menu-page>h2").click(function () {
      $(".menu-page").removeClass("active");
      setTimeout(function () {
        $(".wrap>.header").stop().animate(
          {
            opacity: 1,
          },
          1000
        );
      }, 500);
      hamClick = 0;
    });
    $(".menu-page>h2:nth-of-type(1)").click(function () {
      $("html")
        .stop()
        .animate({ scrollTop: con1 + 10 + "px" }, 800);
    });

    $(".menu-page>h2:nth-of-type(2)").click(function () {
      $("html")
        .stop()
        .animate({ scrollTop: con2 + 150 + "px" }, 800);
    });

    $(".menu-page>h2:nth-of-type(3)").click(function () {
      $("html")
        .stop()
        .animate({ scrollTop: con3 - baseline + "px" }, 800);
    });

    $(".menu-page>h2:nth-of-type(4)").click(function () {
      $("html")
        .stop()
        .animate({ scrollTop: con4 - baseline + "px" }, 800);
    });

    $(".menu-page>h2:nth-of-type(5)").click(function () {
      $("html")
        .stop()
        .animate({ scrollTop: con5 - baseline + "px" }, 800);
    });

    /*  visual 스크롤 제어  */
    /*  visual 스크롤 제어  */
    /* 스크롤 위치에 오면 visual-bar 쌓임 */

    if (scroll > visual_bar + baseline - 300) {
      // visual bar 시간차 두고 쌓이는 효과!!!!!
      $(".bar4").addClass("on");
      setTimeout(function () {
        $(".bar3").addClass("on");
      }, 400);
      setTimeout(function () {
        $(".bar2").addClass("on");
      }, 700);
      setTimeout(function () {
        $(".bar1").addClass("on");
      }, 1200);
    }

    if (scroll > visual_bar) {
      $(".visual>h3").addClass("on");
    }

    if (scroll > visual_bar + 300) {
      $(".circle-arrow").addClass("up");
    }

    /* visual_ main text 스크롤에 따라 움직임 */

    $(".right").css({ transform: `translateX(${scroll}px)` });
    $(".left").css({ transform: `translateX(-${scroll}px)` });

    /* con1 메인텍스트 about me 하나씩 올라옴 */
    if (scroll > con1 + baseline) {
      $(".con1-main-text h2:nth-of-type(1) span").each(function (
        index,
        element
      ) {
        setTimeout(function () {
          $(element).addClass("on");
        }, index * 200);
      });
      setTimeout(function () {
        $(".con1-main-text h2:nth-of-type(2) span").addClass("on");
      }, 1000);
    }

    if (scroll > con1) {
      /* header 색상 바뀌는 효과 */
      $(".header").addClass("color");
    } else {
      $(".header").removeClass("color");
    }

    /* con1 timeline 하나씩 나오는 효과 */
    let con1_content = $(".con1-content").offset().top;
    if (scroll > con1_content + 100) {
      $(".con1-timeline li").each(function (index, element) {
        setTimeout(function () {
          $(element).addClass("on");
        }, index * 400);
      });
    }

    /* con2 스크롤 효과 */

    // if (scroll > con2) {
    //   $(".con2").addClass("on");
    // }
    /* con2 배경색 바뀜 효과 */
    if (scroll > con2 - 150 && scroll < con3) {
      //   $("body").addClass("black");
      $("body").css({ backgroundColor: "#000" });
      setTimeout(function () {
        $(".con2").addClass("on");
      }, 500);
      //타임라인 배경 바뀌기
      $(".con1-timeline").css({ backgroundColor: "#000" });
      //글자색 바뀌기 (눈 아픔 방지)
      $(".skill-list li h4").css({ color: "#ccc" });
      /* header 색상 바뀌는 효과 */
      $(".header").removeClass("color");
    } else {
      //   $("body").removeClass("black");
      $("body").css({ backgroundColor: "transparent" });
      $(".con1-timeline").css({ backgroundColor: "#f4f4f4" });
      $(".skill-list li h4").css({ color: "#fff" });
    }

    /* con3 스크롤 효과 */

    if (scroll > con3) {
      /* header 색상 바뀌는 효과 */
      $(".header").addClass("color");
    }

    let port1 = $(".port1").offset().top;
    let port2 = $(".port2").offset().top;
    let port3 = $(".port3").offset().top;

    if (scroll > port1 + baseline) {
      $(".port1").addClass("on");
    }
    if (scroll > port2 + baseline) {
      $(".port2").addClass("on");
    }
    if (scroll > port3 + baseline) {
      $(".port3").addClass("on");
    }

    /* con4 scroll 효과 */

    if (scroll > con4) {
      $(".con4").addClass("on");
      setTimeout(function () {
        $('.artbox').each(function(index,element){
          setTimeout(function(){
            $(element).find('.card-wrap').addClass('on');
          },200*index);
        })
      }, 1000);

    }
    /* con4 artwork 요소 스크롤에 따라 
       움직임 */

    $(window).resize(function() {
        if($(window).width() > 767) {
          if (scroll > con4) {
            $(".artbox1").css({
              left: 4 + scroll / 600 + "vw",
            });
            $(".artbox2").css({
              right: 0 + scroll / 500 + "vw",
            });
            $(".artbox4").css({
              left: 5 + scroll / 800 + "vw",
            });
            $(".artbox5").css({
              right: 0 + scroll / 500 + "vw",
            });
          }
        } else {
          if (scroll > con4) {
            $(".artbox1").css({
              left: 4 + scroll / 900 + "vw",
            });
            $(".artbox2").css({
              right: 0 + scroll / 700 + "vw",
            });
            $(".artbox4").css({
              left: 5 + scroll / 900 + "vw",
            });
            $(".artbox5").css({
              right: 0 + scroll / 700 + "vw",
            });
          }
        }
      }).resize();
    

    /* con5 스크롤에 따라 배경 검은색으로 바뀜 */
    if (scroll > con5 - 100) {
      $("body").addClass("black");

      /* 눈아픔 방지 글자색 변화 */
      $(".con5 .vision p").css({ color: "#ccc" });
      $(".con5 .contact-left li span").css({ color: "#ccc" });
      /* header 색상 바뀌는 효과 */
      $(".header").removeClass("color");
    } else {
      $("body").removeClass("black");
      $(".con5 .vision p").css({ color: "#fff" });
      $(".con5 .contact-left li span").css({ color: "#fff" });
    }

    if (scroll > con5) {
      $(".contact-right h2 span").each(function (index, element) {
        setTimeout(function () {
          $(element).addClass("on");
        }, index * 200);
      });
    }
  });
});
