import { createStore } from "vuex";
import availableDates from './modules/availableDates'

export default createStore({
  modules: {
    availableDates
  }
});
