import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const select = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  // const products = select.ProductReducer.products;
  // console.log("select",);
  const [data, setData] = useState([]);
  
  console.log("data", data);
  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: res.data.products,
    });
    // console.log("res",res.data.products);
    setData(res.data.products)
  };
  // useEffect(() => {
  //   setData(select);
  // }, [select]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={3}>
              <Card key={index} sx={{height:350}} className="card">
                <CardContent>
                  {item.images.map((arr, i) => {
                    return (
                      <img key={i} src={arr} height="100px" width="50px" />
                    );
                  })}
                  <h1>{item.title.substring(0, 13)}{" "}
                    {item.title.length > 13 && "..."}</h1>
                  <h4>Detail :{item.description.substring(0, 25)}{" "}
                    {item.description.length > 25 && "..."}</h4>
                  <h5>Prise : $ {item.price}</h5>
                  <Button variant="contained" color="secondary">Buy</Button>
                  <Button variant="contained" color="info" className="Button2">Add to cart</Button>
                  
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
