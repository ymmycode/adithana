import gsap from "gsap";

const giftEnterTransition = (camera, container) => 
{
    const giftContainer = container.querySelector(`.gift-content`)

    camera.controls.enabled = false

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power4.out`,
        }
    })

    tl

    .to(camera.instance.position, {y: -70, x: 0, z: 10, duration: 2}, 0)
    .to(camera.controls.target, {y: -70, x: 0, z: 0, duration: 2}, 0)
    .to(giftContainer, {opacity: 1}, 1)
    .from(giftContainer, {yPercent: 30}, 1)
    .fromTo(giftContainer, {opacity: 0}, {opacity: 1, stagger: .1}, 1)

    return tl
}

export default giftEnterTransition