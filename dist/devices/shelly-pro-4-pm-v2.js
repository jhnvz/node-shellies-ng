"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro4PmV2 = void 0;
const base_1 = require("./base");
const components_1 = require("../components");
class ShellyPro4PmV2 extends base_1.Device {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.ethernet = new components_1.Ethernet(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.input0 = new components_1.Input(this, 0);
        this.input1 = new components_1.Input(this, 1);
        this.input2 = new components_1.Input(this, 2);
        this.input3 = new components_1.Input(this, 3);
        this.switch0 = new components_1.Switch(this, 0);
        this.switch1 = new components_1.Switch(this, 1);
        this.switch2 = new components_1.Switch(this, 2);
        this.switch3 = new components_1.Switch(this, 3);
        this.script = new components_1.Script(this);
        this.ui = new components_1.Ui(this);
    }
}
ShellyPro4PmV2.model = 'SPSW-104PE16EU';
ShellyPro4PmV2.modelName = 'Shelly Pro 4 PM V2';
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "ethernet", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "input0", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "input1", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "input2", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "input3", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "switch0", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "switch1", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "switch2", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "switch3", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "script", void 0);
__decorate([
    base_1.component
], ShellyPro4PmV2.prototype, "ui", void 0);
exports.ShellyPro4PmV2 = ShellyPro4PmV2;
base_1.Device.registerClass(ShellyPro4PmV2);
//# sourceMappingURL=shelly-pro-4-pm-v2.js.map