import {BaseModel} from "./BaseModel";
import {IArtist} from "./IArtist";

export interface ISong extends BaseModel {
    title: string;
    time: string;
    feat: IArtist[];
    type: string;
}
