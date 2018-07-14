import Entity from './Entity'
import Photo from './Photo'
import Breed from './Breed'

export default class Pet extends Entity {
    constructor(data) {
        super(data);
    }

    get name() {
        let name = this.data.name.$t.toLowerCase()
        name = name.replace(/\s.[^-]*$/, '')
        return name
        // return name.split(' ').map(n => n.charAt(0).toUpperCase() + n.substring(1))
    }

    get gender() {
        return this.data.sex.$t
    }

    get id() {
        return this.data.id.$t
    }

    get mixedBreedStatus() {
        if (this.data.mix.$t === 'yes') {
            return true
        }
        return false
    }

    get photos() {
        return this.lookup('photos',_ => {
            const photos = [...this.data.media.photos.photo]
            return photos.map(record => new Photo(record)).filter(photo => {
                return photo.size === 'x'
            })
        })
    }

    get age() {
        return this.data.age.$t
    }

    get species() {
        return this.data.animal.$t
    }

    get size() {
        return this.data.size.$t
    }

    get shelterHousedAtId() {
        return this.data.shelterId.$t
    }

    get options() {
        return this.data.options.map(item => item.$t)
    }

    get locationInfo() {
        const { contact } = this.data
        let info = {}
        info.address = contact.address1.$t || 'N/A'
        info.city = contact.city.$t || 'N/A'
        info.state = contact.state.$t || 'N/A'
        info.zipcode = contact.zip.$t || 'N/A'
        return info
    }

    get currentStatus() {
        return this.data.lastUpdate.$t
    }

    get breeds() {
        return this.lookup('breeds', () => {
            let breeds
            if (typeof this.data.breeds.breed !== Array) {
                let breed = {$t:this.data.breeds.breed}
                breeds = Object.values(breed)
            } else {
                breeds = [...this.data.breeds.breed]
            }
            return breeds.map(b => new Breed(b))
        })
    }

    get description() {
        return this.data.description.$t
    }
}