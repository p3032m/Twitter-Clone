import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading && currentUser) {
            navigate('/');
        }
    }, [currentUser, loading, navigate]);

    const login = async (usernameOrEmail, password) => {
        console.log('Logging in with:', usernameOrEmail, password);
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login/`, {
                email: usernameOrEmail,
                password,
            });
    
            // Check if the response contains the expected structure
            if (response.data && response.data.data && response.data.data.data) {
                const userData = response.data.data.data;
                const accessToken = userData.accessToken;
                const currentUser = {
                    username: userData.userName,
                    userId: userData.userId,
                };
    
                // Save user data and access token to local storage
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                localStorage.setItem('accessToken', accessToken);
                setCurrentUser(currentUser);
                return response.data;
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('accessToken');
            setCurrentUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    };

    const signup = (userData) => {
        // Implement your signup logic here
    };

    const value = {
        currentUser,
        login,
        logout,
        signup,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
