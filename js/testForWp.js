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

    const h1Toggles = gsap.utils.toArray('.h1_toggle'),
    h1ToggleTl = gsap.timeline({ repeat: -1, defaults: { duration: .3, ease: 'none', delay: 1.5, } })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { y: '-100%' })
    .set(h1Toggles[0], { y: '100%', delay: 0 })
    .to([h1Toggles[1], h1Toggles[2]], { y: '-200%'  })
    .set(h1Toggles[1], { y: '0%', delay: 0  })
    .to(h1Toggles[2], { y: '-300%' })
    .to(h1Toggles[0], { y: '0%', delay: 0  }, '<')
    .set(h1Toggles[2], { y: '200%', delay: 0  })

    const dryTextBeneffit = document.querySelector('.drytextbeneffit')
    gsap.fromTo(dryTextBeneffit, { background: 'linear-gradient(106.5deg, rgba(139, 112, 247, 0.5) 32.59%, rgba(199, 185, 254, 0.6) 80.29%)' }, { background: 'linear-gradient(338.43deg, rgba(139, 112, 247, 0.5) 3.71%, rgba(199, 185, 254, 0.6) 90.02%)', duration: 2, ease: 'none', repeat: -1, yoyo: true })

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
        markers: true,
        }
    })
    .from(aboutus, { duration: 1, y: -aboutusPadding + -aboutusTitleHeight, ease: 'none' })
    .to(aboutusTitleSpan, { duration: .5, textFillColor: "#C7B9FE", ease: 'al_slide' }, '<.5')
    .from(aboutusSubtitlesSmall, { autoAlpha: 0, y: aboutusSubtitlesSmallHeight / 2, ease: 'none', duration: .5 })
    .to(aboutusSubtitlesSmall, { autoAlpha: 0, ease: 'none', duration: .5, delay: .5, })
    .fromTo(aboutusSubtitlesLarge, { autoAlpha: 0, y: -aboutusSubtitlesSmallHeight / 2, }, { autoAlpha: 1, y: -aboutusSubtitlesSmallHeight, ease: 'none', duration: .5 })

