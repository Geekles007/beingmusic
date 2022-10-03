import {ILink} from "../../../models/ILink";
import {
    BiHistory,
    GiRadioTower,
    MdDateRange,
    MdRecommend,
    RiBarChartLine,
    RiCompassDiscoverLine,
    VscLibrary
} from "react-icons/all";
import React from "react";
import {links} from "../../../constants";
import {BiLike} from "react-icons/bi";

export enum Boxes {
    explore = "Explore",
    myMusic = "My music",
    myPlaylist = "My Playlist",
}

class SizeBarController {
    private boxes: Boxes[] = [Boxes.explore, Boxes.myMusic, Boxes.myPlaylist];
    private links: Map<Boxes, Array<Partial<ILink>>> = new Map<Boxes, Array<Partial<ILink>>>([
        [Boxes.explore, [
            {
                id: 1,
                title: "Discover",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.DISCOVER
            },
            {
                id: 2,
                title: "Recommendations",
                icon: <MdRecommend size={18}/>,
                link: links.GENDER
            },
            {
                id: 3,
                title: "Top chart",
                icon: <RiBarChartLine size={18}/>,
                link: links.TOP_CHART
            },
            {
                id: 4,
                title: "New releases",
                icon: <MdDateRange size={18}/>,
                link: links.NEW_RELEASES
            },
            {
                id: 5,
                title: "Radio",
                icon: <GiRadioTower size={18}/>,
                link: links.RADIO
            },
        ],],
        [Boxes.myMusic, [
            {
                id: 1,
                title: "Library",
                icon: <VscLibrary size={18}/>,
                link: links.LIBRARY
            },
            {
                id: 2,
                title: "Favourites",
                icon: <BiLike size={18}/>,
                link: links.FAVOURITES
            },
            {
                id: 3,
                title: "History",
                icon: <BiHistory size={18}/>,
                link: links.HISTORY
            }
        ],]
    ])

    get getLinks(): Map<Boxes, Array<Partial<ILink>>> {
        return this.links;
    }

    get getBoxes(): Boxes[] {
        return this.boxes;
    }

    getLinksByBoxName = (box: Boxes) => {
        return this.links.get(box) ?? [];
    }

}

export default new SizeBarController();
