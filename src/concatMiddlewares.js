module.exports =   (oldMiddleWare=[],newMiddleware)=>{

    let middlewares;
    if (typeof newMiddleware === 'string' ){



        oldMiddleWare.push(newMiddleware);
        middlewares = oldMiddleWare;
    }else if (Array.isArray(newMiddleware)){

        middlewares = oldMiddleWare.concat(newMiddleware||[]);

    }


    return middlewares;


}