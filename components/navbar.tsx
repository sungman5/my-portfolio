import Link from "next/link";

export default function NavBar(){
    return (
        <div className="navbar">
            <h1>
                <Link
                    style={{
                        fontSize: "2.4rem",
                        fontFamily: "var(--font-SUIT)",
                    }}
                    href={"/"}
                >
                    wlaterDesign
                </Link>
            </h1>
            {/* <Image src="/ooz-logo.svg" width={100} height={34} alt="logo" /> */}
            <ul>
                <li>
                    <Link
                        style={{
                            fontSize: `2rem`,
                            fontFamily: ` var(--font-SUIT)`,
                        }}
                        href="/contact"
                    >
                        contact
                    </Link>
                </li>
            </ul>
            <style jsx>
                {`
                    .navbar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 2.4rem 0;
                        margin-bottom: 2rem;
                    }
                    ul {
                        display: flex;
                        gap: 3.2rem;
                    }
                `}
            </style>
        </div>
    );
}