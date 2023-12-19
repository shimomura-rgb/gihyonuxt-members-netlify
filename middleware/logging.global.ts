export default defineNuxtRouteMiddleware(
  (to, from) => {
    console.log(`遷移元:${from.fullPath}\n遷移先:${to.fullPath}`);
    return;
  }
)