export const UtilService = {
    getRandomArbitrary
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    
}

export default UtilService;