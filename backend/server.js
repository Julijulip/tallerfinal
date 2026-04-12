const app = require("./api/index");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});