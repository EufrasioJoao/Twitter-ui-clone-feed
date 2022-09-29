import React from "react";
import style from "./style.module.css";
import { Cake, AddressBook } from "phosphor-react";

export function ProfileInfo() {
    return (
        <section className={style.container}>
            <div className={style.banner_box}>
                <div className={style.banner}>
                    <img src='/images/banner-1.png' alt='' />
                    <div className={style.profile_img}>
                        <img src='/images/me.jpg' alt='' />
                    </div>
                </div>
                <button>Edit Profle</button>
            </div>

            <div className={style.profile_info_content}>
                <div>
                    <strong>Eufrasio Joao</strong>
                    <small>@Ainsley_john_</small>
                </div>

                <div className={style.profile_personal_info}>
                    <strong>
                        Developer at <span>@Rockectseat</span>
                    </strong>
                    <small>
                        <AddressBook color="#33A1F2" size={15} /> {"_"}
                        Maputo, Mozambique
                    </small>
                    <small>
                        <Cake color="#33A1F2" size={15} /> {"_"}Born on November
                        04th 2004
                    </small>
                </div>

                <div className={style.followers}>
                    <div>
                        Following <span>96</span>
                    </div>
                    <div>
                        Followers <span>1236</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
