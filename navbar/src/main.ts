import "systemjs-webpack-interop/auto-public-path";
import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import MainMenu from "./components/MainMenu.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(MainMenu, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        // name: this.name,
        // mountParcel: this.mountParcel,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance() {
    // TODO register shit
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
export const meta = {};
