import React from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
const Filters = () => {


  const {filterState:{byStock,byFastDelivery,sort,byRating,searchQuery} ,fliterDispatch} = CartState();

  console.log(byStock,byFastDelivery,sort,byRating,searchQuery)

  console.log(CartState())

  const ratingFilterHandler = (i) =>{    
      fliterDispatch({
        type:"FILTER_BY_RATING",
        payload:i+1
      })
  }
  const ascendingSortHandler = () =>{    
      fliterDispatch({
        type:"SORT_BY_PRICE",
        payload:'lowToHigh'
      })
  }
  const descendingSortHandler = () =>{    
      fliterDispatch({
        type:"SORT_BY_PRICE",
        payload:'highToLow'
      })
  }
  const outOfStockHandler = () =>{    
      fliterDispatch({
        type:"FILTER_BY_STOCK",
        
      })
  }
  const fastDeliveryHandler = () =>{    
      fliterDispatch({
        type:"FILTER_BY_DELIVERY",

      })
  }
  const removeAllFiltersHandler = () =>{    
      fliterDispatch({
        type:"CLEAR_FILTERS",

      })
  }

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange = {ascendingSortHandler}
          checked = {sort ==='lowToHigh' ?true:false }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange = {descendingSortHandler}
          checked = {sort ==='highToLow' ?true:false }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange = {outOfStockHandler}
          checked = {byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange = {fastDeliveryHandler}
          checked = {byFastDelivery}
        />
      </span>
      <span>
        <label htmlFor=""></label>
        <Rating 
            rating={byRating}  
            style={{ cursor: "pointer" }}
            onClick={(i)=>ratingFilterHandler(i)}
        />
      </span>
      <Button onClick={removeAllFiltersHandler} variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
