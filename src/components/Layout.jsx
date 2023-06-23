import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "./Navigation/Navigation"

export const Layout = () => {
    return (
        <>
            <Navigation/>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
            </main>
        </>
    )
}