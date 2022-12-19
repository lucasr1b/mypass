export const setSessionDetails = (data: any) => {
  localStorage.setItem('name', data.user.name);
  localStorage.setItem('email', data.user.email);
}