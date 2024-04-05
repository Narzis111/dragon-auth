import Header from "../Shared/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Link, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className="flex">
                <button className="bg-red-600 p-4 rounded">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="border"><LeftSide></LeftSide></div>
                {/* news container */}
                <div className="md:col-span-2 border">
                    <h2 className="text-center text-3xl font-bold py-3">Dragon News Home: {news.length}</h2>
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}> </NewsCard>)
                    }
                </div>
                <div className="border"><RightSide></RightSide></div>
            </div>


        </div>
    );
};

export default Home;