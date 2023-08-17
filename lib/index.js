import { Application } from 'stimulus';

// Importar os controllers
import AddItemsController from "./controllers/add_items_controller.js";
import ItemController from "./controllers/item_controller.js";

window.Stimulus = Application.start()

// Registrar os controllers
window.Stimulus.register("add-items", AddItemsController);
window.Stimulus.register("item", ItemController);
