"use client";

import Link from "next/link";
import Style from "./Page.module.css";

export default function Main() {

    return (
        <div>
            <header>
                <nav className={Style.navbar}>
                    <div className={Style.heading}>
                        <h2>Moosa Haroon</h2>
                    </div>
                    <div className={Style.navlinks}>
                        <ul>
                            <Link href={"/login"}><li className={Style.otherlinks}>Github</li></Link>
                            <Link href={"/login"}><li className={Style.otherlinks}>Projects</li></Link>
                            <Link href={"/login"}><li className={Style.otherlinks}>Linked In</li></Link>
                            <Link href={"/login"}><li className={Style.otherlinks}>Log in</li></Link>
                            <Link href={"/signup"}><li className={Style.otherlinks}>Sign up</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}