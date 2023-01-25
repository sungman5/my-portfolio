export default function Contact(){
    return (
        <>
            <p className="">
                월터디자인은 고객의 한정된 자원과 시간 속에서 최적의 그래픽
                디자인을 제안합니다.
                <br />
                작업 의뢰 및 문의사항은 아래 이메일로 연락주시면 확인 후 1영업일
                이내에 연락드리겠습니다.
                <br />
                Graphic Design / Brand / Identity / Website / Poster / Book /
                Brochure
                <p className="email">sungman5@gmail.com</p>
                <br/>
                <p className="copyright">
                    Copyright © walterDesign All rights reserved.
                </p>
            </p>
            <style jsx>
                {`
                    p {
                        padding: 0 2rem;
                        font-size: 1.6rem;
                        line-height: 160%;
                    }
                    .email {
                        padding: 0;
                        text-decoration: underline;
                    }
                    .copyright {
                        padding: 0;                        
                    }
                `}
            </style>
        </>
    );
}