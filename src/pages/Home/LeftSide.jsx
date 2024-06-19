import { useEffect, useState } from "react";
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { CiCalendarDate } from "react-icons/ci";

const LeftSide = ({ filterByCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2 className="text-center text-3xl font-bold py-3">All Category: {categories.length}</h2>
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => filterByCategory(category.id)}
                    className="block p-4 ml-4 text-xl font-semibold"
                >
                    {category.name}
                </button>
            ))}

            <div className="card w-full bg-base-100">
                <figure><img src={img1} alt={categories.name} /></figure>
        <div className="card-body">
          <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="card-actions flex">
            <p className="font-bold">Sports</p>
            <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> Jan 4, 2022 </p>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100">
        <figure><img src={img2} alt={categories.name} /></figure>
        <div className="card-body">
          <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="card-actions flex">
            <p className="font-bold">Sports</p>
            <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> Jan 4, 2022 </p>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100">
        <figure><img src={img3} alt={categories.name} /></figure>
        <div className="card-body">
          <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="card-actions flex">
            <p className="font-bold">Sports</p>
            <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> Jan 4, 2022 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;