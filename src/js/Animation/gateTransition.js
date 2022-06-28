import gsap from "gsap"

const gateTransition = (camera) => 
{

    // home leave page / gate entering animation
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power2.in`
        }
    })

    tl
    .to(camera.instance.position, {x: 0.4, y: 0, z: -1.5}, 0)
    .to(camera.controls.target, {x: 0.5, y: 0, z: -2}, 0)

    return tl
}

export default gateTransition