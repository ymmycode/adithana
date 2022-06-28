import gsap from "gsap";

const locationEnterTransition = (camera, mapScene, container) => 
{
    const title = container.querySelectorAll(`.title-location span`)
    const geoLink = container.querySelector(`.geo-link`)
    const ornament = container.querySelectorAll(`.ornament`)

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl

    .set(camera.instance.position, {y: -39, x: 0, z: 10}, 0)
    .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 2)
    .from(title, {yPercent: 100, stagger: .1}, 2)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, stagger: .1}, 2)
    .to(camera.instance.position, {y: -55, x: 0, z: 8, duration: 5}, 0)
    .to(camera.controls.target, {y: -60, x: 0, z: 0, duration: 3}, 0)
    .from(geoLink, {xPercent: 200, x: 0, z: 0}, 2)
    .fromTo(geoLink, {opacity: 0}, {opacity: 1}, 2)
    .then(() => geoLink.classList.toggle(`animate`))
    .then(() => camera.controls.enabled = true)
    .then(() => camera.controls.enableZoom = true)

    return tl
}

export default locationEnterTransition