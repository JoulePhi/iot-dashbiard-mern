const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const mqtt = require("mqtt");
const Data = require("./models/Data");
const dataRoutes = require("./routes/data");

const app = express();
app.use(
  cors({
    origin: ["https://iot-dashboard-chi.vercel.app"],
    methods: ["POST", "GET"],
  })
);
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://databasedzulfikar:uae7ZkCORH1VS9Yp@iot-datas.dwqzdwn.mongodb.net/?retryWrites=true&w=majority&appName=iot-datas"
);
app.get("/", (req, res) => {
  res.json("Hello");
});
const client = mqtt.connect("mqtt://broker.emqx.io");

client.on("connect", () => {
  client.subscribe("3r0m/espnow/2024", (err) => {
    if (err) {
      console.error("MQTT subscription error:", err);
    }
  });
});

client.on("message", (topic, message) => {
  try {
    const parsedMessage = JSON.parse(message.toString());
    delete parsedMessage["TIME"]; // Ignore the TIME key
    const data = new Data({ topic, message: parsedMessage });
    data.save().catch((err) => console.error("Data save error:", err));
  } catch (error) {
    console.error("JSON parse error:", error);
  }
});

app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
