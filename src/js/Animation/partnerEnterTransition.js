import gsap from "gsap"

const partnerEnterTransition = (camera, partner, container) => 
{
    const ornament = container.querySelectorAll(`.ornament`)

    const part1 = document.querySelector(`.partner1`) ?? container.querySelector(`.partner1`) 
    const part2 = document.querySelector(`.partner2`) ?? container.querySelector(`.partner2`) 

    const partName = document.querySelectorAll(`.partner-name`) ?? container.querySelectorAll(`.partner-name`) 
    const partDetail = document.querySelectorAll(`.partner-detail`) ?? container.querySelectorAll(`.partner-detail`)


    camera.controls.enabled = false

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    .set(part1, {opacity: 1})
    .set(part2, {opacity: 1})

    .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 1)
    .from(partName, {yPercent: 100, stagger: .1}, 2)
    .fromTo(partName, {opacity: 0}, {opacity: 1,  stagger: .1}, 2)
    .from(partDetail, {yPercent: 100, stagger: .1}, 3)
    .fromTo(partDetail, {opacity: 0}, {opacity: 1, stagger: .1}, 3)
    .to(camera.instance.position, {y: -39, x: 0, z: 10, duration: 4}, 0)
    .to(camera.controls.target, {y: -40, x: 0, z: 0, duration: 4}, 0)
    
    return tl
}

export default partnerEnterTransition