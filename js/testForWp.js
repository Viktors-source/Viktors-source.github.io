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
CustomEase.create('easeOutQuad', 'M0,0 C0.5,1 0.89,1 1,1') 
CustomEase.create('easeOutQuint', 'M0,0 C0.22,1 0.36,1 1,1') 
CustomEase.create('easeOutSine', 'M0,0 C0.61,1 0.88,1 1,1') 





/* <----- show animation -----> */
let mm = gsap.matchMedia()

/* first screen */
const h1 = document.querySelector('h1'),
mainimage = document.querySelector('.mainimage'),
firstScreenBeneffit = document.querySelector('.first-screen__beneffit'),
mainBeneffit = firstScreenBeneffit.querySelectorAll('.mainbeneffit'),
mainBeneffitArray = gsap.utils.toArray('.mainbeneffit'),
mainBeneffitImage = firstScreenBeneffit.querySelectorAll('.mainbeneffit__icon'),
mainBeneffitImageArray = gsap.utils.toArray('.mainbeneffit__icon'),
mainBeneffitTextArray = gsap.utils.toArray('.mainbeneffit__text'),
h1Toggles = gsap.utils.toArray('.h1_toggle')

mm.add('(min-width: 960px)', () => {

    const firstScreenShow = gsap.timeline()
    .from(mainimage, { opacity: .1, ease: "power2.inOut", duration: 1 })
    .from(h1, { y: '25%', autoAlpha: 0, ease: 'al_slide', duration: 1.5 }, '<')
    .from(mainBeneffit, { y: '40%', autoAlpha: 0, ease: 'al_slide', duration: 1 }, '>-.7')
    .from(mainBeneffitImage, { y: '70%', autoAlpha: 0, ease: 'al_slide', stagger: .05, duration: .7 })

    const h1ToggleTl = gsap.timeline({ repeat: -1, repeatDelay: 2.8, defaults: { duration: .7, ease: "power2.out", delay: .7, } })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { opacity: 1, duration: 1.1 })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { y: '-100%' })
    .set(h1Toggles[0], { y: '100%', delay: 0 })
    .to([h1Toggles[1], h1Toggles[2]], { y: '-200%'  })
    .set(h1Toggles[1], { y: '0%', delay: 0  })
    .to(h1Toggles[2], { y: '-300%' })
    .to(h1Toggles[0], { y: '0%', delay: 0  }, '<')
    .set(h1Toggles[2], { y: '200%', delay: 0  })

})

mm.add('(max-width: 959px)', () => {

    const firstScreenShow = gsap.timeline()
    .from(mainimage, { opacity: .1, ease: "power2.inOut", duration: 1 })
    .from(h1, { y: '25%', autoAlpha: 0, ease: 'al_slide', duration: 1.5 }, '<')

    const h1ToggleTl = gsap.timeline({ repeat: -1, repeatDelay: 2.8, defaults: { duration: .7, ease: "power2.out", delay: .7, } })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { opacity: 1, duration: .1 })
    .to([h1Toggles[0], h1Toggles[1], h1Toggles[2]], { y: '-100%' })
    .set(h1Toggles[0], { y: '100%', delay: 0 })
    .to([h1Toggles[1], h1Toggles[2]], { y: '-200%'  })
    .set(h1Toggles[1], { y: '0%', delay: 0  })
    .to(h1Toggles[2], { y: '-300%' })
    .to(h1Toggles[0], { y: '0%', delay: 0  }, '<')
    .set(h1Toggles[2], { y: '200%', delay: 0  })

    mainBeneffitArray.forEach((beneffit, i) => {

        gsap.set(beneffit, { overflow: 'visible' })

        tl =  gsap.timeline({
            scrollTrigger: {
                trigger: beneffit,
                start: 'top bottom-=10%',
                toggleActions: 'play none none reverse',
                // markers: true,
            }
        })
        // .from(mainBeneffitImageArray[i], { y: '100%', ease: 'al_slide', autoAlpha: 0, duration: .5 })
        .from(mainBeneffitTextArray[i], { y: '100%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 })
        .from(mainBeneffitImageArray[i], { y: '100%', ease: 'al_slide', autoAlpha: 0, duration: .5 }, '>.1')
        .to(mainBeneffitImageArray[i], { rotate: '-35deg', ease: 'easeOutSine', duration: .2 }, '<')
        .to(mainBeneffitImageArray[i], { rotate: '0deg', ease: 'easeOutSine', duration: .2 })

    })

    // mainBeneffitImageArray.forEach((image, i) => {
    //     img = image.querySelector('img')
    //     tl =  gsap.timeline({
    //         scrollTrigger: {
    //             trigger: image,
    //             start: 'top bottom-=10%',
    //             toggleActions: 'play none none reverse',
    //             // markers: true,
    //         }
    //     })
    //     // .from(image, { y: '100%', ease: 'al_slide', autoAlpha: 0, duration: .5 })
    //     .from(img, { y: '100%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 })
    // })

    // mainBeneffitTextArray.forEach((text, i) => {
     
    //     tl =  gsap.timeline({
    //         scrollTrigger: {
    //             trigger: text,
    //             start: 'top bottom-=10%',
    //             toggleActions: 'play none none reverse',
    //             // markers: true,
    //         }
    //     })
    //     // .from(text, { y: '40%', ease: 'al_slide', autoAlpha: 0, duration: .5 })
    //     .from(text, { y: '100%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 })
    // })


})

/* first screen */

/* beneffits */
const beneffitPoint = gsap.utils.toArray('.beneffit__point'),
dryflourPoint = gsap.utils.toArray('.dryflour__point'),
fineflourPoint = gsap.utils.toArray('.fineflour__point'),
beneffitTitle = gsap.utils.toArray('.beneffit__title'),
beneffitText = gsap.utils.toArray('.beneffit__text'),
beneffitMdia = gsap.utils.toArray('.beneffit__media'),
dryTextBeneffit = document.querySelector('.drytextbeneffit'),
dryTextBeneffitTitle = document.querySelectorAll('.drytextbeneffit__title'),
dryflourPoints = document.querySelector('.dryflour__points')

const dryTextBeneffitTitleBackAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: dryTextBeneffit,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play pause play pause',
    }
})
.fromTo(dryTextBeneffit, { background: 'linear-gradient(106.5deg, rgba(139, 112, 247, 0.5) 32.59%, rgba(199, 185, 254, 0.6) 80.29%)' }, { background: 'linear-gradient(338.43deg, rgba(139, 112, 247, 0.5) 3.71%, rgba(199, 185, 254, 0.6) 90.02%)', duration: 2, ease: 'none', repeat: -1, yoyo: true })

mm.add('(min-width: 960px)', () => {

    beneffitPoint.forEach((point, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: point,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(point, { y: 120, ease: 'al_slide', duration: .6 })
                .from(point, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })
    beneffitTitle.forEach((title, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: title,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(title, { y: 120, ease: 'al_slide', duration: .6 })
                .from(title, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })
    beneffitText.forEach((text, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: text,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(text, { y: 120, ease: 'al_slide', duration: .6 })
                .from(text, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })
    beneffitMdia.forEach((media, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: media,
                        start: 'top bottom-=10%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(media, { opacity: .1, ease: "power2.inOut", duration: .6 })
    })

    const dryTextBeneffitTitleAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: dryTextBeneffit,
            start: 'top bottom-=25%',
        }
    })
    .from(dryTextBeneffitTitle, { opacity: 0, scale: 10, ease: "power2.inOut", duration: 1 })


})
mm.add('(max-width: 959px)', () => {

    const dryflourPointsAnimation =  gsap.timeline({
                    scrollTrigger: {
                        trigger: dryflourPoints,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(dryflourPoints, { y: '20%', ease: 'al_slide', duration: .6 })
                .from(dryflourPoints, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')

    fineflourPoint.forEach((point, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: point,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                    }
                })
                .from(point, { y: '20%', ease: 'al_slide', duration: .6 })
                .from(point, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })

    dryflourPoint.forEach((point, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: point,
                        start: 'top bottom-=40%',
                        end: `+=${(79 + ((235) - (79)) * ((window.innerWidth - 320) / (960 - 320))) * 2}`, //'top bottom-=70%',
                        scrub: .1,
                    }
                })
                .to(point, { x: -79 + ((-235) - (-79)) * ((window.innerWidth - 320) / (960 - 320)), ease: 'none', duration: .6 })
    })


    beneffitTitle.forEach((title, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: title,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(title, { y: '20%', ease: 'al_slide', duration: .6 })
                .from(title, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })
    beneffitText.forEach((text, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: text,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(text, { y: '20%', ease: 'al_slide', duration: .6 })
                .from(text, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })
    beneffitMdia.forEach((media, i) => {

        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: media,
                        start: 'top bottom-=10%',
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    }
                })
                .from(media, { opacity: .1, ease: "power2.inOut", duration: .6 })
    })

    const dryTextBeneffitTitleAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: dryTextBeneffit,
            start: 'top bottom-=20%',
            toggleActions: 'play none none reverse',
            // markers: true,
        }
    })
    .from(dryTextBeneffitTitle, { opacity: 0, scale: 5, ease: "power2.inOut", duration: 1 })

})
/* beneffits */


/* about us */
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
aboutusTitleSpan = aboutusTitle.querySelector('span')

mm.add('(min-width: 960px)', () => {

    gsap.set(aboutus, { y: -aboutusPadding + -aboutusTitleHeight })
    gsap.set(aboutusSubtitlesLarge, { autoAlpha: 0 })

    const srollingTextAnimation = gsap.timeline({
        scrollTrigger: {
        pinSpacing: false,
        trigger: drytextbeneffit,
        start: `bottom center+=${aboutusTitleHeight}`,
        end: `+=${aboutusTitleHeight * 2}`,
        scrub: 0.5,
        pin: aboutus,
        }
    })
    .to(aboutusTitleSpan, { duration: .5, delay: .5, textFillColor: "#C7B9FE", ease: 'al_slide' })

    const srollingTextAnimation2 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesSmallHeight}`,
        scrub: 0.5,
        }
    })
    .from(aboutusSubtitlesSmall, { autoAlpha: 0, y: aboutusSubtitlesSmallHeight / 2, ease: 'al_slide', duration: 1 })

    const srollingTextAnimation3 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2 + aboutusSubtitlesSmallHeight * 2} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesSmallHeight}`,
        scrub: 0.5,
        }
    })
    .to(aboutusSubtitlesSmall, { autoAlpha: 0, ease: 'al_slide', duration: 1 })

    const srollingTextAnimation4 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2 + aboutusSubtitlesSmallHeight * 2.9} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesLargeHeight}`,
        scrub: 0.5,
        }
    })
    .fromTo(aboutusSubtitlesLarge, { autoAlpha: 0, y: 0, }, { autoAlpha: 1, y: -aboutusSubtitlesSmallHeight, ease: 'al_slide', duration: 1 })


})
mm.add('(max-width: 959px)', () => {

    gsap.set(aboutus, { y: -aboutusPadding + -aboutusTitleHeight })
    gsap.set(aboutusSubtitlesLarge, { autoAlpha: 0 })

    const srollingTextAnimation = gsap.timeline({
        scrollTrigger: {
        pinSpacing: false,
        trigger: drytextbeneffit,
        start: `bottom center+=${aboutusTitleHeight}`,
        end: `+=${aboutusTitleHeight * 2}`,
        scrub: 0.5,
        pin: aboutus,
        }
    })
    .to(aboutusTitleSpan, { duration: .5, delay: .5, textFillColor: "#C7B9FE", ease: 'al_slide' })

    const srollingTextAnimation2 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesSmallHeight}`,
        scrub: 0.5,
        }
    })
    .from(aboutusSubtitlesSmall, { autoAlpha: 0, y: aboutusSubtitlesSmallHeight / 2, ease: 'al_slide', duration: 1 })

    const srollingTextAnimation3 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2 + aboutusSubtitlesSmallHeight} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesSmallHeight}`,
        scrub: 0.5,
        }
    })
    .to(aboutusSubtitlesSmall, { autoAlpha: 0, ease: 'al_slide', duration: 1 })

    const srollingTextAnimation4 = gsap.timeline({
        scrollTrigger: {
        trigger: drytextbeneffit,
        start: `bottom+=${aboutusTitleHeight * 2 + aboutusSubtitlesSmallHeight * 1.9} center+=${aboutusTitleHeight}`,
        end: `+=${aboutusSubtitlesLargeHeight}`,
        scrub: 0.5,
        }
    })
    .fromTo(aboutusSubtitlesLarge, { autoAlpha: 0, y: 0, }, { autoAlpha: 1, y: -aboutusSubtitlesSmallHeight, ease: 'al_slide', duration: 1 })

})
/* about us */


/* review */
const shopReviewTitle = document.querySelector('.shopreview__title'),
reviewText = gsap.utils.toArray('.review__text'),
volumetToggleButton = document.querySelector('.shopreviewactions_mobile'),
shopReviewMediaBox = document.querySelector('.shopreviewmediaBox'),
shopReviewActions = document.querySelectorAll('.shopreviewactions > div'),
mkReviewControlls = document.querySelector('.mkreviewcontrolls')


mm.add('(min-width: 960px)', () => {

const shopReviewTitleAnimation =  gsap.timeline({
    scrollTrigger: {
        trigger: shopReviewTitle,
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.from(shopReviewTitle, { y: 120, ease: 'al_slide', duration: .6 })
.from(shopReviewTitle, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')

reviewText.forEach((text, i) => {

    tl =  gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: 'top bottom-=5%',
                    toggleActions: 'play none none reverse',
                }
            })
            .from(text, { y: 120, ease: 'al_slide', duration: .6 })
            .from(text, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
})

const shopReviewActionsAnimation =  gsap.timeline({
    scrollTrigger: {
        trigger: shopReviewActions,
        start: 'top bottom-=5%',
    }
})
.from(shopReviewActions, { y: 120, ease: 'al_slide', stagger: .05, duration: .6 })
.from(shopReviewActions, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')

const mkReviewControllsAnimation =  gsap.timeline({
    scrollTrigger: {
        trigger: mkReviewControlls,
        start: 'top bottom-=5%',
    }
})
.from(mkReviewControlls, { y: 120, ease: 'al_slide', duration: .6 })
.from(mkReviewControlls, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')

const swowcardCartGalleryAnimationPart1 = ScrollTrigger.create({ 
    trigger: mkReviewControlls,
    start: 'top bottom-=5%',
    once: true,
    onEnter: () => {
        gsap.delayedCall(0.1, hideCardCartGalley);
    },
})
function hideCardCartGalley() {
    imageSaleAnimation[0, 1, 2].tweenTo('showFromRightSideStart')
}

})


mm.add('(max-width: 959px)', () => {

    const shopReviewTitleAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: shopReviewTitle,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(shopReviewTitle, { y: '20%', ease: 'al_slide', duration: .6 })
    .from(shopReviewTitle, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
    reviewText.forEach((text, i) => {
    
        tl =  gsap.timeline({
                    scrollTrigger: {
                        trigger: text,
                        start: 'top bottom-=5%',
                        toggleActions: 'play none none reverse',
                    }
                })
                .from(text, { y: '20%', ease: 'al_slide', duration: .6 })
                .from(text, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    })

    const srollingTextAnimation2 = gsap.timeline({
        scrollTrigger: {
        trigger: shopReviewMediaBox,
        start: `bottom bottom-=${43 + (129 - 43) * ((window.innerWidth - 320) / (960 - 320))}`, 
        toggleActions: 'play none none reverse',
        }
    })
    .from(volumetToggleButton, { y: -43 + ((-129) - (-43)) * ((window.innerWidth - 320) / (960 - 320)), ease: 'al_slide', duration: .6 })
    .from(volumetToggleButton, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')

})
/* review */


/* cartcard */
const cardcartTitle = document.querySelector('.cardcart__title'),
cardcartPoints = document.querySelectorAll('.cardcart__points p'),
cardCartDisplay = document.querySelector('.cardcartdisplay'),
changeCountButton = document.querySelector('.changecountbutton'),
cardCartButon = document.querySelector('.cardcart__buton'),
sliderTabs = document.querySelectorAll('.slidertabs > div'),
sliderTab = document.querySelector('.slidertabs'),
cardcartPrice = document.querySelector('.cardcart__price')

gsap.set(cardcartPrice, { overflow: 'hidden' })


mm.add('(min-width: 960px)', () => {

    const cardcartTitleAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardcartTitle,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardcartTitle, { y: 120, ease: 'al_slide', duration: .6 })
    .from(cardcartTitle, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')

    const cardcartGalleryAnimation = ScrollTrigger.create({ 
        trigger: cardcartTitle,
        start: 'top bottom-=5%',
        once: true,
        onEnter: () => {
            imageSaleClickAnimation[0](saleImageMin[0])
        },
    })
    
    const cardcartPointsAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardcartPoints,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardcartPoints, { y: 120, ease: 'al_slide', stagger: .05, duration: .6 })
    .from(cardcartPoints, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')

    const cardCartDisplayAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardCartDisplay,
            start: 'top bottom-=5%',
        }
    })
    .from(changeCountButton, { y: 120, ease: 'al_slide', duration: .6 })
    .from(changeCountButton, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    .from(cardCartButon, { y: 120, ease: 'al_slide', duration: .6 }, '.1')
    .from(cardCartButon, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    .set(cardcartPrice, { overflow: 'visible' })
    .from(cardCartDisplay, { y: '200%', ease: 'al_slide', duration: .6 }, '>-.1')
    .from(cardCartDisplay, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
    const sliderTabsAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: sliderTabs,
            start: 'top bottom-=5%',
            onEnter: () => {
                gsap.delayedCall(1.2, showTextTab);
                
            },
        }
    })
    .from(sliderTabs, { y: 120, ease: 'al_slide', stagger: .05, duration: .6 })
    .from(sliderTabs, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
    .fromTo(sliderTab, { '--slidertabs_scale': 0 }, { '--slidertabs_scale': 1, ease: 'al_slide', duration: .6 }, '>-.1')
    .set(sliderTab, { overflow: 'visible' })

    function showTextTab() {
        sellSliderToggles[0](sellSliderTab[0])
    }

})

    
    
mm.add('(max-width: 959px)', () => {

    const cardcartTitleAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardcartTitle,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardcartTitle, { y: '50%', ease: 'al_slide', duration: .6 })
    .from(cardcartTitle, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
    const cardcartPointsAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardcartPoints,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardcartPoints, { y: '50%', ease: 'al_slide', stagger: .05, duration: .6 })
    .from(cardcartPoints, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
    
    const cardCartDisplayAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardCartDisplay,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardCartDisplay, { y: '50%', ease: 'al_slide', duration: .6 })
    .from(cardCartDisplay, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
    const changeCountButtonAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: changeCountButton,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(changeCountButton, { y: '50%', ease: 'al_slide', duration: .6 })
    .from(changeCountButton, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
    const cardCartButonAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: cardCartButon,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(cardCartButon, { y: '50%', ease: 'al_slide', delay: .1, duration: .6 })
    .from(cardCartButon, { ease: 'none', autoAlpha: 0, delay: .1, duration: .6 }, '<')
    
    const sliderTabsAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: sliderTabs,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(sliderTabs, { y: '50%', ease: 'al_slide', stagger: .05, duration: .6 })
    .from(sliderTabs, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
    
    const sliderTabAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: sliderTabs,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .fromTo(sliderTab, { '--slidertabs_scale': 0 }, { '--slidertabs_scale': 1, ease: 'al_slide', delay: .7, duration: .6 })
    
})

/* cartcard */


/* footer */
const footerLink = gsap.utils.toArray('.foterlink'),
footerLinkAll = document.querySelectorAll('.foterlink'),
footer = document.querySelector('.footer'),
copyright = document.querySelector('.copyright')

mm.add('(min-width: 960px)', () => {


    const footerLinkAllAnimation =  gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
        }
    })
    .from(footerLinkAll, { y: 120, ease: 'al_slide', stagger: .05, duration: .6 })
    .from(footerLinkAll, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
    .from(copyright, { y: 120, ease: 'al_slide', duration: .6 }, '<')
    .from(copyright, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
})

    
    
mm.add('(max-width: 959px)', () => {

})
 




/* <----- show animation -----> */








/* <----- local-nav -----> */

const burgerLine = document.querySelector('.burger__line'),
    burgerLines = gsap.utils.toArray('.burger__line'),
    burgerClickArea = document.querySelector('.nav__burger'),
    dropdown = document.querySelector('.dropdown'),
    navContent = document.querySelector('.nav__content')
    
    burgerLineWidth = burgerLine.offsetWidth,
    burgerLineHeight = burgerLineWidth / 12,
    burgerIndent = burgerLineWidth / 6

    const burgerAnimation = gsap.timeline()
    .from(burgerLines[0], { rotate: '-45deg', duration: .2, ease: 'al_out'  })
    .from(burgerLines[2], { rotate: '45deg', duration: .2, ease: 'al_out'  }, '<')
    .from(burgerLines[1], { autoAlpha: 0, duration: 0.001 })
    .to(burgerLines[0], { y: (-burgerIndent) + (-burgerLineHeight), duration: .2, ease: 'al_out'  })
    .to(burgerLines[2], { y: burgerIndent + burgerLineHeight, duration: .2, ease: 'al_out'  }, '<')

    
    
    
    burgerClickArea.addEventListener('click', () => {
        burgerAnimation.reversed(!burgerAnimation.reversed())
        toggleMobileNav.reversed(!toggleMobileNav.reversed())
    })
    document.addEventListener('click', (e) => {
        if ( dropdown.contains(e.target) || navContent.contains(e.target)) {
            
        } else if ( toggleMobileNav.time() > 0 ) {
            burgerAnimation.reversed(!burgerAnimation.reversed())
            toggleMobileNav.reversed(!toggleMobileNav.reversed())
        }
    })

    const navLinkMobile = document.querySelectorAll('.nav__link_mobile'),
    navFooter = document.querySelector('.nav__footer'),
    navFooterTexts = navFooter.querySelectorAll('p'),
    dropdownHeight = dropdown.offsetHeight,
    navContentHeight = navContent.offsetHeight,
    navCurtain = document.querySelector('.nav__curtain'),

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
        .to(innerText, { y: '-100%', ease: 'al_slide', duration: .5 })
        .reverse()

        link.addEventListener('mouseenter', () => {
            tl.restart()
        })
    })

    const buttons = gsap.utils.toArray('.button')
    buttons.forEach(button => {
        const tl = gsap.timeline()
        .fromTo(button, { scale: 1 }, { scale: .9, ease: "power2.inOut", duration: .1 })
        .to(button, { scale: 1, ease: 'elastic.out(1.2, 0.3)', duration: .5 })
        .reverse()

        const tl2 = gsap.timeline()
        .fromTo(button, { '--headerButtonOpacity': 1 }, { '--headerButtonOpacity': .8, ease: "power2.inOut", duration: .2 })
        .reverse()

        button.addEventListener('click', () => {
            tl.restart()
        })
        button.addEventListener('mouseenter', () => tl2.play())
        button.addEventListener('mouseleave', () => tl2.reverse())
    })
    

    /* <----- local-nav -----> */


    /* <----- first screen -----> */



    /* <----- first screen -----> */


    /* <----- beneffits -----> */

    // const dryTextBeneffit = document.querySelector('.drytextbeneffit')
    // gsap.fromTo(dryTextBeneffit, { background: 'linear-gradient(106.5deg, rgba(139, 112, 247, 0.5) 32.59%, rgba(199, 185, 254, 0.6) 80.29%)' }, { background: 'linear-gradient(338.43deg, rgba(139, 112, 247, 0.5) 3.71%, rgba(199, 185, 254, 0.6) 90.02%)', duration: 2, ease: 'none', repeat: -1, yoyo: true })

    /* <----- beneffits -----> */


    /* <----- about us -----> */

  

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

        gsap.registerEffect({ 
            name:'draggable_scroll2', 
            effect: (targets, config) => { 
            
            let targets_array = targets,
            targets_wrapper = targets[0].parentNode,
            targets_main_wrapper = targets_wrapper.parentNode,
            targets_height = targets_array[0].offsetHeight,
            targets_width = targets_array[0].offsetWidth,
            listWidth = targets_width * targets_array.length,
            iteration = 0
            console.log(listWidth)
        
            gsap.set(targets_array, {xPercent: 100})
            const spacing = 0.25,
            snapTime = gsap.utils.snap(spacing),
            cards = targets_array,
            
        
            animateFunc = element => {
                const tl = gsap.timeline()
                .fromTo(element, { xPercent: 200, }, { xPercent: -200, duration: 1, ease: 'none', immediateRender: false })  
                .fromTo(element.querySelector('div'), { opacity: .3, }, { opacity: 1, delay: .25, zIndex: 100, duration: .25, repeat: 1, yoyo: true, ease: 'al_out', immediateRender: false }, '0')  
                return tl
            },
        
            seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
            playhead = {offset: 0}, 
            wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), 
            scrub = gsap.to(playhead, {
                offset: 0,
                onUpdate() {
                    seamlessLoop.time(wrapTime(playhead.offset))
                },
                duration: 0.5,
        
                paused: true
            }),
            trigger = ScrollTrigger.create({
                scroller: targets_main_wrapper, 
                start: 0,
                onUpdate(self) {
                    let scroll = self.scroll()
                    if (scroll > self.end - 1) {
                        wrap(1, 1)
                    } else if (scroll < 1 && self.direction < 0) {
                        wrap(-1, self.end - 1)
                    } else {
                        scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration()
                        scrub.invalidate().restart()
                    }
                },
                end: `+=${ listWidth }`, 
                pin: targets_wrapper,
            }),
        
            progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end),
            wrap = (iterationDelta, scrollTo) => {
                iteration += iterationDelta
                trigger.scroll(scrollTo)
                trigger.update() 
            }
        
            function scrollToOffset(offset) { 
                let snappedTime = snapTime(offset),
                    progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration(),
                    scroll = progressToScroll(progress)
                if (progress >= 1 || progress < 0) {
                    return wrap(Math.floor(progress), scroll)
                }
                trigger.scroll(scroll)
            }
        
            
            document.querySelector(config.next).addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing))
            document.querySelector(config.prev).addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing))
        
            function buildSeamlessLoop(items, spacing, animateFunc) {
                let rawSequence = gsap.timeline({paused: true}), 
                    seamlessLoop = gsap.timeline({ 
                        paused: true,
                        repeat: -1, 
                        onRepeat() { 
                            this._time === this._dur && (this._tTime += this._dur - 0.01)
                        },
                  onReverseComplete() {
                    this.totalTime(this.rawTime() + this.duration() * 100)
                  }
                    }),
        
                    cycleDuration = spacing * items.length,
                    dur
                    items.concat(items).concat(items).forEach((item, i) => {
                        let anim = animateFunc(items[i % items.length])
                        rawSequence.add(anim, i * spacing)
                        dur || (dur = anim.duration())
                    })
                
                    seamlessLoop.fromTo(rawSequence, {
                        time: cycleDuration + dur / 2
                    }, {
                        time: "+=" + cycleDuration,
                        duration: cycleDuration,
                        ease: "none"
                    })
                    return seamlessLoop
            }
        
            gsap.set(targets_main_wrapper, { pointerEvents: 'none'})
            const targets_main_wrapperBox = targets_main_wrapper.parentNode

            console.log(targets_main_wrapperBox)

            var proxyDiv = document.createElement('div')
        
            Draggable.create(proxyDiv, {
                type: "x",
                trigger: targets_main_wrapperBox,
                cursor: config.cursor, 
                activeCursor: 'grabbing',
                onPress() {
                  this.startOffset = scrub.vars.offset
                },
                onDrag() {
                  scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.005 // 0.003
                  scrub.invalidate().restart() 
                },
                onDragEnd() {
                  scrollToOffset(scrub.vars.offset)
                }
              })
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

          const mkreviewSlider = gsap.effects.draggable_scroll2('.mkreview', { 
            cursor: 'grab',
            // stagger: .5,  
            // duration: 1,  
            // scene_duration: .5,
            // end_count: 1,
            next: '.mkcontrollrightarrow',
            prev: '.mkcontrollleftarrow',
          })



        const sliderMainReview = document.querySelector('.shopreviews'),
            reviewsVideos = gsap.utils.toArray(sliderMainReview.querySelectorAll('video')),
            shopreviewactionsMobile = document.querySelector('.shopreviewactions_mobile')

        

        mm.add('(max-width: 959px)', () => {

            const switchVolumeOffBox = shopreviewactionsMobile.querySelector('.volumetoggleOffbutton'),
                switchVolumeOnBox = shopreviewactionsMobile.querySelector('.volumetoggleOnbutton')

                function volumeVideoSwitchOn() {
                    reviewsVideos.forEach((video) => video.muted = false)
                }
                function volumeVideoSwitchOff() {
                    reviewsVideos.forEach((video) => video.muted = true)
                }
                
                const volumeVideoSwitchOnHover = gsap.timeline()
                .fromTo(switchVolumeOnBox, { '--switchVolumeOpacity': 1, }, { '--switchVolumeOpacity': 0, duration: .15, ease: 'al_out', })
                
                const volumeVideoSwitchOffHover = gsap.timeline()
                .fromTo(switchVolumeOffBox, { '--switchVolumeOpacity': 1, }, { '--switchVolumeOpacity': 0, duration: .15, ease: 'al_out', })
                
                switchVolumeOffBox.addEventListener('mouseenter', () => volumeVideoSwitchOffHover.tweenTo(0))
                switchVolumeOffBox.addEventListener('mouseleave', () => volumeVideoSwitchOffHover.tweenTo(.15))
                
                switchVolumeOnBox.addEventListener('mouseenter', () => volumeVideoSwitchOnHover.tweenTo(0))
                switchVolumeOnBox.addEventListener('mouseleave', () => volumeVideoSwitchOnHover.tweenTo(.15))
                
                
                const volumeVideoSwitchClick = gsap.timeline()
                    .fromTo(switchVolumeOnBox, { scale: 1, autoAlpha: 1, zIndex: 10, }, { scale: .7, autoAlpha: 0, ease: 'none', duration: .1, zIndex: 1, })
                    .fromTo(switchVolumeOffBox, { scale: .7, autoAlpha: 0, zIndex: 1, }, { scale: 1, autoAlpha: 1, ease: 'none', duration: .1, zIndex: 10, })
                    .reverse()
                    
                    switchVolumeOnBox.addEventListener('click', () => {
                    volumeVideoSwitchClick.tweenTo(.2)
                    volumeVideoSwitchOn()
                })
                switchVolumeOffBox.addEventListener('click', () => {
                    volumeVideoSwitchClick.tweenTo(0)
                    volumeVideoSwitchOff()
                })

        })

        mm.add('(min-width: 960px)', () => {

            const switchVolumeOffBox = sliderMainReview.querySelector('.volumetoggleOffbutton'),
                switchVolumeOnBox = sliderMainReview.querySelector('.volumetoggleOnbutton')

                function volumeVideoSwitchOn() {
                    reviewsVideos.forEach((video) => video.muted = false)
                }
                function volumeVideoSwitchOff() {
                    reviewsVideos.forEach((video) => video.muted = true)
                }
                
                const volumeVideoSwitchOnHover = gsap.timeline()
                .fromTo(switchVolumeOnBox, { '--switchVolumeOpacity': 1, }, { '--switchVolumeOpacity': 0, duration: .15, ease: 'al_out', })
                
                const volumeVideoSwitchOffHover = gsap.timeline()
                .fromTo(switchVolumeOffBox, { '--switchVolumeOpacity': 1, }, { '--switchVolumeOpacity': 0, duration: .15, ease: 'al_out', })
                
                switchVolumeOffBox.addEventListener('mouseenter', () => volumeVideoSwitchOffHover.tweenTo(0))
                switchVolumeOffBox.addEventListener('mouseleave', () => volumeVideoSwitchOffHover.tweenTo(.15))
                
                switchVolumeOnBox.addEventListener('mouseenter', () => volumeVideoSwitchOnHover.tweenTo(0))
                switchVolumeOnBox.addEventListener('mouseleave', () => volumeVideoSwitchOnHover.tweenTo(.15))
                
                
                const volumeVideoSwitchClick = gsap.timeline()
                    .fromTo(switchVolumeOnBox, { scale: 1, autoAlpha: 1, zIndex: 10, }, { scale: .7, autoAlpha: 0, ease: 'none', duration: .1, zIndex: 1, })
                    .fromTo(switchVolumeOffBox, { scale: .7, autoAlpha: 0, zIndex: 1, }, { scale: 1, autoAlpha: 1, ease: 'none', duration: .1, zIndex: 10, })
                    .reverse()
                    
                    switchVolumeOnBox.addEventListener('click', () => {
                    volumeVideoSwitchClick.tweenTo(.2)
                    volumeVideoSwitchOn()
                })
                switchVolumeOffBox.addEventListener('click', () => {
                    volumeVideoSwitchClick.tweenTo(0)
                    volumeVideoSwitchOff()
                })

        })


/* <----- reviews -----> */


/* <----- card cart -----> */

    const cardcartButon = document.querySelector('.cardcart__buton')

    mm.add('(max-width: 959px)', () => { 
        cardcartButon.textContent = 'Отримати реквізити'
    })     
    mm.add('(min-width: 960px)', () => { 
        cardcartButon.textContent = 'Отримати реквізити для оплати'
    })    

        const sellModal = document.querySelector('.changecountmodal'),
    sellMadalAnimation = gsap.timeline()
    .fromTo(sellModal, { autoAlpha: 0 }, { autoAlpha: 1, duration: .1, ease: 'al_out'})
    .addPause()
    .addLabel('sellModalPause')
    .fromTo(sellModal, { autoAlpha: 1 }, { autoAlpha: 0, delay: .2, duration: .15, ease: 'al_out'})

    sellMadalAnimation.tweenTo(0)

const sellChangeCountButton = document.querySelector('.changecountbutton'),
    sellChangeCountButtonHoverAnimation = gsap.timeline()
    .fromTo(sellChangeCountButton, { '--sellTotalCountBoxOpacity': 1 }, { '--sellTotalCountBoxOpacity': 0, duration: .1, ease: 'none' })
    sellChangeCountButton.addEventListener('mouseenter', () => sellChangeCountButtonHoverAnimation.tweenTo('0', { ease: 'al_out' }))
    sellChangeCountButton.addEventListener('mouseleave', () => sellChangeCountButtonHoverAnimation.tweenTo('.1', { ease: 'al_out' }))
    sellChangeCountButton.addEventListener('click', () => {
        sellMadalAnimation.restart()
    })

    

const sellModalTab = gsap.utils.toArray('.modaltab')
const sellModalTabAnimationBox = sellModalTab.map(createSellModalTabAnimation)
    
sellModalTab.forEach((tab) => { 
    tab.addEventListener('click', () => sellModalTabAnimation(tab))
})

function sellModalTabAnimation(clickedTab) {
    sellModalTabAnimationBox.forEach((toggleFn) => toggleFn(clickedTab))
}

function createSellModalTabAnimation(element, i) {

    sellMadalAnimation.tweenTo(0)

    const tl = gsap.timeline()
    .fromTo(element, { '--sellModalTabChackedOpacity': 1 }, { '--sellModalTabChackedOpacity': 0, duration: .1, ease: 'none' })
    
        return function(clickedTab) {
            sellMadalAnimation.play('sellModalPause')
        if (clickedTab === element) {
            if (tl.time() === .1) {
            tl.tweenTo('0', { ease: 'al_out' })
            } else {
            }
        } else {
            tl.tweenTo('.1', { ease: 'al_out' })
        }
        }

}


// function sellModalAnimationBuilder(element) {
//     const tl = gsap.timeline()
//     .fromTo(element, { '--sellModalTabOpacity': 1, '--sellModalValueOpacity': 1, }, { '--sellModalTabOpacity': 0, '--sellModalValueOpacity': 0, duration: .1, ease: 'none' })
//     return tl
// }
// const sellModalTabAnimationArray = sellModalTab.map(sellModalAnimationBuilder)
const sellTotalInputCountBox = document.querySelector('.inputcount'),
    lableForSaleInput = document.querySelector('.lableforinputcount'),
    sellTotalCount = document.querySelector('.counter'),
    sellTotalPrice = document.querySelector('.cardcartdisplay'),
    sellInputCountBox = document.querySelector('.inputcountbox'),
    inputQuantity = document.querySelector('.inputquantity'),
    inputPrice = document.querySelector('.inputprice')

sellModalTab.forEach((tab, i) => {
    const value = i + 1
    const price =  495 * (i + 1)
    const tl = gsap.timeline()
    .fromTo(tab, { '--sellModalTabOpacity': 1, '--sellModalValueOpacity': 1, }, { '--sellModalTabOpacity': 0, '--sellModalValueOpacity': 0, duration: .1, ease: 'none' })
    tab.addEventListener('mouseenter', () => tl.tweenTo('0', { ease: 'al_out' }))
    tab.addEventListener('mouseleave', () => tl.tweenTo('.1', { ease: 'al_out' }))  
        tab.addEventListener('click', () => {
        tl.tweenTo('.1', { ease: 'al_out', onStart: () => { tl.timeScale(2) }})
        tl.tweenTo('0', { ease: 'al_out', delay: .1, onStart: () => { tl.timeScale(2) }})
        if ( i < 9 ) {
            tab.dataset.value = `${value}`
            tab.dataset.price = `${price}`
            sellTotalCount.textContent = `${tab.dataset.value}`
            sellTotalPrice.textContent = `${tab.dataset.value} кг - ${tab.dataset.price} грн`
            inputQuantity.value = `${tab.dataset.value}`
            inputPrice.value = `${tab.dataset.price} грн`
        } 
        if ( i === 9 ) {
            sellTotalInputAnimation.play()
            sellTotalPrice.textContent = '10 кг - 4950 грн'
            inputQuantity.value = '10 кг'
            inputPrice.value = '4950 грн'
        }
        })

})

document.addEventListener('click', (e) => {
    if ( sellModal.contains(e.target)) {
        
    } else {
        if( sellMadalAnimation.time() === sellMadalAnimation.labels.sellModalPause ) {
            sellMadalAnimation.play('sellModalPause' + .2)
        }
    }
})

// const cardcartButon = document.querySelector('.cardcart__buton')



    
    const sellTotalInputAnimation = gsap.timeline()
        .set(sellInputCountBox, { autoAlpha: 0 })
        .to(sellInputCountBox, { duration: .1 })
        .addPause()
        .to(sellInputCountBox, { duration: .25 })
        .set(sellChangeCountButton, { overflow: 'hidden' })
        .set(sellTotalInputCountBox, { value: "" }, '<')
        .to(sellChangeCountButton, { '--sellTotalCountBoxY': '40px', duration: .2, ease: 'al_slide' }, '<')
        .to(sellTotalCount, { y: 45, duration: .2, ease: 'al_slide' }, '<')
        .set(sellChangeCountButton, { autoAlpha: 0 })
        .set([sellTotalInputCountBox, sellInputCountBox], { autoAlpha: 1 }, '<')
        .from(lableForSaleInput, { y: -77, duration: .2, ease: 'al_slide' })
        .set(sellTotalInputCountBox, { value: "10" })
        .set(lableForSaleInput, { autoAlpha: 0 })

    
    sellTotalInputCountBox.addEventListener('focus', () => {
        sellTotalInputCountBox.select()
    })
    sellTotalInputCountBox.addEventListener('blur', () => {
        if ( sellTotalInputCountBox.value === '') {
            sellTotalInputCountBox.value = '1'
            inputQuantity.value = '1 кг'
            inputPrice.value = '495 грн'
        }
    })
    sellTotalInputCountBox.addEventListener('input', () => {
        sellTotalInputCountBox.value = sellTotalInputCountBox.value.replace(/[^0-9]/g, '')
        const price =  495 * sellTotalInputCountBox.value
        if ( sellTotalInputCountBox.value === '') {
            sellTotalPrice.textContent = '1 кг - 495 грн' 
            inputQuantity.value = '1 кг'
            inputPrice.value = '495 грн'
        } else if ( sellTotalInputCountBox.value === '0' ) {
            sellTotalInputCountBox.value = '1'
            sellTotalPrice.textContent = '1 кг - 495 грн'
            inputQuantity.value = '1 кг'
            inputPrice.value = '495 грн'
        } else {
            sellTotalPrice.textContent = `${sellTotalInputCountBox.value} кг - ${price} грн`
            inputQuantity.value = `${sellTotalInputCountBox.value} кг`
            inputPrice.value = `${price} грн`
        }
    })
    
//     const blueLink = gsap.utils.toArray('.blueLink')
    
//     blueLink.forEach(a => {
//     const aHoverTl = gsap.timeline()
//     .fromTo(a, { '--faq_line_scale': 1 }, { '--faq_line_scale': 0, duration: .1, ease: 'none' } )
//     a.addEventListener('mouseenter', () => aHoverTl.tweenTo('0', { ease: 'al_out' }))
//     a.addEventListener('mouseleave', () => aHoverTl.tweenTo('.1', { ease: 'al_out' }))
//   })
  
//   const sellSliderTab = gsap.utils.toArray('.sliderDescriptionTab'),
//   sellSliderText = gsap.utils.toArray('.sliderDescriptionText')
  
//   sellSliderTab.forEach(tab => {
      
//       const tabTl = gsap.timeline()
//       .fromTo(tab, { color: '#1D1D1F', pointerEvents: 'none', '--sellModalTabLineOpacity': 1 }, { color: '#6E6E73', '--sellModalTabLineOpacity': 0, pointerEvents: 'auto', duration: .1, ease: 'none' })
//       tab.addEventListener('click', () => tabTl.tweenTo('0', { ease: 'none' }))
      
//       const tabTl2 = gsap.timeline()
//       .fromTo(tab, { '--sellTabOpacity': 1 }, { '--sellTabOpacity': 0, duration: .1, ease: 'none' })
//       tab.addEventListener('mouseenter', () => tabTl2.tweenTo('0', { ease: 'none' }))
//       tab.addEventListener('mouseleave', () => tabTl2.tweenTo('.1', { ease: 'none' }))
//   })
//   sellSliderText.
//   .fromTo(tab, { position: 'relative', opacity: 1 }, { position: 'absolute', opacity: 0, duration: .2, ease: 'none' })


    const sellSliderTab = gsap.utils.toArray('.slidertab'),
    sellSliderText = gsap.utils.toArray('.slidertext'),
    sellSliderToggles = sellSliderTab.map(createsellSliderAnimation)
    
    sellSliderTab.forEach(tab => {
        
      const tabTl = gsap.timeline()
      .fromTo(tab, { '--sellTabOpacity': 1 }, { '--sellTabOpacity': 0, duration: .1, ease: 'none' })
      tab.addEventListener('mouseenter', () => tabTl.tweenTo('0', { ease: 'none' }))
      tab.addEventListener('mouseleave', () => tabTl.tweenTo('.1', { ease: 'none' }))
      
      tab.addEventListener("click", () => toggleSellSlider(tab))
  })
  
  function toggleSellSlider(clickedTab) {
      sellSliderToggles.forEach(toggleFn => toggleFn(clickedTab))
  }
  
  function createsellSliderAnimation(element, i) {
      
    const text = sellSliderText[i]
    
    const textTl = gsap.timeline()
    .fromTo(text, { opacity: 1 }, { opacity: 0, duration: .2, ease: 'none' })
    
    const TextTl2 = gsap.timeline()
    .fromTo(text, { position: 'relative' }, { position: 'absolute', duration: .01, ease: 'none' })
      
    const tabTl = gsap.timeline()
    .fromTo(element, { color: '#1D1D1F', pointerEvents: 'none', '--sellModalTabLineOpacity': 1 }, { color: '#6E6E73', '--sellModalTabLineOpacity': 0, pointerEvents: 'auto', duration: .1, ease: 'none' })
      
    return function(clickedTab) {

        if (clickedTab === element) {
          tabTl.tweenTo('0', { ease: 'none' })
          textTl.tweenTo('0', { ease: 'none' })
          TextTl2.tweenTo('0', { ease: 'none' })
        } else {
          tabTl.tweenTo('.1', { ease: 'none' })
          textTl.tweenTo('.2', { ease: 'none' })
          TextTl2.tweenTo('.01', { ease: 'none' })
        }
    }
  }






    const saleImage = gsap.utils.toArray('.cardcartimage'),
    saleImageMin = gsap.utils.toArray('.cardcartimagepreview'),
    imageSaleClickAnimation = saleImageMin.map(createClickimageSaleAnimation),
    imageSaleMinClickAnimation = saleImageMin.map(createSaleImageMinAnimation)
    currentImage = {
        value: 0,
    }
    
    const imageSaleAnimation = saleImage.map(createImageSaleAnimation)
    
    function createImageSaleAnimation(image) {
        
         const tl = gsap.timeline()
        .addLabel('hideScaleStart')
        .fromTo(image, { zIndex: 2, scale: 1, }, { zIndex: 2, scale: .9, duration: .72, ease: 'gg_scale_out', immediateRender: false })
        .fromTo(image, { zIndex: 2, opacity: 1, }, { zIndex: 2, opacity: 0, duration: .72, ease: 'gg_scale_clip_in', immediateRender: false }, '<')
    
        .addPause()
        .addLabel('showFromRightSideStart')
        .fromTo(image, { zIndex: 3, opacity: 1, clipPath: 'inset(0 0 0 100%)', scale: 1.2, }, { zIndex: 3, clipPath: 'inset(0px 0px 0px 0px)', scale: 1, opacity: 1, duration: 1.2, ease: 'gg_scale_clip_in', immediateRender: false })
        .reverse()

        return tl
  
    }
    
    function createSaleImageMinAnimation(image) {

        gsap.set(image, { opacity: 1, pointerEvents: 'auto', })
        const tl = gsap.timeline()
            .to(image, { opacity: 0.7, pointerEvents: 'none', border: '2px solid #8B70F6', duration: .1, ease: 'none' })
            .reverse()
        return tl
    
    }
    

    
    
    saleImageMin.forEach((image) => {
        image.addEventListener('click', () => conectImageSaleAnimation(image))
        
        const tl = gsap.timeline()
        .to(image, { scale: 1.1, duration: .2, ease: 'al_out' })
        .reverse()
        
        image.addEventListener('mouseenter', () => tl.play())
        image.addEventListener('mouseleave', () => tl.reverse())
    })

    function conectImageSaleAnimation(image) {
        imageSaleClickAnimation.forEach((fn) => fn(image))
    }

    function createClickimageSaleAnimation(element, i) {

    return function (target) {
      if (target === element) {
          
          if (Number.isInteger(currentImage.value) ) {
            imageSaleMinClickAnimation[i].play()              
          }
          
        if (i !== currentImage.value) {

          if (Number.isInteger(currentImage.value)) {
            gsap.to(currentImage, { value: i, duration: .6 })
            imageSaleAnimation[i].play("showFromRightSideStart")
          }

        } 
      } else {

        imageSaleAnimation[currentImage.value].play("hideScaleStart")
        imageSaleMinClickAnimation[i].reverse()

      }

    }

  }

  /* <----- card cart -----> */


  /* <----- qa -----> */
          
  

  const qaLInk = gsap.utils.toArray('.qa__action')
  qaLInk.forEach(link => {
        innerText = link.querySelectorAll('span')
        const tl = gsap.timeline()
        .to(innerText, { y: '-100%', ease: 'al_slide', duration: .3 })
        .reverse()

        link.addEventListener('mouseenter', () => {
            tl.restart()
        })
    })


footerLink.forEach(link => {
    innerText = link.querySelectorAll('span')
    const tl = gsap.timeline()
    .to(innerText, { y: '-100%', ease: 'al_slide', duration: .5 })
    .reverse()

    link.addEventListener('mouseenter', () => {
        tl.restart()
    })
})

const beneffitSection = document.querySelector('.dryflour'),
aboutUsSection = document.querySelector('.aboutus'),
shopReviewsSection = document.querySelector('.shopreviews'),
qaSection = document.querySelector('.qa')

const navigationSection = [beneffitSection, aboutUsSection, shopReviewsSection, qaSection],
navigationSectiontoSnap = [beneffitSection.offsetTop, dryTextBeneffit.offsetTop + dryTextBeneffit.offsetHeight, shopReviewsSection.offsetTop, qaSection.offsetTop - qaSection.offsetHeight],
linksScrollAnimationArray = navLink.map(createLinksScrolltoSectionAnimation),
linksChangeInOutAnimationArray = navLink.map(createLinksChangeInOutSectionAnimation)

function createLinksChangeInOutSectionAnimation(link) {
    const tl = gsap.timeline()
    .fromTo(link, { color: '#8B70F6', pointerEvents: 'none', }, { color: '#1D1D1F', pointerEvents: 'auto', duration: .1, ease: 'none' })

    return tl
}

navLink.forEach((link, i) => {
    link.addEventListener('click', () => conectSectionScrollToAnimation(link))
    link.addEventListener("click", () => {
        gsap.to(window, { duration: 1, ease: 'al_slide', scrollTo: { y: navigationSection[i], offsetY: 42 + (60 - 42) * ((window.innerWidth - 960) / (1360 - 960)) }})
      })
})

function conectSectionScrollToAnimation(link) { 
    linksScrollAnimationArray.forEach((fn) => fn(link))
}

function createLinksScrolltoSectionAnimation(element, i) { 

    return function(link) {

        if (link === element) {
            linksChangeInOutAnimationArray[i].tweenTo('0', { ease: 'none' })
          } else {
            linksChangeInOutAnimationArray[i].tweenTo('.1', { ease: 'none' })
          }
    }
}

navigationSectiontoSnap.forEach((section, i) => {

    ScrollTrigger.create({
        start: `top+=${ section } center-=20%`,
        end: `+=${ navigationSectiontoSnap[i + 1] - navigationSectiontoSnap[i] }`,
        onEnter: (self) => {
            linksChangeInOutAnimationArray[i].tweenTo('0', { ease: 'none' })
        },
        onEnterBack: () => {
            linksChangeInOutAnimationArray[i].tweenTo('0', { ease: 'none' })
        },
        onLeave: () => {
            linksChangeInOutAnimationArray[i].tweenTo('.1', { ease: 'none' })
        },
        onLeaveBack: () => {
            linksChangeInOutAnimationArray[i].tweenTo('.1', { ease: 'none' })
        }
    })

})


const cardCart = document.querySelector('.cardcart'),
navButton = document.querySelector('.nav__button')

mm.add('(min-width: 960px)', () => {

    navButton.addEventListener("click", () => {
        gsap.to(window, { duration: 1, ease: 'al_slide', scrollTo: { y: cardCart, offsetY: 42 + (60 - 42) * ((window.innerWidth - 960) / (1360 - 960)) }})
    })

})









