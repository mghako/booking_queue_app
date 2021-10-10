import { createStore } from "vuex";
import availableDates from "./modules/availableDates";

const store = createStore({
  modules: {
    availableDates
  }
})

export default store