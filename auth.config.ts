import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks:{
    authorized({auth, request:{nextUrl}}){
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if(isLoggedIn && isOnDashboard){
            return true;
        }
        if(!isLoggedIn && !isOnDashboard){
            return true;
        }
        return false;
    }
  },
  providers: []
} satisfies NextAuthConfig;
