import PositionedObject from '../common/PositionedObject';
import ClientGameObject from './ClientGameObject';

class ClientCell extends PositionedObject {
  constructor(cfg) {
    super();
    const { cellWidth, cellHeight } = cfg.world;

    Object.assign(
      this,
      {
        cfg,
        objects: [],
        x: cellWidth * cfg.cellCol,
        y: cellWidth * cfg.cellRow,
        width: cellWidth,
        height: cellHeight,
      },
      cfg,
    );

    this.initGameObjects();
  }

  initGameObjects() {
    const { cellCfg } = this;

    this.objects = cellCfg.map((lay, layId) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      lay.map(
        (objCfg) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          new ClientGameObject({
            cell: this,
            objCfg,
            layId,
          }),
      ),
    // eslint-disable-next-line function-paren-newline
    );
  }

  render(time, layId) {
    const { objects } = this;

    if (objects[layId]) {
      objects[layId].forEach((obj) => obj.render(time));
    }
  }

  addGameObject(objToAdd) {
    const { objects } = this;

    if (objToAdd.layId === undefined) {
      // eslint-disable-next-line no-param-reassign
      objToAdd.layId = objects.length;
    }

    if (!objects[objToAdd.layerId]) {
      objects[objToAdd.layId] = [];
    }

    objects[objToAdd.layId].push(objToAdd);
  }

  removeGameObject(objToRemove) {
    const { objects } = this;
    // eslint-disable-next-line no-return-assign
    objects.forEach((lay, layId) => (objects[layId] = lay.filter((obj) => obj !== objToRemove)));
  }

  findObjectsByType(type) {
    // eslint-disable-next-line prefer-const
    let foundObj = [];

    // eslint-disable-next-line max-len, no-return-assign
    this.objects.forEach((lay) => (foundObj = [...foundObj, ...lay].filter((obj) => obj.type === type)));

    return foundObj;
  }
}

export default ClientCell;
