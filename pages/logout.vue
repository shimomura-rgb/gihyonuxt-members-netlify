
<script setup lang="ts">
import type {User} from "@/interfaces";

const loginUserCookie = useCookie<User|null>("loginUser");
loginUserCookie.value = null;
const loginTokenCookie = useCookie<string|null>("loginToken");
loginTokenCookie.value = null;
await navigateTo("/login");

</script>