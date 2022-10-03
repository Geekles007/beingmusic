import {ILink} from "../../../models/ILink";
import {RiCompassDiscoverLine} from "react-icons/all";
import React from "react";
import {links} from "../../../constants";

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
                title: "Gender",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.GENDER
            },
            {
                id: 3,
                title: "Top chart",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.TOP_CHART
            },
            {
                id: 4,
                title: "New releases",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.NEW_RELEASES
            },
            {
                id: 5,
                title: "Radio",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.RADIO
            },
        ],],
        [Boxes.myMusic, [
            {
                id: 1,
                title: "Library",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.LIBRARY
            },
            {
                id: 2,
                title: "Favourites",
                icon: <RiCompassDiscoverLine size={18}/>,
                link: links.FAVOURITES
            },
            {
                id: 3,
                title: "History",
                icon: <RiCompassDiscoverLine size={18}/>,
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
