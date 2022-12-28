type AppProps = {
    title: string;
    subTitle: string;
    views: number;
    published: boolean;
    authors: string[];
    category: string;
    image?: {
        imgUrl: string;
        caption: string;
    }
    content: string;
}

export default function Post({title, subTitle}: AppProps) {
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
        </div>
    )

}