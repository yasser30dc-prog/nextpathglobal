export interface UKPartnerInstitution {
    id: string;
    name: string;
    shortName: string;
    domain: string;
    location: string;
    qsRanking: string | number;
    established: string;
    description: string;
    history: string;
    intakes: string[];
    programs: string[];
    tuitionRange: string;
    campusLife: string;
    notableFor: string[];
    attractions: string[];
}

export const ukUniversityPartners: UKPartnerInstitution[] = [
    {
        id: "oxford",
        name: "University of Oxford",
        shortName: "Oxford",
        domain: "ox.ac.uk",
        location: "Oxford, England",
        qsRanking: 3,
        established: "1096",
        description: "The oldest university in the English-speaking world and one of the most prestigious globally. Oxford is a collegiate research university known for its tutorial-based teaching, groundbreaking research, and illustrious alumni including 28 UK Prime Ministers and 72 Nobel laureates.",
        history: "Teaching existed at Oxford in some form from 1096 and developed rapidly from 1167 when Henry II banned English students from attending the University of Paris. The University has produced some of the world's most influential thinkers, leaders, and innovators over its 900+ year history.",
        intakes: ["October"],
        programs: ["Medicine", "Law", "Philosophy, Politics & Economics (PPE)", "Computer Science", "Engineering", "Chemistry", "Mathematics", "History", "Psychology"],
        tuitionRange: "£26,770 – £39,010 per year",
        campusLife: "Oxford's 44 colleges offer a unique collegiate system where students live, dine, and study within their college. The city is filled with historic libraries, museums, and vibrant social clubs.",
        notableFor: ["Bodleian Library", "Tutorial System", "Oxford Union", "Research Excellence"],
        attractions: ["Bodleian Library", "Radcliffe Camera", "Christ Church College", "Ashmolean Museum", "Oxford Botanic Garden"]
    },
    {
        id: "cambridge",
        name: "University of Cambridge",
        shortName: "Cambridge",
        domain: "cam.ac.uk",
        location: "Cambridge, England",
        qsRanking: 2,
        established: "1209",
        description: "One of the world's most renowned universities and a global leader in scientific research. Cambridge has educated over 120 Nobel laureates and is home to world-leading research institutes. The university's collegiate system and Cam River punting culture are iconic.",
        history: "Founded in 1209 by scholars departing from Oxford following a dispute with local townspeople. Cambridge has grown to become a leading hub for scientific discovery, being the birthplace of concepts like the electron, neutron, and the structure of DNA.",
        intakes: ["October"],
        programs: ["Natural Sciences", "Engineering", "Mathematics", "Computer Science", "Medicine", "Law", "Economics", "Architecture", "English Literature"],
        tuitionRange: "£24,507 – £58,038 per year",
        campusLife: "Cambridge is defined by its 31 independent colleges, stunning medieval architecture, the River Cam, and a vibrant culture of academic clubs, May Balls, and the iconic Boat Race rivalry with Oxford.",
        notableFor: ["31 Colleges", "120+ Nobel Laureates", "DNA Discovery", "Isaac Newton's Apple Tree"],
        attractions: ["King's College Chapel", "River Cam Punting", "The Backs", "Fitzwilliam Museum", "Cambridge Botanic Garden"]
    },
    {
        id: "imperial",
        name: "Imperial College London",
        shortName: "Imperial",
        domain: "imperial.ac.uk",
        location: "London, England",
        qsRanking: 8,
        established: "1907",
        description: "A world-class science, engineering, medicine, and business university situated in the heart of London. Imperial consistently ranks in the global top 10 and is famous for its cutting-edge research and strong industry connections with leading global companies.",
        history: "Founded in 1907 through the merger of the Royal College of Science, Royal School of Mines, and City and Guilds College. Imperial has produced 15 Nobel laureates and is a founding member of the prestigious Russell Group.",
        intakes: ["October"],
        programs: ["Aeronautical Engineering", "Biomedical Engineering", "Computing", "Medicine", "Chemical Engineering", "Physics", "Mathematics", "Business (MBA)", "Civil Engineering"],
        tuitionRange: "£35,100 – £51,900 per year",
        campusLife: "Set in South Kensington near museums and Hyde Park, students enjoy world-class facilities, a thriving student union with 350+ clubs and societies, and the vast cultural and career opportunities of London.",
        notableFor: ["Science & Tech Focus", "Industry Partnerships", "London Location", "Russell Group Member"],
        attractions: ["South Kensington Museums", "Hyde Park", "Natural History Museum", "V&A Museum", "The Albert Hall"]
    },
    {
        id: "ucl",
        name: "University College London (UCL)",
        shortName: "UCL",
        domain: "ucl.ac.uk",
        location: "London, England",
        qsRanking: 9,
        established: "1826",
        description: "London's leading multidisciplinary university and one of the world's top research institutions. UCL was England's first university to admit students regardless of race, class, or religion. It's known for academic excellence, diversity, and its central London location.",
        history: "Founded in 1826 as London University, UCL was the first university in England to be established on an entirely secular basis and to admit women on equal terms. It pioneered modern medicine, linguistics, and social sciences.",
        intakes: ["September"],
        programs: ["Architecture", "Biomedical Sciences", "Computer Science", "Economics", "Engineering", "Law", "Medicine", "Psychology", "Urban Planning"],
        tuitionRange: "£22,000 – £37,200 per year",
        campusLife: "UCL's Bloomsbury campus sits in the heart of London, offering unparalleled access to cultural institutions, theatres, and career networks. The student community is among the most diverse in the UK.",
        notableFor: ["First London University", "Research Innovation", "Global Diversity", "NHS Teaching Hospitals"],
        attractions: ["British Museum (next door)", "Bloomsbury", "Covent Garden", "Regent's Park", "The British Library"]
    },
    {
        id: "manchester",
        name: "University of Manchester",
        shortName: "Manchester",
        domain: "manchester.ac.uk",
        location: "Manchester, England",
        qsRanking: 32,
        established: "1824",
        description: "A world-leading research university with a rich industrial heritage and 25 Nobel laureates. Manchester pioneered the Industrial Revolution and remains at the forefront of innovation in science, technology, and business, offering students an exceptional academic and social experience.",
        history: "Founded as Owens College in 1851, the University of Manchester was created from a merger in 2004. The city of Manchester has been the cradle of the Industrial Revolution, the suffragette movement, and modern computing through Alan Turing's work.",
        intakes: ["September"],
        programs: ["Computer Science", "Medicine", "Business & Management", "Engineering", "Economics", "Law", "Materials Science", "Pharmacy", "Social Sciences"],
        tuitionRange: "£22,000 – £34,500 per year",
        campusLife: "Manchester offers one of the UK's most vibrant student cities with a legendary music scene, football culture (Manchester City & United), affordable living, and a huge student population of 40,000+.",
        notableFor: ["25 Nobel Laureates", "Graphene Discovery", "Alan Turing Institute", "Vibrant Student City"],
        attractions: ["Manchester Museum", "Curry Mile", "The Printworks", "Old Trafford", "Northern Quarter"]
    },
    {
        id: "edinburgh",
        name: "University of Edinburgh",
        shortName: "Edinburgh",
        domain: "ed.ac.uk",
        location: "Edinburgh, Scotland",
        qsRanking: 27,
        established: "1583",
        description: "One of the oldest and most prestigious universities in the world, set in Scotland's stunning capital city. Edinburgh is a world leader in research, consistently ranked in the global top 30, and is famous for its vibrant culture, festivals, and breathtaking castle backdrop.",
        history: "Founded by the Town Council of Edinburgh in 1583, making it the sixth oldest university in the English-speaking world. Edinburgh has educated some of history's greatest minds including Charles Darwin, David Hume, Adam Smith, and J.K. Rowling.",
        intakes: ["September"],
        programs: ["Medicine", "Informatics", "Law", "Business", "Engineering", "Philosophy", "Linguistics", "Veterinary Medicine", "Architecture"],
        tuitionRange: "£22,800 – £34,800 per year",
        campusLife: "Edinburgh combines stunning historic architecture with a youthful, creative energy. Students enjoy the world-famous Edinburgh Fringe Festival, Arthur's Seat, the Royal Mile, and a city ranked as one of Europe's most liveable.",
        notableFor: ["Scottish Enlightenment Hub", "Charles Darwin Alumni", "World-class Informatics", "Festival City"],
        attractions: ["Edinburgh Castle", "Arthur's Seat", "Royal Mile", "Holyrood Palace", "Scottish National Museum"]
    },
    {
        id: "lse",
        name: "London School of Economics and Political Science (LSE)",
        shortName: "LSE",
        domain: "lse.ac.uk",
        location: "London, England",
        qsRanking: 45,
        established: "1895",
        description: "The world's leading social science university, recognized globally for economics, law, politics, and international relations. LSE alumni include 18 Nobel laureates, 37 heads of state, and leaders of the world's major financial and political institutions.",
        history: "Founded in 1895 by Fabian Society members including Beatrice and Sidney Webb, LSE was established to improve society through the study of economics and social sciences. Its alumni network is one of the most powerful and influential in the world.",
        intakes: ["September"],
        programs: ["Economics", "Law", "Political Science", "International Relations", "Finance", "Management", "Sociology", "Accounting", "Development Economics"],
        tuitionRange: "£21,312 – £30,408 per year",
        campusLife: "LSE's compact Holborn campus places students right at the heart of London's financial and governmental district, surrounded by the City, Inns of Court, and world-class cultural institutions.",
        notableFor: ["18 Nobel Laureates", "37 Heads of State Alumni", "Finance & Economics Hub", "Holborn Location"],
        attractions: ["City of London", "Lincoln's Inn Fields", "Covent Garden", "Tate Modern", "St Paul's Cathedral"]
    },
    {
        id: "kcl",
        name: "King's College London (KCL)",
        shortName: "King's College London",
        domain: "kcl.ac.uk",
        location: "London, England",
        qsRanking: 40,
        established: "1829",
        description: "One of England's oldest universities and a founding member of the University of London. KCL is a global leader in health, medicine, law, humanities, and social sciences, with campuses straddling the South Bank of the Thames offering spectacular London views.",
        history: "Founded in 1829 by King George IV and the Duke of Wellington, KCL has a long tradition of innovation. The university's scientists contributed to the discovery of the structure of DNA, and it pioneered the development of the NHS.",
        intakes: ["September"],
        programs: ["Medicine", "Dentistry", "Law", "Business", "Nursing", "War Studies", "Computer Science", "Psychology", "English Literature"],
        tuitionRange: "£22,800 – £38,000 per year",
        campusLife: "King's Strand and Guy's campuses sit along the Thames with views of St Paul's and the London Eye. Students enjoy the richness of London's culture, theatre, finance, and the iconic Waterloo area.",
        notableFor: ["Florence Nightingale School of Nursing", "DNA Structure Research", "Strand Campus Views", "Russell Group Member"],
        attractions: ["Southbank", "London Eye", "Tate Modern", "St Paul's Cathedral", "Borough Market"]
    },
    {
        id: "bristol",
        name: "University of Bristol",
        shortName: "Bristol",
        domain: "bristol.ac.uk",
        location: "Bristol, England",
        qsRanking: 54,
        established: "1909",
        description: "A consistently top-10 UK university known for its research excellence, beautiful Georgian campus, and exceptional graduate employability. Bristol is one of the most popular universities among UK students and a global leader in aeronautics, quantum science, and arts.",
        history: "Founded in 1909, Bristol grew rapidly through close ties with local industry and civic society. The city of Bristol, with its maritime history, Brunel's iconic bridge, and vibrant arts scene, provides a perfect backdrop for student life.",
        intakes: ["September"],
        programs: ["Aerospace Engineering", "Law", "Medical Sciences", "Computer Science", "Economics", "Architecture", "Chemistry", "Education", "Physics"],
        tuitionRange: "£22,770 – £32,000 per year",
        campusLife: "Bristol's Clifton campus is famous for its stunning Georgian architecture. The city has a thriving independent music scene, Banksy street art, excellent restaurant culture, and a strong sense of community among students.",
        notableFor: ["Clifton Suspension Bridge", "Banksy Hometown", "Top Employability Rates", "Aerospace Research"],
        attractions: ["Clifton Suspension Bridge", "Harbourside", "Cabot Tower", "Banksy Street Art", "Clifton Village"]
    },
    {
        id: "warwick",
        name: "University of Warwick",
        shortName: "Warwick",
        domain: "warwick.ac.uk",
        location: "Coventry, England",
        qsRanking: 67,
        established: "1965",
        description: "One of the UK's foremost research universities, Warwick has established an outstanding reputation in business, economics, computer science, and engineering. It's consistently ranked in the top 10 UK universities and maintains strong links with global industry and business.",
        history: "Founded in 1965, Warwick rapidly became one of the UK's leading universities, known for its business-minded approach and entrepreneurial ethos. Warwick Business School is among the best in Europe and the world.",
        intakes: ["October"],
        programs: ["Business", "Economics", "Computer Science", "Mathematics", "Engineering", "Law", "Psychology", "Film & TV Studies", "Philosophy"],
        tuitionRange: "£22,290 – £32,100 per year",
        campusLife: "Warwick's self-contained campus is a thriving community with arts centre, restaurants, sports facilities, and 100+ student societies. The Warwick Arts Centre is one of the largest arts complexes outside London.",
        notableFor: ["Warwick Business School", "Entrepreneurial Culture", "Warwick Arts Centre", "Top Graduate Salaries"],
        attractions: ["Warwick Castle", "Stratford-upon-Avon", "Coventry Cathedral", "Eden Place", "The Cotswolds"]
    },
    {
        id: "durham",
        name: "Durham University",
        shortName: "Durham",
        domain: "durham.ac.uk",
        location: "Durham, England",
        qsRanking: 78,
        established: "1832",
        description: "One of the UK's oldest and most prestigious universities, Durham is world-renowned for its stunning medieval setting, collegiate system, and strong traditions. It's consistently ranked among the top 5 UK universities for student satisfaction and academic excellence.",
        history: "Founded in 1832 by Act of Parliament, Durham is England's third oldest university. Its castle and cathedral – both UNESCO World Heritage Sites – form a spectacular backdrop to student life, creating a uniquely immersive academic environment.",
        intakes: ["October"],
        programs: ["Physics", "Chemistry", "Law", "Business", "Medicine", "Engineering", "History", "Computer Science", "Biosciences"],
        tuitionRange: "£20,250 – £28,000 per year",
        campusLife: "Durham's 17 colleges create a tight-knit community. Students enjoy a medieval city, punting on the Wear, rowing, and the famous Durham Miners' Gala. The compact city makes everything easily walkable.",
        notableFor: ["UNESCO World Heritage Setting", "17 Collegiate Houses", "High Student Satisfaction", "Oxford-style Traditions"],
        attractions: ["Durham Castle (UNESCO)", "Durham Cathedral (UNESCO)", "River Wear", "Market Place", "Beamish Museum"]
    },
    {
        id: "sheffield",
        name: "University of Sheffield",
        shortName: "Sheffield",
        domain: "sheffield.ac.uk",
        location: "Sheffield, England",
        qsRanking: 105,
        established: "1905",
        description: "A world top-100 Russell Group university with a vibrant student union voted the best in the UK for multiple years. Sheffield is renowned for its engineering excellence, medical research, and the greenest city campus in England.",
        history: "Founded in 1905, Sheffield has a proud industrial heritage linked to the city's famous steel manufacturing. It's home to the Advanced Manufacturing Research Centre (AMRC) partnered with Boeing, making it a global leader in advanced engineering.",
        intakes: ["September"],
        programs: ["Mechanical Engineering", "Medicine", "Computer Science", "Biomedical Science", "Law", "Architecture", "Music", "Materials Science", "Dentistry"],
        tuitionRange: "£20,790 – £29,700 per year",
        campusLife: "Sheffield boasts the UK's largest student union and a vibrant city with a thriving music scene, affordable living costs, the Peak District National Park on its doorstep, and famously friendly locals.",
        notableFor: ["Best Student Union (UK)", "Boeing AMRC Partnership", "Peak District Access", "Affordable Living"],
        attractions: ["Peak District National Park", "Kelham Island Museum", "Sheffield Winter Gardens", "Meadowhall", "Chatsworth House"]
    }
];
