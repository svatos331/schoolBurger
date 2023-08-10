import {
	LocalStorageMethodEnum,
	localStorageService,
} from "../../../../../general.services/utils/local-storage.service";

const logout = () => {
	localStorageService(LocalStorageMethodEnum.REMOVE, {
		key: "role",
	});
	localStorageService(LocalStorageMethodEnum.REMOVE, {
		key: "auth",
	});
	for (let i = 0; i < localStorage.length; i++) {
		localStorageService(LocalStorageMethodEnum.REMOVE, {
			key: String(localStorage.key(i)),
		});
	}
	if (
		window.location.pathname.indexOf("/auth") !== 0 &&
		window.location.pathname !== "/"
	) 
	{
		window.location.href = "/no_auth";
	}
};

export default logout;
