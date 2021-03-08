import React, { forwardRef, useEffect, useState } from "react";

function Profile() {

    //const localUser = JSON.parse(localStorage.getItem('username'));
    let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('username')));

    const storageListen = e => {
        setUserData(JSON.parse(localStorage.getItem('username')));
    };

    useEffect(() => {
        window.addEventListener("storage", storageListen);
        return () => window.removeEventListener("storage", storageListen);
    }, []);


    function showIntries() {
        let ppw = document.querySelector('.profilePagewrap')
        console.log(ppw.classList)

        if (ppw.className !== 'profilePagewrap popout') {
            ppw.classList.remove("popin")
            ppw.classList.add("popout");

        } else {
            ppw.classList.remove("popout")
            ppw.classList.add("popin");
        }
    }

    return (
        <div>
            <div className="profilewrap" onClick={showIntries}>
                <div className="profileName">
                    {userData}
                </div>
                <div className="profileImage"></div>
            </div>

        </div>
    )

}
export default Profile;