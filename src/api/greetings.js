const url = 'http://localhost:3000/api/v1/greetings/random';

const getGreeting = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

export default getGreeting;