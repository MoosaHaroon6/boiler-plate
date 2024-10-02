"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from './Signup.module.css';
import { signupWithEmailPassword } from "@/firebase/firebaseauth";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const signupHandler = async () => {
        setError('');
        setMessage('');

        try {
            await signupWithEmailPassword(email, password);
            setMessage('A verification email has been sent to your email address. Please verify before logging in.');

            setEmail('');
            setPassword('');
            
            router.push('/emailverification');
        } catch (error: any) {
            setError(error.message || 'Sign Up Failed');
        }
    };

    return (
        <div className={styles.parent}>

            <div className={styles.container}>
                <h1 className={styles.heading}>Sign Up</h1>

                {message && <p className={styles.success}>{message}</p>}
                {error && <p className={styles.error}>{error}</p>}

                <label className={styles.label}>Email:
                    <input
                        type="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />

                <label className={styles.label}>Password:
                    <input
                        type="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button className={styles.button} onClick={signupHandler}>Sign Up</button>
                <br />
                <span>Already have an account?</span>
                <Link href={'/login'} className={styles.link}>Login</Link>
            </div>
        </div>
    );
}
