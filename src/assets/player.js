export default class Player {
    constructor(entity) {
        this._entity = entity;
        window.playEntity = this._entity;
    }

    setDestination(destinationEntity) {
        this._entity.setDestination(destinationEntity);
    }

    get entity() {
        return this._entity;
    }
}