import NavBar from "./navbar";

export default function Header() {
    return (
        <>
            <header>
                <div className="site-header">
                    <NavBar />
                    <div className="description">
                        <p>
                            Water Design suggests the optimal graphic design for
                            your limited resources and timeframe.
                            wlaterDesign은 고객의 한정된 자원과 시간 속에서 최적의 그래픽 디자인을
                            제안합니다.
                            {/* 월터스랩은 그래픽디자인 스튜디오입니다. 다양한 기관 혹은 기업, 개인과 함께 다양한 프로젝트를
                            수행해왔습니다. */}
                        </p>
                    </div>
                </div>
                <style jsx>
                    {`
                        header {
                            border-bottom: 1px solid #a1a1a1;
                            padding-bottom: 2rem;
                            margin-bottom : 3.2rem;
                        }
                        .site-header {
                            // max-width: 144rem;
                            margin: auto;
                            padding: 2rem;
                        }                        
                        .description {
                            display: flex;
                            justify-content: space-between;
                        }
                        .description p {
                            max-width: 80rem;
                            font-size: 2.4rem;
                            line-height: 160%;
                            font-family: var(--font-DungGeunMo);
                            word-break : keep-all;
                        }
                    `}
                </style>
            </header>
        </>
    );
}
