const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { 
        type: String,
        required: true,
        maxLength: 20
    },
    last_name: { 
      type: String,
      required: true,
      maxLength: 20
    },
    email: { 
      type: String,
      required: true,
      maxLength: 100
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model('User', userSchema);

const userValidation = Joi.object({
    //Validations
})

module.exports = { User, userValidation }