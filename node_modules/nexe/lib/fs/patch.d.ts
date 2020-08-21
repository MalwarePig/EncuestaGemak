/// <reference types="node" />
import { Stats } from 'fs';
export interface NexeBinary {
    blobPath: string;
    resources: {
        [key: string]: number[];
    };
    layout: {
        stat: Stats;
        resourceStart: number;
        contentSize?: number;
        contentStart?: number;
        resourceSize?: number;
    };
}
declare function restoreFs(fs?: any): NexeBinary | false;
declare function shimFs(binary: NexeBinary, fs?: any): true | undefined;
export { shimFs, restoreFs };
