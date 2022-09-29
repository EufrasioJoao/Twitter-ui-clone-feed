import React from "react";
import { ProfileInfo } from "../Profile_Info/Index";
import { Tweets } from "../Tweets/Index";
import style from "./style.module.css";
import { ArrowLeft, Chat, Bell, Alarm } from "phosphor-react";

export function Main() {
    return (
        <div className={style.main_container}>
            <header className={style.header}>
                <button>
                    <ArrowLeft color="#33A1F2" size={30} />
                </button>

                <div className={style.profile_info}>
                    <strong>Eufrasio Joao</strong>
                    <span>613 Tweets</span>
                </div>
            </header>

            <ProfileInfo />

            <Tweets />
            
            <div className={style.bottom_menu}>
                <button>
                    <Chat color="rgb(214, 213, 213)" size={30} />
                </button>
                <button>
                    <Bell color="rgb(214, 213, 213)" size={30} />
                </button>
                <button>
                    <Alarm color="rgb(214, 213, 213)" size={30} />
                </button>
            </div>
        </div>
    );
}
