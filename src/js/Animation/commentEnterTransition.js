import gsap from "gsap";

const commentEnterTransition = (camera, container) =>
{

    const commentContainer = container.querySelector(`#comments-container`)

    camera.controls.enabled = false

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl

    .to(camera.instance.position, {y: -70, x: 0, z: 10}, 0)
    .to(camera.controls.target, {y: -70, x: 0, z: 0}, 0)
    .to(commentContainer, {opacity: 1}, 1)
    .from(commentContainer, {yPercent: 30}, 1)

    return tl
}

export default commentEnterTransition

