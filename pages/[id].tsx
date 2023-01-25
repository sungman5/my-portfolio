import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import Link from "next/link";

export default function Detail({ postData }: any) {
    return (
        <>
            <article>
                <p className="title">{postData.title}</p>
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: postData.contentHtml,
                    }}
                />
                <div className="info">
                    <p className="info-item">{postData.title}</p>
                    <p className="info-item">{postData.excerpt}</p>
                    <p className="info-item">
                        Date:{postData.date}
                        <br />
                        Client: {postData.client}
                        <br />
                        Category: {postData.category}
                    </p>
                </div>
                <div className="detail-footer">
                    <a
                        style={{
                            fontSize: "1.6rem",
                            textDecoration: "underline",
                        }}
                        href="#"
                    >
                        맨 위로
                    </a>
                    <Link
                        style={{
                            fontSize: "1.6rem",
                            textDecoration: "underline",
                        }}
                        href="/"
                    >
                        목록으로
                    </Link>
                </div>
            </article>
            <style jsx>
                {`
                    article {
                        max-width: 144rem;
                        margin: auto;
                        padding: 1.6rem;
                    }
                    .title {
                        text-align: center;
                        font-size: 2.4rem;
                        margin-bottom: 4.8rem;
                    }
                    .info {
                        display: flex;
                        gap: 4.8rem;
                        justify-content: space-between;
                        // flex-wrap : wrap;
                    }
                    .info-item {
                        border-top: 1px solid var(--color-default);
                        padding-top: 2rem;
                        text-align: center;
                        font-size: 1.5rem;
                        line-height: 170%;
                        margin-bottom: 4rem;
                        width: 100%;
                        text-align: left;
                    }
                    .detail-footer {
                        display: flex;
                        justify-content: space-between;
                    }
                    @media all and (min-width: 320px) and (max-width: 390px) {
                        .info {
                            display: flex;
                            flex-direction : column;                            
                            gap : 0;                            
                            // flex-wrap : wrap;
                        }
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticPaths() {
    const fs = require("fs");
    const files = fs.readdirSync("posts");
    const paths = files.map((element: any) => {
        return {
            params: {
                id: element.replace(/\.md$/, ""),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    // 주어진 params를 활용해 정확한 파일 읽기
    const id = params.id;
    const filePath = path.join("posts", `${id}.md`);
    const fileContents = readFileSync(filePath, "utf-8");
    const markdown = matter(fileContents);

    const processedContent = await unified()
        .use(remarkGfm)
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(markdown.content);

    const contentHtml = processedContent.toString();

    console.log(contentHtml);

    return {
        props: {
            postData: {
                id,
                contentHtml,
                ...markdown.data,
            },
        },
    };
}
