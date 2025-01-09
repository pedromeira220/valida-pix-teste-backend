import express from 'express';

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    msg: "Hello"
  });
});

export { app };
