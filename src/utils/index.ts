interface IFullname {
	firstname: string;
	lastname: string;
}
export const fullname = (params: IFullname) => {
	const { firstname, lastname } = params;
	return firstname + " " + lastname;
};
