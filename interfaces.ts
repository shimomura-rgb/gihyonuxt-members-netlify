export interface Member {
	id: number;
	name: string;
	email: string;
	points: number;
	note?: string;
}

export interface ReturnJSONMembers {
	result: number;
	data: Member[];
}

export interface User {
	id: number;
	name: string;
	loginId: string;
	password: string;
}

export interface ReturnJSONAuth {
	result: number;
	token: string;
	user: User|null;
}
