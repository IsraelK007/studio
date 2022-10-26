import { Dragoned } from "./modules/DragonedClass.js";
import { EditTool } from "./modules/editToolClass.js";
import { renderDraggableElements, downloadCode } from "./modules/utils.js"
import ELEMENTS from "./modules/components.js"

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {
    renderDraggableElements('draggable');
    document.getElementById('export-project').onclick = downloadCode

    const container = new Dragoned(document.querySelector('#container'), {
      // draggable:".item",
      // handle:".handle",
      group: "blocks-group",
      delay: 100,
      onEnd: (data) => {

      }
    });
    //=========Initialize start here=========//
    const draggable = new Dragoned(document.querySelector('#draggable'), {
      // draggable:".item",
      // handle:".handle",
      sort: false,
      clone: true,
      group: "blocks-group",
      onEnd: (data) => {
        const { item } = data;
        const type = item.dataset.type;
        item.innerHTML = ELEMENTS[type].content;
        new EditTool(item, ELEMENTS[type].editingToolList);
      }
    });
  })();
});