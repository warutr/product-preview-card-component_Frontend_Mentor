import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function card() {
  return (
    <div className="md:max-w-2xl max-w-sm mx-auto p-5">
      <div className="max-w-[670px] grid md:grid-cols-2 bg-white shadow-md rounded-lg">
        <div className="relative flex h-60 md:h-auto ">
          <img
            className="object-cover rounded-l-lg hidden md:block"
            src="image-product-desktop.jpg"
            alt="product image desktop"
          />
          <img
            className="object-cover md:hidden rounded-t-lg"
            src="image-product-mobile.jpg"
            alt="product image mobile"
          />
        </div>
        <div className="flex flex-col px-10 py-6 ">
          <span className="text-dark-grayish-blue font-Montserrat uppercase tracking-[5px] py-2">
            Perfume
          </span>
          <h2 className="text-very-dark-blue text-4xl font-Fraunces py-2">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-dark-grayish-blue text-base pt-2 font-Montserrat">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row py-7">
            <p className="text-dark-cyan text-4xl font-Fraunces">$149.99</p>
            <p className="flex items-center pl-5 text-dark-grayish-blue text-lg font-normal line-through">
              $169.99
            </p>
          </div>
          <button className="flex items-center justify-center w-full bg-dark-cyan text-cream rounded-lg py-3 hover:bg-dark-cyan-hover ">
            <ShoppingCartIcon className="h-4 mr-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default card;
