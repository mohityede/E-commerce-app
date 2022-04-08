import User from "../models/user.js";
import ErrorHander from "../utils/errorHandler.js";
import sendToken from "../utils/jwtToken.js";
// import Product from "../models/user.js";

// register new user
export const registerUser = async(req, res) => {
    // const newUser = new User(req.body);
    const { name, email, password } = req.body;
    try {
        const userObj = {
            name,
            email,
            password,
            avatar: {
                public_id: "sample id",
                url: "profilePic"
            }
        }
        const savedUser = await User.create(userObj);

        // const token = savedUser.getJWTToken();

        // res.status(200).json(token);
        sendToken(savedUser, 201, res);
    } catch (err) {
        res.status(500).json({
            success: false,
            massage: err
        });
    }
}

// login user
export const loginUser = async(req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        // next.json(400).json("Please enter valid email or password");
        return next(new ErrorHander("Please enter valid email or password", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHander("Please enter valid email or password", 401));

        // next.json(401).json("Please enter valid email or password");
    }

    const isPasswordMatched = await user.comparePassword(password);
    // console.log(isPasswordMatched);
    if (!isPasswordMatched) {
        return next(new ErrorHander("Please enter valid email or password", 401));

    }

    sendToken(user, 200, res);
    // const token = user.getJWTToken();
    // console.log("token" + token);
    // return res.status(200).json(token);
}