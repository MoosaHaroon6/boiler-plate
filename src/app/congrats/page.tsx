"use client";

import { auth } from "@/firebase/firebaseauth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import styles from "./Congrats.module.css";

export default function Congrats() {
    const router = useRouter();

    const logoutHandler = async () => {
        signOut(auth)
            .then(() => {
                router.push("/");
                console.log("Logout successful");
            })
            .catch(() => {
                console.log("Logout failed");
            });
    };

    return (
        <div className={styles.container}>
            <h1>Congrats! Your Boiler Plate Is Ready To Use</h1>
            <button onClick={logoutHandler}>Log out</button>
        </div>
    );
}
