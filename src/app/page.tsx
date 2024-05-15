import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function card() {
  return (
    <div className="mx-auto px-[30px]">
      <div className="max-w-[670px] grid md:grid-cols-2 grid-rows-2 bg-white shadow-md rounded-lg">
        <div className="flex justify-center ">
          <img
            className="rounded-l-lg"
            src="image-product-desktop.jpg"
            alt="product image"
          />
        </div>
        <div className="flex flex-col px-10 py-6 ">
          <span className="text-dark-grayish-blue font-Montserrat uppercase tracking-[0.25rem] py-2">
            Perfume
          </span>
          <h2 className="text-very-dark-blue text-4xl font-Fraunces py-2">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-dark-grayish-blue text-base pt-2 font-Montserrat">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row py-8">
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

/* 

Perfume

Gabrielle Essence Eau De Parfum

A floral, solar and voluptuous interpretation composed by Olivier Polge, 
Perfumer-Creator for the House of CHANEL.

$149.99
$169.99

Add to Cart

******************************************************************

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Dark cyan: hsl(158, 36%, 37%)
- Cream: hsl(30, 38%, 92%)

### Neutral

- Very dark blue: hsl(212, 21%, 14%)
- Dark grayish blue: hsl(228, 12%, 48%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weights: 500, 700

- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700


*/
