import type {User} from "@interfaces";

export default defineNuxtRouteMiddleware(
  (to, from) => {
    const loginTokenCookie = useCookie<string|null>("loginToken");
    const loginUserCookie = useCookie<User|null>("loginUser");
    if(loginTokenCookie.value == null|| loginUserCookie.value == null) {
      return navigateTo("/login");
    }
    else {
      return;
    }
  }
);
