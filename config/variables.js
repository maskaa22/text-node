module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT || 5000,
    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb+srv://text:text@cluster0.zddx9.mongodb.net/textDB?retryWrites=true&w=majority'
};
