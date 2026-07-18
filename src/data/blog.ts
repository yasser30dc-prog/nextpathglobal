export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: "study-in-malaysia" | "visa-immigration" | "student-life" | "updates-announcements" | "travel-tourism";
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
        id: "3a",
        title: "New Romanian Law (OUG) on Foreign Worker Recruitment – What You Need to Know",
        slug: "romanian-oug-foreign-worker-recruitment-law",
        category: "updates-announcements",
        excerpt: "Romania has introduced a comprehensive Emergency Ordinance (OUG) tightening the rules around foreign worker recruitment. Whether you are an employer, a partner agency, or a worker planning to relocate to Romania — here is everything you need to know.",
        author: "NextPath Global Team",
        date: "2026-05-03",
        readTime: "8 min read",
        content: `
<style>
  .oug-intro-band {
    background: #c9a84c;
    padding: 22px 28px;
    border-radius: 6px;
    margin-bottom: 40px;
  }
  .oug-intro-band p {
    color: #0d1b2a;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 1.6;
  }
  .oug-section { margin-bottom: 48px; }
  .oug-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e4ddd0;
  }
  .oug-section-icon { font-size: 26px; line-height: 1; }
  .oug-section-title {
    font-size: 22px;
    font-weight: 700;
    color: #0d1b2a;
    margin: 0;
  }
  .oug-section p { font-size: 15.5px; color: #374a5a; margin-bottom: 14px; }
  .oug-rule-grid { display: grid; gap: 10px; margin-top: 6px; }
  .oug-rule-card {
    background: #fff;
    border: 1px solid #e4ddd0;
    border-left: 4px solid #c9a84c;
    border-radius: 4px;
    padding: 14px 18px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .oug-dot {
    width: 8px; height: 8px;
    background: #c9a84c;
    border-radius: 50%;
    margin-top: 7px;
    flex-shrink: 0;
  }
  .oug-rule-card p { margin: 0; font-size: 15px; color: #1e2a35; }
  .oug-rule-card p strong { color: #0d1b2a; }
  .oug-finance-block {
    background: #fff;
    border: 1px solid #e4ddd0;
    border-radius: 6px;
    overflow: hidden;
    margin-top: 8px;
  }
  .oug-finance-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #e4ddd0;
    align-items: center;
  }
  .oug-finance-row:last-child { border-bottom: none; }
  .oug-finance-row.oug-header { background: #0d1b2a; }
  .oug-finance-row.oug-header span {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 13px 18px;
    display: block;
  }
  .oug-cell { padding: 13px 18px; font-size: 15px; color: #1e2a35; }
  .oug-cell:first-child { color: #6b7c8d; font-weight: 500; border-right: 1px solid #e4ddd0; }
  .oug-cell strong { color: #0d1b2a; font-weight: 700; }
  .oug-fine-card {
    background: #fff;
    border: 1px solid #e4ddd0;
    border-radius: 6px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    margin-bottom: 10px;
    transition: box-shadow 0.2s;
  }
  .oug-fine-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
  .oug-fine-label { font-size: 15px; color: #1e2a35; flex: 1; }
  .oug-fine-amount {
    font-weight: 700;
    font-size: 16px;
    color: #c0392b;
    white-space: nowrap;
    background: rgba(192,57,43,0.07);
    padding: 5px 12px;
    border-radius: 4px;
  }
  .oug-warning-box {
    background: #fff8e6;
    border: 1px solid #c9a84c;
    border-left: 5px solid #c9a84c;
    border-radius: 4px;
    padding: 18px 22px;
    margin: 22px 0;
  }
  .oug-warn-title {
    font-weight: 700;
    color: #7a5c00;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  .oug-warning-box p { color: #5a4200; font-size: 15px; margin: 0; }
  .oug-alert-box {
    background: #fdf2f0;
    border: 1px solid #e8b4ae;
    border-left: 5px solid #c0392b;
    border-radius: 4px;
    padding: 18px 22px;
    margin: 22px 0;
  }
  .oug-alert-title {
    font-weight: 700;
    color: #c0392b;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  .oug-alert-box p { color: #7a2318; font-size: 15px; margin: 0; }
  .oug-resp-list { list-style: none; margin-top: 8px; padding: 0; }
  .oug-resp-item {
    padding: 11px 0 11px 26px;
    position: relative;
    font-size: 15px;
    color: #374a5a;
    border-bottom: 1px solid #e4ddd0;
  }
  .oug-resp-item:last-child { border-bottom: none; }
  .oug-resp-item::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #c9a84c;
    font-weight: 700;
  }
  .oug-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
  .oug-tag {
    background: #e4ddd0;
    color: #6b7c8d;
    font-size: 11.5px;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
  }
  @media (max-width: 600px) {
    .oug-finance-row { grid-template-columns: 1fr; }
    .oug-cell:first-child { border-right: none; border-bottom: 1px solid #e4ddd0; }
    .oug-fine-card { flex-direction: column; align-items: flex-start; }
  }
</style>

<div class="oug-intro-band">
  <p>Romania has introduced a comprehensive Emergency Ordinance (OUG) tightening the rules around foreign worker recruitment. Whether you are an employer, a partner agency, or a worker planning to relocate to Romania — here is everything you need to know.</p>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">🎯</span>
    <h2 class="oug-section-title">Purpose of the New Law</h2>
  </div>
  <p>The new Romanian OUG (Articles 1–2) was introduced to regulate the authorization, operation, and strict control of foreign worker recruitment into Romania. Its primary goal is to eliminate unregistered intermediaries and informal operators from the recruitment chain — ensuring that only properly licensed agencies can recruit foreign workers.</p>
  <div class="oug-warning-box">
    <div class="oug-warn-title">⚠️ Important Notice for Partners</div>
    <p>Travel agencies, informal intermediaries, and business-style operators (such as "Dreammakers" or work-style brokers) are <strong>NOT permitted</strong> to conduct recruitment activities without full authorization as a licensed recruitment agency.</p>
  </div>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">🔑</span>
    <h2 class="oug-section-title">Key Rules at a Glance</h2>
  </div>
  <div class="oug-rule-grid">
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>ANOFM Authorization is Mandatory</strong> — All recruitment agencies must obtain authorization from Romania's National Agency for Employment (ANOFM) before operating (Art. 1, 3).</p>
    </div>
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>Shortage Occupations Only</strong> — Recruitment of foreign workers is permitted only for occupations officially listed as being in shortage in Romania (Art. 1(2)).</p>
    </div>
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>All Procedures via WorkinRomania.Gov.ro</strong> — The official government platform must be used for all recruitment procedures and documentation (Art. 7).</p>
    </div>
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>Written Contracts Required</strong> — All employment contracts must be in writing and in a language the worker fully understands (Art. 8–10).</p>
    </div>
  </div>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">🏦</span>
    <h2 class="oug-section-title">Financial Guarantee Requirements (Art. 25)</h2>
  </div>
  <p>Before receiving authorization, all recruitment agencies must provide a financial guarantee — either as a cash deposit or bank guarantee. This fund protects workers and covers costs such as deportation, unpaid fines, and worker repatriation.</p>
  <div class="oug-finance-block">
    <div class="oug-finance-row oug-header">
      <span>Condition</span>
      <span>Deposit Required</span>
    </div>
    <div class="oug-finance-row">
      <div class="oug-cell">Up to 250 workers</div>
      <div class="oug-cell"><strong>€75,000</strong></div>
    </div>
    <div class="oug-finance-row">
      <div class="oug-cell">Each additional 250 workers</div>
      <div class="oug-cell"><strong>+ €50,000</strong> per 250 extra</div>
    </div>
    <div class="oug-finance-row">
      <div class="oug-cell">Replenishment deadline if used</div>
      <div class="oug-cell"><strong>Within 30 days</strong></div>
    </div>
    <div class="oug-finance-row">
      <div class="oug-cell">When must it be in place?</div>
      <div class="oug-cell"><strong>Before authorization is granted</strong></div>
    </div>
  </div>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">❌</span>
    <h2 class="oug-section-title">Financial Liability (Art. 26)</h2>
  </div>
  <div class="oug-alert-box">
    <div class="oug-alert-title">🚨 Liability Alert</div>
    <p>Agencies are charged <strong>€2,000 per deported or removed worker</strong>. This cost is enforced as a state debt and is automatically recovered from the financial guarantee if left unpaid.</p>
  </div>
  <p>This means that high visa refusal rates or workers failing to comply with immigration conditions directly impact the financial standing and continued operation of the recruitment agency.</p>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">⚖️</span>
    <h2 class="oug-section-title">Fines &amp; Violations</h2>
  </div>
  <p>Non-compliance with the OUG carries significant financial penalties per violation:</p>
  <div class="oug-fine-card">
    <div class="oug-fine-label">Hiring an illegal foreign worker (per person)</div>
    <div class="oug-fine-amount">10,000 – 20,000 LEI</div>
  </div>
  <div class="oug-fine-card">
    <div class="oug-fine-label">Failure to report worker absence or disappearance</div>
    <div class="oug-fine-amount">700 – 1,000 LEI</div>
  </div>
  <div class="oug-fine-card">
    <div class="oug-fine-label">Failure to report start, end, or change of employment</div>
    <div class="oug-fine-amount">1,500 – 3,000 LEI</div>
  </div>
  <div class="oug-fine-card">
    <div class="oug-fine-label">Accommodation standard violations</div>
    <div class="oug-fine-amount">2,000 – 5,000 LEI</div>
  </div>
  <div class="oug-fine-card">
    <div class="oug-fine-label">Failure to ensure legal stay or proper work conditions</div>
    <div class="oug-fine-amount">10,000 – 20,000 LEI</div>
  </div>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">🚫</span>
    <h2 class="oug-section-title">Suspension &amp; Sanctions (Art. 17–19)</h2>
  </div>
  <div class="oug-rule-grid">
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p>License <strong>suspension or withdrawal</strong> for violations or fraudulent activity.</p>
    </div>
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>High visa refusal rates</strong> are a direct risk factor for suspension or license withdrawal — agencies must actively manage refusal rates. ‼️</p>
    </div>
    <div class="oug-rule-card">
      <div class="oug-dot"></div>
      <p><strong>Failure to maintain</strong> the required financial guarantee results in automatic suspension of the agency's license.</p>
    </div>
  </div>
</div>

<div class="oug-section">
  <div class="oug-section-header">
    <span class="oug-section-icon">✍️</span>
    <h2 class="oug-section-title">Ongoing Responsibilities &amp; Control</h2>
  </div>
  <p>Recruitment agencies are not simply a gateway — they hold ongoing legal responsibilities for every worker they place in Romania:</p>
  <ul class="oug-resp-list">
    <li class="oug-resp-item">Continuous monitoring and reporting obligations after workers arrive in Romania.</li>
    <li class="oug-resp-item">Mandatory reporting of any worker absence, non-start, or early termination of employment.</li>
    <li class="oug-resp-item">Workers are subject to a <strong>~6-month employer stability rule</strong> — changing employers is restricted during this period.</li>
    <li class="oug-resp-item">Agencies remain responsible for each worker for approximately <strong>6 months after arrival</strong>, including overseeing absences and facilitating return if necessary.</li>
  </ul>
  <div class="oug-warning-box" style="margin-top:22px;">
    <div class="oug-warn-title">📋 Key Takeaway for Partners</div>
    <p>Recruitment under this law is a <strong>long-term commitment</strong>, not a one-time transaction. All partners working with NextPath Global must be fully licensed and compliant with OUG requirements before any recruitment activity begins.</p>
  </div>
</div>

<div class="oug-tags">
  <span class="oug-tag">#RomaniaLaw</span>
  <span class="oug-tag">#RecruitmentAgencies</span>
  <span class="oug-tag">#WorkPermitRomania</span>
  <span class="oug-tag">#ImmigrationRomania</span>
  <span class="oug-tag">#WorkinRomania</span>
  <span class="oug-tag">#LegalRecruitment</span>
  <span class="oug-tag">#RecruitmentLaw</span>
  <span class="oug-tag">#WorkforceRomania</span>
  <span class="oug-tag">#NextPathGlobal</span>
</div>
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
    },
    {
        id: "3",
        title: "7 Reasons why Malaysia Should Be on Every International Traveller's Bucket List in 2026",
        slug: "malaysia-travel-bucket-list-2026",
        category: "travel-tourism",
        excerpt: "As global travel rebounds stronger and smarter, international travellers in 2026 are no longer just chasing luxury—they want value, safety, culture, and ease. That's exactly where Malaysia stands out.",
        author: "NextPath Global Team",
        date: "2024-12-25",
        readTime: "8 min read",
        content: `
As global travel rebounds stronger and smarter, international travellers in 2026 are no longer just chasing luxury—they want value, safety, culture, and ease. That's exactly where Malaysia stands out.

From rich heritage and world-class food to affordable travel costs and traveller-friendly visa policies, Malaysia is quietly becoming Asia's most underrated travel gem. If you're planning your next international trip, here's why Malaysia deserves a top spot on your bucket list in 2026.

## 1. A Rich Blend of Cultures You Can Experience in One Country

Malaysia is not just a destination—it's a cultural experience.

Few countries in the world offer such a seamless mix of Malay, Chinese, Indian, and Indigenous cultures living side by side. In one day, you can:

- Visit a mosque, temple, and church
- Experience different festivals throughout the year
- Hear multiple languages spoken naturally

This multicultural harmony is authentic, not staged—and travellers feel it the moment they arrive.

## 2. Malaysian Food: A Global Favourite Without the Global Price Tag

Ask any seasoned traveller and they'll tell you—Malaysia's food scene is elite.

From street food to fine dining, Malaysia offers:

- Nasi Lemak, Char Kway Teow, Roti Canai, Laksa
- Michelin-recognised hawker stalls
- Halal, vegetarian, and international options everywhere

The best part? You can enjoy world-class meals at a fraction of what you'd pay in Europe, Australia, or Japan.

## 3. Travel That's Affordable Without Feeling "Cheap"

In 2026, smart travellers are choosing destinations that offer maximum experience with controlled budgets—and Malaysia delivers.

Compared to many international destinations, Malaysia offers:

- Affordable hotels (from budget to luxury)
- Reasonably priced transport (Grab, trains, flights)
- Low daily expenses for food and activities

You get premium experiences without premium stress. That's a win.

## 4. One of the Safest Countries for International Tourists

Safety matters—especially for solo travellers, families, and first-time visitors.

Malaysia consistently ranks as:

- A safe country for tourists
- Friendly toward international visitors
- Stable with strong infrastructure and healthcare

Major cities like Kuala Lumpur, Penang, and Johor Bahru are modern, well-connected, and tourist-friendly, making travel smooth and stress-free.

## 5. Easy Visa Policies for International Travellers

Visa hassle can ruin travel plans—but Malaysia keeps it simple.

In 2026, Malaysia continues to offer:

- Visa-free or visa-on-arrival access for many nationalities
- Straightforward eVisa options
- Clear and transparent immigration processes

This ease of entry makes Malaysia ideal for short holidays, extended stays, and even digital nomads exploring Southeast Asia.

## 6. Nature, Cities, and Islands—All in One Trip

Malaysia gives you variety without long travel distances.

You can experience:

- Modern skyscrapers in Kuala Lumpur
- Heritage streets in Melaka and George Town
- Beaches in Langkawi and Perhentian Islands
- Rainforests and wildlife in Sabah and Sarawak

Few countries let you switch vibes this fast—and that's perfect for 2026 travellers who want more in less time.

## 7. Friendly People & English-Friendly Environment

Malaysia's people are known for their warmth and hospitality. Add to that:

- Widespread English usage
- Clear signage and travel support
- Tourism-focused services

This makes Malaysia especially welcoming for first-time international travellers who want confidence and comfort.

## Final Thoughts: Malaysia Is the Smart Travel Choice for 2026

Malaysia isn't loud about its greatness—and that's exactly why it's special.

In 2026, travellers who value culture, food, affordability, safety, and ease will naturally gravitate toward Malaysia. Whether you're travelling solo, with family, or planning a longer stay, Malaysia offers balance—the kind modern travellers are actively searching for.

Sometimes, the best destinations aren't the most hyped—they're the most complete.

## ✨ Planning to Travel to Malaysia?

At NextPath Global Sdn Bhd, we assist international travellers with:

- Malaysia tourist visas
- Travel planning & documentation
- Insurance and flight support

📩 Reach out today and let us help you plan your Malaysia journey with confidence. Feel free to contact us: +60 11 1669 5249, +60 17 296 5249, or +60 17 882 3135
        `
    },
    {
        id: "4",
        title: "Top Tourist Attractions in Kuala Lumpur for a Perfect Day Trip",
        slug: "top-tourist-attractions-kuala-lumpur",
        category: "travel-tourism",
        excerpt: "Kuala Lumpur, Malaysia's bustling capital, is a vibrant city where modern skyscrapers meet cultural heritage. Discover the best attractions to explore in just one day.",
        author: "NextPath Global Team",
        date: "2026-01-07",
        readTime: "6 min read",
        content: `
Kuala Lumpur, Malaysia's bustling capital, is a vibrant city where modern skyscrapers meet cultural heritage. If you're short on time and planning a one-day trip, don't worry—KL is packed with attractions that are easy to explore in a day. Here's a guide to make the most of your visit.

## 1. Petronas Twin Towers

No trip to Kuala Lumpur is complete without seeing the iconic Petronas Twin Towers. Standing at 452 meters, these towers were once the tallest in the world.

**Highlights:**
- Skybridge and observation deck for panoramic city views

**Tip:** Book your tickets in advance to avoid long queues.

## 2. KLCC Park

Right next to the Twin Towers, KLCC Park is a green oasis in the heart of the city. Perfect for a short stroll or photos with the towers in the background.

**Highlights:**
- Walking trails, fountains, and a small lake

**Tip:** Visit in the evening to see the musical fountain show.

## 3. Batu Caves

A short 20-minute drive from the city center, Batu Caves is a limestone hill with a series of caves and cave temples.

**Highlights:**
- The giant golden statue of Lord Murugan
- 272 colorful steps
- Stunning cave shrines

**Tip:** Wear comfortable shoes and dress modestly if entering the temples.

## 4. Merdeka Square & Sultan Abdul Samad Building

Step back in time at Merdeka Square, the historical heart of Kuala Lumpur. The area is surrounded by beautiful colonial architecture.

**Highlights:**
- Sultan Abdul Samad Building
- The 100-meter-high flagpole
- Open green spaces

**Tip:** Great for photography, especially in the morning light.

## 5. Central Market & Petaling Street (Chinatown)

Wrap up your day with some shopping and local flavors.

**Central Market:** A heritage building offering handicrafts, souvenirs, and local snacks.

**Petaling Street:** Experience the vibrant Chinatown with street food, markets, and cultural vibes.

**Tip:** Try local delicacies like Hainanese chicken rice, satay, or cendol.

## Bonus: Menara Kuala Lumpur (KL Tower)

If you still have energy, head to KL Tower, another iconic landmark. Its observation deck is slightly higher than the Petronas Skybridge, offering a different perspective of the city skyline.

**Tip:** Sunset or night views are magical here.

## Suggested Day Trip Itinerary

1. **Morning:** Petronas Twin Towers → KLCC Park
2. **Late Morning:** Batu Caves
3. **Afternoon:** Merdeka Square & Sultan Abdul Samad Building
4. **Evening:** Central Market → Petaling Street → KL Tower (optional)

Kuala Lumpur may be a city of modern skyscrapers, but it's also a place full of culture, history, and flavors. Even in just one day, you can experience its highlights, snap iconic photos, and enjoy a taste of local life.
        `
    },
    {
        id: "5",
        title: "MM2H vs PVIP: Which Malaysian Residency Program Is Right for You?",
        slug: "mm2h-vs-pvip-comparison",
        category: "visa-immigration",
        excerpt: "Malaysia has long been one of Asia's most attractive destinations for foreigners seeking long-term residency. Compare MM2H and PVIP programs to find which one suits your financial profile and long-term goals.",
        author: "NextPath Global Team",
        date: "2026-01-17",
        readTime: "12 min read",
        content: `
Malaysia has long been one of Asia's most attractive destinations for foreigners seeking long-term residency, lifestyle stability, and business freedom. With its strong infrastructure, affordable living costs, and welcoming environment, many expatriates now look at structured residency programs rather than short-term visas.

Among the available long-term residency pathways, **Malaysia My Second Home (MM2H)** and the **Premium Visa Programme (PVIP)** stand out as the two most popular options.

Both programs allow foreigners to legally stay in Malaysia for an extended period—but they are designed for very different financial profiles and long-term goals.

This guide compares MM2H and PVIP clearly, focusing on what matters most: **cost efficiency, fixed deposit requirements, business opportunities, and visa duration**.

## 1. Cost Efficiency: Practical vs Premium Residency

### MM2H – Cost-Efficient & Lifestyle-Focused

The MM2H program is widely regarded as the more cost-efficient option, making it suitable for retirees, families, and long-term residents who want stability without locking in excessive capital.

**Key advantages of MM2H:**
- Lower overall financial commitment (depending on tier)
- Suitable for middle to upper-middle income applicants
- Malaysia's affordable living costs make MM2H ideal for long-term stay

MM2H focuses on quality of life, residency stability, and financial flexibility rather than aggressive investment.

### PVIP – Premium Residency for High-Net-Worth Individuals

The Premium Visa Programme (PVIP) is a high-entry, premium-tier residency program designed for investors, entrepreneurs, and ultra-high-net-worth individuals.

**Key characteristics of PVIP:**
- Very high upfront financial commitment
- Designed for applicants who prioritize flexibility and longevity over cost
- Not suitable for budget-conscious applicants

**Winner for cost efficiency:** ✅ MM2H

## 2. Fixed Deposit Requirement: Capital Lock-In Matters

### MM2H – Lower & More Flexible Fixed Deposits

One of the strongest advantages of MM2H is its comparatively lower fixed deposit requirement, especially in entry-level tiers.

**MM2H fixed deposit benefits:**
- Lower deposit requirement compared to PVIP
- Up to 50% withdrawal allowed after one year for approved purposes:
  - Property purchase
  - Medical expenses
  - Education costs
- Better flexibility for long-term financial planning

### PVIP – Higher Deposit with Limited Flexibility

PVIP requires a significantly higher fixed deposit, which is largely locked in for the duration of participation.

**PVIP deposit structure:**
- High mandatory fixed deposit
- Limited withdrawal flexibility
- Best suited for applicants with substantial liquid assets

**Winner for lower fixed deposit:** ✅ MM2H

## 3. Business & Investment Opportunities

### MM2H – Residency & Lifestyle First

MM2H is primarily a residency and lifestyle program, not a business visa.

**MM2H business scope:**
- Limited direct business involvement
- Suitable for passive investments
- Ideal for retirement or semi-retirement planning

### PVIP – Built for Business & Investors

PVIP is strongly aligned with business owners, investors, and global entrepreneurs.

**PVIP business advantages:**
- Allows active business participation
- Suitable for company ownership and management
- Ideal for investors planning regional expansion in Southeast Asia

**Winner for business opportunities:** ✅ PVIP

## 4. Visa Duration & Long-Term Stability

### MM2H – Long-Term, Tier-Based Validity

MM2H offers long-term residency with visa duration depending on the selected tier.

**MM2H visa features:**
- Long-term stay option
- Renewable subject to compliance
- Stability for families and retirees

### PVIP – One of Malaysia's Longest Visas

PVIP offers up to 20 years validity, making it one of the longest residency visas available in Malaysia.

**PVIP visa advantages:**
- No frequent renewals
- Long-term certainty for planning business, assets, and family life
- Renewable for another long term

**Winner for longest visa duration:** ✅ PVIP

## MM2H vs PVIP: Quick Comparison Table

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Factor</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">MM2H</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PVIP</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Cost Efficiency</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">High</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Low</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Fixed Deposit</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Lower</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Very High</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Business Access</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Limited</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Strong</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Visa Duration</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">5–20 years</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Up to 20 years</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Target Profile</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Retirees, families</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Investors, entrepreneurs</td>
      </tr>
    </tbody>
  </table>
</div>

## 🇲🇾 MM2H Program Cost Comparison (RM & BDT)

The MM2H program offers multiple tiers, each with different fixed deposit requirements and visa validity.

### Fixed Deposit Requirements

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">MM2H Tier</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Fixed Deposit (MYR)</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Approx. BDT</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visa Duration</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Silver</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~RM 700,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~21,000,000 BDT</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~5 years</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Gold</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~RM 2,340,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~70,200,000 BDT</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~15 years</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Platinum</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~RM 4,680,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~140,400,000 BDT</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~20 years</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">SEZ (21–49 yrs)</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~RM 305,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~9,150,000 BDT</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~10 years</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">SEZ (50+ yrs)</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~RM 150,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">~4,500,000 BDT</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~10 years</td>
      </tr>
    </tbody>
  </table>
</div>

📌 Part of the fixed deposit may be withdrawn after one year for approved purposes.

### Government Participation Fees

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Tier</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Fee (MYR)</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approx. BDT</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Platinum</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 200,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~6,000,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Gold</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 3,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~90,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Silver</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 1,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~30,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">SEZ</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 1,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~30,000 BDT</td>
      </tr>
    </tbody>
  </table>
</div>

## 💎 PVIP Program Cost Comparison (RM & BDT)

The Premium Visa Programme (PVIP) is positioned as Malaysia's top-tier residency option.

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">PVIP Item</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Fee (MYR)</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approx. BDT</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Fixed Deposit</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 1,000,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~30,000,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Principal Participation Fee</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 200,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~6,000,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Dependent Fee</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 100,000 each</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~3,000,000 BDT</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Annual Visa Fee</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">RM 2,000/year</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~60,000 BDT/year</td>
      </tr>
    </tbody>
  </table>
</div>

📌 The fixed deposit is mandatory and must be maintained in a Malaysian bank.

## Practical Cost Considerations

### Why Choose MM2H?
- Lower entry cost (especially Silver & SEZ tiers)
- Partial fixed deposit withdrawal allowed
- Ideal for lifestyle-focused long-term living

### Why Choose PVIP?
- Strong business flexibility
- No mandatory property purchase
- Longest visa duration with minimal renewals

## Top 5 Reasons Foreigners Choose MM2H or PVIP

### 1. Long-Term Legal Stay in a Stable Country
No visa runs, no short renewals—just peace of mind.

### 2. Strategic Southeast Asian Location
Perfect for business, travel, healthcare, and international education.

### 3. Affordable High-Quality Lifestyle
World-class living at a fraction of Western costs—traditional value with modern comfort.

### 4. Business-Friendly Environment
Especially under PVIP, Malaysia welcomes foreign investors and entrepreneurs.

### 5. Family-Friendly & Safe
Safe cities, cultural harmony, international schools, and long-term comfort.

## Final Thought

**MM2H** is ideal for those who prioritize cost efficiency, lifestyle, and long-term stability.

**PVIP** is designed for those seeking business freedom, long visa validity, and premium flexibility.

Different paths—but both lead to the same destination: **a secure, long-term future in Malaysia**.

## Ready to Settle in Malaysia the Right Way?

Choosing between MM2H and PVIP is not just about cost—it's about strategy, eligibility, and long-term planning. A small mistake in program selection or documentation can cost you time and money.

**Let our experienced consultants guide you before you apply.**

We help you with:
- ✔ Program suitability assessment (MM2H vs PVIP)
- ✔ Cost planning in RM & BDT
- ✔ Document preparation and verification
- ✔ Step-by-step application guidance
- ✔ Ongoing support until approval

📅 **Book a consultation:** [https://nextpathglobal.my/book-appointment](https://nextpathglobal.my/book-appointment)

📩 **Send an enquiry:** [https://nextpathglobal.my/contact](https://nextpathglobal.my/contact)

📍 **Based in Kuala Lumpur | Serving clients worldwide**

*Assessment and approvals are subject to Malaysian Immigration regulations.*
        `
    },
    {
        id: "6",
        title: "Student Life in Malaysia: What International Students Can Really Expect",
        slug: "student-life-in-malaysia",
        category: "student-life",
        excerpt: "Every year, thousands of students from Bangladesh, India, Nepal, Africa, and the Middle East choose Malaysia as their study destination. Here's an honest, practical look at student life, living costs, campus life, culture, and tips in Malaysia.",
        author: "NextPath Global Team",
        date: "2026-07-19",
        readTime: "6 min read",
        content: `
Every year, thousands of students from Bangladesh, India, Nepal, Africa, and the Middle East choose Malaysia as their study destination — and it's easy to see why. World-ranked universities, affordable living costs, a multicultural society, and degrees recognised globally. But what is daily life actually like once you land at KLIA with your student visa in hand?

Here's an honest, practical look at student life in Malaysia.

## Why Malaysia? The Big Picture

Malaysia has quietly become one of Asia's top education hubs. The country hosts over 130,000 international students across public universities like Universiti Malaya (UM), Universiti Sultan Zainal Abidin (UniSZA), and USM, plus private institutions such as Taylor's, Sunway, UCSI, and international branch campuses of UK and Australian universities like Monash and Nottingham.

The biggest draw? Value for money. Tuition fees for a bachelor's degree typically range from RM 15,000 to RM 40,000 per year — a fraction of what you'd pay in the UK, Australia, or the US, for a qualification that carries international weight.

## Cost of Living: Your Monthly Budget

This is the question every student (and every parent) asks first. Here's a realistic monthly breakdown for a student in Kuala Lumpur:

Accommodation is your biggest expense. A shared room in a condo near campus costs RM 400–700 per month, while a private room runs RM 700–1,200. Many condos come with swimming pools and gyms included — something that surprises a lot of new arrivals.

Food is where Malaysia shines. A full meal at a mamak restaurant or campus cafeteria costs RM 6–12. Cook at home and you can eat well on RM 500–700 a month. Nasi lemak, roti canai, biryani, Chinese noodles, Middle Eastern shawarma — the variety is endless, and halal food is available everywhere.

Transport is cheap and improving fast. The MRT, LRT, and Monorail network covers most of the Klang Valley, and a monthly travel pass costs around RM 50. Grab rides fill in the gaps affordably.

Altogether, most international students live comfortably on RM 1,500–2,500 per month, including rent. Students in smaller cities like Kuala Terengganu, Kuantan, or Melaka can manage on even less.

## Campus Life and Academics

Malaysian universities follow a semester system, with most degree programmes taught fully in English. Classes mix lectures, tutorials, group assignments, and presentations — expect plenty of teamwork, because employers here value communication skills as much as grades.

Campus life is active. Student societies cover everything from robotics and debate to cultural clubs where Bangladeshi, Nepali, Indonesian, Arab, and African student communities organise their own festivals and gatherings. International student offices help with visa renewals, airport pickup, and settling in during your first weeks.

One thing new students should know: attendance matters. Most universities require 80% attendance to sit for final exams, and immigration authorities monitor attendance for student pass renewals. Take your classes seriously — your visa depends on it.

## Culture, Food, and Weekends

Malaysia is genuinely multicultural. Malay, Chinese, and Indian communities live side by side, which means three sets of festivals, three cuisines, and public holidays for Hari Raya, Chinese New Year, Deepavali, and more. For Muslim students, Malaysia is especially comfortable — mosques and suraus are everywhere, halal food is the default, and Ramadan bazaars are an experience in themselves.

Weekends offer plenty to do on a student budget. Hike Bukit Tabur or Broga Hill at sunrise, take a bus to Melaka or Penang for a heritage trip, visit the Batu Caves, or simply explore KL's endless shopping malls and night markets. Langkawi and the Perhentian Islands are popular semester-break destinations, with budget flights starting under RM 100.

## The Challenges (Let's Be Honest)

No destination is perfect, and it's better to arrive prepared.

The heat and humidity take adjustment — it's 30°C+ year-round with sudden afternoon downpours. Homesickness is real, especially in the first semester, though strong diaspora communities make it easier to find people who speak your language and cook food from home.

Work rules are strict: international students can only work part-time (maximum 20 hours per week) during semester breaks and festive holidays, in limited sectors. Never rely on part-time income to fund your studies — budget for the full cost before you come. And be careful of agents who promise "study and work" packages that sound too good to be true; always verify your university's EMGS approval status and use licensed, registered consultants.

## Practical Tips for New Students

Open a local bank account early — Maybank and CIMB are the most student-friendly. Get a local SIM card (Hotlink, Celcom, or Digi) with a student data plan for RM 25–35 a month. Download Grab, Touch 'n Go eWallet, and foodpanda before you arrive; Malaysia runs on e-wallets. Keep your passport, student pass, and EMGS documents safe and always renew your visa well before expiry.

And learn a few words of Bahasa Melayu. "Terima kasih" (thank you) and "berapa harga?" (how much?) will earn you smiles everywhere.

## Final Thoughts

Student life in Malaysia offers a rare combination: quality education, affordable living, cultural comfort, and a genuinely international environment — all within a few hours' flight of home for most Asian students. Come prepared, choose a properly accredited institution through a licensed consultant, budget realistically, and you'll find Malaysia is more than a study destination. For many students, it becomes a second home.

Thinking about studying in Malaysia? Make sure you work with a licensed education consultancy that can guide you through university selection, EMGS approval, and the student visa process from start to finish.
        `
    }
];

export const getCategoryPosts = (category: BlogPost["category"]) => {
    return blogPosts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
};
