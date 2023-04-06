// import { mongoose } from "mongoose";
const express = require("express");
const app = express();
// mongoose.set("strictQuery", false);
require("dotenv/config"); // env
// const connectDB = require("./ModelsFunction/connection");
const authRouter = require("./Routers/auth.router");
const watchListRouter = require("./Routers/watchlist.router");
const media = require("./schemaModels/Media");
const { User } = require("./schemaModels/User");
const preferencesMoviesSeriesRouter = require("./Routers/preferences.router");
const newestMoviesRouter = require("./Routers/newestMoviesSeries.router");
const mostRatedMoviesSeriesRouter = require("./Routers/MostRated.router");
const adminTools = require("./Routers/adminRoutes/adminTools");
const cors = require("./Controllers/CORS");
const Participants = require("./Routers/Participants");
const bodyParser = require("body-parser");
var Chakercors = require("cors");
const path = require("path");
const echoFilm = require("./Routers/echoFilm");
const isAutenticatedRouter = require("./Routers/isAuthenticated.router");
const movieDetailsRouter = require("./Routers/GetMovieDetails.router");

const UpdatedPreferencesRoute = require("./Routers/PreferencesUpdated.route");

const ActorSharedMovie = require('./Routers/getactorFilmShared')

// const cors = require("cors");
const connectDB = require("./schemaModels/connectDB"); //chaker

const port = process.env.PORT || 3000;
// connectDB;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors.CORS);

app.use(Chakercors()); // chaker

//for use photo
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//admin Route
app.use("/admin", adminTools);

//film detail by id
app.use("/echoFilm", echoFilm);


app.options("/*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// app.use(isAuthenticated, tenMoviesRecommended.getTop10Films);

app.use("/Participants", Participants);

app.use("/", isAutenticatedRouter);
app.use("/", authRouter);
app.use("/", watchListRouter);
app.use("/", newestMoviesRouter);
// app.use(isAuthenticated, tenMoviesRecommended.getTop10Films);
app.use("/", preferencesMoviesSeriesRouter);
app.use("/", mostRatedMoviesSeriesRouter);

app.use("/", UpdatedPreferencesRoute);

app.use("/",ActorSharedMovie)


app.use("/", movieDetailsRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  connectDB.connectDB(); //chaker
});
