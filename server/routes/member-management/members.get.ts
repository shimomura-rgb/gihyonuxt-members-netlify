import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {

		let memberList = new Map<number, Member>();
		let resultVal = 0;

		// throw createError("疑似エラー発生");
		try{
			const storage = useStorage();
			const memberListStorage = await storage.getItem("local:member-management_members");
			// throw createError("疑似エラー発生!");
			if (memberListStorage != undefined){
				memberList = new Map<number, Member>(memberListStorage as any);
			}
			resultVal = 1;
		}
		catch(err){
			console.log(err);
		}
		
		const memberListValues =  memberList.values();
		const memberListArray = Array.from(memberListValues);
		return {
			result: resultVal,
			data: memberListArray
		}
	}
);
