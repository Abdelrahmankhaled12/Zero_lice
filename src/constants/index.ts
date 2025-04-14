type HeaderLink = {
    title: string;
    router: string;
};

export const HEADER_LINKS: HeaderLink[] = [
    {
        title: "Home",
        router: "/"
    },
    {
        title: "About Us",
        router: "/about-us"
    },
    {
        title: "Pricing",
        router: "/pricing"
    },
    {
        title: "FAQs",
        router: "/faqs"
    },
    {
        title: "Contact Us",
        router: "/contact-us"
    },
];


/**
 * Interface for FAQ question items
 */
interface FAQQuestion {
    question: string;
    answer: string;
}

/**
 * Interface for FAQ sections
 */
interface FAQSection {
    title: string;
    questions: FAQQuestion[];
}

/**
 * FAQ sections data
 * Moved outside component for better separation of concerns
 */
export const FAQ_SECTIONS: FAQSection[] = [
    {
        title: "General Lice Information",
        questions: [
            {
                question: "What are head lice?",
                answer: "Head lice are tiny parasitic insects that live on the scalp, feed on blood, and cause intense itching. They commonly affect children aged 3-12."
            },
            {
                question: "Can lice jump or fly?",
                answer: "No, lice crawl only. They spread through direct head-to-head contact or sharing personal items (combs, hats, headphones)."
            },
            {
                question: "How long can lice survive off the scalp?",
                answer: "Lice survive 1-2 days off the scalp. Nits (eggs) can live up to 10 days but won't hatch at room temperature."
            }
        ]
    },
    {
        title: "Appointments & Services",
        questions: [
            {
                question: "How do I book an appointment?",
                answer: "Book online via our 'Schedule Now' button, call our clinic, or message us on WhatsApp for same-day emergencies."
            },
            {
                question: "Do you offer home visits?",
                answer: "Yes! Home inspections and treatments are available in Cairo/Giza for an additional fee. Select this option when booking."
            },
            {
                question: "What's your cancellation policy?",
                answer: "You may cancel/reschedule up to 24 hours before your appointment without charges."
            }
        ]
    },
    {
        title: "Treatment Process",
        questions: [
            {
                question: "How many sessions are needed?",
                answer: "Most cases require 1 in-clinic session (60-90 mins) + 1 follow-up check after 7 days."
            },
            {
                question: "Is the treatment painful?",
                answer: "No! We use FDA-approved, non-toxic solutions and special combs. Some patients report mild tingling."
            },
            {
                question: "Can I treat lice with home remedies?",
                answer: "We discourage DIY methods (mayo, vinegar, etc.) as they're often ineffective and delay proper treatment."
            }
        ]
    },
    {
        title: "Products & Prevention",
        questions: [
            {
                question: "Do you sell lice prevention products?",
                answer: "Yes! Our clinic shop offers medical-grade combs, tea tree oil shampoos, and protective sprays."
            },
            {
                question: "How often should I check for lice?",
                answer: "Weekly checks are ideal if there's an outbreak at school. Use a fine-tooth comb under bright light."
            },
            {
                question: "How do I disinfect my home after treatment?",
                answer: "Wash bedding in hot water (60°C+), vacuum furniture, and seal non-washable items in bags for 2 weeks."
            }
        ]
    },
    {
        title: "Safety & Special Cases",
        questions: [
            {
                question: "Is treatment safe for pregnant women?",
                answer: "Yes! We use natural, chemical-free options for pregnant patients and infants 6 months+."
            },
            {
                question: "Can lice spread in swimming pools?",
                answer: "Extremely unlikely. Lice grip tightly to hair and don't survive underwater for long."
            },
            {
                question: "My child has eczema. Is treatment safe?",
                answer: "Absolutely. We customize treatments for sensitive skin conditions – inform your technician beforehand."
            }
        ]
    }
];