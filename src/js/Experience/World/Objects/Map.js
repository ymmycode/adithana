import * as THREE from 'three'
import Experience from '../../Experience'
import { ColorPalette2, MapDesign, MapEnv, Icons } from './Materials'

export default class Map 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // time
        this.time = this.experience.time

        // resources
        this.resources = this.experience.resources

        // group
        this.group = new THREE.Group()
        this.groupParent = new THREE.Group()

        // auto rotate
        this.autoRotate = true

        // map material
        this.colorPalette = new ColorPalette2()
        this.bakedEnv = new MapEnv()
        this.mapDesign = new MapDesign()
        this.iconsMat = new Icons()

        // map scene
        this.mapScene = this.resources.items.mapScene

        // setting up
        this.setModel()
        this.setAnimation()
        this.setMaterials()

        // for enter animation
        this.group.position.set(0, -60, 0)
        // responsive

        this.setDesktop()
    }

    setModel()
    {
        this.mapModel = this.mapScene.scene
        this.mapModel.scale.set(2.5, 2.5, 2.5)
        // this.mapModel.rotation.y = -Math.PI * .3
        this.mapModel.rotation.y = -Math.PI * .75
        this.mapModel.position.y = -.2

        //adding map to the actual scene
        this.group.add(this.mapModel)
        this.groupParent.add(this.group)
        this.scene.add(this.groupParent)
    }

    setMaterials()
    {
        this.mapGround = this.mapModel.children.find(child => child.name === `Map`)
        this.locPointer = this.mapModel.children.find(child => child.name === `Location002`)
        this.environment = this.mapModel.children.find(child => child.name === `Environment001`)
        this.icons = this.mapModel.children.find(child => child.name === `Icon`)

        this.mapGround.material = this.mapDesign.material
        this.locPointer.material = this.colorPalette.material
        this.environment.material = this.bakedEnv.material
        this.icons.material = this.iconsMat.material
    }

    setAnimation()
    {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.mapModel)
        this.animation.actions = this.mapScene.animations || []
        this.animation.mixer.clipAction(this.animation.actions[3]).play()
    }

    update()
    {
        this.animation.mixer.update(this.time.delta * 0.001 / 1.5)

        if(this.autoRotate)
        {
            this.group.rotation.y = Math.cos(Math.sin( this.time.elapsed * 0.001 / 12))
        }
    }

    setDesktop()
    {
        this.mapModel.scale.set(2.25, 2.25, 2.25)
    }

    setMobile()
    {
        this.mapModel.scale.set(1.6, 1.6, 1.6)
    }
}