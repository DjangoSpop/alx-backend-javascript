import Building from "./5-building";
export default class SkyHighBuilding  extends Building {
    constructor(sqft) {
        super(sqft);
    }
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._sqft} skyscraper!`;
    }
}
