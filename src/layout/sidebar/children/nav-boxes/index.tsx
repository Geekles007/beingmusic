import React, {memo} from "react";
import styled from "styled-components";
import SizeBarController from "../../controller";
import NavBox from "../../../../components/nav-box";

const NavBoxesWrapper = styled.div`

`;

type NavBoxesProps = {}

const NavBoxes = ({}: NavBoxesProps) => {

    const {getBoxes, getLinksByBoxName} = SizeBarController;

    return <NavBoxesWrapper>
        {
            getBoxes.map((item, index) => {
                return <NavBox boxName={item} list={getLinksByBoxName(item)} key={index} />
            })
        }
    </NavBoxesWrapper>

}

export default memo(NavBoxes);
