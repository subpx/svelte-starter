import { config } from '../config/config';
import auth from './auth';

let itinerary = null;

function getItinerary() {
  const headers = new Headers();
  headers.append('X-api-version', '7');
  headers.append('Authorization', `Bearer ${auth.getToken()}`);

  const init = {
    credentials: 'include',
    method: 'get',
    headers: headers,
    mode: 'cors'
  };

  return fetch(`${config.API_URL}/api/Itinerary/8d353cbf-8025-410a-8a5b-49622cf98fee/Passenger/ab913276-0235-41ae-b5d9-ff2e00c1c392`, init);
}

function setItinerary(data) {
  itinerary = data;
}

export default {
  getItinerary,
  setItinerary
}