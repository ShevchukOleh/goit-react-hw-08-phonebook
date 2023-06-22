import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <header>
                {/* <ul>
                <li>
                    <p>Home</p>
                </li>
                </ul>
                 */}
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
            </main>
    </>
    )
}