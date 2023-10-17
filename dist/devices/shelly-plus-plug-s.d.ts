import { Device } from './base';
import { BluetoothLowEnergy, Cloud, Mqtt, OutboundWebSocket, Script, Switch, WiFi, PlugsUi } from '../components';
export declare class ShellyPlusPlugS extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly switch0: Switch;
    readonly script: Script;
    readonly plugsUi: PlugsUi;
}
//# sourceMappingURL=shelly-plus-plug-s.d.ts.map