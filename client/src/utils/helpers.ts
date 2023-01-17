import { Cookies } from 'react-cookie';

export const setSessionDetails = (data: any) => {
  localStorage.setItem('name', data.user.name);
  localStorage.setItem('email', data.user.email);
}

export const resetSessionDetails = (cookies: Cookies) => {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  cookies.remove('TOKEN');
}