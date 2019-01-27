class Middleware { 
    static XHR(req, res, next) {
        if (req.xhr) console.log('XHR request');
        next();
    }
}

module.exports = Middleware;