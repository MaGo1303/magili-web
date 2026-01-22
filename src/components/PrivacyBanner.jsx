'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('magili-consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('magili-consent', 'true');
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full z-50 p-4"
                >
                    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-gray-600">
                            <span className="text-black font-semibold">We value your privacy.</span>
                            <br />
                            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                            <br />
                            <a href="/privacy" className="underline hover:text-black transition-colors">Read our Privacy Policy</a>.
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={accept}
                                className="px-6 py-2 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
