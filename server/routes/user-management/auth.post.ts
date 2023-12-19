import type { User, ReturnJSONAuth } from "~/interfaces";

export default defineEventHandler(
  async (event): Promise<ReturnJSONAuth> => {
    let resultVal = 0;
    let tokenVal = "";
    let loginUser: User|null = null;

    try{
      const body = await readBody(event);
      resultVal = 1;
      if(body.loginId == "bow" && body.password == "wow"){
        tokenVal = "abcdefghijklmn";
        loginUser = {
          id: 1234,
          name: "山本五郎",
          loginId: body.loginId,
          password: ""
        }
      }
    }
    catch(err){
      console.log(err);
    }

    return {
      result: resultVal,
      token: tokenVal,
      user: loginUser
    };
  }
)