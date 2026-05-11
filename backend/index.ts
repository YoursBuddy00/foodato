import { app } from "./src/server.js";

const PORT = 5000;

app.listen(5000, () => {
  console.log("Server is Listening on PORT ", PORT);
});
