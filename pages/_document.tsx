import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link
                href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
                rel="stylesheet"
            ></link>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
