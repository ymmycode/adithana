import * as THREE from 'three'
import Experience from '../../../Experience'

export default class MapDesign
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // color palette
        this.design = this.resources.items.mapDesign
        this.design.flipY = false
        this.design.encoding = THREE.sRGBEncoding
        this.design.magFilter = THREE.LinearFilter
        this.design.minFilter = THREE.NearestFilter

        this.material = new THREE.MeshBasicMaterial({
            map: this.design,
        })

    }
}