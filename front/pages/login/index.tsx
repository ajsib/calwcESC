import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import Image component from next/image

const SignInComponent = () => {
    const [view, setView] = useState('uname');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const router = useRouter();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (e.target.value.trim() === '') {
            setUsernameError("Enter a valid email address, phone number, or Skype name.");
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.trim() === '') {
            setPasswordError("Please enter the password for your Microsoft account.");
        } else {
            setPasswordError('');
        }
    };

    const handleNext = () => {
        if (username.trim() !== '') {
            setView('pwd');
        }
    };

    const handleSignIn = () => {
        if (password.trim() !== '') {
            setView('final');
        }
    };

    const handleBack = () => {
        setView('uname');
    };

    const Login = () => {
        router.push('/dashboard');
    };

    const baseStyles = {
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        padding: '44px',
        maxWidth: '440px',
        minWidth: '320px',
    };

    const inputStyles = {
        padding: '6px 10px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#666',
        backgroundColor: 'transparent',
        height: '36px',
        outline: 'none',
        width: 'calc(100% - 20px)',
    };

    const backgroundStyles = {
        backgroundImage: 'url("/images/login/illustration.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    };

    return (
        <div style={backgroundStyles}>
            {view === 'uname' && (
                <section style={{ ...baseStyles }}>
                    <div>
                        <Image src="/images/login/bannerlogo.jpg" alt="Microsoft" width={200} height={36} />
                        <h2 style={{ lineHeight: '1.75rem', color: '#1b1b1b', fontSize: '1.5rem', fontWeight: '600', marginTop: '16px', marginBottom: '16px' }}>Sign in</h2>
                        <form>
                            <div style={{ marginBottom: '16px' }}>
                                <p style={{ color: '#e81123' }}>{usernameError}</p>
                                <input style={inputStyles} type="text" name="uname" placeholder="Email, phone, or Skype" value={username} onChange={handleUsernameChange} />
                            </div>
                        </form>
                        <div>
                            <p style={{ marginBottom: '16px', fontSize: '13px' }}>No account? <a href="#" style={{ color: '#0067b8' }}>Create one!</a></p>
                            <p style={{ marginBottom: '16px', fontSize: '13px' }}>
                                <a href="#" style={{ color: '#0067b8' }}>Sign in with a security key
                                    <img src="/images/login/question.png" alt="Question img" />
                                </a>
                            </p>
                        </div>
                        <div>
                            <button style={{ backgroundColor: '#0067b8', color: '#fff', border: '2px solid #0067b8', padding: '5px 30px', fontSize: '15px', cursor: 'pointer' }} onClick={handleNext}>Next</button>
                        </div>
                    </div>
                </section>
            )}

            {view === 'pwd' && (
                <section style={{ ...baseStyles }}>
                    <div>
                        <div style={{ display: 'flex', gap: '50px', marginTop: '16px', marginBottom: '16px', alignItems: 'center' }}>
                            <button style={{ background: 'none', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleBack}>
                                <img src="/images/login/back.png" alt="Back" style={{ width: '24px', height: '24px' }} />
                            </button>
                            <Image src="/images/login/bannerlogo.jpg" alt="Microsoft" width={200} height={36} />
                        </div>
                        <h2 style={{ lineHeight: '1.75rem', color: '#1b1b1b', fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Enter password</h2>
                        <form>
                            <div style={{ marginBottom: '16px' }}>
                                <p style={{ color: '#e81123' }}>{passwordError}</p>
                                <input style={inputStyles} type="password" name="pass" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </div>
                        </form>
                        <div>
                            <p style={{ marginBottom: '16px', fontSize: '13px' }}><a href="#" style={{ color: '#0067b8' }}>Forgot password?</a></p>
                            <p style={{ marginBottom: '16px', fontSize: '13px' }}>
                                <a href="#" style={{ color: '#0067b8' }}>Other ways to sign in</a>
                            </p>
                        </div>
                        <div>
                            <button style={{ backgroundColor: '#0067b8', color: '#fff', border: '2px solid #0067b8', padding: '5px 30px', fontSize: '15px', cursor: 'pointer' }} onClick={handleSignIn}>Sign in</button>
                        </div>
                    </div>
                </section>
            )}

            {view === 'final' && (
                <section style={{ ...baseStyles }}>
                    <div>
                    <Image src="/images/login/bannerlogo.jpg" alt="Microsoft" width={200} height={36} />
                        <div style={{ display: 'inline-flex', gap: '5px', marginTop: '16px', marginBottom: '16px' }}>
                        </div>
                        <h2 style={{ lineHeight: '1.75rem', color: '#1b1b1b', fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Stay signed in?</h2>
                        <p style={{ fontWeight: '400', fontSize: '15px', marginBottom: '16px' }}>Stay signed in so you don&apos;t have to sign in again next time.</p>
                        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                            <span>Don&apos;t show this again</span>
                        </label>
                        <div style={{ textAlign: 'right', width: '100%', margin: '16px 0' }}>
                            <button style={{ backgroundColor: '#b2b2b2', color: '#000', border: '2px solid #b2b2b2', padding: '5px 30px', fontSize: '15px', cursor: 'pointer', display: 'inline', marginRight: '5px' }} onClick={Login}>No</button>
                            <button style={{ backgroundColor: '#0067b8', color: '#fff', border: '2px solid #0067b8', padding: '5px 30px', fontSize: '15px', cursor: 'pointer', display: 'inline' }} onClick={Login}>Yes</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SignInComponent;
