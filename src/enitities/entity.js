  
import { Subject } from 'rxjs';

class Entity {
    location = {
        x: 0,
        y: 0
    }

    destinationEntity = null;

    // TODO: should it be an obserable? try and not waste too much time on it.
    arrivedAtDestinationEntity$ = new Subject();
    constructor(img, _location, _size) {
        this.img = this.prepareGraphics(img);
        this.size = _size;
        this.setLocation(_location);
    }

    stepToDestinationEntity() {
        const xDifference = this.location.x - this.destinationEntity.location.x;
        const yDifference = this.location.y - this.destinationEntity.location.y;
        /**The following if statements check whether the player need to travel in a certain axis (X or Y)
         * If there is a need to tavel the statements will either add or substract 1 to the correlated axis and then return.
         * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
         */
        if (xDifference !== 0) {
            this.location.x -= (Math.sign(xDifference) * 5);
            return;
        }
        if (yDifference !== 0) {
            this.location.y -= (Math.sign(yDifference) * 5);
            return;
        }
        // TODO: a callback to RXJS or something that notifies that we have arrived
        // We have arrived, let's mark the destinationEntity as null so we won't run redundant methods
        this.arrivedAtDestinationEntity$.next(this.destinationEntity);
        this.destinationEntity = null;
    }

    stepIfRequired() {
        if (this.destinationEntity) {
            this.stepToDestinationEntity();
        }
    }

    update() {
        this.stepIfRequired();
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.location.x, this.location.y);
    }

    prepareGraphics(img) {
        const image = document.createElement('img');
        image.src = img;
        return image;
    }

    getLocation() {
        return this.location;
    }

    // setLocation(_location) {
    //     return this.location = _location;
    // }

    getSize() {
        return this.size;
    }

    setLocation(_location) {
        // makes the center of the entity it's location
        this.location.x = _location.x - (this.size.width / 2);
        this.location.y = _location.y - (this.size.height / 2);
    }

    setDestinationEntity(_destinationEntity) {
        this.destinationEntity = _destinationEntity;
    }
}

export default Entity;