import { schema, model, models } from mongoose;

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: stringify,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid,it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

const User = models.User || model("user", UserSchema)

export default User;