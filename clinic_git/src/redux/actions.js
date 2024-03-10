export const login = (users) => ({
  type: 'LOGIN',
  payload: users,
});

export const logout = (users) => ({
  type: 'LOGOUT',
  payload: users
});

export const appointment = (appointments) => ({
  type: 'APPOINTMENT',
  payload: appointments
})