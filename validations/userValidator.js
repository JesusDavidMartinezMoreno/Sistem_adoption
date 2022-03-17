const {check, validationResult } = require ('express-validator');

const generateUserValidator = () => [
    check('name').notEmpty().isLength({max:50}).whitMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).whitMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min: 10, max:10}).whitMessage("Invalid phone"),
    check('address').notEmpty().isLength({max:150}).whitMessage("Invalid address"),
]

const generatePublicUserValidators = () =>[

]


const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if (!error.isEmpty()){
        return res.status(404).json({
        "success": false,
        "code": 404,
        "message": errors,
        "data": []
    });
    next();
}
}

module.exports = {
    add:[
        generateUserValidator(),
        reporter
    ]
};
