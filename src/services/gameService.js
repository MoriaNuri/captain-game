import config from '../config';
import httpService from '../services/httpService';
import Bottle from '../enitities/items/bottle';
import Dragon from '../enitities/items/dragon';
import Island from '../enitities/items/island';
import Pirate from '../enitities/items/pirate';
import PirateIsland from '../enitities/items/island1';
import RumIsland from '../enitities/items/island2';
import Sea from '../enitities/items/sea';
import TressureIsland from '../enitities/items/island4';
import Wave from '../enitities/items/wave';
import Player from '../player';

// const rollDiceUrl = `${config.serverAdress}/game/roll`;
const getLastRollUrll = `${config.serverAdress}/game/lastRoll`;

const entities = [];
const entitiesMap = {};


let worldCtx = null;
let worldCanvas = null;
let windowCtx = null;

const worldDimensions = {
    width: 3239,
    height: 2179,
};
const player = new Player(new Pirate({
    x: 250,
    y: 250
}));

export const GameService = {
    restartGame,
    getWorldCameraLocation,
    roll
}

function restartGame(ctx) {
    _setWindowCtx(ctx);
    console.log('ctx from swrvice game', windowCtx);
    _restartWorldCtx();
    _restartEntities();
    _setPlayerLastLocation();
    window.requestAnimationFrame(animationFrameCallback);

}

function getWorldCameraLocation() {
    const playerLocation = player.entity.getLocation();
    return {
        x: Math.min((windowCtx.canvas.width / 2) + -(playerLocation.x) - 91, 0),
        y: Math.min((windowCtx.canvas.height / 2) + -(playerLocation.y) - 136, 0)
    }

}

function roll(cubeResult) {
    console.log(cubeResult);

    // let num= rollD6()
    // let cubeResultNumber = 'one'
    // switch (cubeResult) {
    //     case 'one':
    //         cubeResult === 1;
    //         break;
    //     case 'two':
    //         cubeResult === 2;
    //         break;
    //     case 'three':
    //         cubeResult === 3;
    //         break;
    //     case 'four':
    //         cubeResult === 4;
    //         break;
    //     case 'five':
    //         cubeResult === 5;
    //         break;
    //     case 'six':
    //         cubeResult === 6;
    //         break;
    //         // default:1

    // }
    // if (cubeResult === 'one') return 1
    // if (cubeResult === 'two') return 2
    // if (cubeResult === 'three') return 3
    // if (cubeResult === 'four') return 4
    // if (cubeResult === 'five') return 5
    // if (cubeResult === 'six') return 6


    player.entity.setDestinationEntity(entitiesMap[cubeResult]);


    // httpService.post('roll').then(diceRoll => {
    //     console.log(diceRoll);
    //     player.entity.setDestinationEntity(entitiesMap[diceRoll.data.number]);
    // })
    // .catch(err => {
    //     console.log(err);
    // })


}

// function rollD6() {
//     return Math.floor((Math.random() * (7 - 1) + 1));
// }



function _setWindowCtx(ctx) {
    windowCtx = ctx;
}

function _restartWorldCtx() {
    worldCanvas = document.createElement('canvas');
    worldCtx = worldCanvas.getContext('2d');
    worldCtx.canvas.width = worldDimensions.width;
    worldCtx.canvas.height = worldDimensions.height;
};



function animationFrameCallback() {
    step();
    render();
    window.requestAnimationFrame(animationFrameCallback);
};

function _restartEntities() {
    _setBackground();
    _setEntities();
    entitiesMap[7] = player.entity;
    entities.push(...Object.values(entitiesMap));
};

function step() {
    entities.forEach(entity => {
        entity.update();
    });
};

function render() {
    clearCanvas();
    entities.forEach(entity => {
        entity.draw(worldCtx);
    });
    const worldLocation = GameService.getWorldCameraLocation();
    windowCtx.drawImage(worldCanvas, worldLocation.x, worldLocation.y);
};

function clearCanvas() {
    windowCtx.fillStyle = "#0074dc";
    windowCtx.fillRect(0, 0, windowCtx.canvas.width, windowCtx.canvas.height);
    worldCtx.clearRect(0, 0, worldDimensions.width, worldDimensions.height);
};



function _setBackground() {
    entities.push(...[
        new Sea({
            x: 0,
            y: 0
        }),
        new Wave({
            x: 0,
            y: 0
        })
    ]);
};

function _setEntities() {
    entitiesMap[1] = new PirateIsland({
        x: player.entity.getLocation().x + player.entity.getSize().width / 2,
        y: player.entity.getLocation().y + player.entity.getSize().height
    });
    entitiesMap[2] = new RumIsland({
        x: 1300,
        y: 240
    });
    entitiesMap[3] = new Dragon({
        x: 2200,
        y: 350
    });
    entitiesMap[4] = new TressureIsland({
        x: 1300,
        y: 640
    });
    entitiesMap[5] = new Bottle({
        x: 250,
        y: 1200
    })
    entitiesMap[6] = new Island({
        x: 2200,
        y: 1000
    });
};



function _setPlayerLastLocation() {
    httpService.get(getLastRollUrll).then(value => {
        const lastRollValue = value.data.dice_result;
        if (lastRollValue) {
            player.entity.setLocation(entities[lastRollValue].getLocation());
        }
    })
        .catch(err => {
            console.log(err);
        });
}


// function destroy() {
//     playerArrivedAtDestinationSubscription.unsubscribe();
// }



export default GameService;