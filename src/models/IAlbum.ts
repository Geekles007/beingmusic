import {BaseModel} from "./BaseModel";
import {IArtist} from "./IArtist";
import {ISong} from "./ISong";

export interface IAlbum extends BaseModel{
    title: string;
    artist: IArtist;
    songs: ISong[];
    cover: string;
}
