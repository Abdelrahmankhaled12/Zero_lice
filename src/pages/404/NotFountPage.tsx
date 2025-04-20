import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Animation, Effect } from '../../components';
import './style.scss';

/**
 * NotFoundPage Component
 * 
 * Displays a 404 error page with navigation options when a route doesn't exist.
 * Includes animation effects and proper accessibility features.
 * 
 * @returns {React.ReactElement} - The rendered 404 page component
 */

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const [animationOff, setAnimationOff] = useState(true);

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);

        // Disable animation after delay
        const animationTimer = setTimeout(() => {
            setAnimationOff(false);
        }, 3000);

        // Clean up timer on unmount
        return () => clearTimeout(animationTimer);
    }, []);

    if (animationOff) {
        return <Animation />;
    }

    /**
     * Handles navigation to the home page
     */
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Effect>
            <main className={"notFoundPage "} aria-labelledby="not-found-heading">
                <div className={"content"}>
                    <div className={"errorCode"}>404</div>

                    <div className={"errorContent "}>
                        <h1 id="not-found-heading">
                            Nothing to see here!
                        </h1>

                        <p>
                            The page you're looking for may have been moved or no longer exists.
                            Return to our homepage or try searching for what you need.
                        </p>

                        <button
                            onClick={handleGoHome}
                            aria-label="Return to home page"
                        >
                            Home Page
                        </button>
                    </div>
                </div>
            </main>
        </Effect>
    );
};

export default NotFoundPage;