import React, { useState } from 'react';
import NavBar from './Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('Projects');

    // Determine page to render passed on the value of currentPage
    const renderPage = () => {
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className="body-container">
            < NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
