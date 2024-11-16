import { useParams } from "react-router-dom";

const Common = () => {
  const {page, btn} = useParams();
  console.log(btn);
  return (
    <div>
      {page == "about" ? (
        <p>This is About Page</p>
      ) : (
        <div>
            <p>This is contact Page</p>
           {btn &&  <button className="btn">Subscribe</button>}
        </div>
      )}

    </div>
  );
};

export default Common;
