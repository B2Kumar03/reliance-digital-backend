import dotenv from "dotenv";
import mongodbConnection from "./db/index.js"
import app from "./app.js";
dotenv.config()

const PORT = process.env.PORT || 3000;
mongodbConnection()
.then(() => {
  app.on("error", (err) => {
    console.log(`Server error ${err}`);
    throw err;
  });
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/v1/users`);
  });
})
.catch((err) => {
    console.log("DATABASE CONNECTION FAILED", err);
  });
