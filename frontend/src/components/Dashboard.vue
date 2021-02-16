<template>
    <div id="dashboard">
        <Navbar/>
        <Sidebar/>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1>Home</h1>
        </div>
        <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
            <li class="breadcrumb-item active">Home</li>
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

        <div class="card">
            <div class="card-header">
            <h3 class="card-title">Selamat Datang di Sistem Pengolahan Data Siswa</h3>
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
import Navbar from './_layouts/Navbar.vue'
import Sidebar from './_layouts/Sidebar.vue'
import Footer from './_layouts/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>