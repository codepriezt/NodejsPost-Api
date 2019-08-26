exports.createPostValidator = (req, res, next) => {

    //title
    app.check('title', "title must not be empty").notEmpty();
    app.check('title', "title must be between to 4 to 150 character").islength({
        minlength: 4,
        maxlength: 150
    });

    //body
    app.check('body', 'body must not be empty').notEmpty();
    app.check('body', 'body must be between to 4 to 2000 character').islength({
        minlength: 4,
        maxlength: 2000
    });
    
    //check for errors
    const errors = validationErrors(req)

    //if error show the first one as they happen 
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }

    //processed despite error occurence
     next();
    
};
