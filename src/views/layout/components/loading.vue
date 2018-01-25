<template>
    <div class="loader">
      <div class="loader-inner pacman">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>
<style scoped>
.loader {
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes rotate_pacman_half_up {
  0% { transform: rotate(270deg); }
  50% { transform: rotate(360deg); }
  100% { transform: rotate(270deg); }
}
@keyframes rotate_pacman_half_down {
  0% { transform: rotate(90deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(90deg); }
}
@keyframes pacman-balls {
  75% { opacity: 0.7; }
  100% { transform: translate(-100px, -6.25px); } }
.pacman {
  position: relative;
}
.pacman > div:nth-child(2)
{
  animation: pacman-balls 1s 0s infinite linear;
}
.pacman > div:nth-child(3) {
  animation: pacman-balls 1s 0.33s infinite linear;
}
.pacman > div:nth-child(4) {
  animation: pacman-balls 1s 0.66s infinite linear;
}
.pacman > div:nth-child(5) {
  animation: pacman-balls 1s 0.99s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #279fcf;
  border-left: 25px solid #279fcf;
  border-bottom: 25px solid #279fcf;
  border-radius: 25px;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
}
.pacman > div:nth-child(2) {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #279fcf;
  border-left: 25px solid #279fcf;
  border-bottom: 25px solid #279fcf;
  border-radius: 25px;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -50px;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: #279fcf;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: translate(0, -6.25px);
  top: 25px;
  left: 100px;
}
</style>
