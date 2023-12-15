import { MODE } from "../config/config.js";
import xMemoryDao from "./Memory/xMemoryDao.js"
class Factory {
  constructor() {}

  static factory = () => {
    if (MODE === "memory") {
      return {
        xDao: new xMemoryDao(),
      };
    }
    if (MODE === "sql") {
      return {
        xDao: "sqlMethod",
      };
    }
  };
}

export default Factory;