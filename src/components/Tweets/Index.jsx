import React from "react";
import { Tweet } from "../Tweet/Index";
import style from "./style.module.css";

export function Tweets() {
    return (
        <section className={style.tweets_container}>
            <header className={style.tweets_section_header}>
                <span>Tweets</span>
            </header>

            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </section>
    );
}
