import {Settings} from "react-slick";

class RecommendedController {

    settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    goNext(customSliderRef: any) {
        customSliderRef.current.slickNext();
    }

    goPrev(customSliderRef: any) {
        customSliderRef.current.slickPrev();
    }
}

export default new RecommendedController();
