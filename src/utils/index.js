const BASE_URL = 'http://localhost:5000';

export const fetchData = async (url, options = {}, token) => {
    const requestOptions = {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };

    const response = await fetch(`${BASE_URL}${url}`, requestOptions);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
};