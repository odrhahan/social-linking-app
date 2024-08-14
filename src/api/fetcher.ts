const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

const fetcher = async (input: RequestInfo | URL, init?: RequestInit) => {
	const authorizationHeader: HeadersInit = { Authorization: `Bearer token` };

	const _init: RequestInit = {
		credentials: 'same-origin',
		...init,
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			...authorizationHeader,
			...init?.headers,
		},
	};
	return fetch(API_URL, _init).then((res) => {
		if (res.status === 401) {
			if (typeof window !== 'undefined') {
				if (window.location.pathname === '/') window.location.reload();
				else window.location.pathname = '/';
			}
			return {
				...res,
				json: () =>
					new Promise((resolve) => {
						resolve({ responseData: undefined });
					}),
			};
		}
		return res;
	});
};

export default fetcher;
