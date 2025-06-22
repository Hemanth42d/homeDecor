import ProductDescription from "../Product/ProductDescription";
import ProductFooter from "../Product/ProductFooter";
import ProductTopSection from "../Product/ProductTopSection";
import RelatedProducts from "../Product/RelatedProducts";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // Fetch product details using the id (from backend or local data)
  // Example:
  // useEffect(() => {
  //   fetch(`/api/products/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data));
  // }, [id]);

  return (
    <>
      {/* Pass product data as props to children when fetched */}
      <ProductTopSection /* product={product} */ />
      <ProductDescription /* product={product} */ />
      <RelatedProducts /* productId={id} */ />
    </>
  );
};

export default ProductDetails;
