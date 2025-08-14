import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <ThemeProvider> {/* Wrap EVERYTHING in the ThemeProvider */}
            <Layout>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={router.route}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    );
}