import { connectMongo } from "../../../db/connectDb";

import Newsletter from "../../../db/models/Newsletter";

async function handler(req, res) {
  //Connect with database
  if (req.method == "POST") {
    try {
      await connectMongo();
      const { email } = req.body;

      const isFound = await Newsletter.findOne({ email });

      if (isFound) return res.json({ error: "Вече сте се абонирали!" });

      await Newsletter.create({ email });

      return res.status(201).json({ message: "Успешно се абонирахте!" });
    } catch (e) {
      console.log(e);
      res.json({ error: e.message });
    }
  }
}
export default handler;
