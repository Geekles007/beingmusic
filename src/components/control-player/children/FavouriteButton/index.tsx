import React, {memo, useCallback, useState} from "react";
import {FaHeart} from "react-icons/all";
import {theme} from "../../../../theme";

type FavouriteButtonProps = {}

const FavouriteButton = ({}: FavouriteButtonProps) => {

    const [liked, setLiked] = useState<boolean>(false);

    const favouriteStateChanger = useCallback(() => {
        setLiked((old) => !old);
    }, [setLiked])

    return <div>
        <a onClick={favouriteStateChanger}>
            <FaHeart color={liked ? theme.primary : undefined} />
        </a>
    </div>

}

export default memo(FavouriteButton);
