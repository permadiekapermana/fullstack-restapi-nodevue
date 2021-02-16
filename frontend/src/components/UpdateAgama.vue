<template>
  <div>
    <div class="field">
      <label class="label">Agama</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Masukkan Agama"
          v-model="agama"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateAgama">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "updateAgama",
  data() {
    return {
      agama: "",
    };
  },
  created: function () {
    this.viewAgamaById();
  },
  methods: {
    // Get Agama By Id
    async viewAgamaById() {
      try {
        const response = await axios.get(
          `http://localhost:8800/agama/view/${this.$route.params.id}`
        );
        this.agama = response.data.values.[0].agama;
        // console.log(this.$route.params.id)
        // console.log(this.agama)
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateAgama() {
      try {
        await axios.put(
          `http://localhost:8800/agama/update/`,
          {
            id_agama: this.$route.params.id,
            agama: this.agama,
          }
        );
        this.id_agama = "";
        this.agama = "";
        this.$router.push("/agama/view");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>