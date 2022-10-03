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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
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
