import Entity from "../entity";
import tressureIsland from "../../assets/imgs/island4.png";

class TressureIsland extends Entity {
    constructor(location) {
        const size = {
            width: 650,
            height: 580
        }
        super(tressureIsland, location, size);
    }
}

export default TressureIsland;