module.exports.compareIgnoreCase = (first, second) => {
    if (typeof (first) === 'string' && typeof (second) === 'string') {
        return first.toUpperCase() === second.toUpperCase();
    }
    return false;
}