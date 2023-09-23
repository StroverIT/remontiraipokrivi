import { data } from "../components/data/services";

export const listAllExceptOne = (input) => {
  try {
    return data.filter((service) => service._id != input);
  } catch (e) {
    console.log(e);
  }
};
