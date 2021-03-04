import React from "react";

function Profile({name}){

    return(
        <div>
        <div className="profilewrap">
            <div className="profileName">{name}</div>
            <div className="profileImage"></div>
        </div>

        </div>
    )


}
export default Profile;