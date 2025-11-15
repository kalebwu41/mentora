export const simulations = [
  {
    id: "software-engineer",
    title: "Product Sprint at Aurora Labs",
    subtitle: "Ship a student well-being feature with your team in 48 hours.",
    badge: "Sprint Velocity",
    heroCopy:
      "You are a junior SWE on Aurora Labs’ education team. A beta feature is failing accessibility checks hours before the sprint review.",
    accent: "from-mentora-mint to-mentora-teal",
    metrics: ["Code Quality", "Team Trust", "User Impact"],
    phases: [
      {
        id: "diagnose",
        title: "Debug & Prioritize",
        narrative:
          "The build pipeline flags failing integration tests and the PM wants a status update in 15 minutes.",
        choices: [
          {
            label: "Pair with QA to isolate the regression before replying.",
            impact: { quality: 2, trust: 1, impact: 1 },
            reflection:
              "You own the issue, gather logs quickly, and provide concrete repro steps.",
          },
          {
            label: "Message the PM immediately that it’s blocked while you keep digging solo.",
            impact: { quality: 0, trust: -1, impact: 1 },
            reflection:
              "Stakeholders are informed, but teammates feel out of the loop.",
          },
          {
            label: "Roll back to the last stable commit to buy time.",
            impact: { quality: -1, trust: 0, impact: 2 },
            reflection:
              "Users stay stable, yet your team loses context on what failed.",
          },
        ],
      },
      {
        id: "strategy",
        title: "Choose a build path",
        narrative:
          "Two solutions emerge: a fast feature flag or a deeper refactor that improves long-term accessibility.",
        choices: [
          {
            label: "Ship the feature flag now and schedule refactor work next sprint.",
            impact: { quality: 0, trust: 2, impact: 1 },
            reflection:
              "Stakeholders appreciate the agility, but tech debt grows.",
          },
          {
            label: "Pause launch and tackle the refactor, presenting data to justify the delay.",
            impact: { quality: 2, trust: 1, impact: -1 },
            reflection:
              "You defend the user experience, though metrics dip temporarily.",
          },
          {
            label: "Split the team: half on flag, half on refactor, while you coordinate.",
            impact: { quality: 1, trust: 2, impact: 1 },
            reflection:
              "Collaboration is high, yet everyone hustles to juggle context.",
          },
        ],
      },
      {
        id: "review",
        title: "Sprint Review Story",
        narrative:
          "It’s showtime. You must present the trade-offs made and recommend next steps to leadership.",
        choices: [
          {
            label: "Highlight data, demos, and specific asks for design + infra support.",
            impact: { quality: 1, trust: 2, impact: 2 },
            reflection:
              "Your story earns new resources and the team feels seen.",
          },
          {
            label: "Keep the update high-level to avoid panic.",
            impact: { quality: 0, trust: -1, impact: 0 },
            reflection:
              "Stakeholders miss critical context and pepper you with follow-ups.",
          },
          {
            label: "Focus on future experiments and user quotes instead of the incident.",
            impact: { quality: -1, trust: 0, impact: 1 },
            reflection:
              "Excitement rises, but lingering bugs remain unclear.",
          },
        ],
      },
    ],
    endings: [
      {
        threshold: 5,
        title: "Calm Confidence",
        summary:
          "You balanced shipping velocity with accessibility, impressed leadership, and secured time to finish the refactor.",
      },
      {
        threshold: 2,
        title: "Scrappy Hero",
        summary:
          "The feature shipped, but you carry some tech debt. Mentora suggests pairing with a Staff SWE to plan the follow-up sprint.",
      },
      {
        threshold: -999,
        title: "Reroute Needed",
        summary:
          "Communication gaps slowed the team. Re-run the simulation focusing on stakeholder updates to unlock better outcomes.",
      },
    ],
  },
  {
    id: "nurse",
    title: "Night Shift Nurse-In-Charge",
    subtitle: "Guide a triage unit through a hectic evening.",
    badge: "Clinical Judgment",
    heroCopy:
      "You’re the acting charge nurse at a teaching hospital. A severe storm causes a surge of patients while staffing is short.",
    accent: "from-pink-400 via-rose-500 to-mentora-mint",
    metrics: ["Patient Safety", "Team Morale", "Ethics"],
    phases: [
      {
        id: "triage",
        title: "Rapid Triage",
        narrative:
          "Ambulances arrive simultaneously: a concussion case, a diabetic crisis, and a burn injury.",
        choices: [
          {
            label: "Activate mass-triage protocol and delegate each patient to specialty-trained nurses.",
            impact: { quality: 2, trust: 1, impact: 2 },
            reflection:
              "Clear delegation calms everyone and patients are stabilized quickly.",
          },
          {
            label: "Handle the diabetic patient yourself to ensure accuracy.",
            impact: { quality: 1, trust: -1, impact: 1 },
            reflection:
              "Care is precise, but the rest of the unit waits on instructions.",
          },
          {
            label: "Hold patients temporarily in triage to prevent overwhelming bays.",
            impact: { quality: -1, trust: 0, impact: -1 },
            reflection:
              "Bottlenecks form, and family members grow anxious.",
          },
        ],
      },
      {
        id: "ethics",
        title: "Family Communication",
        narrative:
          "A patient’s guardian demands unauthorized treatment while physicians are busy.",
        choices: [
          {
            label: "Calmly explain protocols, loop in social work, and document everything.",
            impact: { quality: 1, trust: 2, impact: 1 },
            reflection:
              "Transparency preserves trust and protects the patient’s chart.",
          },
          {
            label: "Promise to relay the request later to avoid conflict.",
            impact: { quality: 0, trust: -1, impact: 0 },
            reflection:
              "The guardian feels ignored, escalating tension later.",
          },
          {
            label: "Allow a small exception to ease the family’s anxiety.",
            impact: { quality: -2, trust: 0, impact: -1 },
            reflection:
              "Policy breach risks disciplinary action despite good intentions.",
          },
        ],
      },
      {
        id: "handoff",
        title: "Morning Handoff",
        narrative:
          "Dawn arrives. You must brief the incoming team while exhausted nurses look to you for recognition.",
        choices: [
          {
            label: "Run a concise SBAR handoff highlighting hero moments and lessons.",
            impact: { quality: 2, trust: 2, impact: 1 },
            reflection:
              "Morale surges, and the next shift knows exactly what to monitor.",
          },
          {
            label: "Send a quick email summary to get home faster.",
            impact: { quality: -1, trust: -1, impact: 0 },
            reflection:
              "Details get lost, forcing the day team to rediscover issues.",
          },
          {
            label: "Debrief only with leadership, assuming staff will read the chart.",
            impact: { quality: 0, trust: 0, impact: -1 },
            reflection:
              "Critical context never reaches bedside nurses.",
          },
        ],
      },
    ],
    endings: [
      {
        threshold: 5,
        title: "Unit Anchor",
        summary:
          "You protected patient safety, upheld ethics, and boosted morale. Senior leadership recommends you for a nurse residency scholarship.",
      },
      {
        threshold: 2,
        title: "Reliable Responder",
        summary:
          "Patients stayed stable, though communication slipped. Mentora recommends extra SBAR practice inside Learning Pods.",
      },
      {
        threshold: -999,
        title: "Regroup",
        summary:
          "Stress took over. Try the simulation again, emphasizing delegation and documentation to unlock a stronger outcome.",
      },
    ],
  },
  {
    id: "mechanical-engineer",
    title: "Mars Rover Mechanical Lead",
    subtitle: "Design under brutal constraints and a ticking launch window.",
    badge: "Systems Design",
    heroCopy:
      "You lead the mechanical subsystem for a student Mars rover. Budget cuts force you to rethink materials and testing plans.",
    accent: "from-amber-300 via-orange-400 to-red-500",
    metrics: ["Reliability", "Innovation", "Stakeholder Confidence"],
    phases: [
      {
        id: "materials",
        title: "Material Selection",
        narrative:
          "Aluminum prices spike. You must choose between composite panels or reinforced polymers.",
        choices: [
          {
            label: "Switch to carbon fiber and negotiate a sponsorship.",
            impact: { quality: 2, trust: 1, impact: 1 },
            reflection:
              "Weight drops dramatically, though machining time increases.",
          },
          {
            label: "Use reinforced polymers and design internal ribs for strength.",
            impact: { quality: 1, trust: 1, impact: 2 },
            reflection:
              "Manufacturing stays local and costs shrink, but risk feels higher.",
          },
          {
            label: "Delay procurement hoping prices normalize.",
            impact: { quality: -2, trust: -1, impact: -1 },
            reflection:
              "Schedule risk skyrockets and stakeholders lose confidence.",
          },
        ],
      },
      {
        id: "testing",
        title: "Test Strategy",
        narrative:
          "You only get one full system test before shipping. How do you prioritize testing time?",
        choices: [
          {
            label: "Focus on drivetrain endurance and thermal cycling.",
            impact: { quality: 2, trust: 1, impact: 1 },
            reflection:
              "Core reliability is proven, but sensor mounting goes untested.",
          },
          {
            label: "Split stations: half on drivetrain, half on arm actuation, running parallel scripts.",
            impact: { quality: 1, trust: 2, impact: 1 },
            reflection:
              "Broader coverage with creative scheduling, yet coordination is intense.",
          },
          {
            label: "Livestream testing to involve sponsors and raise funds.",
            impact: { quality: 0, trust: 1, impact: 2 },
            reflection:
              "Public excitement grows, but teams rush to meet the stream.",
          },
        ],
      },
      {
        id: "presentation",
        title: "Critical Design Review",
        narrative:
          "Judges question weight variance and maintenance access. You need to defend trade-offs.",
        choices: [
          {
            label: "Share FEA visuals, failure modes, and mitigation next steps.",
            impact: { quality: 2, trust: 2, impact: 1 },
            reflection:
              "Evidence wins them over, unlocking bonus mentorship hours.",
          },
          {
            label: "Emphasize mission storytelling and human impact.",
            impact: { quality: 0, trust: 1, impact: 2 },
            reflection:
              "Judges love the vision but push for more data.",
          },
          {
            label: "Admit limitations and ask for their advice.",
            impact: { quality: 1, trust: 1, impact: 0 },
            reflection:
              "Humility earns respect, though the outcome feels safe.",
          },
        ],
      },
    ],
    endings: [
      {
        threshold: 5,
        title: "Mission Greenlight",
        summary:
          "Your rover passed CDR with flying colors and will be showcased at the national competition.",
      },
      {
        threshold: 2,
        title: "Prototype Approved",
        summary:
          "The rover is viable, but documentation lagged. Mentora suggests a sprint dedicated to test reports.",
      },
      {
        threshold: -999,
        title: "Back to CAD",
        summary:
          "Judges flagged too many unknowns. Iterate on the simulation to practice data-driven storytelling.",
      },
    ],
  },
  {
    id: "business",
    title: "Crisis Mode Founder",
    subtitle: "Navigate a product pivot, investor calls, and a team dispute.",
    badge: "Strategic Leadership",
    heroCopy:
      "You run a teen-founded edtech startup. A pilot school pulls out, jeopardizing cash flow days before investor demos.",
    accent: "from-purple-500 via-violet-600 to-mentora-mint",
    metrics: ["Revenue Path", "Team Alignment", "Brand Trust"],
    phases: [
      {
        id: "pivot",
        title: "Pivot Decision",
        narrative:
          "Do you chase a new market segment or double down with current schools?",
        choices: [
          {
            label: "Interview counselors and pivot to mental health tracking immediately.",
            impact: { quality: 1, trust: 1, impact: 2 },
            reflection:
              "The story feels timely, but product rebuild looms.",
          },
          {
            label: "Negotiate extended pilots with a revenue-share model.",
            impact: { quality: 2, trust: 0, impact: 1 },
            reflection:
              "Cash trickles in, yet vision feels less bold.",
          },
          {
            label: "Cut the product roadmap and focus on a single premium feature.",
            impact: { quality: 0, trust: -1, impact: 0 },
            reflection:
              "Team morale drops as scope shrinks abruptly.",
          },
        ],
      },
      {
        id: "team",
        title: "Team Conflict",
        narrative:
          "Marketing wants a flashy campaign, while engineering warns the product isn’t ready.",
        choices: [
          {
            label: "Facilitate a joint workshop aligning launch criteria + success metrics.",
            impact: { quality: 2, trust: 2, impact: 1 },
            reflection:
              "Shared KPIs restore focus and unblock collaboration.",
          },
          {
            label: "Side with engineering to avoid overpromising.",
            impact: { quality: 1, trust: 0, impact: -1 },
            reflection:
              "Marketing feels sidelined and slows down.",
          },
          {
            label: "Let marketing run early ads while engineering keeps building.",
            impact: { quality: -1, trust: -1, impact: 2 },
            reflection:
              "Leads spike but churn risk grows.",
          },
        ],
      },
      {
        id: "investor",
        title: "Investor Demo",
        narrative:
          "You have six minutes to pitch the new direction. Investors crave traction proof.",
        choices: [
          {
            label: "Show baseline revenue, user testimonials, and a 90-day ramp plan.",
            impact: { quality: 2, trust: 2, impact: 2 },
            reflection:
              "Investors ask sharp questions but stay excited.",
          },
          {
            label: "Lead with vision slides and market TAM, saving data for Q&A.",
            impact: { quality: 0, trust: 1, impact: 1 },
            reflection:
              "They love the story yet crave harder metrics.",
          },
          {
            label: "Invite a partner school principal to co-present live.",
            impact: { quality: 1, trust: 1, impact: 2 },
            reflection:
              "Social proof resonates, though time runs tight.",
          },
        ],
      },
    ],
    endings: [
      {
        threshold: 5,
        title: "Funded & Focused",
        summary:
          "Investors commit a seed check, your team stays energized, and the pivot narrative lands.",
      },
      {
        threshold: 2,
        title: "Stabilized Runway",
        summary:
          "You keep the lights on, but the brand story needs polish. Mentora recommends the Business Simulation sprint again with a marketing mentor.",
      },
      {
        threshold: -999,
        title: "Reset the Pitch",
        summary:
          "Traction proof fell short. Practice balancing bold storytelling with concrete KPIs to unlock better outcomes.",
      },
    ],
  },
];

