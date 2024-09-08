import CustomerModel from "../models/Customer.models.js";
import AddtocardDb from "../models/AddtoCart.models.js";
import Order from "../models/OrderSchema.models.js";

import feedbackmodel from "../models/feedback.models.js";
import Contact from "../models/contact.models.js"
export const home = (req, res) => {
  res.send("<h1> this is response form customer home </h1>");
};
// Controller for handling customer registration
export const Customer = async (req, res) => {
  const CustomerObject = req.body;
  const { Name, Id, email, password, phoneno, city, state, address } =
    CustomerObject;

  try {
    // Check if the ID already exists in the database
    const existingCustomer = await CustomerModel.findOne({ Id });

    if (existingCustomer) {
      // If the ID already exists, return an error response
      return res.send("ID is already registered");
    }

    // If the ID does not exist, proceed with saving the new customer data
    const CustomerDoc = new CustomerModel({
      Name,
      Id,
      email,
      password,
      phoneno,
      city,
      state,
      address,
    });

    await CustomerDoc.save();
    res.send("Thank you for your registration");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred during registration");
  }
};

// Controller for fetching customer profile
export const Customer_profile = async (req, res) => {
  try {
    const uid = req.query.Id;
    console.log(`Data received from client: ${uid}`);
    const user_data = await CustomerModel.findOne({ Id: uid });
    console.log(user_data);
    res.send(user_data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while fetching profile");
  }
};

export const editProfile = async (req, res) => {
  try {
    const shopkeeper_data = req.body;
    const { Id, Name, email, phoneno, city, address, state } = shopkeeper_data;

    const updateDoc = {
      $set: {
        Name: Name,
        email: email,
        phoneno: phoneno,
        city: city,
        address: address,
        state: state,
      },
    };
    const filter_condition = { Id: Id };
    const status = await CustomerModel.updateOne(filter_condition, updateDoc);
    console.log(status);
    res.send(status);
  } catch (err) {
    console.log(err);
  }
};

export const AddToCart = async (req, res) => {
  const { Id, productItem } = req.body;
  try {
    let itemsToAdd = [];
    if (Array.isArray(productItem)) {
      itemsToAdd = productItem.map((item) => ({
        Id: item.Id,
        productQty: item.productQty,
      }));
    } else {
      itemsToAdd.push({
        Id: productItem.Id,
        productQty: productItem.productQty,
      });
    }
    const existingCart = await AddtocardDb.findOne({ Id: Id });

    if (existingCart) {
      existingCart.productItem.push(...itemsToAdd);
      await existingCart.save();
    } else {
      const cartdoc = new AddtocardDb({
        Id: Id,
        productItem: itemsToAdd,
      });
      await cartdoc.save();
    }

    res.send("Product added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while adding items to the cart");
  }
};

export const AllCartProduct = async (req, res) => {
  try {
    const CustomerId = req.query.Id;
    //if condition with Order Model to chevk customerId and status =shipped

    const AddToCarts = await AddtocardDb.find({ Id: CustomerId }).populate(
      "productItem.Id"
    );

    if (AddToCarts) {
      console.log(AddToCarts);
      res.status(200).json(AddToCarts);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error viewing cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//code to buy
export const buyProduct = async (req, res) => {
  console.log("buy product");
  const { customerId, products, totalPrice } = req.body;
  console.log(customerId + products + totalPrice);
  try {
    const { customerId, products, totalPrice, address, cardno, expire, cvv } =
      req.body;

    const newOrder = new Order({
      customerId: customerId,
      products: products,
      totalPrice: totalPrice,
      address: address,
      cardno: cardno,
      expire: expire,
      cvv: cvv,
      orderstatus: "Shipped",
    });

    console.log("neworderdata" + newOrder);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const cid = req.query.customerId;
    console.log(`Customer ID received from client: ${cid}`); // Log the customer ID
    const placeorderData = await Order.find({ customerId: cid });
    console.log(placeorderData);
    if (placeorderData != null) {
      res.send(placeorderData);
    } else {
      res.send("No orders found for this customer");
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error");
  }
};

export const getUserCount = async (req, res) => {
  try {
    const userCount = await CustomerModel.countDocuments();
    res.status(200).json({ count: userCount });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ message: "Failed to fetch user count" });
  }
};

export const getTotalFeedbackCount = async (req, res) => {
  try {
    const totalFeedbacks = await feedbackmodel.countDocuments();

    res.json({ count: totalFeedbacks });
  } catch (error) {
    console.error("Error fetching total feedback count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getTotalContactCount = async (req, res) => {
  try {
    const totalcontacts = await Contact.countDocuments();

    res.json({ count: totalcontacts });
  } catch (error) {
    console.error("Error fetching total contact count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


