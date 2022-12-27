gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger, CustomEase, TextPlugin)
gsap.registerPlugin(Observer)
CustomEase.create('al_out', 'M0,0 C0,0 0.5,1 1,1')
CustomEase.create('opacity_show', 'M0,0 C0.27,0.01 0.83,1 1,1')
CustomEase.create('slide_show_opacity', 'M0,0 C0.67,0 0.33,1 1,1')
CustomEase.create('slide_move', 'M0,0 C0.12,0.87 0.15,1 1,1')
CustomEase.create('gglease', 'M0,0 C0.5,0.06 0.01,0.99 1,1')
CustomEase.create('ease', 'M0,0 C0.25,0.1 0.25,1 1,1')
CustomEase.create('gg_scale_clip_in', 'M0,0 C0.55,0.75 0.1,1 1,1')
CustomEase.create('gg_scale_out', 'M0,0 C0.4,1 0.92,0 1,1')
CustomEase.create('apl_accordion_in1', 'M0,0 C0.12,0 0.38,0 1,1')
CustomEase.create('apl_accordion_out1', 'M0,0 C0.2,1 0.68,1 1,1')
CustomEase.create('apl_accordion_in2', 'M0,0 C0.2,0 0.68,0 1,1')
CustomEase.create('apl_accordion_out2', 'M0,0 C0.2,1 0.68,1 1,1')
CustomEase.create('al_slide', 'M0,0 C0.26,0.67 0.48,0.91 1,1') 


/* <----- local-nav -----> */

const burgerLine = document.querySelector('.burger__line'),
    burgerLines = gsap.utils.toArray('.burger__line'),
    burgerClickArea = document.querySelector('.nav__burger'),
    
    burgerLineWidth = burgerLine.offsetWidth,
    burgerLineHeight = burgerLineWidth / 12,
    burgerIndent = burgerLineWidth / 6
    
    const burgerAnimation = gsap.timeline()
    .from(burgerLines[0], { y: (-burgerIndent) + (-burgerLineHeight), duration: .2, ease: 'al_out'  })
    .from(burgerLines[2], { y: burgerIndent + burgerLineHeight, duration: .2, ease: 'al_out'  }, '<')
    .set(burgerLines[1], { autoAlpha: 0 })
    .to(burgerLines[0], { rotate: '-45deg', duration: .2, ease: 'al_out'  })
    .to(burgerLines[2], { rotate: '45deg', duration: .2, ease: 'al_out'  }, '<')
    .reverse()
    
    burgerClickArea.addEventListener('click', () => {
        burgerAnimation.reversed(!burgerAnimation.reversed())
        toggleMobileNav.reversed(!burgerAnimation.reversed())
    })

    const navLinkMobile = document.querySelectorAll('.nav__link_mobile'),
    dropdown = document.querySelector('.dropdown'),
    navFooter = document.querySelector('.nav__footer'),
    navFooterTexts = navFooter.querySelectorAll('p'),
    navContent = document.querySelector('.nav__content'),
    dropdownHeight = dropdown.offsetHeight,
    navContentHeight = navContent.offsetHeight,
    navCurtain =document.querySelector('.nav__curtain'),

    toggleMobileNav = gsap.timeline()
    .from(dropdown, { autoAlpha: 0, y: -dropdownHeight + navContentHeight, duration: .3, ease: 'al_slide' })
    .fromTo(navCurtain, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'none', duration: .3 }, '<')
    .from(navLinkMobile, { y: '100%', duration: .3, stagger: .03, ease: 'none' }, '>-.1')
    .fromTo(navFooter, { '--navFooterLineScaleX': 0 }, { '--navFooterLineScaleX': 1, ease: 'al_slide', duration: .2 }, '>-.1') 
    .from(navFooterTexts, { y: '-160%', duration: .2, stagger: .02, ease: 'none' }, '>-.1')
    .reverse()

    const navLink = gsap.utils.toArray('.nav__link')
    navLink.forEach(link => {
        innerText = link.querySelectorAll('span')
        const tl = gsap.timeline()
        .to(innerText, { y: '-100%', ease: 'al_slide', duration: .3 })
        .reverse()

        link.addEventListener('mouseenter', () => {
            tl.restart()
        })
    })

    /* <----- local-nav -----> */


    /* <----- first screen -----> */

    const h1Toggles = gsap.utils.toArray('.h1_toggle'),
    h1ToggleTl = gsap.timeline({ repeat: -1, defaults: { duration: .3, ease: 'none', delay: 1.5, } })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { y: '-100%' })
    .set(h1Toggles[0], { y: '100%', delay: 0 })
    .to([h1Toggles[1], h1Toggles[2]], { y: '-200%'  })
    .set(h1Toggles[1], { y: '0%', delay: 0  })
    .to(h1Toggles[2], { y: '-300%' })
    .to(h1Toggles[0], { y: '0%', delay: 0  }, '<')
    .set(h1Toggles[2], { y: '200%', delay: 0  })

    /* <----- first screen -----> */


    /* <----- beneffits -----> */

    const dryTextBeneffit = document.querySelector('.drytextbeneffit')
    gsap.fromTo(dryTextBeneffit, { background: 'linear-gradient(106.5deg, rgba(139, 112, 247, 0.5) 32.59%, rgba(199, 185, 254, 0.6) 80.29%)' }, { background: 'linear-gradient(338.43deg, rgba(139, 112, 247, 0.5) 3.71%, rgba(199, 185, 254, 0.6) 90.02%)', duration: 2, ease: 'none', repeat: -1, yoyo: true })

    /* <----- beneffits -----> */


    /* <----- about us -----> */

    const aboutus = document.querySelector('.aboutus'),
    drytextbeneffit = document.querySelector('.drytextbeneffit'),
    aboutusSubtitlesSmall = document.querySelector('.aboutus__subtitles_small'),
    aboutusSubtitlesLarge = document.querySelector('.aboutus__subtitles_large'),
    aboutusTitle = document.querySelector('.aboutus__title'),
    aboutusTitleHeight = aboutusTitle.offsetHeight,
    aboutusSubtitlesSmallHeight = aboutusSubtitlesSmall.offsetHeight,
    aboutusSubtitlesLargeHeight = aboutusSubtitlesLarge.offsetHeight,
    aboutusHeight = aboutus.offsetHeight,
    aboutusPadding = gsap.getProperty(aboutus, "padding-top"),
    aboutusTitleSpan = aboutusTitle.querySelector('span'),


    srollingTextAnimation = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom center+=${aboutusTitleHeight}`,
        end: `+=${aboutusPadding + aboutusTitleHeight + aboutusSubtitlesSmallHeight + aboutusSubtitlesLargeHeight}`,
        scrub: true,
        }
    })
    .from(aboutus, { duration: 1, y: -aboutusPadding + -aboutusTitleHeight, ease: 'none' })
    .to(aboutusTitleSpan, { duration: .5, textFillColor: "#C7B9FE", ease: 'al_slide' }, '<.5')
    .from(aboutusSubtitlesSmall, { autoAlpha: 0, y: aboutusSubtitlesSmallHeight / 2, ease: 'none', duration: .5 })
    .to(aboutusSubtitlesSmall, { autoAlpha: 0, ease: 'none', duration: .5, delay: .5, })
    .fromTo(aboutusSubtitlesLarge, { autoAlpha: 0, y: -aboutusSubtitlesSmallHeight / 2, }, { autoAlpha: 1, y: -aboutusSubtitlesSmallHeight, ease: 'none', duration: .5 })

    /* <----- about us -----> */


    /* <----- reviews -----> */

    gsap.registerEffect({ 
        name:'draggable_scroll', 
        effect: (targets, config) => { 
        
        let targets_array = targets,
        targets_wrapper = targets[0].parentNode,
        targets_main_wrapper = targets_wrapper.parentNode,
        targets_width  = 0,
        widths = [0],
        targets_height = targets_array[0].offsetHeight,
        positions_array = [],
        position,
        stagger = config.stagger,
        scene_duration = config.scene_duration

        
      
        for( var i = 0; i < targets_array.length; i++) { 
          let pos_array = [];
          targets_width += targets_array[i].offsetWidth; 
          widths.push(targets_width) 
          positions_array.push(pos_array);
        } 
      
        let end_count = config.end_count,
        en_co_length = config.en_co_length = config.end_count - 1
         
        targets.forEach((target, index) => {
          i_true = index;
      
          for (var i = 0; i < (i_true + 1) && i < (targets_array.length - en_co_length); i++) {
            position = widths[i_true] - widths[0 + i]
            positions_array[i_true].push(position)
          }
        })
  
        let loop = gsap.timeline({  
          paused: true,  
          ease: 'none', 
        }) 
        
        let shift = targets_array,
        animation_builder2,
        animation_builder
      
      
        shift.forEach((box, index) => {  
          i_true = index; 
          
          for ( var i = 0; i < (positions_array[i_true].length - 1); i++ ) { 
              if( positions_array[i_true].length > 1 ) {
                  
                  animation_builder = gsap.fromTo(box, { x: positions_array[i_true][i], }, { x: positions_array[i_true][i + 1], duration: config.scene_duration, ease: 'none', immediateRender: false })  
                  loop.add(animation_builder, i * stagger)
  
              }
          }
      
          if ( i_true < (targets_array.length - end_count) ) {
            animation_builder2 = gsap.fromTo(box.querySelector('div'), { scaleX: 1, scaleY: 1, opacity: 1, }, { scaleX: .9, scaleY: .9, opacity: 0, duration: config.scene_duration, ease: 'none', }) 
            loop.add(animation_builder2, (positions_array[i_true].length - 1) * stagger)
            }
  
        })
    //   console.log( loop.getChildren( true, true, true ) )

        var proxy = document.createElement('div')

        let mm = gsap.matchMedia()
        const shopreviews = document.querySelector('.shopreviews')

        let touchAxisY = 0

        mm.add('(max-width: 959px)', () => {

            gsap.registerPlugin(Observer) 
            Observer.create({ 
                target: targets_main_wrapper, 
                type: 'wheel, scroll, touch', 
                lockAxis: true,
            })

        })

        mm.add('(min-width: 960px)', () => {

            gsap.registerPlugin(Observer) 
            Observer.create({ 
                target: targets_main_wrapper, 
                type: 'wheel, scroll', 
                lockAxis: true,
                onChangeX: (self) => { 
                    targets_main_wrapper.scrollTop += self.deltaX
                }, 
            })

        })
      
        let dur_time = loop.duration()
      
        let loop_loop = gsap.fromTo(loop, {  
          totalTime: 0,  
        }, {  
          totalTime: dur_time, 
          duration: 1,   
          ease: 'none',  
          paused: true, 
        }) 
            
        let playhead = { position: 0 } 
        let position_wrap = gsap.utils.clamp( 0, loop_loop.duration() ) 
             
        let scrub = gsap.to(playhead, { 
          position: 0, 
          onUpdate: () => { 
            loop_loop.totalTime(position_wrap(playhead.position)) 
          }, 
          paused: true,
          duration: .5, 
          ease: 'al_out', 
        }) 	
          
        let scrollnd = widths[targets_array.length - end_count]
      
        let trigger = ScrollTrigger.create({ 
          scroller: targets_main_wrapper,  
          start: 0, 
          end: '+=' + scrollnd,  
          pin: targets_wrapper, 
          onUpdate: self => { 
            let scroll = self.scroll() 
            if( scroll > scrollnd ) { 
              wrap( scrollnd ) 
            } else if( scroll < 0 && self.direction < 0 ) { 
              wrap( 0 ) 
            } else { 
              let new_pos = self.progress * loop_loop.duration() 
              scrub.vars.position = new_pos 
              scrub.invalidate().restart() 
            } 
          }
        }) 
          
        let wrap = (scrollTo) => { 
          trigger.scroll(scrollTo) 
          trigger.update() 
        }  
      
        snap_point = loop.duration() / scene_duration 
        let snap = gsap.utils.snap( 1 / snap_point ) 
      
        let progressToScroll = progress =>   
        gsap.utils.clamp( 0, trigger.end, gsap.utils.clamp( 0, 1, progress ) * trigger.end ) 
        let scrollToPosition = position => { 
          let snap_pos = snap(position) 
          let progress = snap_pos * loop_loop.duration() 
          let scroll = progressToScroll(progress) 
          trigger.scroll(scroll) 
        } 
        ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position )) 
        

        mm.add('(max-width: 959px)', () => {

            gsap.set(targets_main_wrapper, { pointerEvents: 'none'})
            let targets_main_wrapperBox = targets_main_wrapper.parentNode

            let drggable =  Draggable.create(proxy, { 
                type: 'x',
                trigger: targets_main_wrapperBox, 
                cursor: config.cursor, 
                activeCursor: 'grabbing',
                onPress() { 
                    this.startOffset = scrub.vars.position; 
                }, 
                onDrag(self) { 
                    scrub.vars.position = gsap.utils.clamp(0, 1, (this.startOffset + (this.startX -  this.x ) * 0.003) )
                    scrub.invalidate().restart()
                }, 
                onDragEnd() { 
                    scrollToPosition( scrub.vars.position )
                } 
              })

        })

        mm.add('(min-width: 960px)', () => {

            let drggable =  Draggable.create(proxy, { 
                type: 'x',
                trigger: targets_main_wrapper, 
                cursor: config.cursor, 
                activeCursor: 'grabbing',
                onPress() { 
                    this.startOffset = scrub.vars.position; 
                }, 
                onDrag(self) { 
                    scrub.vars.position = gsap.utils.clamp(0, 1, (this.startOffset + (this.startX -  this.x ) * 0.003) )
                    scrub.invalidate().restart()
                }, 
                    onDragEnd() { 
                    scrollToPosition( scrub.vars.position )
                } 
              })

        })
        
          
        let exitTime, exitTime2,
        curentSlide = 0
        
        const rightButton = document.querySelector(config.next),
        leftButton = document.querySelector(config.prev),
        rightButtonImgBox = rightButton.querySelector('div'),
        leftButtonImgBox = leftButton.querySelector('div')
      
            
        const rightButtonTl = gsap.timeline()
            .fromTo(rightButton, { opacity: .5, scale: .95, pointerEvents: 'none', }, { opacity: 1, scale: 1, duration: .1, ease: 'none', pointerEvents: 'auto', })
        const leftButtonTl = gsap.timeline()
            .fromTo(leftButton, { opacity: .5, scale: .95, pointerEvents: 'none', }, { opacity: 1, scale: 1, duration: .1, ease: 'none', pointerEvents: 'auto', })
            
        const leftButtonBoxTl = gsap.timeline()
        .to(leftButtonImgBox, { opacity: .9, scale: .85, duration: .035, ease: 'al_out', })
        exitTime = leftButtonBoxTl.duration()
        leftButtonBoxTl.to(leftButtonImgBox, { opacity: 1, scale: 1, duration: .035, ease: 'al_out', })
        .reverse()
        
        const leftButtonBoxHoverTl = gsap.timeline()
        .to(leftButtonImgBox, { opacity: .9, scale: .9, duration: .1, ease: 'al_out', })
        .reverse()
        
        
        const rightButtonBoxTl = gsap.timeline()
        .to(rightButtonImgBox, { opacity: .9, scale: .85, duration: .035, ease: 'al_out', })
        exitTime2 = leftButtonBoxTl.duration()
        rightButtonBoxTl.to(rightButtonImgBox, { opacity: 1, scale: 1, duration: .035, ease: 'al_out', })
        .reverse()
        
        const rightButtonBoxHoverTl = gsap.timeline()
        .to(rightButtonImgBox, { opacity: .9, scale: .9, duration: .1, ease: 'al_out', })
        .reverse()
        
        rightButton.addEventListener('mouseenter', () => rightButtonBoxHoverTl.tweenTo(.1))
        rightButton.addEventListener('mouseleave', () => rightButtonBoxHoverTl.tweenTo(0))
        leftButton.addEventListener('mouseenter', () => leftButtonBoxHoverTl.tweenTo(.1))
        leftButton.addEventListener('mouseleave', () => leftButtonBoxHoverTl.tweenTo(0))
        
        const next = () => { 
            
            scrollToPosition(scrub.vars.position + ( 1 / snap_point ))
            leftButtonTl.tweenTo('.1', { ease: 'al_out' })
            
            
            
            if ( rightButtonBoxTl.duration() === rightButtonBoxTl.time() ) {
                rightButtonBoxTl.restart()
            }
            if ( rightButtonBoxTl.time() > exitTime ) {
                rightButtonBoxTl.reverse()
            }
            if ( rightButtonBoxTl.time() < exitTime ) {
                rightButtonBoxTl.play()
            }
            
            if ( curentSlide === 0 ) {
                  curentSlide+=1
            } else {
                if ( scrub.vars.position > 0 || scrub.vars.position > 2 ) {
                    curentSlide+=1
                }
                if ( scrub.vars.position > 1 - ((1 / targets_array.length) * 2) ) {
                    rightButtonTl.tweenTo('0', { ease: 'al_out' })
                }
                
            }
  
        }
        const prev = () => {
            

            scrollToPosition(scrub.vars.position - ( 1 / snap_point ))
            rightButtonTl.tweenTo('.1', { ease: 'al_out' })

            
            
            if ( leftButtonBoxTl.duration() === leftButtonBoxTl.time() ) {
                leftButtonBoxTl.restart()
            }
            if ( leftButtonBoxTl.time() > exitTime2 ) {
                leftButtonBoxTl.reverse()
            }
            if ( leftButtonBoxTl.time() < exitTime2 ) {
                leftButtonBoxTl.play()
            }
            
            if ( scrub.vars.position > 0 || scrub.vars.position > 2 ) {
                curentSlide-=1
            }
            
  
            if ( scrub.vars.position < ((1 / targets_array.length) * 2) || scrub.vars.position > 2 ) {
                leftButtonTl.tweenTo('0', { ease: 'al_out' })
            }     
  
        }
        
        rightButton.addEventListener('click', next)
        leftButton.addEventListener('click', prev)
        
        
        if(targets_main_wrapper.querySelectorAll('video').length > 0) {
            
          for( i = 0; i < targets_array.length; i++ ) {
              const box = document.createElement('div')
              box.classList.add('shadow')
              box.style.height = targets_height + 'px'
              box.style.width = widths[1] + 'px'
              box.style.position = 'absolute'
              targets_main_wrapper.append(box)
            
          }
          
          const shadowBoxes = gsap.utils.toArray('.shadow')
          
          shadowBoxes.forEach((shadow, i) => {
                gsap.set(shadow, { top: `+=${i * widths[1]}` })
          })
          
              
          shadowBoxes.forEach((element, i) => {
              if( targets_array[i].querySelectorAll('video').length > 0 ) {
                  ScrollTrigger.create({
                      scroller: targets_main_wrapper,
                      trigger: element,
                      start: `top top+=${widths[1] - 1}`,
                      end: 'top top-=1',
                      onEnter: () => {
                          targets_array[i].querySelector('video').play()
                      },
                      onEnterBack: () => {
                          targets_array[i].querySelector('video').play()
                      },
                      onLeave: () => {
                          targets_array[i].querySelector('video').currentTime = 0
                          targets_array[i].querySelector('video').pause()
                      },
                      onLeaveBack: () => {
                          targets_array[i].querySelector('video').currentTime = 0
                          targets_array[i].querySelector('video').pause()
                      }
                  })
              }
          })
          
        }
       
        
          
  
        
        } 
        })
        
          const reviewSlider = gsap.effects.draggable_scroll('.shopreview', { 
            cursor: 'grab',
            stagger: .5,  
            duration: 1,  
            scene_duration: .5,
            end_count: 1,
            next: '.controllrightarrow',
            prev: '.controllleftarrow',
          })

          const mkreviewSlider = gsap.effects.draggable_scroll('.mkreview', { 
            cursor: 'grab',
            stagger: .5,  
            duration: 1,  
            scene_duration: .5,
            end_count: 1,
            next: '.mkcontrollrightarrow',
            prev: '.mkcontrollleftarrow',
          })

