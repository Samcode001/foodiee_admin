import { atom } from "recoil";

const shopState = atom({
  key: "shopState",
  default: {
    restrauntName: "",
    username: "",
  },
});

export default shopState;
