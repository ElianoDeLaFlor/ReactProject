import { NavLink } from "react-router-dom";
import Product from "../models/Product";
import { useNavigate } from "react-router-dom";

interface CardProps {
  data: Product;
}

function ProductCard(props: CardProps) {

  const navigate = useNavigate();

  function navigateToDetails(id:string) {
    navigate(id);
  }

  return (
    <>
      <div className="card p-2 h-100">
        <img
          src={props.data.image}
          className="card-img-top productcard"
          alt={props.data.title}
        />
        <div className="card-body">
          <p className="card-text">{props.data.title}</p>
        </div>
        <p className="card-text price">{`MUR ${props.data.price}`}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigateToDetails(`${props.data.id}`);
          }}
        >
          More details ...
        </button>
      </div>
    </>
  );
}

export default ProductCard;
