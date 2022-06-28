import gsap from "gsap";

const galleryEnterTransition = (camera, gallery, container) => 
{

    const header = container.querySelectorAll(`.header`)

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power4.out`,
        }
    })

    camera.instance.far = 30
    camera.instance.updateProjectionMatrix()

    tl

    .to(header, {opacity: 1, stagger: 0.1, duration: 2 }, 1)
    .from(header, {yPercent: 100, stagger: 0.1, duration: 2}, 1)
    
    .to(camera.instance.position, {y: -99, x: 0, z: 10, duration: 3}, 0)
    .to(camera.controls.target, {y: -99, x: 0, z: 0, duration: 3}, 0)
    
    return tl
}

export default galleryEnterTransition