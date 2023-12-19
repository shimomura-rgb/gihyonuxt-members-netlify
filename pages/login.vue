<script setup lang="ts">
import type {User} from "@/interfaces";

definePageMeta({
  layout: "loggedout"
});

const loginId = ref("");
const password = ref("");
const pending = ref(false);
const noServerError = ref(true);

const authFailed = ref(false);
const onLoginButtonClick = async(): Promise<void> => {
  pending.value = true;
  authFailed.value = false;
  noServerError.value = true;
  const asyncData = await useFetch(
    "/user-management/auth",
    {
      method: "POST",
      body: {
        loginId: loginId.value,
        password: password.value
      }
    }
  );
  if(asyncData.error.value == null && asyncData.data.value != null && asyncData.data.value.result == 1){
    if (asyncData.data.value.token != "" && asyncData.data.value != null){
      const loginUserCookie = useCookie<User|null>("loginUser");
      loginUserCookie.value = asyncData.data.value.user;
      const loginTokenCookie = useCookie<string|null>("loginToken");
      loginTokenCookie.value = asyncData.data.value.token;
      await navigateTo("/");
    }
    else {
      pending.value = false;
      authFailed.value = true;
    }
  }
  else{
    pending.value = false;
    noServerError.value = false;
  }
};
</script>
<template>
  <h1>ログイン</h1>
  <p v-if="pending">ログイン中・・・</p>
  <template v-else>
    <p v-if="authFailed">ログインIDまたはパスワードが違います。</p>
    <p v-if="noServerError">IDとパスワードを入力してログインしてください。</p>
    <p v-else>サーバ処理中に障害が発生しました。もう一度ログインを行ってください。</p>
    <form v-on:submit.prevent="onLoginButtonClick">
      <dl>
        <dt>ID</dt>
        <dd><input type="text" v-model="loginId" required></dd>
        <dt>パスワード</dt>
        <dd><input type="password" v-model="password" required ></dd>
      </dl>
      <button type="submit">ログイン</button>
    </form>
  </template>

</template>