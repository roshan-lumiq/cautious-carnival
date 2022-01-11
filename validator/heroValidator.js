
const { check, validationResult } = require('express-validator')


const validator2 =    [check('hero', "Superhero's name is required!!").not().isEmpty(),
check('image', 'Image address is required').not().isEmpty(), (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}]
module.exports = validator2;