import { useState } from "react";
import Header from "../Shared/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Link, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    const allNews = useLoaderData();
    const [filteredNews, setFilteredNews] = useState(allNews);

    const filterNewsByCategory = (categoryId) => {
        console.log("Clicked category ID:", categoryId);
        if (categoryId === "0") {
            setFilteredNews(allNews); // Show all news
        } else {
            const filtered = allNews.filter(news => news.categoryId === categoryId);
            setFilteredNews(filtered);
        }
    };

    return (
        <div>
            <Header />
            <div className="flex">
                <button className="bg-red-600 p-4 rounded">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                </Marquee>
            </div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="border">
                    <LeftSide filterByCategory={filterNewsByCategory} />
                </div>
                <div className="md:col-span-2 border">
                   
                    <h2 className="text-center text-3xl font-bold py-3">Dragon News Home: {filteredNews.length}</h2>
                    {filteredNews.map(news => (
                        <NewsCard key={news._id} news={news} />
                    ))}
                </div>
                <div className="border">
                    <RightSide />
                </div>
            </div>
        </div>
    );
};

export default Home;
