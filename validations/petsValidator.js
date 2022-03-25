const {check, validationResult } = require ('express-validator');

const generateUserValidator = () => [
    check('type').isIn('DOG', 'CAT'),
    check('alias').notEmpty().isLength({max:150}).whitMessage("Invalid alias"),
    check('color').notEmpty().isLength({max:20}).whitMessage("Invalid color"),
    check('notes').notEmpty().isLength({max:5000}).whitMessage("Invalid note"),
]

const generateIdValidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid Id")
]

const updatePetsValidators = () =>[
    check('type').isIn('DOG', 'CAT').whitMessage("Invalid alias"),,
    check('alias').notEmpty().isLength({max:150}).whitMessage("Invalid alias"),
    check('color').notEmpty().isLength({max:20}).whitMessage("Invalid color"),
    check('notes').notEmpty().isLength({max:5000}).whitMessage("Invalid note"),
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
        generatepetsValidator(),
        reporter
    ],
    id:
    [
        generateIdValidators(),
        reporter
    ],
    update:[
        updatepetsValidators(),
        reporter
    ]
};