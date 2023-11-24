import Product from "../models/Product";

interface CardProps {
  data: Product;
}

function ProductCard(props: CardProps) {
  return (
    <>
      <div className="card p-2 h-100 cardstyle">
        <img
          src={props.data.image}
          className="card-img-top productcard"
          alt={props.data.title}
        />
        <div className="card-body">
          <p className="card-text">{props.data.title}</p>
        </div>
        <p className="card-text price">{`MUR ${props.data.price}`}</p>
      </div>
    </>
  );
}

export default ProductCard;
