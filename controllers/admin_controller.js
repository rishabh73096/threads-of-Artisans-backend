import EventsModels from "../models/EventsDetails.models.js";
import AdminModel from "../models/admin.models.js";
import feedbackmodel from "../models/feedback.models.js";
import contactmodel from "../models/contact.models.js";

export const home = (req, res) => {
  res.send("<h1> this is response form admin home </h1>");
};
// for admin login
export const login = async (req, res) => {
  try {
    let account_Info = req.body;
    console.log(account_Info);
    const { username, password } = account_Info;

    const admin_data = await AdminModel.findOne({ admin_id: username });
    console.log(admin_data);

    if (admin_data != null) {
      if (admin_data.admin_pass === password) {
        res.send({
          code: 200,
          message: "Admin Login Sucessfully",
          token: admin_data.admin_id,
        });
      } else {
        res.send({ code: 404, message: "invalid password " });
      }
    } else {
      res.send("data not found");
    }
  } catch (err) {
    console.log("error on admin login" + err);
  }
};

//events details

export const EventsDetails = async (req, res) => {
  let Events_Info = req.body;
  console.log(Events_Info);
  const { EventName, EventVenue, EventDescription, EventOrganiser, Date } =
    Events_Info;

  try {
    const EventsDoc = EventsModels({
      EventName: EventName,
      EventVenue: EventVenue,
      EventDescription: EventDescription,
      EventOrganiser: EventOrganiser,
      Date: Date,
    });

    await EventsDoc.save();
    res.send("thank you for your ragistration");
  } catch (err) {
    console.log(err);
  }

  console.log(Events_Info);
};

// feedbacks
export const AllFeedback = async (req, res) => {
  try {
    const feedbackData = await feedbackmodel.find();
    if (feedbackData != null) {
      res.status(200).send(feedbackData);
    } else {
      res.status(404).send("No feedback yet");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
// contacts
export const AllContacts = async (req, res) => {
  try {
    const contactData = await contactmodel.find();
    if (contactData.length > 0) {
      res.status(200).send(contactData);
    } else {
      res.status(404).send({ message: "No contacts found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

