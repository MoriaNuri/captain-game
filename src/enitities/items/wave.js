import Entity from "../entity";
import wave from "../../assets/imgs/wave.png"

export class Wave extends Entity {
    constructor(location) {
        const size = {
            width: 0,
            height: 0
        }
        super(wave, location, size);
    }
}

export default Wave;