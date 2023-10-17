import { Component } from './base';
import { Device } from '../devices';
export interface PlugsUiAttributes {
}
export interface PlugsUiConfig {
    leds: {
        mode: 'power' | 'switch' | 'off';
        colors: {
            'switch:0': {
                on: {
                    rgb: number[] | null;
                    brightness: number;
                };
                off: {
                    rgb: number[] | null;
                    brightness: number;
                };
            };
            power: {
                brightness: number;
            };
        };
        night_mode: {
            enable: boolean;
            brightness: number;
            active_between: string[];
        };
    };
    controls: {
        'switch:0': {
            in_mode: 'momentary' | 'detached';
        };
    };
}
export declare class PlugsUi extends Component<PlugsUiAttributes, PlugsUiConfig> implements PlugsUiAttributes {
    readonly name: string;
    constructor(name: string, device: Device);
}
//# sourceMappingURL=plugs-ui.d.ts.map