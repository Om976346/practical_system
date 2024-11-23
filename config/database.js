import dotenv from "dotenv";
dotenv.config();

import { connect } from "mongoose";

const connectDB = async () => {
    try {
        console.log("MongoDB URL:", process.env.MONGODB_URL); // Debug log
        await connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;








// import dotenv from "dotenv";
// dotenv.config();

// import { connect } from "mongoose";

// const connectDB = async () => {
//     try {
//         await connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1); // Exit process on failure
//     }
// };

// export default connectDB;
