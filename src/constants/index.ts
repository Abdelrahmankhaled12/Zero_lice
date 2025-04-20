import {
    faEnvelope,
    faLocationDot,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import image from "../assets/table.jpg"


export const CONTACT_NUMBER = "05 381 0797"
export const CONTACT_EMAIL = "contact@zerolice.ae"
export const CONTACT_FACEBOOK = "https://www.facebook.com/share/16CA9e4bJo/?mibextid=wwXIfr"
export const CONTACT_INSTA = "https://www.instagram.com/zerolice.ae?igsh=N2Zzc29zZG1mMWpt&utm_source=qr"
export const CONTACT_WHATSS = "https://wa.me/201070437868"



// =======================================================================
// =======================================================================


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
        title: "Our Process",
        router: "/our-process"
    },
    {
        title: "Pricing",
        router: "/pricing"
    },
    {
        title: "About Lice",
        router: "/about-lice"
    },
    {
        title: "About Us",
        router: "/about-us"
    },
    {
        title: "Contact Us",
        router: "/contact-us"
    },
];


// =======================================================================
// =======================================================================


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
                question: "The Truth About Head Lice",
                answer: "<p> Head lice are tiny parasitic insects that survive by feeding on human blood. Unlike fleas or ticks, they cannot jump or fly—instead, they crawl quickly through hair using their six hook-like claws. These pests are barely visible (about the size of a sesame seed) and can appear white, tan, or brown, often matching their host’s hair color. </p>"
            },
            {
                question: "How Lice Spread from Person to Person",
                answer: `
                    <p> Contrary to myths, lice almost never spread through hats, furniture, or pets. The primary transmission method is: </p>
                    <ul>
                        <li> <span> * </span> Direct head-to-head contact (hugging, group selfies, sleepovers).</li>
                        <li> <span> * </span> Rarely via shared hair tools/headgear (less than 2% of cases). </li>
                        <li> <span> * </span> Lice detect hosts using antennae that sense body heat and odors. Once attached to a person, they remain loyal to that blood type.</li>
                    </ul>
                    <h4> Pro Tip: If you find lice, notify recent close contacts (sports teammates, classmates, family) to help stop the cycle. </h4>
                `
            },
            {
                question: "The Rapid Reproduction of Lice",
                answer: `
                <p> A single fertilized female louse can cause a major infestation because: </p>
                <ul>
                    <li> <span>* </span> She lays 5–10 eggs per day, cementing them to hair shafts near the scalp.</li>
                    <li> <span> * </span> Eggs hatch in 7–10 days, releasing nymphs (immature lice). </li>
                    <li> <span> * </span> Nymphs mature in 9–12 days, then reproduce.</li>
                    <li> <span> * </span> One female’s 30-day lifespan can produce 150–300 eggs.</li>
                </ul>
                <img src=${image} alt="Zero Lice Logo" />
            `
            }
        ]
    },
    {
        title: "Health Risks",
        questions: [
            {
                question: "Do Lice Carry Diseases?",
                answer: `
                <p> While lice themselves aren’t disease vectors, complications include: </p>
                <ul>
                    <li> <span>* </span>Intense itching leading to skin infections from scratching.</li>
                    <li> <span> * </span> Sleep loss from nighttime discomfort. </li>
                    <li> <span> * </span>Social stigma and unnecessary school/work absences.</li>
                </ul>
            `
            },
            {
                question: "Myths vs. Facts",
                answer: `
                <p> ❌ Pets spread lice → FALSE (Human lice only survive on humans) </p>
                <p>❌ Lice prefer dirty hair → FALSE (They actually cling better to clean hair)</p>
                <p> ❌ Black people can’t get lice → FALSE (All hair types are susceptible, though texture affects grip)  </p>
                <p> ✅ Lice can survive under water → TRUE (For up to eight hours. they hold tightly to the hair, and chlorine doesn’t kill them. avoid sharing towels or items after swimming.)</p>
            `
            },
            {
                question: "Recognizing an Infestation",
                answer: `
                <p> Key signs often appear 2–6 weeks after exposure: </p>
                <ul>
                    <li><span>* </span>Tickling sensation or itching (especially behind ears/neck).</li>
                    <li><span>* </span>Small red bumps on the scalp.</li>
                    <li><span>* </span>Visible nits (tiny white/yellow ovals glued to hair).</li>
                    <li><span>* </span>Adult lice scurrying near the scalp when hair is parted.</li>
                </ul>
            `
            },
            {
                question: "Why Itching Worsens Over Time?",
                answer: `<p> Lice saliva causes an allergic reaction. Initial infestations may go unnoticed, but repeat exposures trigger faster immune responses.</p>`
            },
            {
                question: "Will Lice Die Out Naturally?",
                answer: `<p> Don’t count on it. Unless all lice are male or infertile females (unlikely), populations explode without treatment. Eggs can survive initial home remedies, leading to reinfestation. Complete Elimination Through Verified Techniques.</p>`
            },
        ]
    },
    {
        title: "Effective Ways to Prevent Head Lice",
        questions: [
            {
                question: "1. Avoid Head-to-Head Contact",
                answer: `
                <p>Since lice spread mainly through direct hair contact, teach children (and adults) to:</p>
                <ul>
                    <li><span>* </span>Avoid touching heads during play, sports, or group photos.</li>
                    <li><span>* </span>Not share helmets, headphones, or hair accessories.</li>
                    <li><span>* </span>Be cautious during sleepovers, braiding, or salon visits.</li>
                </ul>
            `
            },
            {
                question: "2. Keep Long Hair Tied Up",
                answer: `
                <p>Loose hair is easier for lice to latch onto. Encourage:</p>
                <ul>
                    <li><span>* </span>Braids, buns, or ponytails for school and activities.</li>
                    <li><span>* </span>Not share helmets, headphones, or hair accessories.</li>
                    <li><span>* </span>Hairspray or gel (lice prefer clean, natural hair oils).</li>
                </ul>
            `
            },
            {
                question: "3. Regularly Check for Lice",
                answer: `
                <p>Early detection prevents large infestations:</p>
                <ul>
                    <li><span>* </span>Use a fine-tooth lice comb weekly, especially behind ears and at the nape.</li>
                    <li><span>* </span>Look for nits (tiny white/yellow eggs glued to hair) and live bugs.</li>
                    <li><span>* </span>Check after camps, sleepovers, or outbreaks at school.</li>
                </ul>
            `
            },
            {
                question: "4. Don’t Share Personal Hair Items",
                answer: `
                <p>Lice can briefly survive on objects, so:</p>
                <ul>
                    <li><span>* </span>Avoid sharing brushes, combs, hats, scarves, or hair ties.</li>
                    <li><span>* </span>Disinfect hair tools with hot water (>130°F) or lice-killing sprays.</li>
                </ul>
            `
            },
            {
                question: "5. Use Preventative Products (Optional)",
                answer: `
                <p>Natural repellents may help deter lice:</p>
                <ul>
                    <li><span>* </span>Tea tree, lavender, eucalyptus or neem oil sprays (mix with water in a spray bottle).</li>
                    <li><span>* </span>Silicone-based hair serums (lice struggle to grip coated hair).</li>
                    <li><span>* </span>Over-the-counter preventative shampoos (use sparingly to avoid resistance).</li>
                </ul>
            `
            },
            {
                question: "6. Launder High-Risk Items",
                answer: `
                <p>If exposed to lice:</p>
                <ul>
                    <li><span>* </span>Wash bedding, hats, and stuffed animals in hot water + dry on high heat.</li>
                    <li><span>* </span>Seal unwashable items (like helmets) in a plastic bag for 48+ hours (lice die without a host).</li>
                </ul>
            `
            },
            {
                question: "7. Educate Kids & Schools",
                answer: `
                <p>If exposed to lice:</p>
                <ul>
                    <li><span>* </span>Teach children not to share hair items or lean heads together.</li>
                    <li><span>* </span>Schools should enforce "no hat sharing" policies and notify parents of outbreaks.</li>
                </ul>
            `
            },
            {
                question: "8. Stay Calm & Act Fast if Exposed",
                answer: `
                <p>If someone nearby has lice:</p>
                <ul>
                    <li><span>* </span>Check all household members immediately.</li>
                    <li><span>* </span>Use a lice comb daily for 2 weeks to catch early infestations.</li>
                    <li><span>* </span>Avoid panic—lice are annoying but not dangerous.</li>
                </ul>
            `
            },
        ]
    },
];



// =======================================================================
// =======================================================================

/**
 * Interface for contact information items
 */
interface ContactInfo {
    icon: typeof faLocationDot;
    text: string;
    type: 'address' | 'phone' | 'email';
}

export const CONTACT_INFO: ContactInfo[] = [
    {
        icon: faPhoneVolume,
        text: CONTACT_NUMBER,
        type: 'phone'
    },
    {
        icon: faEnvelope,
        text: CONTACT_EMAIL,
        type: 'email'
    }
];

// =======================================================================
// =======================================================================

/**
 * Interface for navigation links
 */
interface NavLink {
    text: string;
    path: string;
}


/**
 * Navigation links data
 */
export const NAV_LINKS: NavLink[] = [
    { text: "Home", path: "/" },
    { text: "Our Process", path: "/our-process" },
    { text: "Pricing", path: "/pricing" },
    { text: "About Lice", path: "/about-lice" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact us", path: "/contact-us" }
];


/**
* Important links data
*/
export const IMPORTANT_LINKS: NavLink[] = [
    { text: "Privacy Policy", path: "/privacy" },
    { text: "Terms and Conditions", path: "/terms" }
];

// =======================================================================
// =======================================================================


/**
 * Interface for social media links
 */
interface SocialLink {
    icon: typeof faFacebookF;
    url: string;
    name: string;
}

/**
 * Social media links data
 */
export const SOCIAL_LINKS: SocialLink[] = [
    {
        icon: faFacebookF,
        url: CONTACT_FACEBOOK,
        name: "Facebook"
    },
    {
        icon: faInstagram,
        url: CONTACT_INSTA,
        name: "Instagram"
    },
    {
        icon: faWhatsapp,
        url: CONTACT_WHATSS,
        name: "Twitter"
    },
];