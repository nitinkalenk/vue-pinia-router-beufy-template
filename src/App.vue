<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { BNavbar, BNavbarDropdown, BNavbarItem } from "buefy";
</script>

<template>
  <section>
      <b-navbar>
          <template #brand>
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                  src="https://buefy.org/assets/buefy-BJl7dWMj.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                  />
              </b-navbar-item>
          </template>
          <template #start>
              <b-navbar-item tag="router-link" :to="{path : '/'}"> Home </b-navbar-item>
              <b-navbar-item tag="router-link" :to="{path : 'about'}"> About </b-navbar-item>
          </template>

          <template #end>
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button is-primary">
                          <strong>Sign up</strong>
                      </a>
                      <a class="button is-light"> Log in </a>
                  </div>
              </b-navbar-item>
          </template>
      </b-navbar>
  </section>
  <RouterView/>
  
</template>


