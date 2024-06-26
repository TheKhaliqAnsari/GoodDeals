import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text"> Smart Shopping Starts Here:</p>
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
            <h1 className="head-text">Unleash the Power of </h1>
            <span className="text-primary">GoodDeals</span>
          <p className="mt-6">
            Powerful, self-serve product and growth analytics to help you to convert, engage and retain more.
          </p>
          <Searchbar/>
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone 15', 'Book', 'Sneakers'].map((product) => {
            return <div>{product}</div>
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
