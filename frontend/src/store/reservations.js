export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'

export const receiveReservations = reservations => ({
    type: 'RECEIVE_RESERVATIONS',
    reservations
})

export const receiveReservation = reservation => ({
    type: 'RECEIVE_RESERVATION',
    reservation
})

export const removeReservation = reservationId => ({
    type: 'REMOVE_RESERVATION',
    reservationId
})

export const createReservation = reservation => async dispatch => {
    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify(reservation)
      });
      const data = await response.json();
    }

    function reservationsReducer(state={}, action) {

    }

    export default reservationsReducer;
