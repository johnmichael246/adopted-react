import Entity from './Entity'

export default class Breed extends Entity {
    constructor(data) {
        super(data);
    }
    get breed() {
        return this.data.$t
    }
}