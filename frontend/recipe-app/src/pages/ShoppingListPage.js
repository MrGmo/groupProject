import {
  Container,
  Grid,
  Checkbox,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import NoFoodOutlinedIcon from "@mui/icons-material/NoFoodOutlined";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const ShoppingListPage = () => {
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
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

  const handleChangeName = (e) => {
    setNewItemName(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setNewItemQuantity(e.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      purchased: false,
      name: newItemName,
      quantity: newItemQuantity,
    };
    setShoppingList([...shoppingList, newItem]);
    setNewItemQuantity("");
    setNewItemName("");
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
    <Container>
      <h1>My Shopping List</h1>
      {/* position on the page */}
      <Grid container spacing={2}>
        {/* Each item row*/}
        {renderShoppingListItems()}
      </Grid>
      <h1>Oh and Don't Forget...</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="new-food-name"
            label="Name"
            variant="filled"
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            bgcolor="#000"
            id="new-food-quantity"
            label="How Much?"
            variant="filled"
            onChange={handleChangeQuantity}
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleAddItem} size="large" variant="contained">
            Remember
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingListPage;
