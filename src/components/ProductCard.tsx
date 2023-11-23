import Product from "../models/Product";

interface CardProps {
  data: Product;
}

function ProductCard(props: CardProps) {
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
      </div>
    </>
  );
}

export default ProductCard;
