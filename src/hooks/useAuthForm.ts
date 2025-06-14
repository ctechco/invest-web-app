
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const useAuthForm = () => {
    const navigate = useNavigate();
    const { signIn, signUp, resetPassword } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: ''
    });

    const [resetEmail, setResetEmail] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        const { error } = await signIn(loginData.email, loginData.password);

        if (error) {
            setMessage(error.message || 'Failed to sign in');
        } else {
            navigate('/dashboard');
        }
        setIsLoading(false);
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (signupData.password !== signupData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        setIsLoading(true);
        setMessage('');

        const { error } = await signUp(signupData.email, signupData.password, signupData.fullName);

        if (error) {
            setMessage(error.message || 'Failed to sign up');
        } else {
            setMessage('Check your email for the confirmation link');
        }
        setIsLoading(false);
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        const { error } = await resetPassword(resetEmail);

        if (error) {
            setMessage(error.message || 'Failed to send reset email');
        } else {
            setMessage('Check your email for password reset instructions');
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        message,
        loginData,
        setLoginData,
        signupData,
        setSignupData,
        resetEmail,
        setResetEmail,
        handleLogin,
        handleSignup,
        handleResetPassword,
    }
}
