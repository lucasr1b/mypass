export const setSessionDetails = (user: any) => {
  localStorage.setItem('name', user.name);
  localStorage.setItem('email', user.email);
}

export const resetSessionDetails = () => {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
}