"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPlugIt = void 0;
const base_1 = require("./base");
const shelly_plus_plug_us_1 = require("./shelly-plus-plug-us");
class ShellyPlusPlugIt extends shelly_plus_plug_us_1.ShellyPlusPlugUs {
}
exports.ShellyPlusPlugIt = ShellyPlusPlugIt;
ShellyPlusPlugIt.model = 'SNPL-00110IT';
ShellyPlusPlugIt.modelName = 'Shelly Plus Plug IT';
base_1.Device.registerClass(ShellyPlusPlugIt);
//# sourceMappingURL=shelly-plus-plug-it.js.map