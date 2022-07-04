//controls
import BoardController from "./Controler/Movment/BoardController.js";
import BoardGenarator from "./Controler/BoardGenarator.js";
import MovmentValidator from "./Controler/Movment/MovmentValidator.js";
import movmentOptions from "./Controler/Movment/MovmentOptions.js";
import WinDetector from "./Controler/WinDetector.js";
import MainController from "./Controler/MainController.js";

//UI
import BoardMaker from "./View/boradMaker.js";
import ViewHandler from "./View/ViewHandler.js";

//UI
const boardMaker = new BoardMaker(document.getElementById("board-container"));
const viewHandler = new ViewHandler(boardMaker);

//controles
const boardGenarator = new BoardGenarator();
const validator = new MovmentValidator(movmentOptions);
const boardController = new BoardController(validator, movmentOptions);
const winDetector = new WinDetector();
const mainController = new MainController(
  boardController,
  boardGenarator,
  winDetector,
  viewHandler
);
