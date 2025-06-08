<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="container-fluid py-5">
    <div class="row g-4">
      <!-- First major column -->
      <div class="col-12 col-lg-6">
        <div class="row g-4">
          <div class="col-12 col-md-6 d-flex align-items-start justify-content-center">
            <div class="w-100" style="min-width:320px;">
              <h5 class="mb-3 text-center">ABCDEFG</h5>
              <ul class="list-unstyled text-center">
                <li>Awake\Bed</li>
                <li>Coffee</li>
                <li>Start Journal</li>
                <li>Dailies</li>
                <li>Litter/Laundry</li>
                <li>Dishes</li>
                <li>Trash</li>
                <li>Surfaces</li>
                <li>Floors</li>
                <li>Area</li>
                <li>Energy</li>
                <li>Freshen</li>
                <li>Get things done</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex align-items-start justify-content-center">
            <div class="w-100 text-center" style="min-width:320px;">
              <h5 class="mb-3 text-center">Daily Dozen</h5>
              <ul class="list-unstyled text-center">
                <li>Sleep</li>
                <li>Exercise</li>
                <li>Fuel</li>
                <li>Meditate</li>
                <li>System</li>
                <li>People</li>
                <li>Act</li>
                <li>Light</li>
                <li>Mastery</li>
                <li>Eternal</li>
                <li>Routine</li>
                <li>Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Second major column -->
      <div class="col-12 col-lg-6">
        <div class="row g-4">
          <div class="col-12 col-md-6 d-flex align-items-start justify-content-center">
            <div class="w-100 text-center" style="min-width:320px;">
              <h5 class="mb-3">DO</h5>
              <ul class="list-unstyled text-center">
                <li>Walk</li>
                <li>Sit</li>
                <li>Listen</li>
                <li>Create</li>
                <li>Release</li>
                <li>Be</li>
                <li>Love</li>
                <li>Record</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex align-items-start justify-content-center">
            <div class="w-100 text-center" style="min-width:320px;">
              <h5 class="mb-3">DON'T</h5>
              <ul class="list-unstyled text-center">
                <li>Tank</li>
                <li>Terrorize</li>
                <li>Talk</li>
                <li>Trash</li>
                <li>Take</li>
                <li>Tune out</li>
                <li>Trespass</li>
                <li>Tether</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body, #app {
  height: 100%;
}
body, #app {
  border: 4px solid #007bff;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
