import feedbackmodel from "../models/feedback.models.js";
import contactmodel from "../models/contact.models.js";
import EventsModels from "../models/EventsDetails.models.js";
import AddProductModel from "../models/AddProduct.models.js";
import ShopKeeperModel from "../models/shopkeeper.models.js";

export const home = (req, res) => {
  res.send("<h1> this is response form home </h1>");
};

export const addfeedback = async (req, res) => {
  const contactFeedback = req.body;
  const { name, email, query } = contactFeedback;

  try {
    const feedbackDoc = new feedbackmodel({
      name: name,
      email: email,
      query: query,
    });
    await feedbackDoc.save();
    res.send("thank you for your feedback");
  } catch (error) {
    console.log(error);
  }
  console.log(contactFeedback);
};

export const addcontact = async (req, res) => {
  const contactFeedback = req.body;
  const { name, email, phoneno, query } = contactFeedback;
  try {
    const contactDoc = new contactmodel({
      name: name,
      email: email,
      phoneno: phoneno,
      query: query,
    });
    await contactDoc.save();
    res.send("Thank you for contact us");
  } catch (err) {
    console.log(err);
  }
  console.log(contactFeedback);
};

export const Announcement = async (req, res) => {
  try {
    const eventsData = await EventsModels.find();
    if (eventsData != null) {
      res.send(eventsData);
    } else {
      res.send("No events details yet");
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error");
  }
};

export const AllProductDetails = async (req, res) => {
  try {
    const AllProductDetail = await AddProductModel.find();
    if (AllProductDetail != null) {
      res.status(200).send(AllProductDetail);
    } else {
      res.status(404).send("No feedback yet");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const StateWiseShopkeeper = async (req, res) => {
  const { state } = req.query;
  console.log(`state name is ${state}`);

  let userData = {};
  try {
    if (state) {
      const regex = new RegExp(state, "i");
      //const regex1=new RegExp(name,'i')
      userData = await ShopKeeperModel.find({ state: { $regex: regex } });
      console.log(userData);
      res.send(userData);
    }
  } catch (err) {
    console.log(err.message);
  }
};

