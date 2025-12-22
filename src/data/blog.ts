export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: "study-in-malaysia" | "visa-immigration" | "student-life" | "updates-announcements";
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Why International Students Should Pursue Their Studies in Malaysia",
        slug: "why-study-in-malaysia",
        category: "study-in-malaysia",
        excerpt: "Choosing the right study destination is one of the most important decisions in a student's life. Discover why Malaysia offers a unique balance of quality education, affordability, safety, and global recognition.",
        author: "NextPath Global Team",
        date: "2024-12-22",
        readTime: "5 min read",
        content: `
# Why International Students Should Pursue Their Studies in Malaysia

Choosing the right study destination is one of the most important decisions in a student's life. Beyond academics, it shapes career opportunities, global exposure, personal growth, and long-term success. Over the years, Malaysia has emerged as one of the most attractive education destinations for international students, especially from Asia, Africa, and the Middle East.

As experienced education counselors, we believe Malaysia offers a unique balance of quality education, affordability, safety, and global recognition. Here's why studying in Malaysia is a smart and strategic choice.

## 1. Internationally Recognized Education System

Malaysia is home to globally recognized universities offering programs accredited by international bodies. Many Malaysian universities collaborate with institutions from the UK, Australia, Europe, and the US, allowing students to earn internationally accepted degrees without the high cost of studying in Western countries.

Students benefit from:
- High academic standards
- Industry-relevant curricula
- English-medium instruction

A Malaysian degree opens doors worldwide.

## 2. Affordable Tuition Fees and Living Costs

One of Malaysia's biggest advantages is cost-effectiveness. Compared to countries like the UK, Australia, or the US, Malaysia offers:
- Lower tuition fees
- Reasonable accommodation costs
- Affordable food and transportation

Students can receive quality education without placing heavy financial pressure on their families, making Malaysia an ideal destination for value-conscious students.

## 3. Safe, Multicultural, and Student-Friendly Environment

Malaysia is known for its peaceful society, political stability, and cultural harmony. International students feel welcomed and respected, regardless of nationality or religion.

Key benefits include:
- Safe cities and campuses
- Friendly local communities
- Diverse cultures living together harmoniously

This multicultural environment helps students develop global perspectives and interpersonal skills.

## 4. Strategic Location and Global Exposure

Located in the heart of Southeast Asia, Malaysia offers excellent regional and international connectivity. Students can easily travel to neighboring countries, gaining broader exposure to different cultures and economies.

Malaysia's international campuses also host students from over 100 countries, creating a truly global learning experience.

## 5. Wide Range of Programs and Career-Focused Courses

Malaysian institutions offer a diverse range of programs, including:
- Business & Management
- Engineering & Technology
- Information Technology
- Hospitality & Tourism
- Health Sciences and more

Many programs are designed with industry alignment, helping students gain practical knowledge and enhance employability after graduation.

## 6. Smooth Student Visa Process

Malaysia provides a structured and transparent student visa system through Education Malaysia Global Services (EMGS). With proper guidance, the visa process is straightforward and efficient.

Professional education consultants ensure:
- Correct documentation
- Proper university selection
- Smooth application and visa approval

This minimizes uncertainty and stress for students and parents.

## 7. Strong Foundation for Future Career Growth

Studying in Malaysia helps students build:
- International academic credentials
- English communication skills
- Cross-cultural adaptability

Graduates are well-positioned for global career opportunities, further studies, or professional pathways in Malaysia and beyond.

## Final Thoughts

Malaysia combines the best of education quality, affordability, safety, and global recognition. For international students seeking a reliable, respected, and future-oriented study destination, Malaysia stands out as a practical and rewarding choice.

With proper guidance and planning, studying in Malaysia can be a life-changing step toward academic success and long-term career development.
        `
    },
    {
        id: "2",
        title: "Important Visa Update for Bangladeshi Citizens",
        slug: "visa-update-bangladeshi-citizens",
        category: "updates-announcements",
        excerpt: "Effective immediately, Bangladeshi passport holders cannot apply for Vietnam or Indonesia visit visas while staying in Malaysia. Learn what this means for your travel plans.",
        author: "NextPath Global Team",
        date: "2024-12-22",
        readTime: "3 min read",
        content: `
# 📢 Important Visa Update for Bangladeshi Citizens

Effective immediately, Bangladeshi passport holders cannot apply for Vietnam or Indonesia visit visas while staying in Malaysia.

## 📌 What this means:

- If you are a Bangladeshi citizen visiting or residing in Malaysia, applications for Vietnam or Indonesia visas are not accepted from Malaysia at this time.
- Visa applications for these countries must be processed from Bangladesh or another eligible country, subject to the respective embassy or consulate rules.

## 📌 Why this update matters:

Visa regulations change from time to time, and embassies strictly follow their jurisdiction policies. To avoid delays, rejections, or unnecessary expenses, we strongly advise travelers to plan accordingly before coming to Malaysia.

## 📌 Our advice:

Before finalizing travel plans, always confirm the latest visa eligibility rules or consult with a professional visa advisor.

We will keep updating our website with any changes as soon as official information is released.

Thank you for your understanding and for trusting us to keep you informed 🤝
        `
    }
];

export const getCategoryPosts = (category: BlogPost["category"]) => {
    return blogPosts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
};
