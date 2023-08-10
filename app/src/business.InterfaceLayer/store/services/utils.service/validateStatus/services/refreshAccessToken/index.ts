import AccessTokenType from "./types/AccessToken.type";

const refreshAccessToken = async (): Promise<AccessTokenType> => {
	try {
		// Выполнение запроса на обновление токена с помощью refresh token
		const response = await fetch("/refresh-token", {
			method: "POST",
			// Дополнительные заголовки или параметры, если необходимо
		});

		if (response.ok) {
			const data = await response.json();
			// Вернуть новый access token
			return data.access_token;
		} else {
			// Обработка ошибки обновления токена, например, выход пользователя или другие действия
			throw new Error("Failed to refresh token");
		}
	} catch (error) {
		// Обработка ошибки запроса на обновление токена
		throw error;
	}
};

export default refreshAccessToken;
