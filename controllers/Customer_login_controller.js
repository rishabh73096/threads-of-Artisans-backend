import CustomerModel from "../models/Customer.models.js";
export const home = (req, res) => {
  res.send("<h1> this is response form Customer home </h1>");
};
export const Customer_login = async (req, res) => {
      let account_Info = req.body;
      console.log(account_Info);
      const { Id, password } = account_Info;
  
      const Customer_login = await CustomerModel.findOne({
        Id: Id,
      });
      console.log(Customer_login);
      if (Customer_login != null) {
        if (Customer_login.password === password) {
          res.send({
            code: 200,
            message: "Customer login Sucessfully",
            token: Customer_login.Id,
          });
        } else {
          res.send({ code: 404, message: "invalid password" });
        }
      } else {
        res.send("data not found");
      }
    };