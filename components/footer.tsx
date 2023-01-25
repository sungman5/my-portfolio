import NavBar from "./navbar";


export default function Footer(){
    return (
        <footer>
            Water Design suggests the optimal graphic design for your limited
            resources and timeframe.<br /> wlaterDesign은 고객의 한정된 자원과 시간
            속에서 최적의 그래픽 디자인을 제안합니다.
            <NavBar />
            <style jsx>
                {`
                    footer {
                        border-top : 1px solid var(--color-default);
                        font-size: 1.5rem;
                        // max-width: 144rem;
                        margin: auto;
                        padding: 4.8rem 2rem;
                        margin-top : 3.2rem;
                    }
                `}
            </style>
        </footer>
    );
}