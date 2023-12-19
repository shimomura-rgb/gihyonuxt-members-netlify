<script setup lang="ts">
// import type {User} from "@/interfaces";

// const loginTokenCookie = useCookie<string|null>("loginToken");
// const loginUserCookie = useCookie<User|null>("loginUser");
// if(loginTokenCookie.value == null || loginUserCookie.value == null){
// 	await navigateTo("/login");
// }

// definePageMeta({
// 	middleware: (to, from) => {
// 		const loginTokenCookie = useCookie<string|null>("loginToken");
// 		const loginUserCookie = useCookie<User|null>("loginUser");
// 		if(loginTokenCookie.value == null || loginUserCookie.value == null){
// 			return navigateTo("/login");
// 		}
// 		else {
// 			return;
// 		}
// 	}
// })
definePageMeta({
	middleware: ["loggedin-check"]
});

</script>
<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<NuxtLink v-bind:to="{name: 'member-memberList'}">
				会員管理はこちら
			</NuxtLink>
		</p>
	</section>
</template>
