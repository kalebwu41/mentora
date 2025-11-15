const segment = (title, items) => ({ title, items });

export const roadmaps = [
  {
    id: "software-engineering",
    title: "Software Engineering Blueprint",
    iconKey: "software",
    description:
      "From Python basics to capstone-ready AI projects, this roadmap builds a world-class coding portfolio by senior year.",
    years: [
      {
        grade: "9th Grade · Foundations",
        theme: "Find your coding voice and fall in love with building.",
        segments: [
          segment("Skills to Learn", [
            "Python fundamentals through CS50x or Code.org AP CSP units.",
            "Git + GitHub basics with daily commits to a practice repo.",
            "Problem solving on Replit challenges and Logic Puzzles.",
          ]),
          segment("Courses & Academics", [
            "Intro to Computer Science or PLTW Computer Science Essentials.",
            "Algebra I mastery to prep for algorithms later.",
            "STEM elective focusing on design thinking or engineering.",
          ]),
          segment("Clubs & Communities", [
            "Join Hack Club or start a lunchtime coding circle.",
            "Participate in STEM Club + Mathletes to sharpen logic.",
            "Attend local meetups like Girls Who Code or Black Girls Code.",
          ]),
          segment("Projects & Deliverables", [
            "Ship a personal site hosted via GitHub Pages.",
            "Build a text-based adventure game to practice control flow.",
            "Document reflections in a Notion build journal.",
          ]),
        ],
      },
      {
        grade: "10th Grade · Skill Stacking",
        theme: "Move from tinkering to shipping multi-file apps.",
        segments: [
          segment("Skills to Learn", [
            "Full web stack basics: HTML/CSS, Tailwind, and vanilla JS.",
            "APIs + JSON handling by cloning a weather dashboard.",
            "Intro to data structures (arrays, stacks, hash maps).",
          ]),
          segment("Courses & Academics", [
            "AP Computer Science Principles or dual-enrollment CS I.",
            "Geometry + Algebra II for logic and discrete math.",
            "Robotics coding subteam or TSA software events.",
          ]),
          segment("Clubs & Experiences", [
            "Code for Good weekend hackathons for social impact.",
            "Robotics coding squad (FTC/FRC) leading controls software.",
            "Volunteer as a Scratch mentor for middle schoolers.",
          ]),
          segment("Projects & Milestones", [
            "Publish a responsive portfolio using React + Vite.",
            "Win or place at least once in a rookie hackathon.",
            "Launch a small automation script that classmates actually use.",
          ]),
        ],
      },
      {
        grade: "11th Grade · Specialize",
        theme: "Layer on advanced CS topics and real-world experience.",
        segments: [
          segment("Skills to Learn", [
            "AP Computer Science A Java mastery (inheritance, recursion).",
            "Intro AI/ML via fast.ai or Stanford CS109A notebooks.",
            "CI/CD basics with GitHub Actions + automated tests.",
          ]),
          segment("Courses & Academics", [
            "AP Calculus AB for calculus-based algorithm analysis.",
            "Data Science elective or Statistics to interpret metrics.",
            "Dual-enrollment discrete math if available.",
          ]),
          segment("Programs & Internships", [
            "Apply to Google CSSI, MIT Beaver Works, or All Star Code.",
            "Pursue a local startup internship or volunteer dev role.",
            "Lead your district hackathon or start a regional coding meetup.",
          ]),
          segment("Portfolio & Competitions", [
            "Publish open-source contributions (at least 10 merged PRs).",
            "Compete in USACO Bronze/Silver or Major League Hacking High School.",
            "Record Loom walkthroughs explaining architectures.",
          ]),
        ],
      },
      {
        grade: "12th Grade · Launch",
        theme: "Polish, mentor, and prepare for CS programs + internships.",
        segments: [
          segment("Skills to Learn", [
            "Advanced algorithms (graphs, DP) via NeetCode roadmap.",
            "System design fundamentals and database modeling.",
            "Tech interview storytelling and STAR responses.",
          ]),
          segment("Courses & Academics", [
            "Capstone or independent study building an end-to-end product.",
            "AP Statistics or college-level Linear Algebra.",
            "Honors English to sharpen technical writing for documentation.",
          ]),
          segment("Experience & Leadership", [
            "Mentor underclassmen through Coding Club office hours.",
            "Ship a community-facing project (ex: tutoring marketplace).",
            "Secure a senior-year internship or research assistantship.",
          ]),
          segment("Deliverables & Next Steps", [
            "Publish a polished GitHub portfolio with README case studies.",
            "Submit CS-focused college essays referencing projects.",
            "Create a post-grad learning sprint plan for freshman summer.",
          ]),
        ],
      },
    ],
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering Journey",
    iconKey: "mechanical",
    description:
      "Blend physics, CAD, and manufacturing from day one so you can design robots, rovers, and sustainable systems.",
    years: [
      {
        grade: "9th Grade · Builder Mindset",
        theme: "Understand forces, tools, and collaborative design cycles.",
        segments: [
          segment("Skills to Learn", [
            "Sketching + dimensioning basics with engineering notebooks.",
            "Intro CAD tutorials in Fusion360 or Onshape.",
            "Hands-on prototyping using Arduino starter kits.",
          ]),
          segment("Courses & Academics", [
            "Honors Geometry & Physics (conceptual) focus on mechanics.",
            "PLTW Introduction to Engineering Design if offered.",
            "STEM Lab or Makerspace rotation each semester.",
          ]),
          segment("Clubs & Teams", [
            "Join FIRST Tech Challenge mechanical subteam.",
            "Enter TSA Dragster or VEX Design challenges.",
            "Volunteer in the makerspace as a tool safety ambassador.",
          ]),
          segment("Projects & Deliverables", [
            "Reverse-engineer a household object and redraw in CAD.",
            "Build a small Rube Goldberg machine for science night.",
            "Document testing logs with photos + reflections.",
          ]),
        ],
      },
      {
        grade: "10th Grade · Systems Thinking",
        theme: "Move from parts to mechanisms with real constraints.",
        segments: [
          segment("Skills to Learn", [
            "Intermediate CAD assemblies + joints in Fusion360/SolidWorks.",
            "Finite element basics using Fusion simulation tools.",
            "Shop training on CNC router, drill press, and laser cutter.",
          ]),
          segment("Courses & Academics", [
            "Chemistry + Algebra II to prep for materials science.",
            "Engineering Design II or PLTW Principles of Engineering.",
            "Drafting/Architecture elective for tolerances + blueprints.",
          ]),
          segment("Competitions & Programs", [
            "Enter TSA Engineering Design or VEX Change Up events.",
            "Compete in local bridge building or CO2 car races.",
            "Attend summer manufacturing program (ex: Nuts, Bolts & Thingamajigs).",
          ]),
          segment("Experiences & Deliverables", [
            "Lead drivetrain design for robotics team autonomous mode.",
            "Complete a makerspace improvement project (storage, jig).",
            "Create a CAD walkthrough video with design rationale.",
          ]),
        ],
      },
      {
        grade: "11th Grade · Engineering Depth",
        theme: "Apply physics + materials knowledge to real clients.",
        segments: [
          segment("Skills to Learn", [
            "AP Physics 1 & C mechanics problem sets weekly.",
            "GD&T notation + tolerance stack-up calculations.",
            "MATLAB or Python for data collection + plotting.",
          ]),
          segment("Courses & Academics", [
            "AP Physics 1 (fall) then AP Physics C or dual-enrollment statics.",
            "Pre-Calculus/Calculus AB for kinematics math.",
            "Manufacturing or Entrepreneurship elective to understand cost.",
          ]),
          segment("Programs & Internships", [
            "Apply to MIT MOSTEC, NASA HUNCH, or local aerospace labs.",
            "Shadow a mechanical engineer at a manufacturing plant.",
            "Lead a TSA or MATE ROV mechanical team as chief engineer.",
          ]),
          segment("Portfolio & Competitions", [
            "Present a CAD-to-fabrication case study at TSA states.",
            "Create a design review deck referencing FEA screenshots.",
            "Compete in the American Rocketry Challenge or Solar Car challenge.",
          ]),
        ],
      },
      {
        grade: "12th Grade · Launch to College",
        theme: "Demonstrate mastery with capstones, mentorship, and impact.",
        segments: [
          segment("Skills to Learn", [
            "Advanced manufacturing (5-axis CAM or metal 3D printing).",
            "Control systems basics using Arduino + PID tuning.",
            "Professional documentation with BOMs + testing matrices.",
          ]),
          segment("Courses & Academics", [
            "AP Calculus BC or Differential Equations dual-enrollment.",
            "Engineering Capstone or Independent Study tied to real client.",
            "Business/Finance elective to learn budgeting for builds.",
          ]),
          segment("Experience & Leadership", [
            "Mentor freshmen on safety training + CAD onboarding.",
            "Secure a manufacturing or aerospace internship (summer or fall).",
            "Pitch a sustainability hardware project to school board.",
          ]),
          segment("Deliverables & Next Steps", [
            "Submit CAD portfolio + design logbook with iterations.",
            "Prep scholarship + college apps emphasizing TSA + CAD awards.",
            "Create a mechanical engineering learning pod toolkit for peers.",
          ]),
        ],
      },
    ],
  },
  {
    id: "nursing-healthcare",
    title: "Nursing & Healthcare Leadership",
    iconKey: "nursing",
    description:
      "Cultivate compassion, clinical readiness, and leadership so you enter nursing programs with real patient-facing experience.",
    years: [
      {
        grade: "9th Grade · Care Foundations",
        theme: "Explore healthcare environments and build empathy.",
        segments: [
          segment("Skills to Learn", [
            "Medical terminology basics using Quizlet decks.",
            "Vital signs practice with at-home devices.",
            "Reflective journaling to build bedside communication.",
          ]),
          segment("Courses & Academics", [
            "Honors Biology with lab emphasis on anatomy and cells.",
            "Health Sciences elective or Principles of Biomedical Science.",
            "Speech/Drama elective to improve patient communication.",
          ]),
          segment("Clubs & Service", [
            "Join HOSA Future Health Professionals chapter.",
            "Volunteer at Red Cross drives or community clinics.",
            "Shadow school nurse for a day and capture insights.",
          ]),
          segment("Certifications & Deliverables", [
            "Earn CPR + First Aid certification through the Red Cross.",
            "Create a self-care plan covering sleep, nutrition, stress.",
            "Start an empathy map notebook for patient scenarios.",
          ]),
        ],
      },
      {
        grade: "10th Grade · Clinical Skills",
        theme: "Gain hands-on practice and deepen science rigor.",
        segments: [
          segment("Skills to Learn", [
            "Phlebotomy basics using simulation kits.",
            "Patient intake interviewing with role-play scripts.",
            "Electronic health record (EHR) note writing (mock).",
          ]),
          segment("Courses & Academics", [
            "Chemistry + Anatomy & Physiology (or PLTW Human Body Systems).",
            "Psychology elective to understand behavior + empathy.",
            "AP World History focusing on global health systems.",
          ]),
          segment("Programs & Clubs", [
            "Compete in HOSA Public Health or Clinical Specialty events.",
            "Join hospital volunteering or assisted living rotations.",
            "Participate in local CERT or disaster-prep trainings.",
          ]),
          segment("Certifications & Deliverables", [
            "Complete Stop the Bleed + Mental Health First Aid.",
            "Launch a wellness workshop at school focusing on stress relief.",
            "Document 50+ service hours with supervisor feedback letters.",
          ]),
        ],
      },
      {
        grade: "11th Grade · Professional Prep",
        theme: "Step into clinical settings and leadership roles.",
        segments: [
          segment("Skills to Learn", [
            "CNA training (Certified Nursing Assistant) & state exam prep.",
            "Medication math + dosage conversions through Khan Academy.",
            "SBAR communication for nurse handoffs.",
          ]),
          segment("Courses & Academics", [
            "AP Biology or AP Chemistry to prep for nursing prerequisites.",
            "Dual-enrollment Medical Terminology or Microbiology.",
            "Statistics elective to interpret clinical research.",
          ]),
          segment("Experience & Leadership", [
            "Hospital volunteering upgraded to patient transport or NICU cuddler roles.",
            "Lead HOSA chapter initiatives such as health fairs.",
            "Shadow registered nurses in at least two specialties.",
          ]),
          segment("Deliverables & Competitions", [
            "Compete at HOSA State in Clinical Nursing or Epidemiology.",
            "Create a case study portfolio summarizing patient interactions.",
            "Build a LinkedIn profile featuring certifications + reflections.",
          ]),
        ],
      },
      {
        grade: "12th Grade · Launch & Impact",
        theme: "Finalize credentials and craft a college-ready narrative.",
        segments: [
          segment("Skills to Learn", [
            "Advanced patient assessment + care planning (NANDA diagnoses).",
            "Evidence-based practice reading + note synthesis.",
            "Leadership + delegation scenarios for charge nurse roles.",
          ]),
          segment("Courses & Academics", [
            "AP Psychology or Sociology to understand patient behavior.",
            "Health Science Capstone or EMT-B course.",
            "English seminar emphasizing personal statement + scholarship essays.",
          ]),
          segment("Programs & Experience", [
            "Apply to hospital bridge programs or nurse residency internships.",
            "Lead a community health initiative (vaccination drive, blood pressure clinic).",
            "Mentor freshmen HOSA members and run CNA study groups.",
          ]),
          segment("Deliverables & Next Steps", [
            "Compile a professional portfolio with certifications, logs, references.",
            "Submit nursing school applications + INTEREST-specific essays.",
            "Design a freshman-year success plan (study schedule, NCLEX preview).",
          ]),
        ],
      },
    ],
  },
  {
    id: "business-entrepreneurship",
    title: "Business & Entrepreneurship Track",
    iconKey: "business",
    description:
      "Launch ventures, pitch investors, and master financial literacy from high school through college entrance.",
    years: [
      {
        grade: "9th Grade · Discovery",
        theme: "Understand markets, customers, and storytelling.",
        segments: [
          segment("Skills to Learn", [
            "Design thinking sprints (problem interviews, persona maps).",
            "Google Sheets basics for budgeting + cash-flow tracking.",
            "Canva + video editing for marketing content.",
          ]),
          segment("Courses & Academics", [
            "Intro to Business or Entrepreneurship I elective.",
            "Speech & Debate or Model UN for persuasion practice.",
            "Algebra I mastery for future finance modeling.",
          ]),
          segment("Clubs & Communities", [
            "Join DECA as a freshman and observe role-play events.",
            "Collaborate with Future Business Leaders of America (FBLA).",
            "Volunteer at local small businesses or farmers markets.",
          ]),
          segment("Projects & Deliverables", [
            "Launch a $100 challenge micro-business (stickers, tutoring).",
            "Publish a monthly newsletter curating teen business trends.",
            "Keep a pitch journal capturing problems worth solving.",
          ]),
        ],
      },
      {
        grade: "10th Grade · Experiment",
        theme: "Test business ideas with real customers and iterate fast.",
        segments: [
          segment("Skills to Learn", [
            "Financial modeling with profit & loss statements.",
            "Brand positioning + copywriting for landing pages.",
            "Intro to low-code tools (Glide, Bubble) for MVPs.",
          ]),
          segment("Courses & Academics", [
            "Marketing or Finance elective, plus Honors English for storytelling.",
            "AP Human Geography focusing on global markets.",
            "Statistics or Data Science elective to analyze surveys.",
          ]),
          segment("Competitions & Programs", [
            "Enter DECA Principles of Marketing or Entrepreneurship events.",
            "Attend local entrepreneurship bootcamps or Startup Weekends.",
            "Join Junior Achievement company program to sell a product.",
          ]),
          segment("Experiences & Deliverables", [
            "Launch Shopify or Etsy store with monthly KPI reviews.",
            "Host customer discovery interviews + publish insights blog.",
            "Pitch at least once to a local entrepreneur council.",
          ]),
        ],
      },
      {
        grade: "11th Grade · Scale",
        theme: "Operate like a startup CEO—data-driven decisions + leadership.",
        segments: [
          segment("Skills to Learn", [
            "Advanced financial analysis (break-even, CAC:LTV).",
            "CRM + email automation workflows (HubSpot / Mailchimp).",
            "Negotiation frameworks (BATNA, anchoring).",
          ]),
          segment("Courses & Academics", [
            "AP Microeconomics + Personal Finance dual-enrollment.",
            "Business Law or Entrepreneurship II capstone.",
            "AP Language focusing on thought leadership essays.",
          ]),
          segment("Programs & Internships", [
            "Intern with a local startup or marketing agency.",
            "Join a youth venture fund or VC fellowship (Genius Guild, Accelerator).",
            "Serve as DECA/FBLA officer running chapter operations.",
          ]),
          segment("Competitions & Deliverables", [
            "Compete in DECA written events or Diamond Challenge finals.",
            "Host a community pitch night raising funds for a cause.",
            "Publish a polished investor deck + 3-minute pitch video.",
          ]),
        ],
      },
      {
        grade: "12th Grade · CEO Ready",
        theme: "Demonstrate traction, mentor others, and plan the next decade.",
        segments: [
          segment("Skills to Learn", [
            "Hiring & team systems (Notion OS, sprint rituals).",
            "Advanced analytics dashboards (Looker/Data Studio).",
            "Investor relations + term sheet basics.",
          ]),
          segment("Courses & Academics", [
            "AP Macroeconomics + Entrepreneurship Incubator.",
            "College-level Accounting or Venture Finance (dual-enrollment).",
            "Capstone focusing on social entrepreneurship or fintech.",
          ]),
          segment("Experience & Leadership", [
            "Scale revenue past $5K or demonstrate impact metrics.",
            "Mentor freshmen in DECA role-plays + marketing sprints.",
            "Host a regional youth founders mastermind or podcast.",
          ]),
          segment("Deliverables & Next Steps", [
            "Submit business scholarship + pitch competition apps.",
            "Craft a college supplemental essay narrating venture impact.",
            "Design a 4-year roadmap for internships, accelerators, and mentors.",
          ]),
        ],
      },
    ],
  },
];

