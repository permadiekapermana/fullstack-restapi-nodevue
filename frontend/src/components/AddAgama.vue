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
      <button class="button is-success" @click="saveAgama">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddAgama",
  data() {
    return {
      agama: "",
    };
  },
  methods: {
    // Create New product
    async saveAgama() {
      try {
        await axios.post("http://localhost:8800/agama/add", {
          agama: this.agama,
        });
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