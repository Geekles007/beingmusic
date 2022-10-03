import {BaseModel} from "./BaseModel";

export interface ILink extends BaseModel {
    title: string;
    link: string;
    icon: any;
}
