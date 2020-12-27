import React, { useState } from "react";
import Head from "next/head";

const Home = () => {
    const [text, setText] = useState<string>("자바스크립트");
    const [title, setTitle] = useState<String>("React");

    setTimeout(() => {
        setText("타입스크립트")
    }, 1000)

    setTimeout(() => {
        setTitle("LAMA")
    }, 1000);

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <span>{text} 적용 완료</span>
            </div>
        </div>
    );
}

export default Home;
