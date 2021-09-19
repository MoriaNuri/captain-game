  
import { Subject } from 'rxjs';

class Entity {
    location = {
        x: 0,
        y: 0
    }

    destinationEntity = null;

    arrivedAtDestination$ = new Subject();
    constructor(img, _location, _size) {

        this.img = this.design(img);
        this.size = _size;
        this.setLocation(_location);
    }

    stepToDestination() {
        const xDifference = this.location.x - this.destinationEntity.location.x;
        const yDifference = this.location.y - this.destinationEntity.location.y;
        
        if (xDifference !== 0) {
            this.location.x -= (Math.sign(xDifference) * 5);
            return;
        }
        if (yDifference !== 0) {
            this.location.y -= (Math.sign(yDifference) * 5);
            return;
        }
        
        this.arrivedAtDestination$.next(this.destinationEntity);
        this.destinationEntity = null;
    }

    stepIfRequired() {
        if (this.destinationEntity) {
            this.stepToDestination();
        }
    }

    update() {
        this.stepIfRequired();
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.location.x, this.location.y);
    }

    design(img) {
        const image = document.createElement('img');
        image.src = img;
        return image;
    }

    getLocation() {
        return this.location;
    }


    getSize() {
        return this.size;
    }

    setLocation(_location) {
        // makes the center of the entity it's location
        this.location.x = _location.x - (this.size.width / 2);
        this.location.y = _location.y - (this.size.height / 2);
    }

    setDestination(_destinationEntity) {
        this.destinationEntity = _destinationEntity;
    }
}

export default Entity;