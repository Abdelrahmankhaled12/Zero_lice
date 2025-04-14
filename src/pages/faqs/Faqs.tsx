import {
    Animation,
    ContentWrapper,
    Effect,
    Emergency,
    Footer,
    Header
} from '../../components'; 
import BannerFaqs from './bannerFaqs/BannerFaqs';
import './style.scss'; 
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { FAQ_SECTIONS } from '../../constants';

/**
 * FAQs Page Component
 * 
 * Displays frequently asked questions in an organized accordion format
 * with animation effects and proper accessibility features.
 */

const Faqs: React.FC = () => {
    const [animationOff, setAnimationOff] = useState(true);
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

    /**
     * Handles accordion panel expansion
     * @param panel - The panel ID to expand
     */
    const handleAccordionChange = (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedPanel(isExpanded ? panel : false);
        };

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
        // Disable animation after delay
        const timer = setTimeout(() => {
            setAnimationOff(false);
        }, 1200);
        // Clean up timer on unmount
        return () => clearTimeout(timer);
    }, []);

    if (animationOff) {
        return <Animation />;
    }

    return (
        <Effect>
            <Header headerHome={true} />
            <BannerFaqs />
            <main className="faqsContainer">
                <ContentWrapper>
                    <div className="faqsContent">
                        {FAQ_SECTIONS.map((section, sectionIndex) => (
                            <section
                                key={sectionIndex}
                                className="faqSection"
                                aria-labelledby={`section-${sectionIndex}-heading`}
                            >
                                <h2
                                    id={`section-${sectionIndex}-heading`}
                                >
                                    {section.title}
                                </h2>

                                <div>
                                    {section.questions.map((question, questionIndex) => {
                                        const panelId = `panel-${sectionIndex}-${questionIndex}`;

                                        return (
                                            <Accordion
                                                key={panelId}
                                                expanded={expandedPanel === panelId}
                                                onChange={handleAccordionChange(panelId)}
                                                className="accordion"
                                                TransitionProps={{ unmountOnExit: true }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon aria-hidden="false" />}
                                                    aria-controls={`${panelId}-content`}
                                                    id={`${panelId}-header`}
                                                >
                                                    <Typography
                                                        component="h3"
                                                        className="questionTitle"
                                                    >
                                                        {question.question}
                                                    </Typography>
                                                </AccordionSummary>

                                                <AccordionDetails>
                                                    <Typography
                                                        component="div"
                                                        className="questionAnswer"
                                                    >
                                                        {question.answer}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>
                </ContentWrapper>
            </main>

            <Emergency />
            <Footer />
        </Effect>
    );
};

export default Faqs;