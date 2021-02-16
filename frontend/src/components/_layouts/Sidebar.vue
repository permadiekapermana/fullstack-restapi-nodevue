<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="{name: 'dashboard'}" class="brand-link ">         
      <h5 class="brand-text font-weight-light text-center">FS Node - Vue</h5>
    </router-link>    

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="info">
          <font color="white" class="d-block">Welcome,<br>Permadi Eka Permana</font>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <router-link :to="{name: 'dashboard'}" class="nav-link">
                <i class="nav-icon fas fa-home"></i>
                <p>
                  Home
                  <!-- <span class="right badge badge-danger">New</span> -->
                </p>
              </router-link>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-database"></i>
              <p>
                Data Master
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name: 'viewAgama'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data Agama</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="assets/index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data ...</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-database"></i>
              <p>
                Data Orang Tua / Wali
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="assets/index.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data Ayah</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="assets/index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data ...</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="widgets.html" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Data Siswa
                <!-- <span class="right badge badge-danger">New</span> -->
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {}
</script>