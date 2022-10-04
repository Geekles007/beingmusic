import {IAlbum} from "../../../models/IAlbum";

class DiscoverController {

    albums: IAlbum[] = [
        {
            id: 1,
            title: "Era",
            cover: "https://cdns-images.dzcdn.net/images/cover/317dca335d0da3948f64df18c0113348/500x500.jpg",
            artist: {
                id: 1,
                name: "Locko"
            },
            songs: []
        },
        {
            id: 2,
            title: "Made in Lagos",
            cover: "https://www.mymp3tracks.com/uploads/cover/6141c910e7fcc782995883.jpg",
            artist: {
                id: 1,
                name: "Wizkid"
            },
            songs: []
        },
        {
            id: 3,
            title: "Patrimoine",
            cover: "https://static.qobuz.com/images/covers/gc/8f/xhx9bt7998fgc_600.jpg",
            artist: {
                id: 1,
                name: "Lady ponce"
            },
            songs: []
        },
        {
            id: 4,
            title: "God Don Kam",
            cover: "https://www.culturebene.com/wp-content/uploads/sites/4/2019/02/52605509_2040379769402466_7805316102212288512_n.jpg",
            artist: {
                id: 1,
                name: "Jovi"
            },
            songs: []
        },
        {
            id: 5,
            title: "Africa represented",
            cover: "https://lebonas.com/wp-content/uploads/2021/02/AFRICA-REPRESENTED-COVER.jpg",
            artist: {
                id: 1,
                name: "Salatiel"
            },
            songs: []
        },
        {
            id: 6,
            title: "Chacun sa chance",
            cover: "https://www.show2babi.com/File/Musics/Pochettes/Grand/5205_Krys-M-Chacun-Sa-Chance.JPG",
            artist: {
                id: 1,
                name: "Krys M"
            },
            songs: []
        },
        {
            id: 7,
            title: "Fleur Froide",
            cover: "https://cdns-images.dzcdn.net/images/cover/51dfcb30fbab88f79d299e991081a75b/500x500.jpg",
            artist: {
                id: 1,
                name: "Tayc"
            },
            songs: []
        },
    ];

}

export default new DiscoverController();
