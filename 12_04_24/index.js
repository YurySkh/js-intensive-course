import { setChangeDataCallBack } from "./data/dataCounter.js";
import { renderCounter } from "./componets/renderCounter.js";

renderCounter();
setChangeDataCallBack(renderCounter)