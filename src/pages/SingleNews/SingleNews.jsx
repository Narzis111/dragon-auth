
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Home/RightSide";
import { useLoaderData, useParams } from "react-router-dom";


const SingleNews = () => {
    const news = useLoaderData();
    const {id} = useParams();

    const nw = news.find(nw => nw._id === id);
    console.log(nw, id); 


       
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar><h2 className="text-center text-3xl font-bold py-3">Dragon News Home: </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4">
               <div className="md:col-span-3 border">

                    <h2>{id}</h2>
                    
                    <div className="book-list">
           
                <p><strong>Author:</strong> {nw?.author.name}</p>
                <img src={nw?.image_url} alt="" />
                <p className="font-bold space-y-6">{nw?.title}</p>
                <p>{nw?.details}</p>
                <button className="bg-red-400">  All news in this Category</button>
               
              </div>
           
            {/* {newsSingle.length === 0 && <p>No books found.</p>} */}
          </div>
                    <div className="border"><RightSide></RightSide></div>
                </div>
                
            </div>
       



    );
};


export default SingleNews;