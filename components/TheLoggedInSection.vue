<script setup lang="ts">
import type {User} from "@/interfaces";
const loginUser = useCookie<User|null>("loginUser");
</script>

<template>
  <section v-if="loginUser">
    <p>{{loginUser.name}}さんがログイン中</p>
    <p><NuxtLink v-bind:to="{name: 'logout'}">ログアウト</NuxtLink></p>
  </section>

</template>