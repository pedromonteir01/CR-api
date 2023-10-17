import axios from "axios";


const cards = async () => {
    try {
        const response = await axios.get('/api/cards');
        return response.data.items;
    } catch (error) {
        throw error;
    }
}

export default cards;
