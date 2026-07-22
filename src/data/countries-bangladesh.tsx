import {
    Clock, CreditCard, Calendar, Plane, Users, FileText, Building, Camera,
    MapPin, Utensils, Landmark, DollarSign, Shield, GraduationCap, Globe,
    Leaf, Anchor, Mountain, Sun, Briefcase, Lightbulb
} from "lucide-react";
import React from "react";

export interface DocumentCategory {
    category: string;
    icon?: React.ReactNode;
    documents: string[];
}

export interface BangladeshCountryData {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    coverImage: string;
    quickFacts: {
        icon: React.ReactNode;
        label: string;
        value: string;
    }[];
    documentCategories: DocumentCategory[];
    whyChoose: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
    destinations: {
        name: string;
        highlights: string;
        image?: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    importantNotes?: string[];
    whatsappNumbers?: string[];
}

export const bangladeshCountries: BangladeshCountryData[] = [
    {
        slug: "thailand",
        name: "Thailand",
        tagline: "The Land of Smiles",
        description: "From pristine beaches to golden temples, bustling night markets to peaceful mountain villages – Thailand offers unforgettable experiences for every traveler. Apply for your Thailand E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/thailand.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "5-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "5,500 BDT" },
            { icon: <DollarSign size={20} />, label: "Fee (Multiple Entry)", value: "27,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Double Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "No objection certificate (NOC)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Personal or Company bank statement for the last 06 months",
                    "Renewal trade license copy with notary public (english translated)",
                    "Visiting card",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Company letter head pad",
                    "Personal or company bank solvency certificate",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Govt Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "GO (Government order) for official passport",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Company letter head pad",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "ID card (Student) one photocopy both sides",
                    "Leave letter from school or college original copy",
                    "Parents bank statement (Last 06 months) & solvency certificate (Minimum balance BDT 70,000 for each applicant)",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Non-student Child",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Birth certificate",
                    "Parents bank statement (Last 06 months) & solvency certificate (Minimum balance BDT 70,000 for each applicant)",
                ],
            },
            {
                category: "Housewife",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Retirement document (Retired Person) one photo copy",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Unemployed",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Tropical Paradise", description: "World-famous beaches, crystal-clear waters, and stunning islands await you" },
            { icon: <Utensils size={32} />, title: "Food Heaven", description: "Delicious street food, world-class restaurants, and authentic Thai cuisine" },
            { icon: <Landmark size={32} />, title: "Rich Culture", description: "Ancient temples, traditional festivals, and warm Thai hospitality" },
            { icon: <DollarSign size={32} />, title: "Great Value", description: "Affordable luxury, shopping paradise, and excellent value for money" },
        ],
        destinations: [
            { name: "Bangkok", highlights: "Grand Palace, Wat Pho, Floating Markets, Chatuchak Weekend Market", image: "/assets/destinations/bangkok.webp" },
            { name: "Phuket", highlights: "Patong Beach, Phi Phi Islands, Big Buddha, Old Phuket Town", image: "/assets/destinations/phuket.webp" },
            { name: "Chiang Mai", highlights: "Doi Suthep Temple, Night Bazaar, Elephant Sanctuary, Old City", image: "/assets/destinations/chiang-mai.webp" },
            { name: "Krabi", highlights: "Railay Beach, Tiger Cave Temple, Four Islands Tour, Emerald Pool", image: "/assets/destinations/krabi.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 5-10 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "malaysia",
        name: "Malaysia",
        tagline: "Truly Asia",
        description: "Experience the ultimate Asian destination – from Kuala Lumpur's futuristic skyline to pristine tropical islands, lush rainforests, and multicultural harmony. Apply for your Malaysia E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/malaysia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "3-5 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "4,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "180 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Multiple Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "No objection certificate (NOC)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Renewal trade license copy with notary public (english translated)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Company letter head pad",
                    "Personal or company bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Govt Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "GO (Government order) for official passport",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Company letter head pad",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Student",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "ID card (Student) one photocopy both sides",
                    "NOC (Student) original copy",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Non-student Child",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Birth certificate",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Housewife",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Retirement document (Retired Person) one photo copy",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Unemployed",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Modern Cities", description: "Iconic Petronas Twin Towers, world-class shopping malls, vibrant street life" },
            { icon: <Utensils size={32} />, title: "Food Paradise", description: "Nasi lemak, satay, roti canai – an extraordinary culinary fusion" },
            { icon: <Sun size={32} />, title: "Stunning Islands", description: "Langkawi, Penang, Perhentian Islands with pristine tropical beaches" },
            { icon: <Leaf size={32} />, title: "Nature & Wildlife", description: "Ancient rainforests, Cameron Highlands tea plantations, and rich biodiversity" },
        ],
        destinations: [
            { name: "Kuala Lumpur", highlights: "Petronas Towers, Batu Caves, Chinatown, Shopping", image: "/assets/destinations/kuala-lumpur.webp" },
            { name: "Penang", highlights: "George Town UNESCO Site, Street Food, Beaches, Culture", image: "/assets/destinations/penang.webp" },
            { name: "Langkawi", highlights: "Island Paradise, Cable Car, Beaches, Duty-Free Shopping", image: "/assets/destinations/langkawi.webp" },
            { name: "Cameron Highlands", highlights: "Tea Plantations, Cool Climate, Strawberry Farms, Nature", image: "/assets/destinations/cameron.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 3-5 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "singapore",
        name: "Singapore",
        tagline: "The Lion City",
        description: "Experience the futuristic cityscape, world-class attractions, lush gardens, and rich cultural heritage of Singapore. Apply for your Singapore Visa with LOI with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/singapore.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "8-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "6,000 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Multiple Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "No objection certificate (NOC)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Visiting Card",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Personal or Company bank statement for the last 06 months",
                    "Renewal trade license copy with notary public (english translated)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Company letter head pad",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or company bank solvency certificate",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Visiting Card",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Retirement document (Retired Person) one photo copy",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Visiting card",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Company letter head pad",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Visiting card",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Modern Marvels", description: "Marina Bay Sands, Gardens by the Bay, Jewel Changi, futuristic skyline" },
            { icon: <Globe size={32} />, title: "Global Hub", description: "Premier business and tourism destination with world-class safety and infrastructure" },
            { icon: <Utensils size={32} />, title: "Culinary Hotspot", description: "Michelin-starred hawker stalls, multicultural flavors, international dining" },
            { icon: <Shield size={32} />, title: "Safe & Seamless", description: "Consistently ranked among the world's safest and cleanest travel destinations" },
        ],
        destinations: [
            { name: "Marina Bay", highlights: "Marina Bay Sands, Gardens by the Bay, Merlion Park", image: "/assets/destinations/marina-bay.webp" },
            { name: "Sentosa Island", highlights: "Universal Studios, Beaches, Adventure Cove Waterpark", image: "/assets/destinations/sentosa.webp" },
            { name: "Cultural Districts", highlights: "Chinatown, Little India, Kampong Glam (Arab Street)", image: "/assets/destinations/cultural-districts.webp" },
            { name: "Orchard Road", highlights: "World-Class Shopping Malls, Luxury Brands, Dining", image: "/assets/destinations/shopping.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Singapore Visa with LOI — receive approval in 8-10 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
];
