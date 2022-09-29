import React from "react";
import { Main } from "../Main/Index";
import { MenuBar } from "../MenuBar/Index";
import { SideBar } from "../SideBar/Index";
import style from "./style.module.css";
// import { GithubLogo, Folder, Link } from "phosphor-react";

export function Layout() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <MenuBar />
                <Main />
                <SideBar />
            </div>
        </div>
    );
}
