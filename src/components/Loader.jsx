import React from "react";
import ReactDOM from "react-dom";

function Loader() {
    // window.addEventListener("load", (e) =>{
    //     document.getElementById("loader-wrapper").style.display = "none";
    // });
    const loader = document.getElementById("loader-wrapper");
    console.log(loader);
    function init(){
        setTimeout(() => {
            loader.style.opacity = 0;
            loader.style.display = 'none';
        }, 3000)
    }
    init();

    return(
        <div>
            <div id="loader-wrapper">
                <div id="load">
                    <hr/><hr/><hr/><hr/>
                </div>
            </div>
        </div>
    )
}

export default Loader;