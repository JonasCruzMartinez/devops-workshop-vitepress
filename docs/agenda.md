# Workshop Agenda (120 Minutes)

Follow this site—edit notes/PR for live updates. 3 presenters rotate: P1 (Intro/Code/Build), P2 (Test/Release), P3 (Deploy/CI/CD/Wrap). Buffers: 10 min total. Ties to full DevOps (CALMS) via GitHub Actions automation. Basics: Each phase builds on prior—Code (edits) → Build (artifact: compiled files) → Test (validate artifact) → Release (version artifact) → Deploy (publish artifact).

- **0:00–0:10: Intro & Setup (P1)**  
  Welcome/objectives [](/; CALMS overview; explain artifact: Compiled output for consistency]. Fork/clone/preview. Poll: "Setup done?" Handoff: P2 preps test demo. Reflection: Setup enables Code phase.

- **0:10–0:30: Theory – Code & Build (P1, 20 min)**  
  Read [/theory/code](/theory/code) & [/theory/build](/theory/build) (Culture/Automation via Actions; why build artifact? Transforms source to production-ready files). Q&A: Git workflows. Verify: Local edit reloads. Buffer: 2 min. Reflection: Code starts pipeline; Build creates artifact—next, test it.

- **0:30–0:50: Hands-On – Code & Build (P2, 20 min)**  
  Follow [/hands-on/code-build](/hands-on/code-build) (edit/PR/build YAML with Actions; why artifact? Ensures deployable format). Checkpoint: Green Actions; artifact download. Simulation: Lint fail. Handoff: P3 for release. Reflection: You've coded and built an artifact—next, test validates it before release.

- **0:50–1:10: Theory – Test & Release (P2, 20 min)**  
  Explore [/theory/test](/theory/test) & [/theory/release](/theory/release) (Measurement/Lean via Jest/tags in Actions; why tag? Versions artifact for milestones, not every build—to track changes safely). Q&A: Why separate release/deploy? Verify: `pnpm test` passes. Buffer: 2 min. Reflection: Test checks artifact quality; Release versions it—next, hands-on applies.

- **1:10–1:30: Hands-On – Test & Release (P3, 20 min)**  
  Per [/hands-on/test-release](/hands-on/test-release) (add test/tag v1.0 with Actions; why not release every build? Tags for audits/sharing without clutter). Share ZIP. Simulation: Test fail/fix. Reflection: Tested/ versioned artifact—next, deploy publishes it live.

- **1:30–1:50: Theory – Deploy & CI/CD (P3, 20 min)**  
  Review [/theory/deploy](/theory/deploy) & [/theory/cicd](/theory/cicd) (Automation/Sharing via Pages/full pipeline; why deploy? Makes artifact accessible online). Discuss CALMS. Verify: Manual deploy. Reflection: Full flow: Code→Build (artifact)→Test→Release (version)→Deploy (live).

- **1:50–2:10: Hands-On Deploy & Wrap (All, 20 min)**  
  [/hands-on/deploy](/hands-on/deploy) (add deploy job; full run with Actions; recap: Deploys artifact—why tag separately? For rollback/milestones). Edit [/progress](/progress) & [/resources/feedback](/resources/feedback). Shares/Q&A (5 min). Homework: [/resources/extensions](/resources/extensions). Certificates: Add to site! Reflection: Pipeline complete—from code to live site.

**My Notes** (Edit/PR):  
- [Time]: Key takeaway from Code phase.
