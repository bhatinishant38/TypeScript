import axios, {} from 'axios';
const fetchData = async () => {
    try {
        const reponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Todo", reponse.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.message);
        }
    }
};
//# sourceMappingURL=webRew.js.map