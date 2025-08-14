import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function DarkToggle() {

    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <button
            type="button"
            className={`flex items-center w-[52px] h-[30px] p-1 rounded-full cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            <motion.div
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDarkMode ? 'moon' : 'sun'}
                        initial={{ x: isDarkMode ? 20 : -20, opacity: 0, rotate: 90 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: isDarkMode ? -20 : 20, opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.25 }}
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </button>
    );
}