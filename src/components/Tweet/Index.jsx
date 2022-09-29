import React from "react";
import style from "./style.module.css";
import { Heart, Rocket, MessengerLogo, Share } from "phosphor-react";

export function Tweet() {
    return (
        <section className={style.tweet_container}>
            <header className={style.tweet_header}>
                <div className={style.tweet_header_img}>
                    <img src='/images/me.jpg' alt='' />
                </div>

                <div className={style.tweet_header_content}>
                    <span>
                        Rocketseat <span>@Rocketseat - July 30</span>
                    </span>
                    <span className={style.tweet_msg}>
                        Foguete Nao tem re , visitem a rocketseat e aprendam com
                        os melhores e se tornem melhores programadores!{" "}
                        <Rocket color="#33A1F2" size={24} />
                    </span>
                </div>
            </header>

            <div className={style.tweet_content_container}>
                <div className={style.tweet_post_img}>
                <img src='/images/banner-2.png' alt='' />
                </div>
                <div className={style.tweet_post_icons}>
                    <button className={style.like}>
                        <Heart color="#e0265e" size={30} /> 9934
                    </button>
                    <button className={style.retweet}>
                        <MessengerLogo color="#00c06b" size={30} /> 1283
                    </button>
                    <button className={style.share}>
                        <Share color="#33A1F2" size={30} /> 123
                    </button>
                </div>
            </div>
        </section>
    );
}
