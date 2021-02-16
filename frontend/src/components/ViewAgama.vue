<template>
  <div>
    <router-link :to="{ name: 'AddAgama' }" class="button is-success mt-5"
      >Add Agama </router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID Agama</th>
          <th>Agama</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.agama">
          <td>{{ item.id_agama }}</td>
          <td>{{ item.agama }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'UpdateAgama', params: { id: item.id_agama } }"
              class="button is-info is-small"
              >Update</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteAgama(item.id_agama)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "viewAgama",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.viewAgama();
  },
 
  methods: {
    // Get All Products
    async viewAgama() {
      try {
        const response = await axios.get("http://localhost:8800/agama/view");
        this.items = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteAgama(id_agama) {
      try {
        await axios.delete(`http://localhost:8800/agama/delete/${id_agama}`);
        // console.log(this.id_agama);
        this.viewAgama();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>