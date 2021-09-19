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

const entitiesMap = {};
var funnySentence = []
var entities = [];
var worldCtx = null;
var worldCanvas = null;
var windowCtx = null;
var logs = []

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
    movePlayer,
    getSentences,
    saveLog
}

function restartGame(ctx) {
    _setWindowCtx(ctx);
    _restartWorldCtx();
    _restartEntities();
    // _setPlayerLastLocation();
    window.requestAnimationFrame(animationFrameCallback);
    setFunnySentences()

}

function getWorldCameraLocation() {
    const playerLocation = player.entity.getLocation();
    return {
        x: Math.min((windowCtx.canvas.width / 2) + -(playerLocation.x) - 91, 0),
        y: Math.min((windowCtx.canvas.height / 2) + -(playerLocation.y) - 136, 0)
    }

}

function movePlayer(cubeResult) {
    player.entity.setDestination(entitiesMap[cubeResult]);

}


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
      
        x:250,
        y: 250
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
        x: 1500,
        y: 740
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

async function setFunnySentences() {

    try {
        funnySentence = await httpService.get('sentences')
    } catch (err) {
        console.log(err);
    }
}

function getSentences() {
    return funnySentence
}

function saveLog(action, timestamp) {
   let logToSave = {
        action,
        timestamp,
    }
    logs.push(logToSave)
    if (logs.length > 5) sendLogs(logs)



}

async function sendLogs(logs) {
    try {
       await httpService.post('logs',logs)
    } catch (err) {
        console.log(err);
    }
}

export default GameService;