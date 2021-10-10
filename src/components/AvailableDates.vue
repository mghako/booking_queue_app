<template>
  <div class="hello">
    <h1 class="text-center text-3xl mb-10 border-2">Available Booking Schedules</h1>
    <table class="table table-auto text-center mx-auto w-4/5">
      <thead>
          <tr>
              <th class="w-2/6">Date</th>
              <th class="w-2/6">Max Slot</th>
              <th class="w-2/6">Booked Slot</th>
              <th class="w-2/6">Actions</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(availableDate, index) in allAvailableDates" :key="index">
              <td>{{availableDate.available_date}}</td>
              <td>{{availableDate.max_slots}}</td>
              <td>{{availableDate.booked_slots}}</td>
              <td>
                  <button @click="createBooking({available_date_id: availableDate.id, user_id: 1})" class="bg-indigo-600 px-2 rounded-xl text-white hover:bg-indigo-800">Book</button>
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "AvailableDates",
  mounted() {
    this.getAvailableDates()
  },
  computed: {
    ...mapGetters(['allAvailableDates'])},
  methods: {
    ...mapActions(['getAvailableDates', 'createBooking']),
  },
};
</script>

<style scoped>
</style>
