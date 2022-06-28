import gsap from "gsap"

const ringEnterTransition = (camera, rings, container, notFromGate) => 
{
    const count = container.querySelectorAll(`.count`)
    const partner = container.querySelectorAll(`.partner`)
    const wedDate = container.querySelectorAll(`.wed-date`)
    const ringText = container.querySelector(`.ring-text`)
    const ornament = container.querySelectorAll(`.ornament`)


    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power4.out`,
        }
    })

    if(notFromGate === false)
    {
        tl
        .to(camera.instance.position, {y: -18, x: 0, z: 10, duration: 4}, 1)
        .to(camera.controls.target, {y: -20, x: 0, z: 0, duration: 4}, 1)
        .to(ringText, {opacity: 1},1)
        .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 1)
        .from(count, {yPercent: 100, opacity: 0, duration: 2, stagger: .1,}, 2.2)
        .from(partner, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
        .from(wedDate, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
        .then(() => camera.controls.enabled = true)
    }
    else
    {
        tl
        .to(camera.instance.position, {y: -18, x: 0, z: 10, duration: 4}, 0)
        .to(camera.controls.target, {y: -20, x: 0, z: 0, duration: 4}, 0)
        .to(ringText, {opacity: 1},1)
        .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 1)
        .from(count, {yPercent: 100, opacity: 0, duration: 2, stagger: .1,}, 2.2)
        .from(partner, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
        .from(wedDate, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
        .then(() => camera.controls.enabled = true)
    }

    return tl
}

export default ringEnterTransition