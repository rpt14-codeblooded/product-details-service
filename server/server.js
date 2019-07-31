const app = require('./index').app;

var port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

