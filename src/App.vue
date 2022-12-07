<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onload = function () {
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      })
      var lastTouchEnd = 0;
      document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false)
    }
  }
}
</script>

<style>
</style>
