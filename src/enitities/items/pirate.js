import Entity from '../entity';
import pirate from '../../assets/imgs/pirate.png';

class Pirate extends Entity {
    constructor(location) {
        const size = {
            width: 180,
            height: 270
        }
        super(pirate, location, size);
    }
}

export default Pirate;