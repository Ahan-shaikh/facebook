const express = require("express");
const authRoutes =  require("./authRoutes")

const app = express();
app.set('view engine','ejs')
app.use('/',authRoutes);





const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
