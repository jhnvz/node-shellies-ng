import { Device } from './base';
import { BluetoothLowEnergy, Cloud, DevicePower, Mqtt, OutboundWebSocket, Smoke, WiFi } from '../components';
export declare class ShellyPlusSmoke extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly devicePower0: DevicePower;
    readonly smoke0: Smoke;
}
//# sourceMappingURL=shelly-plus-smoke.d.ts.map