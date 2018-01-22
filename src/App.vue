<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html,#app{
    width:100%;
    height:100%;
}
body {
    font-family: 'Open Sans', sans-serif;
    background-size:cover;
    background-position:center;
    background-attachment:fixed;
    background-color: #2d3a4b;
    /*background: #7e8081;
    background-image: radial-gradient(top, circle cover, #7e8081 0%, #252233 80%);--*/
}
</style>
