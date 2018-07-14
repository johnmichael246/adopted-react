import Entity from './Entity';
import moment from 'moment';

export default class Photo extends Entity {
    constructor(data) {
        super(data);
        console.log(this.data)
    }

    get size() {
        return this.data['@size']
    }

    get link() {
        return this.data.$t
    }

}