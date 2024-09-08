import AddProductModel from "../models/AddProduct.models.js";
import ShopKeeperModel from "../models/shopkeeper.models.js";
import Order from "../models/OrderSchema.models.js";

export const home = (req, res) => {
  res.send("<h1> this is response form shopkeeper home </h1>");
};

export const ShopKeeper = async (req, res) => {
  const shopkeeperObject = req.body;
  console.log(shopkeeperObject);

  const {
    Id,
    password,
    shopkeeperName,
    brandName,
    email,
    contact,
    city,
    address,
    state,
    specility,
  } = shopkeeperObject;

  try {
    const existingShopKepeer = await ShopKeeperModel.findOne({ Id });

    if (existingShopKepeer) {
      return res.send("ID is already registered");
    }
    const shopkeeperDoc = new ShopKeeperModel({
      Id: Id,
      password: password,
      shopkeeperName: shopkeeperName,
      brandName: brandName,
      email: email,
      contact: contact,
      city: city,
      address: address,
      state: state,
      specility: specility,
    });
    await shopkeeperDoc.save();
    res.send("thank you for your ragistration");
  } catch (err) {
    console.log(err);
  }
  console.log(shopkeeperObject);
};

// profile
export const ShopKeeper_profile = async (req, res) => {
  try {
    const uid = req.query.Id; //fetching dtaa
    console.log(`data recived from react ${uid}`);
    const user_data = await ShopKeeperModel.findOne({ Id: uid });
    console.log(user_data);
    res.send(user_data);
  } catch (err) {
    console.log(err);
  }
};

export const editProfile = async (req, res) => {
  try {
    const shopkeeper_data = req.body;
    const {
      Id,
      shopkeeperName,
      brandName,
      email,
      contact,
      city,
      address,
      state,
      specility,
    } = shopkeeper_data;

    const updateDoc = {
      $set: {
        shopkeeperName: shopkeeperName,
        brandName: brandName,
        email: email,
        contact: contact,
        city: city,
        address: address,
        state: state,
        specility: specility,
      },
    };
    const filter_condition = { Id: Id };
    const status = await ShopKeeperModel.updateOne(filter_condition, updateDoc);
    console.log(status);
    res.send(status);
  } catch (err) {
    console.log(err);
  }
};
// add a product in shop
export const Addproduct = async (req, res) => {
  const AddProduct = req.body;

  const { Id, ProductName, Qty, Description, price, discount } = AddProduct;

  try {
    let imgURL = "";
    if (req.file) {
      imgURL = req.file.filename;
    }

    const AddProductDoc = new AddProductModel({
      Id: Id,
      ProductName: ProductName,
      Qty: Qty,
      Description: Description,
      price: price,
      discount: discount,
      pic: imgURL,
    });

    await AddProductDoc.save();
    res.send("Thank you");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while adding product");
  }
};

export const Orders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
