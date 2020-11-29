const Path = require('path');

module.exports = (allMiddleware,middlewareBase)=>{
    let array = [];

    allMiddleware.forEach((middleware)=>{
        if (middleware){
            let path;
            if(Array.isArray(middleware)){
                 path = `.${Path.join('/',middlewareBase||'./',middleware[0])}`;
            }else{
                 path = `.${Path.join('/',middlewareBase||'./',middleware)}`;
            }

            let arrayOfInitMiddlewares = require.main.require(path);
            if(Array.isArray(middleware)){
               array.push(arrayOfInitMiddlewares.apply(null, middleware[1]));

            }else{
                array.push(arrayOfInitMiddlewares())
            }
        }
    });

    return array;
}