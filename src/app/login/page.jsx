// "use client";
// import { signIn, useSession } from "next-auth/react";
// import styles from "./loginPage.module.css";
// import { useRouter } from "next/navigation";
// const page = () => {
// 	const { data, status } = useSession();
// 	const router = useRouter();
// 	console.log(data, status);
// 	if (status === "loading") {
// 		return <div className={styles.loading}>Loading...</div>;
// 	}
// 	if (status == "authenticated") {
// 		router.push("/");
// 	}
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.wrapper}>
// 				<div className={styles.socialButton}>Sign in with Google</div>
// 				<div className={styles.socialButton} onClick={() => signIn("github")}>
// 					Sign in with Github
// 				</div>
// 				<div className={styles.socialButton}>Sign in with Facebook</div>
// 			</div>
// 		</div>
// 	);
// };

// export default page;


'use client';
import { signIn, useSession, useUpdateSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const  { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    console.log(session,status)
  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === 'authenticated') {
    router.push('/');
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(status)
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        router.push('/');
      } else {
        // Handle non-200 status codes (e.g., 400 for invalid credentials)
        const errorMessage = await res.text(); // Get error message from response body
        console.log("cannot sign in  1")
        alert(errorMessage || 'Failed to sign in');
    }
} catch (error) {
    // Handle network errors or other exceptions
    console.error('Error signing in:', error);
    console.log("cannot sign in  2")
      alert('Failed to sign in');
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn('github')}>
          Sign in with Github
        </div>
        <div className={styles.socialButton} onClick={() => signIn('facebook')}>
          Sign in with Facebook
        </div>

        <form className={styles.form} onSubmit={handleSignIn}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Sign In</button>
        </form>

        <div className={styles.link} onClick={() => router.push('/signup')}>
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
