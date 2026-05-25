import React from "react";
import { useNavigate } from "react-router-dom";

function learn (){
    const navigate = useNavigate();

    function clickHandler(){
        navigate("/about")
    }

    return(
        <div>
            <div>
                this is learn page
            </div>
            <button onClick={clickHandler}>
                move to about page
            </button>
        </div>
    )
}

export default learn