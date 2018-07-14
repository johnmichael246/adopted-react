import moment from 'moment';

export default class Entity {
    constructor(data) {
        this.data = data;
        this.cache = {};
    }

    lookup(key, producer) {
        if(key in this.cache) {
            return this.cache[key];
        }

        if(producer instanceof Function) {
            this.cache[key] = producer();
        }

        return this.cache[key];
    }

    get id() {
        return this.data.id;
    }

    get createdAt() {
        return this.lookup('createdAt', _ =>
            moment.tz(this.data.created_at, 'America/Los_Angeles'));
    }

    get updatedAt() {
        return this.lookup('updatedAt', _ =>
            moment.tz(this.data.updated_at, 'America/Los_Angeles'));
    }

    static matchId(id) {
        return (entity) => {
            return entity.id === id
        };
    }
}