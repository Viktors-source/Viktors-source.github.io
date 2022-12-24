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
    navContent = document.querySelector('.nav__content'),
    dropdownHeight = dropdown.offsetHeight,
    navContentHeight = navContent.offsetHeight,
    navCurtain =document.querySelector('.nav__curtain'),
    toggleMobileNav = gsap.timeline()
    .from(dropdown, { y: -dropdownHeight + navContentHeight, duration: .3, ease: 'al_slide' })
    .fromTo(navCurtain, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'none', duration: .3 }, '<')
    .from(navLinkMobile, { y: '100%', duration: .2, stagger: .03, ease: 'none' }, '>-.1')
