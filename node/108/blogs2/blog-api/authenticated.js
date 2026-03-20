export default (req, res, next) => {
    if (req.session.userName) {
        return next();
    }
    const error = new Error('you need to be logged in to add a post');
    error.statusCode = 401;
   return next(error);
}
