export default class Player {
    constructor(entity) {
        this._entity = entity;
        window.playEntity = this._entity;
    }

    setDestinationEntity(destinationEntity) {
        this._entity.setDestinationEntity(destinationEntity);
    }

    get entity() {
        return this._entity;
    }
}