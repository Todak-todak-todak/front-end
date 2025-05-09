import api from './api';

export const postNearbyHospitals = (payload: {
  latitude: number;
  longitude: number;
  distance: number;
}) => {
  return api.post('/industrial/hospitals/nearby', payload);
};
