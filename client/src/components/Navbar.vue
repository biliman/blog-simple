<template lang="html">
  <div>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><img src="http://www.webinternational.net/wp-content/uploads/2017/03/company-blog.jpg" alt="https://www.odoo.com/apps/modules/8.0/portal_blog/blog.jpg" style="width:90;height:60px;"></el-menu-item>
      <div class="user_menu" style="float:right" v-show="statusLogin == null">
        <el-menu-item index="1" @click="signInDialog">Sign In</el-menu-item>
        <el-menu-item index="1" @click="signUpDialog">SignUp</el-menu-item>
      </div>

      <el-submenu index="2" style="float:right;" v-show="statusLogin">
        <template slot="title"><b>Welcome, {{userActive}}</b></template>
        <el-menu-item index="2-2" @click="toProfile">Profile</el-menu-item>
        <el-menu-item index="2-3" @click="toHome">Home</el-menu-item>
        <el-menu-item index="2-4" @click="signOut">SignOut</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>

</script>

<style lang="css">
  
</style>
