import type {Member, ReturnJSONMembers} from "@/interfaces";
// import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let resultVal = 0;
		const memberListArray: Member[] = [];
		// throw createError("疑似エラー発生");

		try{
			const params = event.context.params;
			let memberList = new Map<number, Member>()
			const storage = useStorage();
			const memberListStorage = await storage.getItem("local:member-management_members");
			// throw createError("疑似エラー発生");

			if (memberListStorage != undefined){
				memberList = new Map<number, Member>(memberListStorage as any);
			}
			if(params != undefined) {
				const idNo = Number(params.id);
				// const idNo = 2;
				const member = memberList.get(idNo);
				resultVal =1;
				if (member != undefined){
					memberListArray[0] = member;
				}
			}
		}
		catch(err){
			console.log(err);
		}
		
		//送信データオブジェクトをリターン。
		return {
			result: resultVal,
			data: memberListArray
		};
	}
);
