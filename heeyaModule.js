var visitors = {};

exports.recoreVisitor = (visitorName) => {
    if (visitorName !== 'favicon.ico') {
        if (visitors[visitorName]) {
            visitors[visitorName] += 1;
        } else {
            visitors[visitorName] = 1;
        }
    }
}

exports.showVisitors = () => {
    var returnStrArr = Object.keys(visitors).map((key) => {
        return `${key}: ${visitors[key]}`;
    });
    return returnStrArr.join(', ');
}