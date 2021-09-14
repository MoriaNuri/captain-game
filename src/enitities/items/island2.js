import Entity from "../entity";
import rumIsland from "../../assets/imgs/island2.png"

export class RumIsland extends Entity {

    constructor(location) {
        const size = {
            width: 450,
            height: 250
        }
        super(rumIsland, location, size);
    }
}

export default RumIsland;