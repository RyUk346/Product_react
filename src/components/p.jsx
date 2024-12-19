import React, { useState } from "react";
import purpleImage from "../assets/purple.jpg";
import cyanImage from "../assets/cyan.png";
import blackImage from "../assets/black.png";
import blueImage from "../assets/blue.png";

const images = {
  Purple: purpleImage,
  Cyan: cyanImage,
  Black: blackImage,
  Blue: blueImage,
};

const sizePrices = {
  S: 69,
  M: 79,
  L: 89,
  XL: 99,
};

const Product = () => {
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Purple");
  const [selectedSize, setSelectedSize] = useState("M");
  const [cart, setCart] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }

    const product = {
      name: "Classy Modern Smart watch",
      price: sizePrices[selectedSize],
      size: selectedSize,
      color: selectedColor,
      quantity: count,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.size === product.size && item.color === product.color
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
        return [...prevCart];
      } else {
        return [...prevCart, product];
      }
    });
  };

  const openCheckout = () => {
    setIsPopupOpen(true);
  };

  const closeCheckout = () => {
    setIsPopupOpen(false);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="justify-center items-center w-full h-screen font-roboto">
      <div className="max-w-[1320px] max-h-[720px] mt-[60px] ml-[60px] gap-[20px] lg:flex">
        <div className="max-w-[630px] h-[720px]">
          <img
            src={images[selectedColor]}
            className="w-full h-[720px] rounded-[4px]"
            alt="Product"
          />
        </div>
        <div className="max-w-[630px] h-[539px] py-[120px]">
          <h1 className="text-[40px] leading-[44px] font-bold text-[#364A63]">
            Classy Modern Smart watch
          </h1>
          <h1 className="text-[14px] text-[#8091A7] text-center">
            (2 Reviews)
          </h1>
          <h1 className="text-[#6576FF] text-[24px] font-bold">
            <span className="text-[#8091A7] text-[20px] line-through">
              $99.00
            </span>
            $79.00
          </h1>
          <h1 className="text-[#8091A7] text-[18px]">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born...
          </h1>

          {/* Color Selection */}
          <div className="max-w-[630px] pt-[20px]">
            <h1 className="font-bold text-[18px] text-[#364A63]">Band Color</h1>
            <div>
              <form autoComplete="off" className="flex gap-4">
                {Object.keys(images).map((color) => (
                  <React.Fragment key={color}>
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      id={`radio-${color}`}
                      className="peer hidden"
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <label
                      htmlFor={`radio-${color}`}
                      className={`w-6 h-6 rounded-full ${
                        color === "Black"
                          ? "bg-black peer-checked:ring-2 peer-checked:ring-gray-700"
                          : `bg-${color.toLowerCase()}-500 peer-checked:ring-2 peer-checked:ring-${color.toLowerCase()}-700`
                      } cursor-pointer`}
                    ></label>
                  </React.Fragment>
                ))}
              </form>
            </div>
          </div>

          {/* Size Selection */}
          <div className="pt-[20px]">
            <h1 className="font-bold text-[18px] text-[#364A63]">Wrist Size</h1>
            <div className="flex gap-[12px] py-2">
              {Object.keys(sizePrices).map((size) => (
                <div
                  key={size}
                  className="w-[73px] h-[36px] border rounded flex items-center border-[#DBDFEA]"
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    className="peer hidden"
                    id={`size-${size}`}
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className="h-[36px] whitespace-nowrap px-[18px] py-[8px] text-[#364A63] cursor-pointer peer-checked:text-[#6576FF] text-[13px] leading-[20px] tracking-[0.26px] font-bold"
                  >
                    {size}{" "}
                    <span className="text-[#8091A7] font-normal">
                      ${sizePrices[size]}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Control */}
          <div className="flex gap-[12px]">
            <div className="flex w-[130px] justify-center items-center h-[36px] rounded border-[1px] border-[#DBDFEA] mt-4">
              <button
                onClick={decrementCount}
                className="border-[0.5px] border-[#DBDFEA] w-[35px] h-[36px] text-[#8091A7] text-[18.2px] leading-[23.1px]"
              >
                -
              </button>
              <span className="w-[60px] h-[36px] border-[0.5px] border-[#DBDFEA] text-[#8091A7] text-[18.2px] leading-[23.1px] text-center py-2">
                {count}
              </span>
              <button
                onClick={incrementCount}
                className="w-[35px] h-[36px] border-[0.5px] border-[#DBDFEA] text-[#8091A7] text-[18.2px] leading-[23.1px]"
              >
                +
              </button>
            </div>
            <div className="pt-4 w-[105px] h-[36px]">
              <button
                onClick={addToCart}
                className="bg-[#6576FF] text-white p-2 rounded font-bold text-[13px] leading-[20px] tracking-[0.26px]"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Checkout Button */}
        </div>
      </div>
      <div className="mt-[550px] lg:mt-[80px] flex justify-center pb-[20px]">
        <button
          onClick={openCheckout}
          className="bg-[#FFBB5A] text-[#364A63] rounded-[20px] w-[139px] h-[42px] font-bold text-[13px] leading-[20px] tracking-[0.26px] flex justify-center items-center"
        >
          Checkout
          <span className="bg-white w-[19px] h-[20px] ml-2 rounded-[5px]">
            {totalItems}
          </span>
        </button>
      </div>

      {/* Cart Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-[400px] md:w-[651px] max-h-[480px] bg-white p-6 sm:p-8 md:p-11 rounded-[20px] gap-[16px]">
            <h1 className="text-[#364A63] text-[22px] leading-[24px] font-bold">
              Your Cart
            </h1>
            <div className="max-w-[563px]">
              <div className="max-w-[563px] h-[36px] flex pr-[4px] pt-[8px] border-b py-2 text-[14px] leading-[23.1px] text-[#8091A7]">
                <div className="w-[278px] mr-6">Item</div>
                <div className="w-[62px]">Color</div>
                <div className="w-[69px]">Size</div>
                <div className="w-[59px]">Qnt</div>
                <div className="w-[91px] text-right">Price</div>
              </div>
              {cart.length === 0 ? (
                <p className="text-[#8091A7]">Your cart is empty.</p>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={index}
                    className="w-[563px] h-[52px] items-center justify-center flex py-2 border-b text-[14px] leading-[23.1px] text-[#364A63]"
                  >
                    <div className="w-[278px] h-[36px] flex items-center gap-4 mr-6">
                      <img
                        src={images[product.color]}
                        className="w-9 h-9 rounded"
                        alt="Product"
                      />
                      <span>{product.name}</span>
                    </div>
                    <div className="w-[62px]">{product.color}</div>
                    <div className="w-[69px] font-bold">{product.size}</div>
                    <div className="w-[59px] font-bold">{product.quantity}</div>
                    <div className="w-[91px] font-bold text-right">
                      ${(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <div>Total</div>
              <div>
                <div>{totalItems}</div>
                <div>${totalPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className="flex justify-end gap-[20px] mt-4">
              <button
                onClick={closeCheckout}
                className="whitespace-nowrap w-[152px] h-[36px] rounded-[3px] border border-[#DBDFEA] py-2 px-[18px] gap-[10px] text-[#364A63] text-[13px] leading-[20px] tracking-[0.26px]"
              >
                Continue Shopping
              </button>
              <button className="w-[94px] h-[36px] rounded-[3px] bg-[#6576FF] text-white border border-[#DBDFEA] py-2 px-[18px] gap-[10px] text-[13px] leading-[20px] tracking-[0.26px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
