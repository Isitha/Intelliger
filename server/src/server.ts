import { createServer } from "http";
import mongoose from "mongoose";

import app from "./app";
import utils from "./utils";

const port = utils.getEnvVar("PORT");
const mongodb_url = utils.getEnvVar("MONGODB_URL");

mongoose
  .connect(mongodb_url, { dbName: "intelliger" })
  .then(() => console.log("Mongodb connected successfully."))
  .catch((err) => console.error(err));

const server = createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
