import { useEffect, useState } from "react";
import { useParams } from "react-router";

// custom hooks
import { useShop } from "../custom_hooks/useShop";
import { useCart } from "../custom_hooks/useCart";

// components
import Button from "../components/Button";
import RelatedProducts from "../components/RelatedProducts";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { star_icon, star_dull_icon } = assets;

const Product = () => {
  const { productId } = useParams();
  const { shopProducts, shopCurreny } = useShop();
  const { cartItems, addItem } = useCart();

  const [product, setProduct] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [size, setSize] = useState("");

  const fetchData = async () => {
    try {
      const requiredProduct = await shopProducts.find(
        (product) => product._id === productId
      );
      if (requiredProduct) {
        setProduct(requiredProduct);
        setMainImage(requiredProduct.image[0]);
      }
    } catch (err) {
      console.log("PRODUCT FETCH ERROR: ", err);
    }
  };

  const addItemToCart = (product) => {
    addItem(product);
  };

  useEffect(() => {
    fetchData();
  }, [productId, shopProducts]);

  if (!product) return <div className="opacity-0">Nu Found</div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacit-100 px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      {/* -------------------- Product Data --------------------  */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* --------------------  Product Images --------------------  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={mainImage} alt="main image" className="w-full h-auto" />
          </div>
        </div>
        {/*  -------------------- Product Info --------------------  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={star_icon} className="w-3" />
            <img src={star_icon} className="w-3" />
            <img src={star_icon} className="w-3" />
            <img src={star_icon} className="w-3" />
            <img src={star_dull_icon} className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {shopCurreny}
            {product.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {product.sizes.map((item, idx) => (
                <button
                  className={`border border-gray-400 py-2 px-4 bg-gray-100 cursor-pointer ${
                    item === size && "border-orange-500"
                  }`}
                  key={idx}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => addItemToCart(product)} classname="btn">
              ADD TO CART
            </Button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        {/*  -------------------- Description & Review Section --------------------  */}
      </div>
      <div className="mt-20">
        <div className="flex">
          <p className="border cursor-pointer border-gray-300 px-5 py-3 text-sm">
            Description
          </p>
          <p className="border cursor-pointer border-gray-300 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            consequuntur pariatur incidunt, ratione similique minima labore ad
            laboriosam eaque veniam possimus doloremque tenetur rerum voluptatum
            totam quasi, eveniet cum accusamus? Repellendus optio dolor officia
            natus quia nostrum accusantium. Dolores quam unde veritatis magnam
            accusamus perspiciatis inventore commodi ullam officiis incidunt
            excepturi vero at voluptatibus nam doloremque quibusdam aliquam fuga
            aspernatur, placeat harum doloribus velit amet aperiam tempore.
            Recusandae, accusamus, molestias eius ratione omnis cumque delectus
            tempore quia quasi voluptatem quidem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            dolorem debitis ad sit provident aspernatur!
          </p>
        </div>
        {/*  -------------------- Related Products --------------------  */}
        <RelatedProducts
          productId={product._id}
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
