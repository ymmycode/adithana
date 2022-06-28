import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Icons 
{
    constructor()
    {
        this.experience = new Experience()

        this.resource = this.experience.resources

        this.iconTex = this.resource.items.icons
        this.iconTex.flipY = false
        this.iconTex.encoding = THREE.sRGBEncoding
        this.iconTex.magFilter = THREE.LinearFilter
        this.iconTex.minFilter = THREE.NearestFilter

        this.material = new THREE.MeshBasicMaterial({
            map: this.iconTex,
            transparent: true,
            side: THREE.DoubleSide
        })
    }
}