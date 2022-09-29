import React from "react";
import style from "./style.module.css";

export function SideBar() {
    return (
        <div className={style.sidebar_container}>
            <div className={style.sidebar_box}>
                <div className={style.sidebar_box_container}>
                    <div className={style.sidebar_search_container}>
                        <img src='/images/search.png' />
                        <input type='text' placeholder='Search here'/>
                    </div>
                    
                    
                    <div className={style.whats_happening}>
                        <div>
                            <strong>What's happening</strong>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                    </div>
                    <div className={style.whats_happening}>
                        <div>
                            <strong>What's happening</strong>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                        <div>
                            <span>Subject most talked in the world</span>
                            <p>Rocketseat Programming Bootcamp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
