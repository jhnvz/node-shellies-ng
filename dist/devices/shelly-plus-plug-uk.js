"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPlugUk = void 0;
const base_1 = require("./base");
const shelly_plus_plug_s_1 = require("./shelly-plus-plug-s");
const components_1 = require("../components");
class ShellyPlusPlugUk extends shelly_plus_plug_s_1.ShellyPlusPlugS {
    constructor() {
        super(...arguments);
        this.plugsUi = new components_1.PlugsUi('PLUGUK_UI', this);
    }
}
ShellyPlusPlugUk.model = 'SNPL-00112UK';
ShellyPlusPlugUk.modelName = 'Shelly Plus Plug UK';
__decorate([
    base_1.component
], ShellyPlusPlugUk.prototype, "plugsUi", void 0);
exports.ShellyPlusPlugUk = ShellyPlusPlugUk;
base_1.Device.registerClass(ShellyPlusPlugUk);
//# sourceMappingURL=shelly-plus-plug-uk.js.map