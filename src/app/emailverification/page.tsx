"use client";

import Link from "next/link";
import style from "./Emailverification.module.css";

export default function EmailVerification() {
    return (
        <div className={style.parent}>
            <h2>Email Verified</h2>
            <p>Now You Can Login</p>
            <Link href={"/login"}>Login</Link>
        </div>
    )
}