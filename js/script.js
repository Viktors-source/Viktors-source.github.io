

gsap.to(".twosection", {  
    scrollTrigger: {
        trigger: ".twosection",
        start: 'top top',
        endTrigger: ".tssection5",
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: .5,
    }
});
gsap.registerPlugin(ScrollTrigger);
let scrollTween = gsap.utils.toArray([".tssection2", ".tssection3", ".tssection4"]).forEach((element, i) => {
    ScrollTrigger.create({
        trigger: element,
        start: () => "-=176",
        pin: true, 
        pinSpacing: false,
        scrub: 1,
        anticipatePin: .5,
        endTrigger: ".tssection5",
        end: 'top top'
});
    element && gsap.to(element, { scale: (0.79 + (i * 0.07)),
        scrollTrigger: {
            trigger: element,
            start: () => "-=176",
            scrub: 1,
        }
    });
    element && gsap.to(element.querySelector('[class*="tscard"]'), { opacity: (0.4 + (i * 0.2)),
        scrollTrigger: {
            trigger: element,
            start: () => "-=176",
            scrub: true,
        }
    });
});

gsap.registerPlugin(CustomEase); 
CustomEase.create("al-out", "M0,0 C0,0 0.5,1 1,1"); 

gsap.to(".threesection", {  
    scrollTrigger: {
        trigger: ".threesection",
        start: 'top top',
        endTrigger:".ths2cardsix",
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: .5,
    }})
let beneffitToggle1 = gsap.utils.toArray([".ths2cardone", ".ths2cardtwo", ".ths2cardthree", ".ths2cardfour", ".ths2cardfive", ".ths2cardsix"]).forEach((element, i) => {
    gsap.to(element, { "--opacity-pceudo": 1, transform: "scale3d(1.01,1.01,1.01)", duration: .3, ease: "al-out",
    scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: () => `+=${element.clientHeight + 24}`,
        toggleActions: 'play reverse play reverse'
    }
});
});
gsap.to(".ths2cardseven", { "--opacity-pceudo": 1, transform: "scale3d(1.01,1.01,1.01)", duration: .3, ease: "al-out",
    scrollTrigger: {
        trigger: ".ths2cardseven",
        start: 'top center',
        toggleActions: 'play none none reverse'
}
});

CustomEase.create("gglease", "M0,0 C0.5,0.06 0.01,0.99 1,1"); 

//     let frsstwointro = gsap.timeline({ defaults: { duration: .8, ease: "gglease" } });
//     frsstwointro.from(".frss2cardone", { scale: 1.2, clipPath: "inset( 0 440px 600px 0 )" })
//                 .fromTo(".frss2cardtwo", { scale: 1.2, clipPath: "inset( 600px 330px 0px 110px )" }, { clipPath: "inset( 0px 110px 0px 110px)", scale: 1 }, "<+=.05")
//                 .from(".frss2cardthree", { scale: 1.2, clipPath: "inset( 0 220px 600px 220px )" }, "<+=.05")
//                 .from(".frss2cardfour", { scale: 1.2, clipPath: "inset( 600px 220px 0 330px )" }, "<+=.05");        

//     let frsstwocard = gsap.timeline({ repeat: -1, defaults: {  duration: .6, ease: "gglease" } });  
//     frsstwocard.to([".frss2cardone", ".frss2cardtwo", ".frss2cardthree", ".frss2cardfour", ".frss2coimg", ".frss2ctimg", ".frss2cteimg", ".frss2cfimg"], { duration: 2 }) 
//                .to(".frss2cardone", { clipPath: "inset( 0px 0px 0px 0px)" }) 
//                .fromTo(".frss2cardtwo", { clipPath: "inset( 0px 110px 0px 110px)"}, { clipPath: "inset( 0px 0px 0px 330px)" }, "<")
//                .to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 330px)" }, "<") 
//                .to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)" }, "<") 
//                .to(".frss2coimg", { x: 0 }, "<") 
//                .to(".frss2ctimg, .frss2cteimg, .frss2cfimg", { x: 165 }, "<")
//                .to([".frss2cardone", ".frss2cardtwo", ".frss2cardthree", ".frss2cardfour", ".frss2coimg", ".frss2ctimg", ".frss2cteimg", ".frss2cfimg"], { duration: 2 }) 
//                .to(".frss2cardone", { clipPath: "inset( 0px 330px 0px 0px)" }) 
//                .to(".frss2cardtwo", { clipPath: "inset( 0px 0px 0px 0px)" }, "<") 
//                .to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 330px)" }, "<") 
//                .to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)" }, "<") 
//                .to(".frss2coimg", { x: -165 }, "<") 
//                .to(".frss2ctimg", { x: 0 }, "<") 
//                .to(".frss2cteimg, .frss2cfimg", { x: 165 }, "<") 
//                .to([".frss2cardone", ".frss2cardtwo", ".frss2cardthree", ".frss2cardfour", ".frss2coimg", ".frss2ctimg", ".frss2cteimg", ".frss2cfimg"], { duration: 2 }) 
//                .to(".frss2cardone, .frss2cardtwo", { clipPath: "inset( 0px 330px 0px 0px)" }) 
//                .to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 0px)" }, "<") 
//                .to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)" }, "<") 
//                .to(".frss2coimg, .frss2ctimg", { x: -165 }, "<") 
//                .to(".frss2cteimg", { x: 0 }, "<") 
//                .to(".frss2cfimg", { x: 165 }, "<")
//                .to([".frss2cardone", ".frss2cardtwo", ".frss2cardthree", ".frss2cardfour", ".frss2coimg", ".frss2ctimg", ".frss2cteimg", ".frss2cfimg"], { duration: 2 }) 
//                .to(".frss2cardone, .frss2cardtwo, .frss2cardthree", { clipPath: "inset( 0px 330px 0px 0px)" })
//                .to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 0px)" }, "<") 
//                .to(".frss2coimg, .frss2ctimg, .frss2cteimg", { x: -165 }, "<") 
//                .to(".frss2cfimg", { x:0 }, "<") 
//                .to([".frss2cardone", ".frss2cardtwo", ".frss2cardthree", ".frss2cardfour", ".frss2coimg", ".frss2ctimg", ".frss2cteimg", ".frss2cfimg"], { duration: 1 }) 
//                .to(".frss2cardone", { clipPath: "inset( 0px 220px 0px 0px)" }) 
//                .to(".frss2cardtwo", { clipPath: "inset( 0px 110px 0px 110px)" }, "<") 
//                .to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 220px)" }, "<") 
//                .to(".frss2cardfour", { clipPath: "inset( 0px 0px 0px 330px)" }, "<")
//                .to(".frss2coimg", { x: -110 }, "<") 
//                .to(".frss2ctimg", { x: 0 }, "<") 
//                .to(".frss2cteimg", { x: 110 }, "<") 
//                .to(".frss2cfimg", { x:220 }, "<");

// $(".frss2cardone").hover(
//     function() {   frsstwocard.pause();
//         gsap.to(".frss2cardone", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardthree, .frss2cardtwo", { 
//      clipPath: "inset( 0px 0px 0px 330px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2coimg", { x: 0, scale: 1.1, duration: .4, ease: "gglease" });
//         gsap.to(".frss2ctimg, .frss2cteimg, .frss2cfimg", { x: 165, duration: .4, ease: "gglease", onComplete: function() { frsstwocard.seek( 4.6 ) } });
//     }, function() {
//         frsstwocard.resume();
//         gsap.to(".frss2coimg", { scale: 1, duration: .4, ease: "gglease" });
//     }
// );
// $(".frss2cardtwo").hover(
//     function() {
//         frsstwocard.pause();
//         gsap.to(".frss2cardone", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardtwo", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" }); 
//         gsap.to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 330px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2coimg", { x: -165, duration: .4, ease: "gglease" });
//         gsap.to(".frss2ctimg", { x: 0, scale: 1.1, duration: .4, ease: "gglease" }); 
//         gsap.to(".frss2cteimg, .frss2cfimg", { x: 165, duration: .4, ease: "gglease", onComplete: function() { frsstwocard.seek( 7.2 ) } }); 
//     }, function() {
//         frsstwocard.resume();
//         gsap.to(".frss2ctimg", { scale: 1, duration: .4, ease: "gglease" }); 
//     }
// );
// $(".frss2cardthree").hover(
//     function() {
//         frsstwocard.pause();
//         gsap.to(".frss2cardone, .frss2cardtwo", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" }); 
//         gsap.to(".frss2cardthree", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 330px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2coimg, .frss2ctimg", { x: -165, duration: .4, ease: "gglease" });
//         gsap.to(".frss2cteimg", { x: 0, scale: 1.1, duration: .4, ease: "gglease" });
//         gsap.to(".frss2cfimg", { x: 165, duration: .4, ease: "gglease", onComplete: function() { frsstwocard.seek( 9.8 ) } });
//     }, function() {
//         frsstwocard.resume();
//         gsap.to(".frss2cteimg", { scale: 1, duration: .4, ease: "gglease" });
//     }
// );
// $(".frss2cardfour").hover(
//     function() {
//         frsstwocard.pause();
//         gsap.to(".frss2cardone, .frss2cardtwo, .frss2cardthree", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2cardfour", { clipPath: "inset( 0px 110px 0px 0px)", duration: .4, ease: "gglease" });
//         gsap.to(".frss2coimg, .frss2ctimg, .frss2cteimg", { x: -165, duration: .4, ease: "gglease" });
//         gsap.to(".frss2cfimg", { x: 0, scale: 1.1, duration: .4, ease: "gglease", onComplete: function() { frsstwocard.seek( 11.2 ) } });
//     }, function() {
//         frsstwocard.resume();
//         gsap.to(".frss2cfimg", { scale: 1, duration: .4, ease: "gglease"});
//     }
// );

let frss2intro = gsap.timeline({ defaults: { duration: .8, ease: "gglease" } })
            .from(".frss2card1", { scale: 1.2, clipPath: "inset( 0 440px 600px 0 )" })
            .from(".frss2card2", { scale: 1.2, clipPath: "inset( 600px 330px 0px 110px )" }, "<+=.05")
            .from(".frss2card3", { scale: 1.2, clipPath: "inset( 0 274px 600px 166px )" }, "<+=.05")
            .from(".frss2card4", { scale: 1.2, clipPath: "inset( 600px 220px 0 330px )" }, "<+=.05");   

let frss2cards1tl = gsap.timeline({ defaults: {  duration: .6, ease: "gglease" } })
.to(".frss2card1", { clipPath: "inset( 0px 0px 0px 0px)" }, "2") 
.to(".frss2card2, .frss2card3, .frss2card4", { clipPath: "inset( 0px 0px 0px 330px)" }, "<")
.to(".frss2img1", { x: 0 }, "<") 
.to(".frss2img2, .frss2img3, .frss2img4", { x: 165 }, "<");

let frss2cards2tl = gsap.timeline({ defaults: {  duration: .6, ease: "gglease" } })
   .to(".frss2card1", { clipPath: "inset( 0px 330px 0px 0px)" }, "+=2") 
   .to(".frss2card2", { clipPath: "inset( 0px 0px 0px 0px)" }, "<") 
   .to(".frss2img1", { x: -165 }, "<") 
   .to(".frss2img2", { x: 0 }, "<");

let frss2cards3tl = gsap.timeline({ defaults: {  duration: .6, ease: "gglease" } })
   .to(".frss2card2", { clipPath: "inset( 0px 330px 0px 0px)" }, "+=2") 
   .to(".frss2card3", { clipPath: "inset( 0px 0px 0px 0px)" }, "<") 
   .to(".frss2img2", { x: -165 }, "<") 
   .to(".frss2img3", { x: 0 }, "<") 

let frss2cards4tl = gsap.timeline({ defaults: {  duration: .6, ease: "gglease" } })
   .to(".frss2card3", { clipPath: "inset( 0px 330px 0px 0px)" }, "+=2")
   .to(".frss2card4", { clipPath: "inset( 0px 0px 0px 0px)" }, "<") 
   .to(".frss2img3", { x: -165 }, "<") 
   .to(".frss2img4", { x:0 }, "<");

let frss2cards5tl = gsap.timeline({ defaults: {  duration: .6, ease: "gglease" } })
   .to(".frss2card1", { clipPath: "inset( 0px 248px 0px 0px)" }, "+=1") 
   .to(".frss2card2", { clipPath: "inset( 0px 164px 0px 83px)" }, "<") 
   .to(".frss2card3", { clipPath: "inset( 0px 81px 0px 166px)" }, "<") 
   .to(".frss2card4", { clipPath: "inset( 0px 0px 0px 247px)" }, "<")
   .to(".frss2img1", { x: -124 }, "<") 
   .to(".frss2img2", { x: -41 }, "<") 
   .to(".frss2img3", { x: 41 }, "<") 
   .to(".frss2img4", { x: 124 }, "<");  

let masterTimeline = gsap.timeline({ repeat: -1 })
.add( frss2cards1tl )
.add( frss2cards2tl )
.add( frss2cards3tl )
.add( frss2cards4tl )
.add( frss2cards5tl );
   
$(".frss2card1").hover(
function() {   
masterTimeline.pause();
gsap.to(".frss2card1", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card2, .frss2card3, .frss2card4", { clipPath: "inset( 0px 0px 0px 330px)", duration: .4, ease: "gglease" });
gsap.to(".frss2img1", { x: 0, scale: 1.1, duration: .4, ease: "gglease" });
gsap.to(".frss2img2, .frss2img3, .frss2img4", { x: 165, duration: .4, ease: "gglease", onComplete: function() { masterTimeline.seek( 4.6 ) } });
}, function() {
masterTimeline.resume();
gsap.to(".frss2img1", { scale: 1, duration: .4, ease: "gglease" });
});

$(".frss2card2").hover(
function() {   
masterTimeline.pause();
gsap.to(".frss2card1", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card2", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card3, .frss2card4", { clipPath: "inset( 0px 0px 0px 330px)", duration: .4, ease: "gglease" });
gsap.to(".frss2img1", { x: -165, duration: .4, ease: "gglease" });
gsap.to(".frss2img2", { x: 0, scale: 1.1, duration: .4, ease: "gglease" });
gsap.to(".frss2img3, .frss2img4", { x: 165, duration: .4, ease: "gglease", onComplete: function() { masterTimeline.seek( 7.2 ) } });
}, function() {
masterTimeline.resume();
gsap.to(".frss2img2", { scale: 1, duration: .4, ease: "gglease" });
});

$(".frss2card3").hover(
function() {   
masterTimeline.pause();
gsap.to(".frss2card1, .frss2card2", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card3", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card4", { clipPath: "inset( 0px 0px 0px 330px)", duration: .4, ease: "gglease" });
gsap.to(".frss2img1, .frss2img2", { x: -165, duration: .4, ease: "gglease" });
gsap.to(".frss2img3", { x: 0, scale: 1.1, duration: .4, ease: "gglease" });
gsap.to(".frss2img4", { x: 165, duration: .4, ease: "gglease", onComplete: function() { masterTimeline.seek( 9.8 ) } });
}, function() {
masterTimeline.resume();
gsap.to(".frss2img3", { scale: 1, duration: .4, ease: "gglease" });
});
$(".frss2card4").hover(
function() {   
masterTimeline.pause();
gsap.to(".frss2card1, .frss2card2, .frss2card3", { clipPath: "inset( 0px 330px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2card4", { clipPath: "inset( 0px 0px 0px 0px)", duration: .4, ease: "gglease" });
gsap.to(".frss2img1, .frss2img2, .frss2img3", { x: -165, duration: .4, ease: "gglease" });
gsap.to(".frss2img4", { x: 0, scale: 1.1, duration: .4, ease: "gglease", onComplete: function() { masterTimeline.seek( 11.2 ) } });
}, function() {
masterTimeline.resume();
gsap.to(".frss2img4", { scale: 1, duration: .4, ease: "gglease" });
});


let menus = gsap.utils.toArray(".fess2card");
let menuToggles = menus.map(createAnimation);

menus.forEach((fess2card) => {
    fess2card.addEventListener("click", () => toggleMenu(fess2card));
});

function toggleMenu(clickedFess2card) {
  menuToggles.forEach((toggleFn) => toggleFn(clickedFess2card));
}

function createAnimation(element) {
  let fess2card = element;
  let menusContent = element.querySelector(".fess2ccontent");
  let plusElement = element.querySelector("img");

  gsap.set(menusContent, { height: "auto" });

  let animation = gsap.timeline()
    .to(menusContent, { height: 0, duration: .3, ease: "none" })
    .fromTo(plusElement, { transform: "scale3d(0.99,0.99,0.99) rotateZ(45deg)" }, { duration: .3, transform: "scale3d(1,1,1) rotateZ(0deg)", ease: "none" }, "<")
    .to(fess2card, { duration: .3, ease: "none" }, "<");


  return function (clickedFess2card) {
    if (clickedFess2card === fess2card) {
        if (animation.time() === .3) {
            animation.tweenTo("0", { ease: "al-out" });
        } else {
            animation.tweenTo(".3", { ease: "al-out" });
        }
    } else {
      animation.tweenTo(".3", { ease: "al-out" });
    }
  };
}

gsap.utils.toArray(".fess2card").forEach(cardp => {
    let hoverp = gsap.timeline()
    .fromTo(cardp, { "--opacity-pcard": 1, transform: "scale3d(1.01,1.01,1.01)"}, { "--opacity-pcard": 0, transform: "scale3d(1,1,1)", duration: .3, ease: "none" } );
    cardp.addEventListener("mouseenter", () => hoverp.tweenTo("0", { ease: "al-out" }));
    cardp.addEventListener("mouseleave", () => hoverp.tweenTo(".3", { ease: "al-out" }));
  });
  
  let sxss2intro = gsap.timeline({ defaults: { duration: .8, ease: "gglease" } })
  .from(".sxss2ccard", { clipPath: "inset( 0 300px 0 0 )" } ,"2")
  .from(".sxss2ccimage", { scale: 1.2, clipPath: "inset( 0 0 0 266px )" }, ">-0.5");



  gsap.registerPlugin(Draggable, ScrollToPlugin); 

  // gsap.registerEffect({
  //   name:"draggable_scroll",
  //   effect: (targets, config) => {
  //     let targets_array = targets;
  //     // let targets_array = gsap.units.toArray(targets);
  //     let targets_wrapper = targets[0].parentNode;
  //     let targets_main_wrapper = targets_wrapper.parentNode;
  //     let targets_wrapper_width = targets_wrapper.offsetWidth;
  //     let targets_width  = 0;
  //     for( var i = 0; i < targets_array.length; i++) {
  //       targets_width += targets_array[i].offsetWidth;
  //       console.log(targets_width)
  //       }
  //       console.log
  //     var proxy = document.createElement("div"); 
  //     gsap.registerPlugin(Observer)
  //     Observer.create({
  //       target: targets_main_wrapper,
  //       type: "wheel, scroll",
  //       onChangeX: (self) => {
  //         capture: true
  //         targets_main_wrapper.scrollTop += self.deltaX; 
  //       },
  //     });
  //     let stagger = .5; 
  //     let duration = 2; 
  //     let offset = 0; 
  //     let loop = gsap.timeline({ 
  //       paused: true, 
  //       repeat: -1, 
  //       ease: "none",
  //     }) 
  //     let shift = [...targets_array, ...targets_array, ...targets_array] 
  //     shift.forEach((box, i) => { 
  //       let box_tl = gsap.timeline() 
  //       .fromTo(box, { x: config.fromX, }, { x: config.toX, duration: config.duration, ease: "none", immediateRender: false, }, "0") 
  //       .fromTo(box.querySelector('div'), { scale: .8, opacity: 0, }, { scale: 1, duration: .5, repeat: 1, repeatDelay: config.repeatDelay, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0") 
  //       .fromTo(box, { zIndex: 1 }, { zIndex: targets.length, repeat: 1, yoyo: true, duration: config.duration2 }, "0") 
  //       loop.add(box_tl, i * stagger) 
  //       }) 
  //       let cycle_duration = stagger * targets.length; 
  //       let start_time = cycle_duration + (duration * 0.5) + offset; 
  //       let end_time = start_time + cycle_duration; 
  //       let loop_loop = gsap.fromTo(loop, { 
  //         totalTime: start_time, 
  //       }, { 
  //         totalTime: "+=" + cycle_duration, 
  //         duration: 1, 
  //         ease: "none", 
  //         repeat: -1, 
  //         paused: true,
  //       }) 
  //       let playhead = { position: 0 }
  //       let position_wrap = gsap.utils.wrap(0, loop_loop.duration())
  //       let scrub = gsap.to(playhead, {
  //         position: 0,
  //         onUpdate: () => {
  //           loop_loop.totalTime(position_wrap(playhead.position))
  //         },
  //         paused: true,
  //         duration: .5,
  //         ease: "al-out",
  //       })
  //       let iteration = 0
  //       let trigger = ScrollTrigger.create({
  //         scroller: targets_main_wrapper, 
  //         horizontal: false,
  //         start: 0,
  //         end: '+=2000', 
  //         pin: targets_wrapper,
  //         onUpdate: self => {
  //           let scroll = self.scroll()
  //           if( scroll > self.end - 1 ) {
  //             wrap(1, 1)
  //           } else if( scroll < 1 && self.direction < 0 ) {
  //             wrap( -1, self.end - 1 )
  //           } else {
  //             let new_pos = (iteration + self.progress) * loop_loop.duration()
  //             scrub.vars.position = new_pos
  //             scrub.invalidate().restart()
  //           }
  //         }
  //       })
  //       let wrap = (iterationDelta, scrollTo) => {
  //         iteration += iterationDelta
  //         trigger.scroll(scrollTo)
  //         trigger.update()
  //       }
  //       let snap_points = [];
  //       let actual_point = 0;
  //       for( var i = 0; i < targets_array.length; i++) {
  //         let targets_widths = targets_array[i].offsetWidth;
  //         let procent = targets_width / 100;
  //         let procent_point = targets_widths / procent;
  //         let actual_procent = (actual_point += procent_point) * 0.01;
  //         snap_points.push(actual_procent)
  //         console.log(snap_points)
  //       }
  //       for( var i = targets_array.length; i < targets_array.length * 3; i++) {
  //         let procent = snap_points[i - targets_array.length] + 1;
  //         snap_points.push(procent)
  //         console.log(snap_points)
  //       }

  //       let snap = gsap.utils.snap(snap_points)

  //       let progressToScroll = progress => 
  //       gsap.utils.clamp( 1, trigger.end - 1, gsap.utils.wrap( 0, 1, progress ) * trigger.end )
  //       let scrollToPosition = position => {
  //         let snap_pos = snap(position)
  //         let progress = ( snap_pos - loop_loop.duration() * iteration ) / loop_loop.duration()
  //         let scroll = progressToScroll(progress)
  //         if(progress >= 1 || progress < 0 ) return wrap(Math.floor(progress), scroll)
  //           trigger.scroll(scroll)
  //       }
  //       ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position))
  //       Draggable.create(proxy, {
  //         type: "x",
  //         trigger: targets_main_wrapper,
  //         onPress() {
  //           this.startOffset = scrub.vars.position;
  //         },
  //         onDrag() {
  //           scrub.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
  //           scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
  //         },
  //         onDragEnd() {
  //           scrollToPosition(scrub.vars.position);
  //         }
  //       });
  //   }
  // })

  gsap.registerEffect({
    name:"draggable_scroll",
    effect: (targets, config) => {
      let targets_array = targets;
      let targets_wrapper = targets[0].parentNode;
      let targets_main_wrapper = targets_wrapper.parentNode;
      let targets_wrapper_width = targets_wrapper.offsetWidth;
      let targets_width  = 0;
      let targets_offsetwidth = 0;
      let widths = [];
      let boxwidths = [];
      for( var i = 0; i < targets_array.length; i++) {
        targets_width += targets_array[i].offsetWidth;
        targets_offsetwidth = -targets_array[i].offsetWidth
        widths.push(targets_width)
        boxwidths.push(targets_offsetwidth)
        // console.log(boxwidths)
        // console.log(targets_width)
        // console.log(widths)
        }
      
        let to_start_position = [];
        let i_factor = (config.duration - 0.5) / 0.5;
        let i_position;
        for(var i = 0; i < widths.length; i++) {
        if(i == 0) {
        i_position = widths[widths.length - 1] - widths[widths.length - (i_factor + 1)]
        to_start_position.push(i_position)
        } else if(i == (i_factor - 1)) {
        i_position = widths[i - 1] + (widths[widths.length - 1] - widths[widths.length - 2])
        to_start_position.push(i_position)
        } else if(i == (i_factor - 2) && i != i_factor && i != 0) {
          i_position = widths[i - 1] + (widths[widths.length - 1] - widths[widths.length - 3])
          to_start_position.push(i_position)
        } else if(i == (i_factor - 3) && i > 0) {
          i_position = widths[i - 1] + (widths[widths.length - 1] - widths[widths.length - 4])
          to_start_position.push(i_position)
        } else if(i == i_factor){
          i_position = widths[i - 1] 
          to_start_position.push(i_position)
        } else {
          i_position = widths[i - 1] - widths[i - (i_factor + 1)]
          to_start_position.push(i_position)
          }
        }

      var proxy = document.createElement("div"); 
      gsap.registerPlugin(Observer)
      Observer.create({
        target: targets_main_wrapper,
        type: "wheel, scroll",
        onChangeX: (self) => {
          capture: true
          targets_main_wrapper.scrollTop += self.deltaX; 
        },
      });
      let stagger = config.stagger; 
      let duration = 2; 
      let offset = 0; 
      let loop = gsap.timeline({ 
        paused: true, 
        ease: "none",
      }) 
      // let shift = [...targets_array] 
      // shift.forEach((box, i) => { 
      //   let box_tl = gsap.timeline() 
      //   .fromTo(box, { x: config.fromX, }, { x: config.toX, duration: config.duration, ease: "none", immediateRender: false, }, "0") 
      //   .fromTo(box.querySelector('div'), { scaleX: .8, scaleY: .8, opacity: 0, }, { scaleX: 1, scaleY: 1, duration: .5, repeat: 1, repeatDelay: config.repeatDelay, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0") 
      //   .fromTo(box, { zIndex: 1 }, { zIndex: targets.length, repeat: 1, yoyo: true, duration: config.duration2 }, "0") 
      //   loop.add(box_tl, i * stagger) 
      //   }) 
        let shift = [...targets_array] 
      shift.forEach((box, i) => { 
        let box_tl = gsap.timeline() 
        .fromTo(box, { x: to_start_position[i], }, { x: boxwidths[i], duration: config.duration, ease: "none", immediateRender: false, }, "0")  //config.toX, "-boxwidths[i]"
        .fromTo(box.querySelector('div'), { scaleX: .8, scaleY: .8, opacity: 0, }, { scaleX: 1, scaleY: 1, duration: .5, repeat: 1, repeatDelay: config.repeatDelay, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0") 
        .fromTo(box, { zIndex: 1 }, { zIndex: targets.length, repeat: 1, yoyo: true, duration: config.duration2 }, "0") 
        loop.add(box_tl, i * stagger) 
        }) 
        let start_time = config.duration - config.time; 
        let cycle_duration = stagger * targets.length
        let loop_loop = gsap.fromTo(loop, { 
          totalTime: start_time, 
        }, { 
          totalTime: "+=" + cycle_duration, 
          duration: 1, 
          ease: "none", 
          paused: true,
        }) 
        let playhead = { position: 0 }
        let position_wrap = gsap.utils.clamp(0, loop_loop.duration())
        let scrub = gsap.to(playhead, {
          position: 0,
          onUpdate: () => {
            loop_loop.totalTime(position_wrap(playhead.position))
          },
          paused: true,
          duration: .5,
          ease: "al-out",
        })
        let iteration = 0
        let trigger = ScrollTrigger.create({
          scroller: targets_main_wrapper, 
          horizontal: false,
          start: 0,
          end: '+=2000', 
          pin: targets_wrapper,
          onUpdate: self => {
            let scroll = self.scroll()
            if( scroll > 1400 ) {
              wrap(1, 1400 )
            } else if( scroll < 1 && self.direction < 0 ) {
              wrap( 1, 1)
            } else {
              let new_pos = (iteration + self.progress) * loop_loop.duration()
              scrub.vars.position = new_pos
              scrub.invalidate().restart()
            }
          }
        })
        let wrap = (iterationDelta, scrollTo) => {
          iterationDelta = iteration = 0
          trigger.scroll(scrollTo)
          trigger.update()
        } 
        let snap_points = [0];
        let actual_point = 0;
        for( var i = 0; i < targets_array.length; i++) {
          let targets_widths = targets_array[i].offsetWidth;
          let procent = targets_width / 100;
          let procent_point = targets_widths / procent;
          let actual_procent = (actual_point += procent_point) * 0.01;
          snap_points.push(actual_procent)
          // console.log(snap_points)
        }

        let snap = gsap.utils.snap(snap_points)

        let progressToScroll = progress => 
        gsap.utils.clamp( 1, trigger.end - 1, gsap.utils.clamp( 0.001, 1, progress ) * trigger.end )
        let scrollToPosition = position => {
          let snap_pos = snap(position)
          let progress = ( snap_pos - loop_loop.duration() * iteration ) / loop_loop.duration()
          let scroll = progressToScroll(progress)
          if(progress >= 1 || progress < 0 ) return wrap(Math.floor(progress), scroll)
            trigger.scroll(scroll)
        }
        ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position))

        Draggable.create(proxy, {
          type: "x",
          bounds: {maxX: 0 }, 
          trigger: targets_main_wrapper,
          onPress() {
            this.startOffset = scrub.vars.position;
          },
          onDrag() {
            scrub.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
            scrub.invalidate().restart(); 
          },
          onDragEnd() {
            scrollToPosition(scrub.vars.position);
          }
        });
    }
  })

////////////////////////////////////////////////////////////////////////////////////////////////////////


gsap.registerEffect({ 
    name:"draggable_scroll2", 
    effect: (targets, config) => { 
      let targets_array = targets; 
      let targets_wrapper = targets[0].parentNode; 
      let targets_main_wrapper = targets_wrapper.parentNode; 
      let targets_wrapper_width = targets_wrapper.offsetWidth; 
      let targets_width  = 0; 
      let targets_offsetwidth = 0; 
      let widths = []; 
      let boxwidths = []; 
      for( var i = 0; i < targets_array.length; i++) { 
        targets_width += targets_array[i].offsetWidth; 
        targets_offsetwidth = -targets_array[i].offsetWidth 
        widths.push(targets_width) 
        boxwidths.push(targets_offsetwidth) 
        console.log(boxwidths) 
        console.log(targets_width) 
        console.log(widths) 
        } 
       
        let to_start_position = []; 
        let to_start_position2 = []; 
        let i_factor = (config.duration - 0.5) / 0.5; 
        let i_position; 
        let i2_position; 
        for(var i = 0; i < widths.length; i++) { 
        if(i == 0) { 
        i_position = widths[widths.length - 1] - widths[widths.length - (i_factor + 1)] 
        i2_position  = widths[widths.length - 1] - widths[widths.length - 2] 
        to_start_position.push(i_position) 
        to_start_position2.push(i2_position) 
        } else if(i == (i_factor - 1)) { 
        i_position = widths[i - 1] + (widths[widths.length - 1] - widths[widths.length - 2]) 
        i2_position = widths[i - 1]  
        to_start_position.push(i_position) 
        to_start_position2.push(i2_position) 
        } else if(i == i_factor){ 
          i_position = widths[i - 1]  
          i2_position = (widths[i - 1] - widths[i - 2]) 
          to_start_position.push(i_position) 
          to_start_position2.push(i2_position) 
 
        } else { 
          i_position = widths[i - 1] - widths[i - (i_factor + 1)] 
          i2_position = (widths[i - 1] - widths[i - 2]) 
          to_start_position.push(i_position) 
          to_start_position2.push(i2_position) 
          } 
        } 
 
      var proxy = document.createElement("div");  
      gsap.registerPlugin(Observer) 
      Observer.create({ 
        target: targets_main_wrapper, 
        type: "wheel, scroll", 
        onChangeX: (self) => { 
          capture: true 
          targets_main_wrapper.scrollTop += self.deltaX;  
        }, 
      }); 
      let stagger = config.stagger;  
      let duration = 2;  
      let offset = 0;  
      let loop = gsap.timeline({  
        paused: true,  
        ease: "none", 
      })  
        let shift = [...targets_array]  
      shift.forEach((box, i) => {  
        let box_tl = gsap.timeline()  
        .fromTo(box, { x: to_start_position[i], }, { x: to_start_position2[i], duration: 0.5, ease: "none", immediateRender: false, }, "0")  //config.toX, "-boxwidths[i]"  
        .fromTo(box, { x: to_start_position2[i], }, { x: 0, duration: 0.5, ease: "none",  }, "0.5") 
        .fromTo(box, { x: 0, }, { x: boxwidths[i], duration: 0.5, ease: "none",  }, "1") 
        .fromTo(box.querySelector('div'), { scaleX: .8, scaleY: .8, opacity: 0, }, { scaleX: 1, scaleY: 1, duration: .5, repeat: 1, repeatDelay: config.repeatDelay, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0")  
        .fromTo(box, { zIndex: 1 }, { zIndex: targets.length, repeat: 1, yoyo: true, duration: config.duration2 }, "0")  
        loop.add(box_tl, i * stagger)  
        })  
        let start_time = config.duration - config.time;  
        let cycle_duration = stagger * targets.length 
        let loop_loop = gsap.fromTo(loop, {  
          totalTime: start_time,  
        }, {  
          totalTime: "+=" + cycle_duration,  
          duration: 1,  
          ease: "none",  
          paused: true, 
        })  
        let playhead = { position: 0 } 
        let position_wrap = gsap.utils.clamp(0, loop_loop.duration()) 
        let scrub = gsap.to(playhead, { 
          position: 0, 
          onUpdate: () => { 
            loop_loop.totalTime(position_wrap(playhead.position)) 
          }, 
          paused: true,
          duration: .5, 
          ease: "al-out", 
        }) 
        let iteration = 0 
        let trigger = ScrollTrigger.create({ 
          scroller: targets_main_wrapper,  
          horizontal: false, 
          // start: "left", 
          start: 0, 
          // markers: true, 
          end: "+=" + config.scrollend,  
          pin: targets_wrapper, 
          onUpdate: self => { 
            // console.log(self.progress) 
            let scroll = self.scroll() 
            if( scroll > config.scrollend2) { 
              wrap(1, config.scrollend2 ) 
            } else if( scroll < 1 && self.direction < 0 ) { 
              wrap( 1, 1) 
            } else { 
              let new_pos = (iteration + self.progress) * loop_loop.duration() 
              scrub.vars.position = new_pos 
              scrub.invalidate().restart() 
            } 
          } 
        }) 
        let wrap = (iterationDelta, scrollTo) => { 
          iterationDelta = iteration = 0 
          trigger.scroll(scrollTo) 
          trigger.update() 
        }  
        // let snap_points = [0]; 
        // let actual_point = 0; 
        // for( var i = 0; i < targets_array.length; i++) { 
        //   let targets_widths = targets_array[i].offsetWidth; 
        //   let procent = targets_width / 100; 
        //   let procent_point = targets_widths / procent; 
        //   let actual_proc = procent_point * 0.01; 
        //   let actual_procent = actual_point += actual_proc; 
        //   snap_points.push(actual_procent) 
        // } 
 
        let snap = gsap.utils.snap(1 / targets_array.length) 
 
        let progressToScroll = progress =>  
        gsap.utils.clamp( 1, trigger.end - 1, gsap.utils.clamp( 0.001, 1, progress ) * trigger.end ) 
        let scrollToPosition = position => { 
          let snap_pos = snap(position) 
          let progress = ( snap_pos - loop_loop.duration() * iteration ) / loop_loop.duration() 
          let scroll = progressToScroll(progress) 
          if(progress >= 1 || progress < 0 ) return wrap(Math.floor(progress), scroll) 
            trigger.scroll(scroll) 
        } 
        ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position)) 
 
        Draggable.create(proxy, { 
          type: "x", 
          bounds: {maxX: 0 },  
          trigger: targets_main_wrapper, 
          onPress() { 
            this.startOffset = scrub.vars.position; 
          }, 
          onDrag() { 
            scrub.vars.position = this.startOffset + (this.startX - this.x) * 0.001; 
            scrub.invalidate().restart();  
          }, 
          onDragEnd() { 
            scrollToPosition(scrub.vars.position); 
          } 
        }); 
    } 
  }) 
 
 
  gsap.effects.draggable_scroll('.svss2card', { 
    // fromX: 1024,  
    stagger: .5, 
    // toX: -256,  
    duration: 2.5,  
    repeatDelay: 1.5, 
    duration2: 1.25, 
    time: 0.5, 
  }); 
 
  gsap.effects.draggable_scroll2('.elncatc_ccard', { 
    scrollend: 1489,
    scrollend2: 1100,
    stagger: 0.5, 
    time: 0.5, 
    duration: 1.5,  
    repeatDelay: .5, 
    duration2: .75, 
  }); 
 
  gsap.effects.draggable_scroll2('.elncatc_ccard2', { 
    scrollend: 961,
    scrollend2: 701,
    stagger: 0.5, 
    time: 0.5, 
    duration: 1.5,  
    repeatDelay: .5, 
    duration2: .75,
});

gsap.effects.draggable_scroll2('.elncatc_ccard3', { 
  scrollend: 1002,
  scrollend2: 672,
  stagger: 0.5, 
  time: 0.5, 
  duration: 1.5,  
  repeatDelay: .5, 
  duration2: .75,
});


CustomEase.create("opacity_show", "M0,0 C0.27,0.01 0.83,1 1,1"); 
CustomEase.create("slide_show_opacity", "M0,0 C0.67,0 0.33,1 1,1"); 
CustomEase.create("slide_move", "M0,0 C0.12,0.87 0.15,1 1,1"); 

gsap.utils.toArray([".egtsc2cct1", ".egtsc2cct2", ".egtsc2cct3", ".egtsc2card3"]).forEach(cardc => {
  let hoverpchif = gsap.timeline()
  .fromTo(cardc, { "--opacity-pceudochif": 1, transform: "scale3d(1.01,1.01,1.01)"}, { "--opacity-pceudochif": 0, transform: "scale3d(1,1,1)", duration: .3, ease: "none" } );
  cardc.addEventListener("mouseenter", () => hoverpchif.tweenTo("0", { ease: "al-out" }));
  cardc.addEventListener("mouseleave", () => hoverpchif.tweenTo(".3", { ease: "al-out" }));
});    

// let elcards = gsap.utils.toArray([".elncatcard1"]);
let elcards = gsap.utils.toArray([".elncatcard1" ,".elncatcard2", ".elncatcard3"]);
let elcardsToggles = elcards.map(createcardAnimation);

elcards.forEach((Elcard) => {
  Elcard.addEventListener("mouseenter", () => toggleElCard(Elcard));
});

function toggleElCard(clickedElcard) {
  elcardsToggles.forEach((eltoggleFn) => eltoggleFn(clickedElcard));
}

function createcardAnimation(element) {
  let Elcard = element;
  let Elcontent = element.querySelector(".elncatc_content");
  let Eltitle = element.querySelector(".elncatc_title");
  let Eltext = element.querySelector(".elncatc_text");
  let Eltext2 = element.querySelector(".elncatc_ccardstitle2");
  let Elbutton = element.querySelector(".elc_button1");
  let El_card = element.querySelectorAll(".elncatc_c_card");
  let El_card1 = element.querySelectorAll(".elncatc_ccard3_main");
  

  // gsap.set(element, { "--elncatc_opacity": 0, })
  // gsap.set(Eltitle, { scale: 1, y: 0 })
  // gsap.set(Eltext, {x: -50, opacity: 0, })
  // gsap.set(Eltext2, {x: -50, opacity: 0, })
  // gsap.set(Elbutton, {x: -50, opacity: 0, })
  // gsap.set(Elcontent, { height: 0, "--elncatc_width": "0%" })
  // gsap.set(El_card, { opacity: 0, scale: 0.7,  }) 
  // gsap.set(El_card1, { opacity: 0 }) 

  let Elanimation = gsap.timeline()
  .fromTo(element, { "--elncatc_opacity": 0, }, { "--elncatc_opacity": 1, duration: .3, ease: "al-out" }, "0")
  .fromTo(Eltitle, { scale: 1, y: 0 }, { scale: 0.7, y: 25, duration: .3, ease: "al-out" }, "0")
  .fromTo(Eltext, {x: -50 }, { x: 0, duration: .3, ease: "slide_move" }, "0.3")
  .fromTo(Eltext, {opacity: 0, }, { opacity: 1, duration: .1, ease: "slide_show_opacity" }, "0.3")
  .fromTo(Eltext2, {x: -50 }, { x: 0, duration: .3, ease: "slide_move" }, "0.3")
  .fromTo(Eltext2, {opacity: 0, }, { opacity: 1, duration: .1, ease: "slide_show_opacity" }, "0.3")
  .fromTo(Elbutton, {x: -50 }, { x: 0, duration: .3, ease: "slide_move" }, "0.3")
  .fromTo(Elbutton, {opacity: 0, }, { opacity: 1, duration: .1, ease: "slide_show_opacity" }, "0.3")
  .fromTo(Elcontent, { height: 0 }, { height: "auto", duration: .3, ease: "al-out" }, "0")
  .fromTo(Elcontent, { "--elncatc_width": "0%" }, { "--elncatc_width": "100%", duration: .3, ease: "slide_move" }, "0.3")
  .fromTo(El_card, { opacity: 0 }, { opacity: 1, duration: .12, stagger: 0.05, ease: "al-out" }, "0.2") 
  .fromTo(El_card, { scale: 0.7, }, { scale: 1, duration: .2, stagger: 0.05, ease: "opacity" }, "0.2")
  .fromTo(El_card1, { opacity: 0 }, { opacity: 1, duration: .12, ease: "al-out" }, "0.2") 
  // .fromTo(El_card1, { scale: 0.7, }, { scale: 1, duration: .2, ease: "opacity" }, "0.2")
  .reverse()

  return function (clickedElcard) {
    if (clickedElcard === Elcard) {
        if (Elanimation.time() === 0) {
          Elanimation.tweenTo(".6");
        }
    } else {
      Elanimation.tweenTo("0", { ease: "al-out" });
    }
  };
}


  // let box_tl = gsap.timeline() 
  //       .fromTo(box, { x: config.fromX, }, { x: config.toX, duration: config.duration, ease: "none", immediateRender: false, }, "0") 
  //       .fromTo(box.querySelector('div'), { scaleX: .8, scaleY: .8, opacity: 0, }, { scaleX: 1, scaleY: 1, duration: .5, repeat: 1, repeatDelay: config.repeatDelay, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0") 
  //       .fromTo(box, { zIndex: 1 }, { zIndex: targets.length, repeat: 1, yoyo: true, duration: config.duration2 }, "0") 
  //       loop.add(box_tl, i * stagger) 
  //       }) 
     
      // var wrapper = document.querySelector(".svss2content"); 
      // // var boxes = document.querySelectorAll(".svss2card"); 
      // let boxes = gsap.utils.toArray('.svss2card'); 
    
      // var boxWidth = 256; 
      // var wrapWidth = boxes.length * boxWidth; 
      // var viewWidth = wrapper.offsetWidth;  
      // var proxy = document.createElement("div"); 

      // gsap.registerPlugin(Observer)
      // Observer.create({
      //   target: wrapper,
      //   type: "wheel, scroll",
      //   onChangeX: (self) => {
      //     capture: true
      //     console.log(self.deltaX)
      //     wrapper.scrollTop += self.deltaX; 
      //   },
      // });
      

      //   let stagger = .5; 
      //   let duration = 2; 
      //   let offset = 0; 
   
      //   let loop = gsap.timeline({ 
      //     paused: true, 
      //     repeat: -1, 
      //     ease: "none",
      //   }) 
   
      //   let shift = [...boxes, ...boxes, ...boxes] 

   
      //   shift.forEach((box, i) => { 
      //   let box_tl = gsap.timeline() 
      //   .fromTo(box, { x: 1024, }, { x: -256, duration: 2.5, ease: "none", immediateRender: false, }, "0") 
      //   .fromTo(box.querySelector('[class*="svss2ccontent"]'), { scale: .8, opacity: 0, }, { scale: 1, duration: .5, repeat: 1, repeatDelay: 1.5, ease: "none", immediateRender: false, yoyo: true, opacity: 1, }, "0") 
      //   .fromTo(box, { zIndex: 1 }, { zIndex: boxes.length, repeat: 1, yoyo: true, duration: 1.25 }, "0") 
      //   loop.add(box_tl, i * stagger) 
      //   }) 
   
      //   let cycle_duration = stagger * boxes.length; 
      //   let start_time = cycle_duration + (duration * 0.5) + offset; 
      //   let end_time = start_time + cycle_duration; 
   
      //   let loop_loop = gsap.fromTo(loop, { 
      //     totalTime: start_time, 
      //   }, { 
      //     totalTime: "+=" + cycle_duration, 
      //     duration: 1, 
      //     ease: "none", 
      //     repeat: -1, 
      //     paused: true,
      //   }) 

      //   let playhead = { position: 0 }
      //   let position_wrap = gsap.utils.wrap(0, loop_loop.duration())

      //   let scrub = gsap.to(playhead, {
      //     position: 0,
      //     onUpdate: () => {
      //       loop_loop.totalTime(position_wrap(playhead.position))
      //     },
      //     paused: true,
      //     duration: .5,
      //     ease: "al-out",
      //   })

      //   let iteration = 0

      //   let trigger = ScrollTrigger.create({
      //     scroller: wrapper, 
      //     horizontal: false,
      //     start: 0,
      //     end: '+=2000', 
      //     pin: '.boxes',
      //     onUpdate: self => {
      //       let scroll = self.scroll()
      //       if( scroll > self.end - 1 ) {
      //         wrap(1, 1)
      //       } else if( scroll < 1 && self.direction < 0 ) {
      //         wrap( -1, self.end - 1 )
      //       } else {
      //         let new_pos = (iteration + self.progress) * loop_loop.duration()
      //         scrub.vars.position = new_pos
      //         scrub.invalidate().restart()
      //       }
      //     }
      //   })

      //   let wrap = (iterationDelta, scrollTo) => {
      //     iteration += iterationDelta
      //     trigger.scroll(scrollTo)
      //     trigger.update()
      //   }

      //   let snap = gsap.utils.snap(1 / boxes.length)
      //   // let snap = gsap.utils.snap[256, 512, 768, 1024, 1280, 1356]

      //   let progressToScroll = progress => 
      //   gsap.utils.clamp( 1, trigger.end - 1, gsap.utils.wrap( 0, 1, progress ) * trigger.end )

      //   let scrollToPosition = position => {
      //     let snap_pos = snap(position)
      //     let progress = ( snap_pos - loop_loop.duration() * iteration ) / loop_loop.duration()
      //     let scroll = progressToScroll(progress)
      //     if(progress >= 1 || progress < 0 ) return wrap(Math.floor(progress), scroll)
      //       trigger.scroll(scroll)
      //   }

      //   ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position))

      //   Draggable.create(proxy, {
      //     type: "x",
      //     trigger: wrapper,
      //     onPress() {
      //       this.startOffset = scrub.vars.position;
      //     },
      //     onDrag() {
      //       scrub.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
      //       scrub.invalidate().restart();
      //     },
      //     onDragEnd() {
      //       scrollToPosition(scrub.vars.position);
      //     }
      //   });



