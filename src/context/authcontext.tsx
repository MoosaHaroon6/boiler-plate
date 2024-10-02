"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { app } from "@/firebase/firebaseconfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

type UserType = {
    email: string | null;
    uid: string;
}
type AuthContextType = { user: UserType | null; }

const AuthContext = createContext<AuthContextType | null>(null);


export default function AuthContextProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<UserType | null>(null)
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                const { email, uid } = loggedInUser;
                setUser({ email, uid });
                router.push('/congrats');
            } else {
                setUser(null);
                router.push('/');
            }
        })
    }, [router])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);