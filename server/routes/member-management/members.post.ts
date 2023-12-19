import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let resultVal = 0;
		const memberListArray: Member[] = [];

		try{
			const body = await readBody(event);
			const member = body as Member;
	
			let memberList = new Map<number, Member>();
			const storage = useStorage();
			const memberListStorage = await storage.getItem("local:member-management_members");
			if (memberListStorage != undefined){
				memberList = new Map<number, Member>(memberListStorage as any);
			}
			memberList.set(member.id, member);
			await storage.setItem("local:member-management_members", [...memberList]);
			console.log("----1");
			console.log(memberListArray);
			memberListArray[0] = member;
			console.log("----2");
			console.log(memberListArray);

			resultVal = 1;
		}
		catch(err){
			console.log(err);
		}
		
		return {
			result: resultVal, 
			data: memberListArray
		};
	}
);
