const {check,validationResult} = require('express-validator')

const validator =
    [check('image', "image url is required!!").not().isEmpty(),
    check('number', 'required 4 digits number !!!').isLength(4).isNumeric(), (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }]

module.exports = validator;