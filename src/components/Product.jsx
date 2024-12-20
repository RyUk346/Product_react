import React, { useState } from "react";
import purpleImage from "../assets/purple.jpg";
import cyanImage from "../assets/cyan.png";
import blackImage from "../assets/black.png";
import blueImage from "../assets/blue.png";

const colors = {
  Purple: "#816BFF",
  Cyan: "#1FCEC9",
  Black: "#3B4747",
  Blue: "#4B97D3",
};

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
      <div className="max-w-[1320px] max-h-[720px] m-[10px] md:ml-[80px] md:mt-[60px] lg:ml[120px] gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] lg:flex">
        <div className="max-w-[630px] max-h-[720px]">
          <img
            src={images[selectedColor]}
            className="w-full max-h-[720px] rounded-[4px]"
            alt="Product"
          />
        </div>
        <div className="max-w-[630px] max-h-[539px] py-[10px] lg:py-[120px]">
          <h1 className="text-[40px] leading-[44px] font-bold text-[#364A63]">
            Classy Modern Smart watch
          </h1>
          <div className="flex gap-2 pr-1 pb-1 py-2">
            <div className="gap-[4.5px] flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffd200"
                fill="#FFD200"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffd200"
                fill="#FFD200"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffd200"
                fill="#FFD200"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffd200"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="#FFD200"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />

                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="none"
                  fill="#FFD200"
                  clip-path="inset(0 50% 0 0)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffd200"
                fill="none"
              >
                <rect x="0" y="0" width="12" height="24" />

                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="#FFD200"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="text-[14px] text-[#8091A7] text-center">
              (2 Reviews)
            </h1>
          </div>

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
            <div className="flex gap-4 py-4">
              {Object.keys(colors).map((color) => (
                <label
                  key={color}
                  className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                    className="appearance-none w-full h-full rounded-full checked:border-2"
                    style={{
                      borderColor: colors[color],
                    }}
                  />
                  <span
                    className="absolute w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors[color] }}
                  ></span>
                </label>
              ))}
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
            <div className="pt-4 gap-[10px] flex justify-center items-center">
              <button
                onClick={addToCart}
                className="w-[105px] h-[36px] bg-[#6576FF] text-white p-2 rounded font-bold text-[13px] leading-[20px] tracking-[0.26px]"
              >
                Add to Cart
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#6576FF"
                fill="none"
              >
                <path
                  d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="py-4 flex justify-center pb-[20px] lg:hidden">
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
          {/* Checkout Button */}
        </div>
      </div>
      <div className="flex justify-center pb-[20px]">
        <button
          onClick={openCheckout}
          className="bg-[#FFBB5A] text-[#364A63] rounded-[20px] w-[139px] h-[42px] font-bold text-[13px] leading-[20px] tracking-[0.26px] hidden lg:flex justify-center items-center"
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
          <div className="w-[400px] md:w-[651px] max-h-[480px] bg-white p-4 md:p-11 rounded-[20px] gap-[16px]">
            <h1 className="text-[#364A63] text-[22px] leading-[24px] font-bold">
              Your Cart
            </h1>
            <div className="max-w-[563px]">
              <div className="max-w-[563px] h-[36px] flex pr-[4px] pt-[8px] border-b py-2 text-[14px] leading-[23.1px] text-[#8091A7] gap-2">
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
                    className="max-w-[563px] h-[52px] items-center justify-center flex py-2 border-b gap-2 text-[14px] leading-[23.1px] text-[#364A63]"
                  >
                    <div className="w-[278px] h-[36px] flex items-center gap-2 sm:gap-4 mr-6">
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
            <div className="flex justify-between text-[#373737] font-bold text-lg mt-4">
              <div className="text-[16px]">Total</div>
              <div className="flex gap-[90px] text-[14px]">
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
