export interface ChinaPartnerInstitution {
    domain?: string;
    id: string;
    name: string;
    shortName: string;
    location: string;
    qsRanking: string | number;
    description: string;
    history: string;
    intakes: string[];
    programs: string[];
    logo?: string;
}

export const chinaPartners: ChinaPartnerInstitution[] = [
    {
        id: "njtech",
        name: "Nanjing Tech University (南京工业大学)",
        shortName: "NanjingTech",
        domain: "njtech.edu.cn",
        location: "Nanjing, Jiangsu",
        qsRanking: "Top 700 World",
        description: "A comprehensive university deeply rooted in engineering and technology, famed for its cutting-edge research in chemical engineering and materials science.",
        history: "Originally established in 1902 as the Sanjiang Normal School, it has grown over a century into an innovative powerhouse officially formed via a merger in 2001.",
        intakes: ["September", "March"],
        programs: ["Chemical Engineering", "Materials Science", "Biotechnology", "Architecture"]
    },
    {
        id: "hdu",
        name: "Hangzhou Dianzi University (杭州电子科技大学)",
        shortName: "HDU",
        domain: "hdu.edu.cn",
        location: "Hangzhou, Zhejiang",
        qsRanking: "Top 1200 World",
        description: "A prestigious university specializing in electronic science and information technology, highly praised as a cradle for IT entrepreneurs.",
        history: "Founded in 1956, it evolved from an aviation school into one of the most vital electronic and tech universities in the wealthy Zhejiang province.",
        intakes: ["September", "March"],
        programs: ["Computer Science", "Electronic Engineering", "Information Security", "Accounting"]
    },
    {
        id: "sues",
        name: "Shanghai University of Engineering Science (上海工程技术大学)",
        shortName: "SUES",
        domain: "sues.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "A modern higher education institution integrating engineering, economics, and management, characterized by extensive industry-university partnerships.",
        history: "Established in 1978, SUES places exceptional emphasis on cultivating high-level applied engineering talents for modern industries.",
        intakes: ["September", "March"],
        programs: ["Automotive Engineering", "Urban Rail Transit", "Fashion Design", "Business Management"]
    },
    {
        id: "sspu",
        name: "Shanghai Polytechnic University (上海第二工业大学)",
        shortName: "SSPU",
        domain: "sspu.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "A dynamic university famous for its applied sciences and polytechnic focus, closely allied with Shanghai's elite manufacturing and tech sectors.",
        history: "Established in 1960, it was originally tasked with training technical professionals during China's rapid industrialization era.",
        intakes: ["September", "March"],
        programs: ["Mechanical Engineering", "Environmental Science", "Software Engineering", "Logistics"]
    },
    {
        id: "cauc",
        name: "Civil Aviation University of China (中国民航大学)",
        shortName: "CAUC",
        domain: "cauc.edu.cn",
        location: "Tianjin",
        qsRanking: "Not Globally Ranked",
        description: "The premier institution directly under the Civil Aviation Administration of China (CAAC), acting as the central hub for aeronautical training.",
        history: "Founded in 1951 to exclusively support the modern civil aviation industry, producing over two-thirds of China's aviation management personnel.",
        intakes: ["September"],
        programs: ["Aeronautical Engineering", "Air Traffic Control", "Aviation Management", "Flight Technology"]
    },
    {
        id: "shiep",
        name: "Shanghai University of Electric Power (上海电力大学)",
        shortName: "SUEP",
        domain: "shiep.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "A specialized university spearheading research and education in power systems, clean energy, and smart grid automation.",
        history: "Founded in 1951 by the national government, it remains an indispensable pillar supplying top-tier engineers to the nation's energy grid.",
        intakes: ["September", "March"],
        programs: ["Electrical Engineering", "Automation", "Energy Engineering", "Computer Science"]
    },
    {
        id: "cjlu",
        name: "China Jiliang University (中国计量大学)",
        shortName: "CJLU",
        domain: "cjlu.edu.cn",
        location: "Hangzhou, Zhejiang",
        qsRanking: "Not Globally Ranked",
        description: "The only university in the world devoted globally to metrology, standardization, quality inspection, and quarantine education.",
        history: "Established in 1978 specifically to elevate China's product quality, standard testing, and safety assurances on the global stage.",
        intakes: ["September", "March"],
        programs: ["Metrology Engineering", "Quality Management", "Optical Engineering", "Instrument Science"]
    },
    {
        id: "sdju",
        name: "Shanghai Dianji University (上海电机学院)",
        shortName: "SDJU",
        domain: "sdju.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "An innovative applied engineering institution heavily focused on cutting-edge advanced manufacturing and electromechanical technologies.",
        history: "Founded in 1953, it boasts an incredible record of placing thousands of highly skilled practical engineers into multinational enterprises.",
        intakes: ["September", "March"],
        programs: ["Electrical Engineering", "Mechanical Automation", "International Trade", "Computer Science"]
    },
    {
        id: "sit",
        name: "Shanghai Institute of Technology (上海应用技术大学)",
        shortName: "SIT",
        domain: "sit.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "A prominent university dedicated to applied technology, praised for integrating modern design arts with rigorous engineering disciplines.",
        history: "Developed through the amalgamation of several specialized technical colleges, it achieved university status in the early 2000s.",
        intakes: ["September", "March"],
        programs: ["Chemical Engineering", "Perfume & Cosmetics Science", "Civil Engineering", "Art & Design"]
    },
    {
        id: "sbs",
        name: "Shanghai Business School (上海商学院)",
        shortName: "SBS",
        domain: "sbs.edu.cn",
        location: "Shanghai",
        qsRanking: "Not Globally Ranked",
        description: "A specialized business institution nurturing bright entrepreneurs and financial experts tuned to Shanghai's bustling global economic pulse.",
        history: "Established in 1950, it carries a deep legacy of advancing localized commercial research and international retail studies.",
        intakes: ["September", "March"],
        programs: ["Business Administration", "Finance", "Tourism Management", "E-commerce"]
    },
    {
        id: "zut",
        name: "Zhongyuan University of Technology (中原工学院)",
        shortName: "ZUT",
        domain: "zut.edu.cn",
        location: "Zhengzhou, Henan",
        qsRanking: "Not Globally Ranked",
        description: "A multidisciplinary university noted for its exceptional origins in textile engineering, now expanding rapidly into software and civil sciences.",
        history: "Originating in 1955 as a distinct textile institute, it has evolved into a premier comprehensive polytechnic platform in Central China.",
        intakes: ["September", "March"],
        programs: ["Textile Engineering", "Fashion Design", "Information Technology", "Business"]
    },
    {
        id: "zisu",
        name: "Zhejiang International Studies University (浙江外国语学院)",
        shortName: "ZISU",
        domain: "zisu.edu.cn",
        location: "Hangzhou, Zhejiang",
        qsRanking: "Not Globally Ranked",
        description: "A prominent provincial university intensely focused on cultivating exceptional foreign language talents and cross-cultural communication professionals.",
        history: "Transformed from the Zhejiang Education Institute established in 1955, dedicating its recent decades solely to global languages and international business.",
        intakes: ["September", "March"],
        programs: ["Foreign Languages", "International Business", "Cross-Cultural Communication", "Tourism"]
    },
    {
        id: "ycit",
        name: "Yancheng Institute of Technology (盐城工学院)",
        shortName: "YCIT",
        domain: "ycit.edu.cn",
        location: "Yancheng, Jiangsu",
        qsRanking: "Not Globally Ranked",
        description: "A diligent engineering-driven institution playing a foundational role in Jiangsu province's booming industrial and automotive economy.",
        history: "Founded in 1958, it has systematically expanded its campus and research capacities to rival upper-tier polytechnics in the region.",
        intakes: ["September", "March"],
        programs: ["Materials Science", "Automotive Engineering", "Civil Engineering", "Management"]
    },
    {
        id: "ahjzu",
        name: "An'hui Jianzhu University (安徽建筑大学)",
        shortName: "AHJZU",
        domain: "ahjzu.edu.cn",
        location: "Hefei, Anhui",
        qsRanking: "Not Globally Ranked",
        description: "The primary comprehensive university in Anhui Province devoted to civil engineering, architecture, and urban planning sciences.",
        history: "Tracing its inception to 1958, it is indispensable in training the province's top-tier city planners, architects, and civil constructors.",
        intakes: ["September", "March"],
        programs: ["Architecture", "Civil Engineering", "Urban Planning", "Environmental Engineering"]
    },
    {
        id: "zjhu",
        name: "Huzhou Normal University (湖州师范学院)",
        shortName: "ZJHU",
        domain: "zjhu.edu.cn",
        location: "Huzhou, Zhejiang",
        qsRanking: "Not Globally Ranked",
        description: "A multi-disciplinary college blending deep, historical teacher-training roots with booming modern disciplines like medical sciences and engineering.",
        history: "Originally established in 1916, reflecting one of the earliest and most respected educational heritages in the historical Zhejiang region.",
        intakes: ["September", "March"],
        programs: ["Teacher Education", "Nursing", "Computer Science", "Arts & humanities"]
    },
    {
        id: "usx",
        name: "Shaoxing University (绍兴文理学院)",
        shortName: "USX",
        domain: "usx.edu.cn",
        location: "Shaoxing, Zhejiang",
        qsRanking: "Not Globally Ranked",
        description: "An academically rich university located in a famous historical and cultural city, offering diverse comprehensive majors covering arts, science, and medicine.",
        history: "Rooted deeply in the literary prestige of Shaoxing, the university formed officially through the merging of several esteemed local colleges in 1996.",
        intakes: ["September", "March"],
        programs: ["Linguistics", "Textile Engineering", "Clinical Medicine", "Business"]
    },
    {
        id: "mju",
        name: "Minjiang University (闽江大学)",
        shortName: "MJU",
        domain: "mju.edu.cn",
        location: "Fuzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A comprehensive applied university supported seamlessly by provincial governments, acting as a dynamic base for fostering applied talents.",
        history: "Founded upon a legacy championed by local leaders in the 1980s, the institution was heavily consolidated in 2002 to scale its impact.",
        intakes: ["September", "March"],
        programs: ["Fashion Design", "Information Technology", "Business Management", "Public Administration"]
    },
    {
        id: "ptu",
        name: "Putian University (莆田学院)",
        shortName: "PTU",
        domain: "ptu.edu.cn",
        location: "Putian, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A full-time undergraduate university known for its medical sciences, cultural heritage preservation, and rapidly advancing engineering programs.",
        history: "Brought together in 2002 through the brilliant amalgamation of multiple historic higher educational academies from the Mazu cultural hub.",
        intakes: ["September", "March"],
        programs: ["Clinical Medicine", "Nursing", "Mechanical Engineering", "Arts"]
    },
    {
        id: "hnie",
        name: "Hunan Institute of Engineering (湖南工程学院)",
        shortName: "HNIE",
        domain: "hnie.edu.cn",
        location: "Xiangtan, Hunan",
        qsRanking: "Not Globally Ranked",
        description: "An engineering-focused institute famous for successfully integrating its robust academic theories directly with massive industrial application.",
        history: "Organized officially in 2000 by merging two prominent Hunan technical schools that had served the nation's machinery sector since 1951.",
        intakes: ["September", "March"],
        programs: ["Electrical Engineering", "Textile Science", "Machinery Manufacturing", "Applied Chemistry"]
    },
    {
        id: "lyun",
        name: "Longyan University (龙岩学院)",
        shortName: "LYUN",
        domain: "lyun.edu.cn",
        location: "Longyan, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A provincial application-oriented university serving as a vital scientific research and talent cultivation base in western Fujian.",
        history: "Started as a normal school in 1958 to train educators, evolving beautifully over the decades to encompass advanced sciences and business.",
        intakes: ["September", "March"],
        programs: ["Education", "Computer Science", "Materials Engineering", "Business"]
    },
    {
        id: "hyit",
        name: "Huai'an University (淮安大学) / Huaiyin Institute",
        shortName: "HYIT",
        domain: "hyit.edu.cn",
        location: "Huai'an, Jiangsu",
        qsRanking: "Not Globally Ranked",
        description: "An emerging and agile multidisciplinary university committed fundamentally to applied sciences and advancing the regional agrarian and industrial sectors.",
        history: "Boasts a proud history of academic progression, starting in 1959 and growing to become the premier higher learning center of Huai'an.",
        intakes: ["September", "March"],
        programs: ["Chemical Engineering", "Agronomy", "Mechanical Engineering", "Economics"]
    },
    {
        id: "squ",
        name: "Suqian University (宿迁学院)",
        shortName: "SQU",
        domain: "squ.edu.cn",
        location: "Suqian, Jiangsu",
        qsRanking: "Not Globally Ranked",
        description: "An extremely fast-growing provincial university, notable for its unique consortium-backed development model guided by top Jiangsu universities.",
        history: "Famously established in 2002 by an unprecedented joint coalition of eight prominent Jiangsu universities to rapidly build an academic hub in Suqian.",
        intakes: ["September", "March"],
        programs: ["Civil Engineering", "Computer Science", "Business Administration", "Teacher Training"]
    },
    {
        id: "cque",
        name: "Chongqing No.2 Normal University (重庆第二师范学院)",
        shortName: "CQUE",
        domain: "cque.edu.cn",
        location: "Chongqing",
        qsRanking: "Not Globally Ranked",
        description: "A paramount teacher's college specializing intensely in early childhood and primary education, driving Chongqing's educational standard.",
        history: "Tracing its noble foundation back to 1954, it has relentlessly maintained its profound mission of training generations of brilliant educators.",
        intakes: ["September", "March"],
        programs: ["Pre-school Education", "Primary Education", "Literature", "Mathematics"]
    },
    {
        id: "fpnu",
        name: "Fujian Polytechnic Normal University (福建技术师范学院)",
        shortName: "FPNU",
        domain: "fpnu.edu.cn",
        location: "Fuqing, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A unique institution perfectly blending polytechnic methodologies with traditional normal education to produce superior vocational educators.",
        history: "Founded distinctly to elevate the standards of vocational education teaching staff throughout the flourishing Fujian province.",
        intakes: ["September", "March"],
        programs: ["Vocational Education", "Information Technology", "Electronic Engineering", "Foreign Languages"]
    },
    {
        id: "fzfu",
        name: "Fuzhou University of International Studies and Trade (福州外语外贸学院)",
        shortName: "FZFU",
        domain: "fzfu.edu.cn",
        location: "Fuzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A prominent modern private university intensely aimed at equipping students exclusively for the global trade and international relations arenas.",
        history: "Developed meticulously as a private endeavor to answer the booming coastal demand for globally minded foreign language and commerce graduates.",
        intakes: ["September", "March"],
        programs: ["International Trade", "Foreign Languages", "Logistics Management", "Finance"]
    }
];

export const chinaDiplomaPartners: ChinaPartnerInstitution[] = [
    {
        id: "cdttc",
        name: "Chengdu Textile College (??????????)",
        shortName: "CDTTC",
        domain: "cdttc.edu.cn",
        location: "Chengdu, Sichuan",
        qsRanking: "Not Globally Ranked",
        description: "A premier vocational college leading in textile engineering and light industry technology in Southwest China.",
        history: "Established in 1939 to advance national industry, possessing a profound heritage in textile, fashion, and smart manufacturing.",
        intakes: ["September", "March"],
        programs: ["Textile Engineering", "Fashion Design", "Information Technology", "Business"]
    },
    {
        id: "fjcpc",
        name: "Fujian Chuanzheng Communications College (??????????)",
        shortName: "FJCPC",
        domain: "fjcpc.edu.cn",
        location: "Fuzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A specialized polytechnic historically centered around maritime logistics, shipping, and transportation engineering.",
        history: "A visionary institution originally tied directly to the pioneering Fuzhou Arsenal (Chuanzheng) foundation, symbolizing Chinese maritime progression.",
        intakes: ["September", "March"],
        programs: ["Maritime Logistics", "Transportation Engineering", "Automotive Maintenance", "Civil Engineering"]
    },
    {
        id: "fvti",
        name: "Fuzhou Polytechnic (????????)",
        shortName: "FVTI",
        domain: "fvti.edu.cn",
        location: "Fuzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "A highly dynamic state-run vocational college dedicated entirely to cultivating fast-deployable practical skills and regional technical talents.",
        history: "Deeply entrenched in the robust economy of Fuzhou, explicitly aligned with the high-tech modern industrial zones of local enterprises.",
        intakes: ["September", "March"],
        programs: ["Computer Science", "E-commerce", "Electrical Automation", "Tourism"]
    },
    {
        id: "lszyxy",
        name: "Leshan Vocational and Technical College (????????)",
        shortName: "LVTC",
        domain: "lszyxy.edu.cn",
        location: "Leshan, Sichuan",
        qsRanking: "Not Globally Ranked",
        description: "A picturesque higher vocational college known especially for nursing, clean energy technology, and applied medical disciplines.",
        history: "Formed through the integration of multiple local medical and technical schools to serve the rapidly expanding healthcare and tech sectors.",
        intakes: ["September", "March"],
        programs: ["Nursing", "Solar Energy Technology", "Pharmacy", "Mechanical Engineering"]
    },
    {
        id: "zzit",
        name: "Zhangzhou Institute of Technology (????????)",
        shortName: "ZZIT",
        domain: "zzit.edu.cn",
        location: "Zhangzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "An incredibly proactive technical institute famed for seamlessly integrating massive industry apprenticeships tightly with academic learning.",
        history: "Founded as a crucial backbone for Zhangzhou's modernization, widely recognized regionally as a 'model vocational college'.",
        intakes: ["September", "March"],
        programs: ["Food Science", "Construction Engineering", "Logistics Management", "Electronic Commerce"]
    },
    {
        id: "csmzxy",
        name: "Changsha Social Work College (??????????)",
        shortName: "CSMZ",
        domain: "csmzxy.edu.cn",
        location: "Changsha, Hunan",
        qsRanking: "Not Globally Ranked",
        description: "Pioneering the civic and social welfare service sectors, acting uniquely as the first vocational college directly specializing in civil affairs.",
        history: "Created in 1984 under the Ministry of Civil Affairs, it remains the absolute authority nationwide for social work and welfare education.",
        intakes: ["September", "March"],
        programs: ["Social Work", "Elderly Care Management", "Modern Funeral Services", "Information Technology"]
    },
    {
        id: "zjiet",
        name: "Zhejiang Institute of Economics and Trade (??????????)",
        shortName: "ZJIET",
        domain: "zjiet.edu.cn",
        location: "Hangzhou, Zhejiang",
        qsRanking: "Not Globally Ranked",
        description: "A highly prestigious provincial trade and economics institute sharply focused on commerce, supply chain modernization, and rural revitalization.",
        history: "Endowed with over 40 years of commercial specialization, deeply tied to the colossal e-commerce heartbeat radiating from modern Hangzhou.",
        intakes: ["September", "March"],
        programs: ["E-commerce", "Accounting", "International Trade", "Food Quality Inspection"]
    }
];

export const chinaMbbsPartners: ChinaPartnerInstitution[] = [
    {
        id: "hainmc",
        name: "Hainan Medical University (??????)",
        shortName: "HMU",
        domain: "hainmc.edu.cn",
        location: "Hainan Province",
        qsRanking: "Not Globally Ranked",
        description: "A paramount medical institution prominently located in the tropical gateway of China, renowned for its exceptional international MBBS program.",
        history: "Originally established in 1947, it has evolved into a premier university heavily integrated with the booming Hainan Free Trade Port healthcare sector.",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Pharmacy", "Dentistry", "Nursing"]
    },
    {
        id: "fjmu",
        name: "Fujian Medical University (??????)",
        shortName: "FJMU",
        domain: "fjmu.edu.cn",
        location: "Fuzhou, Fujian",
        qsRanking: "Not Globally Ranked",
        description: "One of the most prestigious medical research hubs in East China with an extensive network of top-tier affiliated clinical hospitals.",
        history: "Boasting nearly a century of legacy since its founding in 1937, it is recognized nationally as a powerhouse for cultivating highly skilled clinical physicians.",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Stomatology", "Preventive Medicine", "Medical Imaging"]
    },
    {
        id: "beihua",
        name: "Beihua University (????)",
        shortName: "Beihua",
        domain: "beihua.edu.cn",
        location: "Jilin City, Jilin",
        qsRanking: "Not Globally Ranked",
        description: "A massive provincial comprehensive university offering a tremendously popular, highly affordable, and well-structured international MBBS program.",
        history: "Formed in 1999 through the powerful merger of three prominent colleges including the revered Jilin Medical College (est. 1949).",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Medical Technology", "Pharmacology", "Nursing"]
    },
    {
        id: "bzmc",
        name: "Binzhou Medical University (?????)",
        shortName: "BZMC",
        domain: "bzmc.edu.cn",
        location: "Yantai, Shandong",
        qsRanking: "Not Globally Ranked",
        description: "A highly acclaimed specialized medical college situated in the beautiful coastal city of Yantai, offering a rigorous dual-campus medical experience.",
        history: "Stemming directly from the former public Qingdao Medical College established decades ago, it serves as the healthcare backbone of Shandong Peninsula.",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Traditional Chinese Medicine", "Special Education Medicine", "Rehabilitation Therapy"]
    },
    {
        id: "hbuas",
        name: "Hubei University of Arts and Science (??????)",
        shortName: "HBUAS",
        domain: "hbuas.edu.cn",
        location: "Xiangyang, Hubei",
        qsRanking: "Not Globally Ranked",
        description: "A dynamic comprehensive university deeply praised for its rapidly ascending medical faculty and welcoming environment for international clinical students.",
        history: "A historically significant academic cornerstone in Hubei that has continuously expanded its sciences to comprehensively integrate a globally focused medical school.",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Nursing", "Biomedical Engineering", "Public Health"]
    },
    {
        id: "xzhmu",
        name: "Xuzhou Medical University (??????)",
        shortName: "XZHMU",
        domain: "xzhmu.edu.cn",
        location: "Xuzhou, Jiangsu",
        qsRanking: "Not Globally Ranked",
        description: "A tremendously influential medical institution celebrated globally as a pioneer in anesthesiology and an elite training ground for doctors.",
        history: "Established securely in 1958, XZHMU literally founded the discipline of anesthesiology in China and continues to lead national medical innovations.",
        intakes: ["September", "March"],
        programs: ["MBBS (Clinical Medicine)", "Anesthesiology", "Medical Imaging", "Pediatrics"]
    }
];
