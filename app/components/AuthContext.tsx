"use client";


import { SessionProvider } from "next-auth/react";
import type { FC, ReactNode } from "react";
// export interface AuthContextProps {
//     children: React.ReactNode,
//     session
// }
// export default function AuthContext({ children, session }: AuthContextProps) {
//     return <SessionProvider session={session}>{children}</SessionProvider>;

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default Providers