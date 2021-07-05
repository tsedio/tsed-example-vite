import {ViteConfig} from "@tsedio/vite";
import {dirname} from "path";
import {PullstateCore} from "../../../../app/src/store";

const pullstate = PullstateCore.instantiate({ssr: true});

export const viteConfig: ViteConfig = {
  root: dirname(require.resolve("@tsed/app")),
  stateSnapshot() {
    return pullstate.getPullstateSnapshot();
  }
};
