const jwt = require('jsonwebtoken');
const User = require('../model/users');


const protect = async (request, response, next) => {
  try {
    let token;

    if (
      request.headers.authorization &&
      request.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = request.headers.authorization.split(' ')[1];
        console.log('token',token)
        
        const user = jwt.verify(token, `${process.env.JWT_SECRET_TOKEN}`);
        console.log('user',user)
        
        if (user) {
          request.user = await User.findOne({address:user?.address}).select('-password');
          console.log(user);
        }

        next();
      } catch (error) {
        response.status(401).json({ msg: 'Not Authorized' });
      }
    }

    if (!token) {
      response.status(401);
      throw new Error('Not Authorized, And Token Not Found');
    }
  } catch (error) {
    response.status(401).json({ msg: 'Not Authorized, And Token Not Found' });
  }
};

module.exports = { protect };
