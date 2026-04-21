export interface PartnerInstitution {
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

export const partnerInstitutions: PartnerInstitution[] = [
    {
        id: "um",
        name: "University Malaya",
        shortName: "UM",
        domain: "um.edu.my",
        qsRanking: 65,
        description: "Malaysia's premier and oldest university, renowned for its academic excellence, cutting-edge research, and world-class faculty.",
        history: "Founded in 1905 as the King Edward VII College of Medicine in Singapore before merging with Raffles College in 1949 and establishing its Kuala Lumpur campus in 1959.",
        intakes: ["February", "September"],
        programs: ["Medicine", "Engineering", "Business", "Law", "Computer Science", "Arts & humanities"]
    },
    {
        id: "utm",
        name: "University Technology Malaysia",
        shortName: "UTM",
        domain: "utm.my",
        qsRanking: 188,
        description: "A leading innovation and research-intensive university specializing in engineering, science, and technology.",
        history: "Traces its roots back to a technical school in 1904. It achieved full university status in 1975, shaping Malaysia's technological landscape.",
        intakes: ["February", "September"],
        programs: ["Engineering", "Computing", "Geoinformatics", "Architecture", "Science"]
    },
    {
        id: "taylors",
        name: "Taylor's University",
        shortName: "Taylor's",
        domain: "taylors.edu.my",
        qsRanking: 284,
        description: "Malaysia's number one private university, highly celebrated for its hospitality, business, and architecture programs.",
        history: "Established in 1969 as a college, it has rapidly grown to become a full-fledged global university with an iconic mega-campus built around a scenic lake.",
        intakes: ["January", "March", "August"],
        programs: ["Hospitality", "Business", "Culinary Arts", "Law", "Architecture", "Medicine"]
    },
    {
        id: "sunway",
        name: "Sunway University",
        shortName: "Sunway",
        domain: "sunway.edu.my",
        qsRanking: 355,
        description: "A globally recognized, top-tier private university championing sustainable development and research excellence.",
        history: "Established in 1987 in Bandar Sunway, evolving into a world-class institution with deep partnerships with Lancaster University and Le Cordon Bleu.",
        intakes: ["January", "April", "August"],
        programs: ["Business", "Computer Science", "Actuarial Science", "Psychology", "Culinary Arts"]
    },
    {
        id: "xmum",
        name: "Xiamen University Malaysia",
        shortName: "XMUM",
        domain: "xmu.edu.my",
        qsRanking: 392,
        description: "The first overseas campus of a premier Chinese university, offering a holistic educational experience with top-tier research facilities.",
        history: "Established in 2016 as a historic milestone in Malaysia-China relations, bringing the 100-year legacy of Xiamen University to Southeast Asia.",
        intakes: ["February", "April", "September"],
        programs: ["Marine Science", "Traditional Chinese Medicine", "Business", "Engineering", "Arts"]
    },
    {
        id: "apu",
        name: "Asia Pacific University",
        shortName: "APU",
        domain: "apu.edu.my",
        qsRanking: 450,
        description: "Malaysia's premier technology university, widely recognized for its vibrant multicultural campus and exceptional graduate employability.",
        history: "Started as the Asia Pacific Institute of Information Technology (APIIT) in 1993, later achieving full university status and moving to a futuristic campus in Technology Park Malaysia.",
        intakes: ["February", "May", "September"],
        programs: ["Information Technology", "Cybersecurity", "Engineering", "Business", "Animation"]
    },
    {
        id: "iium",
        name: "International Islamic University",
        shortName: "IIUM",
        domain: "iium.edu.my",
        qsRanking: 450,
        description: "A unique international university that seamlessly integrates academic excellence with Islamic values and multi-disciplinary studies.",
        history: "Established in 1983 under the sponsorship of the Organization of Islamic Cooperation (OIC) and the Malaysian government.",
        intakes: ["February", "September"],
        programs: ["Law", "Economic", "Islamic Knowledge", "Engineering", "Medicine"]
    },
    {
        id: "uum",
        name: "University Utara Malaysia",
        shortName: "UUM",
        domain: "uum.edu.my",
        qsRanking: 490,
        description: "Known as the 'Eminent Management University', featuring a beautifully serene campus nestled in a tropical rainforest.",
        history: "Established in 1984 dedicated specifically to management education, rapidly becoming the leading institution for business and public administration.",
        intakes: ["February", "September"],
        programs: ["Business Management", "Accounting", "Public Administration", "International Affairs"]
    },
    {
        id: "segi",
        name: "SEGi University",
        shortName: "SEGi",
        domain: "segi.edu.my",
        qsRanking: 550,
        description: "One of the most comprehensive private higher education providers in Malaysia, renowned for its strong industry links and diverse courses.",
        history: "Founded in 1977 as Systematic College in the heart of Kuala Lumpur, eventually attaining full university status in 2012 with its flagship campus in Kota Damansara.",
        intakes: ["January", "May", "September"],
        programs: ["Dentistry", "Medicine", "Optometry", "Engineering", "Business", "Education"]
    },
    {
        id: "uniten",
        name: "University Tenaga National",
        shortName: "UNITEN",
        domain: "uniten.edu.my",
        qsRanking: 650,
        description: "A prominent energy university wholly owned by the national power company, TNB, producing elite engineering and tech professionals.",
        history: "Started in 1997 as an evolution of TNB's training institute (IKATAN) to supply high-quality engineering and business graduates to the nation.",
        intakes: ["February", "July", "September"],
        programs: ["Electrical Engineering", "Mechanical Engineering", "Computer Science", "Accounting"]
    },
    {
        id: "inti",
        name: "INTI International University",
        shortName: "INTI",
        domain: "newinti.edu.my",
        qsRanking: 650,
        description: "A forward-thinking private university with massive global alumni connections and excellent pathway programs to foreign universities.",
        history: "Founded in 1986, INTI has built a remarkable legacy spanning over three decades, fundamentally bringing international education pathways to Malaysia.",
        intakes: ["January", "May", "August"],
        programs: ["Business", "Computing", "Engineering", "Health Sciences", "Mass Communication"]
    },
    {
        id: "uthm",
        name: "University Tun Hussein Onn Malaysia",
        shortName: "UTHM",
        domain: "uthm.edu.my",
        qsRanking: 850,
        description: "A leading public technical university producing hands-on engineering technologists and industry-ready professionals.",
        history: "Established in 1993 as a polytechnic staff training center, scaling up to an institute, and awarded full university status in 2007.",
        intakes: ["February", "September"],
        programs: ["Civil Engineering", "Aeronautical Engineering", "Technopreneurship", "Computer Science"]
    },
    {
        id: "mmu",
        name: "Multimedia University",
        shortName: "MMU",
        domain: "mmu.edu.my",
        qsRanking: 850,
        description: "Malaysia's very first private university and the pioneer of IT and Multimedia education at the heart of the MSC Malaysia initiative.",
        history: "Established in 1996 by Telekom Malaysia to serve as the academic catalyst for the nation's Multimedia Super Corridor.",
        intakes: ["March", "July", "November"],
        programs: ["Creative Multimedia", "Information Technology", "Engineering", "Cinematic Arts"]
    },
    {
        id: "unikl",
        name: "University Kuala Lumpur",
        shortName: "UNIKL",
        domain: "unikl.edu.my",
        qsRanking: 1200,
        description: "A leading entrepreneurial technical university in Malaysia specializing in higher Technical and Vocational Education and Training (TVET).",
        history: "Formed in 2002 under Majlis Amanah Rakyat (MARA) by amalgamating several technical institutes to become a premium technical university.",
        intakes: ["January", "July", "September"],
        programs: ["Aviation", "Marine Engineering", "Chemical Engineering", "Information Technology"]
    },
    {
        id: "unisza",
        name: "University Sultan Zainal Abidin",
        shortName: "UNISZA",
        domain: "unisza.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A comprehensive public university in the East Coast of Malaysia blending modern disciplines with strong Islamic scholarly traditions.",
        history: "Matured from a religious college (KUSZA) established in 1980 into a full-fledged robust public university in 2006.",
        intakes: ["February", "September"],
        programs: ["Islamic Studies", "Medicine", "Agriculture", "Law", "Languages"]
    },
    {
        id: "unirazak",
        name: "University Tun Abdul Razak",
        shortName: "UNIRAZAK",
        domain: "unirazak.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A premier university renowned for its specialized programs in business, leadership, and public sector management.",
        history: "Founded in 1997 and named after Malaysia's second Prime Minister, acting as one of the earliest private universities in the country.",
        intakes: ["February", "June", "October"],
        programs: ["Business Administration", "Accounting", "Public Policy", "Taxation"]
    },
    {
        id: "unisel",
        name: "University Selangor",
        shortName: "UNISEL",
        domain: "unisel.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "The first state-owned private university in Malaysia providing affordable yet high quality tertiary education.",
        history: "Established in 1999 by the Selangor state government to create an intelligent and highly skilled society in the region.",
        intakes: ["March", "August", "December"],
        programs: ["Biotechnology", "Engineering", "Education", "Computing", "Business"]
    },
    {
        id: "cyberjaya",
        name: "University of Cyberjaya",
        shortName: "UoC",
        domain: "cyberjaya.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A top-tier healthcare and medical-focused university located in Malaysia's premier smart city.",
        history: "Established in 2005 originally as Cyberjaya University College of Medical Sciences, growing immensely to earn full university status.",
        intakes: ["February", "July", "September"],
        programs: ["Medicine", "Pharmacy", "Psychology", "Physiotherapy", "Occupational Safety"]
    },
    {
        id: "um-wales",
        name: "University Malaysia-Wales",
        shortName: "UMW",
        domain: "umw.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A unique partnership institution bringing together the prestige of University Malaya and the University of Wales.",
        history: "Founded as a historic collaboration to offer British-style education in the heart of Kuala Lumpur.",
        intakes: ["February", "July", "October"],
        programs: ["Business", "Computer Science", "Communication", "Psychology"]
    },
    {
        id: "unimy",
        name: "University Malaysia of Computer Science & Engineering",
        shortName: "UNIMY",
        domain: "unimy.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A boutique digital technology university aiming to build a top-tier tech talent pool for Malaysia's digital future.",
        history: "Incepted in 2012 by prestariang in collaboration with the University of Melbourne, solely dedicated to IT and Computer Science.",
        intakes: ["February", "July", "September"],
        programs: ["Cybersecurity", "Game Development", "Artificial Intelligence", "Coding"]
    },
    {
        id: "nilai",
        name: "Nilai University",
        shortName: "NU",
        domain: "nilai.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "Known for its sprawling, beautiful 105-acre campus and robust programs in nursing, engineering, and aircraft maintenance.",
        history: "Started as Nilai College in 1997, it was upgraded to full university status in 2012, boasting lush greenery and excellent student facilities.",
        intakes: ["January", "May", "October"],
        programs: ["Aircraft Maintenance", "Nursing", "Business", "Biotechnology"]
    },
    {
        id: "lincoln",
        name: "Lincoln University College",
        shortName: "LUC",
        domain: "lincoln.edu.my",
        qsRanking: "Top 350 Asia",
        description: "A dynamic private institution deeply focused on medical, nursing, and dental programs with a large international community.",
        history: "Established in 2002 as Lincoln College and swiftly grew to be recognized globally for its healthcare and medical curriculums.",
        intakes: ["January", "May", "September"],
        programs: ["Medicine", "Dentistry", "Nursing", "Pharmacy", "Business"]
    },
    {
        id: "cityu",
        name: "City University",
        shortName: "CityU",
        domain: "city.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A pragmatic, employability-focused private university situated right in the vicinity of Kuala Lumpur.",
        history: "Founded in 1984 as the Petaling Jaya Community College, transforming through decades of excellence into a full university.",
        intakes: ["January", "May", "September"],
        programs: ["Architecture", "Graphic Design", "Business", "Information Technology"]
    },
    {
        id: "lsbf",
        name: "London School of Business and Finance Malaysia",
        shortName: "LSBF",
        domain: "lsbf.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A prestigious branch of the renowned UK finance school bringing exceptional accounting and finance qualifications to Asia.",
        history: "Expanded into Malaysia to provide a globally recognized gold standard of education specifically tailored for aspiring finance professionals.",
        intakes: ["January", "April", "July", "October"],
        programs: ["ACCA", "Business", "Finance", "Accounting"]
    },
    {
        id: "yes",
        name: "Yes International College",
        shortName: "YES",
        domain: "yes.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "An agile private college offering accessible diploma and specialized training programs with a strong focus on practical skills.",
        history: "Founded to give alternative and direct pathways for students aiming to enter the workforce quickly with recognized certifications.",
        intakes: ["January", "April", "August"],
        programs: ["Business", "Information Technology", "Vocational Training"]
    },
    {
        id: "mont-royale",
        name: "Mont Royale International College",
        shortName: "MRIC",
        domain: "montroyale.edu.my",
        qsRanking: "Not Globally Ranked",
        description: "A boutique educational institution dedicated to providing elite UK-aligned programs in business and computing.",
        history: "Established with a clear vision to bridge local talents with global certifications like BTEC and diverse UK degree programs.",
        intakes: ["January", "May", "September"],
        programs: ["Business Management", "Computing", "Accounting"]
    },
    {
        id: "brighton",
        name: "Brighton International School",
        shortName: "Brighton",
        domain: "brighton.edu.my",
        qsRanking: "K-12 School",
        description: "An exceptional international school offering rigorous academic curriculum and empowering students from primary to pre-university levels.",
        history: "Established to provide world-class international education standard to both expats and local communities in Kuala Lumpur.",
        intakes: ["September", "January", "April"],
        programs: ["IGCSE", "A-Levels", "Primary Education", "Secondary Education"]
    }
];

