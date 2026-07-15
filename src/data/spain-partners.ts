export interface SpainPartnerInstitution {
    domain?: string;
    id: string;
    name: string;
    shortName: string;
    qsRanking: string | number;
    description: string;
    history: string;
    intakes: string[];
    programs: string[];
    logo?: string;
}

export const spainUniversityPartners: SpainPartnerInstitution[] = [
    {
        id: "c3s",
        name: "C3S Business School",
        shortName: "C3S",
        domain: "c3s.es",
        qsRanking: "Accredited Business School",
        description: "Located in the vibrant heart of Barcelona, C3S Business School provides students with a premium pathway to internationally recognized British degrees in Spain. The school focuses on practical case studies and modern industry skills, welcoming a highly diverse student body from over 50 countries.",
        history: "Castelldefels School of Social Sciences (C3S) was established in Barcelona to deliver world-class, globally accredited business programs. Offering standard academic tracks in partnership with prestigious UK universities and awarding bodies (like OTHM), C3S provides a multicultural environment that fosters entrepreneurial and executive talent.",
        intakes: ["February", "May", "October"],
        programs: [
            "Business Administration",
            "Tourism & Hospitality Management",
            "IT & Business Computing",
            "Global MBA",
            "Doctor of Business Administration (DBA)"
        ]
    }
];
