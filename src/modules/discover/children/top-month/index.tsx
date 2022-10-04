import React, {memo} from "react";
import styled from "styled-components";
import TopItem from "../top-item";

const TopMonthWrapper = styled.div`
  ._head {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;
  }
  
  ._top {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    grid-auto-flow: dense;
    gap: 1rem;
    padding: 0 2rem;
  }
  
  @media(max-width: 480px) {
    ._top {
      grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
    }
  }
  
  @media(max-width: 688px) {
    ._top {
      grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    }
  }
`;

type TopMonthProps = {}

const TopMonth = ({}: TopMonthProps) => {

    return <TopMonthWrapper>
        <div className="_head">
            <strong>Being 9 of the month</strong>
        </div>
        <div className="_top">
            {
                [1,2,3,4,5,6,7,8,9].map((item, index) => {
                    return <TopItem rank={index + 1} key={index} />
                })
            }
        </div>
    </TopMonthWrapper>

}

export default memo(TopMonth);
