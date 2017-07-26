export interface IPlatform {
    name: string;
    productCode: string;
}
export declare class PlatformSelector {
    private deviceCache;
    private element;
    private deviceElement;
    constructor(id: string, devices: string);
    show(platform: IPlatform): void;
    enable(): void;
    disable(): void;
    lookupDevice(code: string): Promise<IPlatform>;
}
