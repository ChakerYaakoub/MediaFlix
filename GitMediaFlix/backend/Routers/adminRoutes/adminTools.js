const router = require("express").Router();
const addFilmContoller = require("../../Controllers/adminContollers/addFilmContoller");
const upload = require("../../ModelsFunction/adminFc/multerMedia");
const Edit = require("../../ModelsFunction/adminFc/multerEdit");
const validationFilm = require("../../ModelsFunction/adminFc/validationFilm");
const EditFilmContoller = require("../../Controllers/adminContollers/EditFilmContoller");
const DeleteFilmByIdController = require("../../Controllers/adminContollers/DeleteFilmByIdController");
const GetFilmsController = require("../../Controllers/adminContollers/GetFilmsController");
const GetFilmsByIdController = require("../../Controllers/adminContollers/GetFilmsByIdController");
const GetDashHomeInfoController = require("../../Controllers/adminContollers/GetDashHomeInfoController");
const LoginAdmin = require("../../Controllers/adminContollers/LoginAdmin");
const IsLoginController = require("../../Controllers/adminContollers/IsLoginController");
const GetDataAdminController = require("../../Controllers/adminContollers/GetDataAdminController");
const GetDataByKind = require("../../Controllers/adminContollers/GetDataByKind");

const TestAdminController = require("../../Controllers/adminContollers/TestAdminController");

// TestAdminController,

// http://localhost:3000/admin/dashHome

// http://localhost:3000/admin/dashboard

router.get("/dashHome", TestAdminController, GetDashHomeInfoController);

// dashboard profil
router.get("/dashboard", GetDashHomeInfoController);
///////Fims Tools :

//Get All FIlms :
router.get("/AllFilms", GetFilmsController.GetFilmsController);

//Get film by id :

router.get("/GetFilm/:id", GetFilmsByIdController.GetFilmsByIdController);

//edit  Film  by id :
router.post(
  "/EditFilm/:id",
  Edit.fields([{ name: "image" }, { name: "video" }]),
  validationFilm.validationFilm,
  EditFilmContoller.EditFilmContoller
);

//delete film  by id :

router.delete(
  "/DeleteFilm/:id",
  DeleteFilmByIdController.DeleteFilmByIdController
);

//Add new Film :
router.post(
  "/addFilm",
  upload.fields([{ name: "image" }, { name: "video" }]),
  validationFilm.validationFilm,
  addFilmContoller.addFilmFcController
);

///////////////////////////////////////////////////////////////

// dashboard profil
router.post("/loginAdmin", LoginAdmin.LoginAdmin);
///////Fims Tools :

//login dasch

router.get("/IsLoginAdmin", IsLoginController.IsLoginController);

router.get("/DataAdmin", GetDataAdminController);

router.get("/GetDataCasts", GetDataByKind.GetDataByKind);

module.exports = router;
