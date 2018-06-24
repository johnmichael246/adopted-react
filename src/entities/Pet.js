import Entity from './Entity'
import Photo from './Photo'
import Breed from './Breed'

export default class Pet extends Entity {
    constructor(data) {
        super(data);
    }

    get name() {
        return this.data.name.$t
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
        return this.data.options
    }

    get locationInfo() {
        let info = {}
        info.address = this.data.address.$t || 'N/A'
        info.city = this.data.city.$t || 'N/A'
        info.state = this.data.state.$t || 'N/A'
        info.zipcode = this.data.zip.$t || 'N/A'
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