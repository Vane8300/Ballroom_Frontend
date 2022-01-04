import axios from 'axios';

const RESERVATIONS_API_URL = 'http://localhost:8081/reservations';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

class HallService {

    getReservationsByUser(userId) {
        return axios.get(RESERVATIONS_API_URL + "/all/" + userId);
    }

    deleteReservation(id) {
        axios.delete( RESERVATIONS_API_URL + '/delete/' + id, options).then(
            res => {
                window.location.reload();
            }
        )
    }

    confirmReservation(id) {
        axios.put(RESERVATIONS_API_URL + "/confirm/" + id, options).then(
            res => {
                sessionStorage.setItem("reservation_id", id);
                window.location.reload();
            }
        )
    }

    editReservation(id, description, reservationDate, time) {
        axios.put(RESERVATIONS_API_URL + "/edit/" + id, {
            "description": description,
            // "location": location,
            // "number_of_people": number_of_people,
            "reservationDate": reservationDate,
            "time": time
        }, options).then(res => {
            window.location.reload();
        })
    }

    addReservation(confirmed, description, reservationDate, time, hall, userId) {
        axios.post(RESERVATIONS_API_URL, {
            "confirmed": confirmed,
            "description": description,
            // "location": location,
            // "number_of_people": number_of_people,
            "reservationDate": reservationDate,
            "time": time,
            "hall": {
                "id": hall
            },
            "user" : {
                "id": userId
            },
        }, options).then(res => window.location.reload())
    }
}
export default new HallService();