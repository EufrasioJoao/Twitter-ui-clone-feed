import React from "react";
import style from "./style.module.css";
import { Rocket, User, Chat, Bell, Alarm } from "phosphor-react";

export function MenuBar() {
    return (
        <div className={style.menu_bar_container}>
            <div className={style.menu_bar_box}>
                <div className={style.menu_bar_box_container}>
                    <div>
                        <Rocket color="#33a1f2" size={30} />
                    </div>
                    <div>
                        <button>
                            <Chat color="rgb(214, 213, 213)" size={30} />{" "}
                            <span>Chat Page</span>
                        </button>
                        <button>
                            <Bell color="rgb(214, 213, 213)" size={30} />{" "}
                            <span>Notifications</span>
                        </button>
                        <button>
                            <Alarm color="rgb(214, 213, 213)" size={30} />{" "}
                            <span>Events Page</span>
                        </button>
                        <button>
                            <User color="#33a1f2" size={30} />{" "}
                            <span className={style.active}>Profile Page</span>
                        </button>
                        <button className={style.tweet_button}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
