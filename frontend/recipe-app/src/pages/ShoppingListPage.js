import { Container, Grid, Checkbox, Divider } from "@mui/material";
import { useState } from "react";
import NoFoodOutlinedIcon from "@mui/icons-material/NoFoodOutlined";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const ShoppingListPage = () => {
  // Temporary values to get something on screen for now
  const [shoppingList, setShoppingList] = useState([
    {
      purchased: false,
      name: "Eggs",
      quantity: 4,
    },
    {
      purchased: false,
      name: "Milk",
      quantity: "1 Gal",
    },
    {
      purchased: false,
      name: "Bisquick",
      quantity: "32oz",
    },
    {
      purchased: false,
      name: "Strawberries",
      quantity: "1 quart",
    },
    {
      purchased: false,
      name: "Whipping Cream",
      quantity: "1 pint",
    },
  ]);

  const handlePurchaseItem = (index) => {
    const newList = [...shoppingList];
    newList[index].purchased = !newList[index].purchased;
    setShoppingList(newList);
  };

  const handleAddItem = (newItem) => {
    setShoppingList([...shoppingList, newItem]);
  };

  const renderShoppingListItems = () => {
    return shoppingList.map((item, index) => {
      return (
        <Grid key={index} container textAlign="left">
          <Grid item xs={2}>
            <Checkbox
              icon={<NoFoodOutlinedIcon />}
              checkedIcon={<FastfoodIcon />}
              checked={item.purchased}
              onChange={() => handlePurchaseItem(index)}
            />
          </Grid>
          <Grid item xs={8}>
            <p>{item.name}</p>
          </Grid>
          <Grid item xs={2}>
            <p>{item.quantity}</p>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Container color="white">
      <h1>My Shopping List</h1>
      {/* position on the page */}
      <Grid container spacing={2}>
        {/* Each item row*/}
        {renderShoppingListItems()}
      </Grid>
    </Container>
  );
};

export default ShoppingListPage;
