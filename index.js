//controls
import BoardController from "./Controler/Movment/BoardController.js";
import BoardGenarator from "./Controler/BoardGenarator.js";
import MovmentValidator from "./Controler/Movment/MovmentValidator.js";
import movmentOptions from "./Controler/Movment/MovmentOptions.js";
import WinHandler from "./Controler/WinHandler.js";
import MainController from "./Controler/MainController.js";

//UI
import BoardMaker from "./View/boradMaker.js";
import ViewHandler from "./View/ViewHandler.js";

//UI
const boardMaker = new BoardMaker(document.getElementById("board-container"));
const viewHandler = new ViewHandler(
  boardMaker,
  document.getElementById("board-container"),
  document.getElementById("alerter")
);

//controles
const boardGenarator = new BoardGenarator();
const validator = new MovmentValidator(movmentOptions);
const boardController = new BoardController(validator, movmentOptions);
const winHandler = new WinHandler();
const mainController = new MainController(
  boardController,
  boardGenarator,
  winHandler,
  viewHandler
);
