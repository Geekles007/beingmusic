import React, {memo} from "react";
import styled from "styled-components";
import {BiChevronLeft, BiChevronRight} from "react-icons/all";
import Slider from "react-slick";
import RecommendedController from "./controller";
import AlbumItem from "../../../../components/album-item";

const RecommendedWrapper = styled.div`
  ._head {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;

    ._more {
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        transition: all .5s 0s ease-in-out;

        &:hover {
          color: ${({theme}) => theme.primary};
        }

      }

      .view--all {
        font-size: .8rem;
        font-weight: 500;
      }
    }

  }

  ._albums {
    padding: 0 2rem;
  }
`;

type RecommendedProps = {}

const Recommended = ({}: RecommendedProps) => {

    const {goNext, goPrev, settings, albums} = RecommendedController;
    const slider = React.createRef<any>();

    return <RecommendedWrapper>
        <div className="_head">
            <strong>Recommended Albums</strong>
            <div className="_more">
                <a onClick={() => goPrev(slider)}><BiChevronLeft size={20}/></a>
                <a onClick={() => goNext(slider)}><BiChevronRight size={20}/></a>
                <a className={"view--all"}>View All</a>
            </div>
        </div>
        <Slider className={"_albums"} {...settings} ref={slider}>
            {
                albums.map((item, index) => {
                    return <AlbumItem key={index} item={item} />
                })
            }
        </Slider>
    </RecommendedWrapper>

}

export default memo(Recommended);
