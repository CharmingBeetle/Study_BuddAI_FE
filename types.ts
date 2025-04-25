import '@clerk/clerk-react';

declare module '@clerk/clerk-react' {
  interface SignInButtonProps {
    redirectUrl?: string;
  }
  interface SignUpButtonProps {
    redirectUrl?: string;
  }
}