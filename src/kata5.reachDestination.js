const reachDestination = (distance, speed) => {
    return Math.ceil(distance/speed /0.5) * 0.5;
};

module.exports = reachDestination;
