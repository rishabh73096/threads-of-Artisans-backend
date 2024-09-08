import ShopKeeperModel from "../models/shopkeeper.models.js";

export const login = async (req, res) => {
      let account_Info = req.body;
      console.log(account_Info);
      const { Id, password } = account_Info;
  
      const shopkeeper_data = await ShopKeeperModel.findOne({
        Id: Id,
      });
      console.log(shopkeeper_data);
      if (shopkeeper_data != null) {
        if (shopkeeper_data.password === password) {
          res.send({
            code: 200,
            message: "shopkeeper login",
            token: shopkeeper_data.Id,
          });
        } else {
          res.send({ code: 404, message: "invalid password" });
        }
      } else {
        res.send("data not found");
      }
    };