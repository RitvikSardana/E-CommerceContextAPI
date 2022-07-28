import React from "react";
import Filters from "../Components/Filters";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../context/Context";
const Home = () => {
  const {state: { products},filterState:{byStock,byFastDelivery,sort,byRating,searchQuery}} = CartState();

  const transformProducts = () =>{
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=> sort ==="lowToHigh"? a.price-b.price :b.price-a.price )
    }
    if(!byStock){
      sortedProducts = sortedProducts.filter(prod=>prod.inStock)
    }
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter(prod=>prod.fastDelivery)
    }
    if(byRating) {
      sortedProducts = sortedProducts.filter(prod=>prod.ratings >= byRating)
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter(prod=>prod.name?.toLowerCase().includes(searchQuery) )
      // console.log(sortedProducts[0].name?.toLowerCase())
    }

    return sortedProducts
  }
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
            transformProducts().map(prod=>(
                <SingleProduct prod={prod} key = {prod.id} />
            ))
        }
      </div>
    </div>
  );
};

export default Home;
