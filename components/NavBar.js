import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <img src="./video-player.png" />
            <Link legacyBehavior
                href="/">
                <a className={router.pathname === "/" ? "active" : ''}>Home</a>
            </Link>
            <Link legacyBehavior
                href="/about">
                <a className={router.pathname === "/about" ? "active" : ''}>About</a>
            </Link>
            <img src="./popcorn.png" />
            <style jsx>{`
                nav {
                    background: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 3px 15px 3px grey;
                }
                img {
                    width: 30px;
                    height: 30px;
                }
                a {
                    font-size: 24px;
                    padding: 15px 20px;
                    transition: all .3s ease;
                }
                a:hover {
                    color: red;
                }
            `}</style>
        </nav >
    )
}