import axios from 'axios'
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

export default {
    state: () => ({
        availableDates: [
            {"available_date": "2021-08-12", "max_slots": 20, "booked_slots": 0},
            {"available_date": "2021-08-14", "max_slots": 15, "booked_slots": 0}
        ]
    }),
    
    getters: {
        allAvailableDates: (state) => state.availableDates
    },
    mutations: {
        SET_AVAILABLE_DATES(state, payload) {
            state.availableDates = payload
        }
    },
    actions: {
        saveAvailalbeDates({commit}, data) {
            commit('SET_AVAILABLE_DATES', data)
        },
        async getAvailableDates({commit}) {
            let res = await api.get('/available-dates')
            commit('SET_AVAILABLE_DATES', res.data)
        },
        createBooking(context, payload) {
            api.post('/bookings', payload)
            .then( () => {
                this.getAvailableDates()
            })
            .catch( (error) => {
                console.error(error)
            })

        }
    }
}
