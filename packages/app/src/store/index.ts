import {UIStore} from "./UIStore";
import { createPullstateCore } from "pullstate";

export const PullstateCore = createPullstateCore({
  UIStore
});
