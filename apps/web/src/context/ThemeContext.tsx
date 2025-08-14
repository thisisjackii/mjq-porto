import { createContext, useState, useEffect, ReactNode, useContext, useMemo, useCallback } from 'react';


interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}



const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (storedTheme === null && systemPrefersDark)) {
            setIsDarkMode(true);
        }
    }, []);


    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(prevMode => !prevMode);
    }, []);

    const value = useMemo(() => ({
        isDarkMode,
        toggleDarkMode,
    }), [isDarkMode, toggleDarkMode]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}