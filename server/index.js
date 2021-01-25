const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./startup/routes")(app);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
