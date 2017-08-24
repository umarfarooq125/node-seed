commonRoute = (type, folderName, fileName) => {
    var path = require('path');
    switch (type) {
        case 'model':
            return path.join(rootUrl, '/models/' + folderName, fileName);
        case 'business':
            return path.join(rootUrl, '/business/' + folderName, fileName);
        case 'configurations':
            return path.join(rootUrl, '/configurations/' + folderName, fileName);

        default:
            return path.join(rootUrl, '/routes/' + folderName, fileName);
    }
}

commonResponse = (res, statusCode, data) => {
    if (statusCode === 400) {
        var message = (data.message === undefined) ? { message: data } : data;
        return res.status(statusCode).send(message);
    }
    return res.status(statusCode).send(data);
}

commonRandom = () => {
    return '4xyxxxxyxxxx3xxxyxx8xxxxxyxxxxxuxxxyxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

commonLogging = (funcName, funcMessage) => {
    return "functionName : " + funcName + ", errorMessage : " + funcMessage;
}

module.exports.commonRoute = commonRoute;
module.exports.commonResponse = commonResponse;
module.exports.commonRandom = commonRandom;
module.exports.commonLogging = commonLogging;
