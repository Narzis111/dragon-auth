import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
    const { title, image_url, details, author, rating, total_view, _id } = news;
    return (
        
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="bg-slate-600 flex justify-between p-5">
                    <div className="flex gap-5 text-white items-center">
                        <div className=""><img className="h-10 w-10 rounded-full" src={author.img} alt="" /></div>
                        <div>
                            <p >{author.name}</p>
                            <p>
                                {new Date(author.published_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="text-white items-center space-y-3">
                        <BsBookmark></BsBookmark>
                        <BiShareAlt></BiShareAlt>

                    </div>

                </div>


                <figure><img src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {
                        details.length > 200
                            ? <p>{details.slice(0, 200)} <Link
                                to={`/news/${_id}`}
                                className="text-yellow-600 font-bold">Read More...</Link></p>
                            : <p>{details}</p>
                    }

                    <hr />
                </div>

                <div className="flex justify-between items-center p-4">
                    <div className="flex text-yellow-600 items-center"><AiFillStar> </AiFillStar> <AiFillStar> </AiFillStar><AiFillStar> </AiFillStar><AiFillStar> </AiFillStar><AiFillStar> </AiFillStar> <span className="text-slate-600 ml-4">{rating.number}</span></div>
                    <div className="flex gap-4 text-slate-600 items-center"><AiFillEye></AiFillEye> {total_view}</div>


                </div>
            </div>
        
    );
};

export default NewsCard;