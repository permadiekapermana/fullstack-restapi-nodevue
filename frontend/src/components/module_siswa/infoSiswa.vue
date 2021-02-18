<template>
    <div id="infoSiswa">
        <Navbar/>
        <Sidebar/>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1>Siswa</h1>
        </div>
        <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
            <li class="breadcrumb-item active">Siswa</li>
        </ol>
        </div>
    </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">
    <div class="row">
        <div class="col-12">

            <!-- general form elements -->
            <div class="card card-warning">
                <div class="card-header">
                <font class="card-title" text-color="white">Info Detail Data Siswa</font>
                </div>
                <!-- /.card-header -->
                <!-- form start -->                
                <div class="card-body">
                    <H5>A. DATA PRIBADI</H5>
                    <div class="form-group">
                      <label for="id_siswa">ID Siswa :</label>
                      <p>{{ id_siswa }}</p>
                    </div>
                    <div class="form-group">
                      <label for="nama_lengkap">Nama Lengkap Siswa :</label>
                      <p>{{ nama_lengkap }}</p>
                    </div>
                    <div class="form-group">
                      <label for="jenis_kelamin">Jenis Kelamin :</label>
                      <p v-if="jenis_kelamin === 'L'">Laki - Laki</p>
                      <p v-else-if="jenis_kelamin === 'P'">Perempuan</p>
                      <p v-else>Tidak Mengisi</p>
                    </div>
                    <div class="form-group">
                      <label for="nisn">NISN (Nomor Induk Siswa Nasional) :</label>
                      <p>{{ nisn }}</p>
                    </div>
                    <div class="form-group">
                      <label for="nik">NIK / No. KITAS (Untuk WNA) :</label>
                      <p>{{ nik }}</p>
                    </div>
                    <div class="form-group">
                      <label for="tmp_lahir">Tempat Lahir :</label>
                      <p>{{ tmp_lahir }}</p>
                    </div>
                    <div class="form-group">
                      <label for="tgl_lahir">Tanggal Lahir :</label>
                      <p>{{ tgl_lahir }}</p>
                    </div>
                    <div class="form-group">
                      <label>Agama :</label>
                      <p >{{ id_agama }}</p>
                    </div>
                    <div class="form-group">
                      <label for="kewarganegaraan">kewarganegaraan :</label>
                      <p>{{ kewarganegaraan }}</p>
                    </div>
                    <div class="form-group">
                      <label>Berkebutuhan Khusus :</label>
                      <p>{{ id_disabilitas }}</p>
                    </div>
                    <div class="form-group">
                      <label for="alamat_lengkap">Alamat Lengkap :</label>
                      <p>{{ alamat_lengkap }}</p>
                    </div>
                    <div class="form-group">
                      <label>Kelurahan :</label>
                      <p>{{ id_kelurahan }}</p>
                    </div>
                    <div class="form-group">
                      <label for="nama_dusun">Nama Dusun :</label>
                      <p>{{ nama_dusun }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_rt">Nomor RT :</label>
                      <p>{{ no_rt }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_rw">Nomor RW :</label>
                      <p>{{ no_rw }}</p>
                    </div>
                    <div class="form-group">
                      <label>Status Tinggal :</label>
                      <p>{{ id_statustinggal }}</p>
                    </div>
                    <div class="form-group">
                      <label>Transportasi :</label>
                      <p>{{ id_transportasi }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_kps">Nomor KPS (Apabila Menerima) :</label>
                      <p>{{ no_kps }}</p>
                    </div>
                    <div class="form-group">
                      <label>Nomor PIP (Program Indonesia Pintar) :</label>
                      <p>{{ no_pip }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_kks">Nomor KKS (Kartu Keluarga Sejahtera) :</label>
                      <p>{{ no_kks }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_akta">Nomor Registrasi Kartu Lahir :</label>
                      <p>{{ no_akta }}</p>
                    </div>
                    <div class="form-group">
                      <label>Nomor Rekening Bank :</label>
                      <p>{{ id_bank }}</p>
                    </div>
                    <H5>B. DATA AYAH KANDUNG</H5>
                    <div class="form-group">
                      <label>Data Ayah</label>
                      <p>{{ id_ayah }}</p>
                    </div>
                    <H5>C. DATA IBU KANDUNG</H5>
                    <div class="form-group">
                      <label>Data Ibu</label>
                      <p>{{ id_ibu }}</p>
                    </div>
                    <H5>D. DATA WALI</H5>
                    <div class="form-group">
                      <label>Data Wali</label>
                      <p>{{ id_wali }}</p>
                    </div>
                    <h5>E. KONTAK</h5>
                    <div class="form-group">
                      <label for="no_telp">Nomor Telepon</label>
                      <p>{{ no_telp }}</p>
                    </div>
                    <div class="form-group">
                      <label for="no_hp">Nomor HP</label>
                      <p>{{ no_hp }}</p>
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <p>{{ email }}</p>
                    </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button class="btn btn-secondary mr-3"><p><router-link tag="p" :to="{name: 'viewSiswa'}">Back</router-link></p></button>
                </div>
                
            </div>
            <!-- /.card -->

        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</section>
<!-- /.content -->

</div>
<!-- /.content-wrapper -->

        <Footer/>
    </div>
</template>

<script>
// import axios
import axios from "axios";
import Navbar from './../_layouts/Navbar.vue'
import Sidebar from './../_layouts/Sidebar.vue'
import Footer from './../_layouts/Footer.vue'

export default {
  name: 'infoSiswa',
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  data() {
    return {
        id_siswa: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        nisn: "",
        nik: "",
        tmp_lahir: "",
        tgl_lahir: "",
        id_agama: "",
        itemsAgama: [],
        kewarganegaraan: "",
        id_disabilitas: "",
        itemsDisabilitas: [],
        alamat_lengkap: "",
        id_kelurahan: "",
        itemsKelurahan: [],
        nama_dusun: "",
        no_rt: "",
        no_rw: "",
        id_statustinggal: "",
        itemsStatusTinggal: [],
        id_transportasi: "",
        itemsTransportasi: [],
        no_kps: "",
        id_pip: "",
        itemsPIP: [],
        no_kks: "",
        no_akta: "",
        id_bank: "",
        itemsBank: [],
        id_ayah: "",
        itemsAyah: [],
        id_ibu: "",
        itemsIbu: [],
        id_wali: "",
        itemsWali: [],
        no_telp: "",
        no_hp: "",
        email: "",
    };
  },
  created: function () {
    this.viewAgama();
    this.viewDisabilitas();
    this.viewKelurahan();
    this.viewStatusTinggal();
    this.viewTransportasi();
    this.viewPIP();
    this.viewBank();
    this.viewAyah();
    this.viewIbu();
    this.viewWali();
    this.viewSiswaById();
  },
  methods: {
    // Get All Agama
    async viewAgama() {
      try {
        const response = await axios.get("http://localhost:8800/agama/view");
        this.itemsAgama = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Status Disabilitas
    async viewDisabilitas() {
      try {
        const response = await axios.get("http://localhost:8800/disabilitas/view");
        this.itemsDisabilitas = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Kelurahan
    async viewKelurahan() {
      try {
        const response = await axios.get("http://localhost:8800/kelurahan/view");
        this.itemsKelurahan = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Status Tinggal
    async viewStatusTinggal() {
      try {
        const response = await axios.get("http://localhost:8800/statustinggal/view");
        this.itemsStatusTinggal = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Transportasi
    async viewTransportasi() {
      try {
        const response = await axios.get("http://localhost:8800/transportasi/view");
        this.itemsTransportasi = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Kartu PIP
    async viewPIP() {
      try {
        const response = await axios.get("http://localhost:8800/pip/view");
        this.itemsPIP = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Rekening Bank
    async viewBank() {
      try {
        const response = await axios.get("http://localhost:8800/bank/view");
        this.itemsBank = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Ayah
    async viewAyah() {
      try {
        const response = await axios.get("http://localhost:8800/ayah/view");
        this.itemsAyah = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Ibu
    async viewIbu() {
      try {
        const response = await axios.get("http://localhost:8800/ibu/view");
        this.itemsIbu = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get All Data Wali
    async viewWali() {
      try {
        const response = await axios.get("http://localhost:8800/wali/view");
        this.itemsWali = response.data.values;
      } catch (err) {
        console.log(err);
      }
    },
    // Get Agama By Id
    async viewSiswaById() {
      try {
        const response = await axios.get(
          `http://localhost:8800/siswa/view/${this.$route.params.id}`
        );
        this.id_siswa = response.data.values.[0].id_siswa;
        this.nama_lengkap = response.data.values.[0].nama_lengkap;
        this.jenis_kelamin = response.data.values.[0].jenis_kelamin;
        this.nisn = response.data.values.[0].nisn;
        this.nik = response.data.values.[0].nik;
        this.tmp_lahir = response.data.values.[0].tmp_lahir;
        this.tgl_lahir = response.data.values.[0].tgl_lahir;
        this.id_agama = response.data.values.[0].id_agama;
        this.kewarganegaraan = response.data.values.[0].kewarganegaraan;
        this.id_disabilitas = response.data.values.[0].id_disabilitas;
        this.alamat_lengkap = response.data.values.[0].alamat_lengkap;
        this.id_kelurahan = response.data.values.[0].id_kelurahan;
        this.nama_dusun = response.data.values.[0].nama_lengkap;
        this.no_rt = response.data.values.[0].no_rt;
        this.no_rw = response.data.values.[0].no_rw;
        this.id_statustinggal = response.data.values.[0].id_statustinggal;
        this.id_transportasi = response.data.values.[0].id_transportasi;
        this.no_kps = response.data.values.[0].no_kps;
        this.id_pip = response.data.values.[0].id_pip;
        this.no_kks = response.data.values.[0].no_kks;
        this.no_akta = response.data.values.[0].no_akta;
        this.id_bank = response.data.values.[0].id_bank;
        this.id_ayah = response.data.values.[0].id_ayah;
        this.id_ibu = response.data.values.[0].id_ibu;
        this.id_wali = response.data.values.[0].id_wali;
        this.no_telp = response.data.values.[0].no_telp;
        this.no_hp = response.data.values.[0].no_hp;
        this.email = response.data.values.[0].email;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update siswa
    async updateSiswa() {
      try {
        await axios.put(
          `http://localhost:8800/siswa/update/`,
          {
            id_siswa: this.$route.params.id,
            nama_lengkap: this.nama_lengkap,
            jenis_kelamin: this.jenis_kelamin,
            nisn: this.nisn,
            nik: this.nik,
            tmp_lahir: this.tmp_lahir,
            tgl_lahir: this.tgl_lahir,
            id_agama: this.id_agama,
            kewarganegaraan: this.kewarganegaraan,
            id_disabilitas: this.id_disabilitas,
            alamat_lengkap: this.alamat_lengkap,
            id_kelurahan: this.id_kelurahan,
            nama_dusun: this.nama_dusun,
            no_rt: this.no_rt,
            no_rw: this.no_rw,
            id_statustinggal: this.id_statustinggal,
            id_transportasi: this.id_transportasi,
            no_kps: this.no_kps,
            id_pip: this.id_pip,
            no_kks: this.no_kks,
            no_akta: this.no_akta,
            id_bank: this.id_bank,
            id_ayah: this.id_ayah,
            id_ibu: this.id_ibu,
            id_wali: this.id_wali,
            no_telp: this.no_telp,
            no_hp: this.no_hp,
            email: this.email,
          }
        );
        this.id_siswa = "";
        this.nama_lengkap = "";
        this.jenis_kelamin = "",
        this.nisn = "",
        this.nik = "",
        this.tmp_lahir = "";
        this.tgl_lahir = "",
        this.id_agama = "",
        this.kewarganegaraan = "",
        this.id_disabilitas = "",
        this.alamat_lengkap = "";
        this.id_kelurahan = "";
        this.nama_dusun = "",
        this.no_rt = "",
        this.no_rw = "",
        this.id_statustinggal = "",
        this.id_transportasi = "",
        this.no_kps = "",
        this.id_pip = "",
        this.no_kks = "",
        this.no_akta = "",
        this.id_bank = "",
        this.id_ayah = "",
        this.id_ibu = "",
        this.id_wali = "",
        this.no_telp = "",
        this.no_hp = "",
        this.email = "",
        this.$router.push("/siswa/view");
      } catch (err) {
        console.log(err);
      }
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>