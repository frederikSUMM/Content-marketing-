import { useState } from "react";

const GOLD = "#B5922A";
const GOLD_LIGHT = "#D4AE5A";
const GOLD_DARK = "#8A6E1A";
const CREAM = "#F5EDD8";
const MAROON = "#5C1A1A";
const OFF_WHITE = "#FAF6EE";
const TEXT = "#2C1810";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${OFF_WHITE};
    color: ${TEXT};
  }

  .app {
    min-height: 100vh;
    background: ${OFF_WHITE};
  }

  /* HEADER */
  .header {
    background: ${GOLD};
    padding: 28px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 3px solid ${GOLD_DARK};
  }
  .header-brand {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .header-summ {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 32px;
    color: ${CREAM};
    letter-spacing: -1px;
  }
  .header-sub {
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: ${CREAM};
    opacity: 0.8;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .header-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: ${CREAM};
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0.85;
  }

  /* NAV TABS */
  .nav {
    background: ${MAROON};
    padding: 0 48px;
    display: flex;
    gap: 0;
    overflow-x: auto;
  }
  .nav-tab {
    padding: 14px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${CREAM};
    opacity: 0.55;
    cursor: pointer;
    border: none;
    background: none;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .nav-tab:hover { opacity: 0.8; }
  .nav-tab.active {
    opacity: 1;
    border-bottom: 3px solid ${GOLD};
  }

  /* MAIN */
  .main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px;
  }

  /* SECTION HEADER */
  .section-header {
    margin-bottom: 40px;
  }
  .section-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${GOLD};
    margin-bottom: 10px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 900;
    color: ${MAROON};
    line-height: 1.1;
    margin-bottom: 14px;
  }
  .section-desc {
    font-size: 16px;
    font-weight: 300;
    color: ${TEXT};
    opacity: 0.75;
    max-width: 640px;
    line-height: 1.6;
  }

  /* CARDS */
  .card {
    background: white;
    border: 1px solid rgba(181,146,42,0.2);
    border-radius: 4px;
    padding: 28px;
    transition: box-shadow 0.2s;
  }
  .card:hover {
    box-shadow: 0 4px 24px rgba(92,26,26,0.08);
  }
  .card-gold {
    background: ${GOLD};
    border-color: ${GOLD_DARK};
  }
  .card-maroon {
    background: ${MAROON};
    border-color: ${MAROON};
  }
  .card-cream {
    background: ${CREAM};
    border-color: rgba(181,146,42,0.3);
  }

  /* GRID */
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
  .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px; }

  /* TAGS */
  .tag {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .tag-gold { background: ${GOLD}; color: ${CREAM}; }
  .tag-maroon { background: ${MAROON}; color: ${CREAM}; }
  .tag-cream { background: ${CREAM}; color: ${MAROON}; border: 1px solid rgba(181,146,42,0.4); }
  .tag-outline { border: 1.5px solid ${GOLD}; color: ${GOLD}; background: transparent; }

  /* LINKEDIN POST PREVIEW */
  .li-post {
    background: white;
    border: 1px solid #e0d8c8;
    border-radius: 8px;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    max-width: 560px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .li-post-header {
    padding: 16px 16px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .li-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 16px;
    flex-shrink: 0;
  }
  .li-name {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.3;
  }
  .li-role {
    font-size: 12px;
    color: #666;
    line-height: 1.3;
  }
  .li-time {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
  .li-body {
    padding: 12px 16px 16px;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 1.55;
    white-space: pre-line;
  }
  .li-image {
    width: 100%;
    background: ${GOLD};
    padding: 32px 24px;
    color: ${CREAM};
    text-align: center;
    font-size: 22px;
    font-weight: 800;
    font-family: 'Playfair Display', serif;
    line-height: 1.3;
  }
  .li-reactions {
    padding: 8px 16px;
    border-top: 1px solid #f0ede8;
    display: flex;
    gap: 16px;
  }
  .li-react-btn {
    font-size: 13px;
    color: #666;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background: none;
  }
  .li-react-btn:hover { background: #f3f2ef; }

  /* PILL SELECTOR */
  .pill-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }
  .pill {
    padding: 8px 18px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border: 1.5px solid rgba(181,146,42,0.4);
    color: ${GOLD_DARK};
    background: white;
    transition: all 0.15s;
    letter-spacing: 0.5px;
  }
  .pill:hover { border-color: ${GOLD}; color: ${GOLD}; }
  .pill.active {
    background: ${GOLD};
    color: ${CREAM};
    border-color: ${GOLD};
  }

  /* DIVIDER */
  .divider {
    height: 1px;
    background: rgba(181,146,42,0.2);
    margin: 32px 0;
  }
  .divider-gold {
    height: 3px;
    background: ${GOLD};
    width: 48px;
    margin: 12px 0 24px;
  }

  /* VOICE METER */
  .voice-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }
  .voice-label {
    font-size: 12px;
    font-weight: 600;
    color: ${MAROON};
    width: 110px;
    flex-shrink: 0;
  }
  .voice-track {
    flex: 1;
    height: 6px;
    background: rgba(181,146,42,0.15);
    border-radius: 3px;
    overflow: hidden;
  }
  .voice-fill {
    height: 100%;
    background: ${GOLD};
    border-radius: 3px;
  }
  .voice-vs {
    font-size: 11px;
    color: #888;
    width: 90px;
    text-align: right;
    flex-shrink: 0;
  }

  /* CONTENT CALENDAR */
  .cal-week {
    display: grid;
    grid-template-columns: 80px repeat(5, 1fr);
    gap: 1px;
    background: rgba(181,146,42,0.15);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  .cal-cell {
    background: white;
    padding: 14px;
    min-height: 80px;
  }
  .cal-day-header {
    background: ${MAROON};
    color: ${CREAM};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 10px;
  }
  .cal-week-label {
    background: ${GOLD};
    color: ${CREAM};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    padding: 8px;
  }
  .cal-item {
    background: ${CREAM};
    border-left: 3px solid ${GOLD};
    padding: 6px 8px;
    border-radius: 0 3px 3px 0;
    font-size: 10px;
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .cal-item.maroon { border-left-color: ${MAROON}; background: rgba(92,26,26,0.06); }
  .cal-item.dark { border-left-color: ${GOLD_DARK}; }
  .cal-empty { color: #ccc; font-size: 11px; display: flex; align-items: center; justify-content: center; height: 100%; }

  /* COPY BUTTON */
  .copy-btn {
    padding: 8px 16px;
    background: ${MAROON};
    color: ${CREAM};
    border: none;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .copy-btn:hover { background: ${GOLD}; }
  .copy-btn.copied { background: #2D7D46; }

  /* FORMULA BLOCK */
  .formula {
    background: ${MAROON};
    border-radius: 4px;
    padding: 20px 24px;
    font-family: 'DM Mono', monospace;
    color: ${CREAM};
    font-size: 13px;
    line-height: 1.8;
  }
  .formula-var { color: ${GOLD_LIGHT}; font-weight: 500; }
  .formula-op { color: rgba(245,237,216,0.4); }
  .formula-val { color: ${CREAM}; }

  /* STAT BOX */
  .stat-box {
    text-align: center;
    padding: 24px;
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    font-weight: 900;
    color: ${GOLD};
    line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${MAROON};
  }
  .stat-sub {
    font-size: 12px;
    color: #888;
    margin-top: 4px;
  }

  /* PERSONA BADGE */
  .persona-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 100px;
    background: rgba(181,146,42,0.1);
    border: 1px solid rgba(181,146,42,0.3);
    font-size: 12px;
    font-weight: 500;
    color: ${GOLD_DARK};
    margin-right: 6px;
    margin-bottom: 6px;
  }

  /* ACCORDION */
  .accordion-item {
    border: 1px solid rgba(181,146,42,0.2);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .accordion-header {
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: white;
    transition: background 0.15s;
  }
  .accordion-header:hover { background: ${CREAM}; }
  .accordion-header.open { background: ${CREAM}; }
  .accordion-title {
    font-size: 14px;
    font-weight: 600;
    color: ${MAROON};
  }
  .accordion-body {
    padding: 0 20px 20px;
    background: ${CREAM};
    font-size: 13.5px;
    color: ${TEXT};
    line-height: 1.65;
  }

  /* HIGHLIGHT */
  .highlight {
    background: rgba(181,146,42,0.12);
    border-left: 3px solid ${GOLD};
    padding: 14px 18px;
    border-radius: 0 4px 4px 0;
    font-size: 14px;
    color: ${TEXT};
    line-height: 1.6;
    margin: 12px 0;
  }
  .highlight strong { color: ${MAROON}; }

  /* EMOJI ROW */
  .emoji-row {
    display: flex;
    gap: 4px;
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: 900px) {
    .main { padding: 24px; }
    .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .header { padding: 16px 24px; }
    .nav { padding: 0 24px; }
  }
`;

// ─── DATA ───────────────────────────────────────────────────────────────────

const CONTENT_PILLARS = [
  {
    id: "science",
    emoji: "🔬",
    label: "The Science",
    title: "The Science of Cross-Fermentation",
    desc: "Own the intellectual high ground. Educate without intimidating. Make fermentation fascinating.",
    frequency: "2x/month",
    formats: ["Long-form article", "Process visual", "Q&A thread"],
    authors: ["Chuchu", "Nabila"],
    color: MAROON,
    why: "Very few ingredient companies explain their process accessibly. This is a trust-builder and a moat."
  },
  {
    id: "application",
    emoji: "🍽️",
    label: "Applications",
    title: "FermiPro in the Wild",
    desc: "Show, don't sell. Real food. Real results. The sensory proof that FermiPro works.",
    frequency: "1x/week",
    formats: ["Before/after", "Video tasting", "Recipe breakdown"],
    authors: ["Frederik", "Nabila"],
    color: GOLD,
    why: "R&D buyers are skeptical until they can taste it. This bridges from interest to sample request."
  },
  {
    id: "trends",
    emoji: "📈",
    label: "Industry Insight",
    title: "Where Food is Going",
    desc: "Salt reduction, protein quality, clean label regulation — be the smartest voice in the room.",
    frequency: "1x/week",
    formats: ["Trend take", "Data commentary", "News reaction"],
    authors: ["Frederik", "Kasper"],
    color: GOLD_DARK,
    why: "This earns follows from people who aren't ready to buy yet. It builds the top of funnel."
  },
  {
    id: "team",
    emoji: "👥",
    label: "Human Stories",
    title: "The People Behind SUMM",
    desc: "B2B is built on trust. Real people, real curiosity, real backgrounds — not corporate voice.",
    frequency: "2x/month",
    formats: ["Personal post", "Origin story", "Behind the scenes"],
    authors: ["Frederik", "Kasper", "Chuchu", "Nabila"],
    color: MAROON,
    why: "The SUMM team is genuinely interesting. This differentiates from faceless competitor brands."
  },
  {
    id: "proof",
    emoji: "✅",
    label: "Proof Points",
    title: "Evidence That FermiPro Delivers",
    desc: "Data, functional results, side-by-side comparisons. The technical reassurance buyers need.",
    frequency: "2x/month",
    formats: ["Stat carousel", "Comparison post", "Technical explainer"],
    authors: ["Chuchu", "Kasper"],
    color: GOLD,
    why: "Procurement and R&D need evidence. This moves people from curious to convinced."
  }
];

const POST_EXAMPLES = [
  {
    id: "story1",
    pillar: "team",
    author: "Frederik Østergaard Jensen",
    role: "CEO & Founder, SUMM Ingredients",
    avatarBg: MAROON,
    avatarInit: "FJ",
    persona: "All",
    format: "Personal Story",
    hook: "Origin Story",
    text: `My daughter is 4. She eats everything.

Not because I forced it — because the food we make at home actually tastes good. Full stop.

But I spent 15 years developing products for Fortune 500 companies, and I kept running into the same wall:

The moment you try to make food "better for you," it stops tasting good.

Remove the salt → it tastes flat.
Add protein → it gets chalky.
Go clean label → the texture falls apart.

Every win somewhere came at a cost somewhere else.

That's what SUMM is trying to fix.

Not by finding a clever additive that masks the problems.
By using fermentation to make the base ingredient do more.

FermiPro started as a question: what if faba beans, fermented properly, could deliver umami, creaminess, AND nutrition — without any of the usual trade-offs?

Turns out: they can.

Three words on the label. Ten effects in the product.

We're just getting started. But my daughter has better snacks now. That counts.

—

I'd love to know: what's the hardest formulation trade-off you've faced? Drop it below.`,
    imageText: "Do SUMM good.",
    tags: ["Origin Story", "Founder", "Clean Label"]
  },
  {
    id: "science1",
    pillar: "science",
    author: "Chuchu Huang",
    role: "CTO & Co-Founder, SUMM Ingredients",
    avatarBg: GOLD_DARK,
    avatarInit: "CH",
    persona: "R&D / Technical",
    format: "Educational Thread",
    hook: "Technical Insight",
    text: `Most people think fermentation = adding a probiotic and calling it a day.

Cross-fermentation is something different. Let me explain.

When we process FermiPro, we don't use a single microbial strain.

We use a precise, sequential set of microorganisms — each one working in a modified environment created by the one before it.

The byproducts of Step 1 become the substrate of Step 2.
The pH shift from Step 2 enables reactions in Step 3.

Each stage builds on what came before.

The result?

→ Peptide chains that deliver kokumi richness (that mouthfeel you associate with aged cheese or long-cooked broth)
→ Glutamic acid expression for genuine umami — not the shortcut kind
→ Modified protein structure for high solubility and emulsification
→ Improved bioavailability — the nutrition actually reaches you

You cannot get this from a single-step fermentation. The layering is the point.

We call it cross-fermentation. Think of it as orchestrated transformation rather than a single reaction.

It's why FermiPro does what it does.
And why one ingredient can replace four.

Nerdy question welcome below 👇`,
    imageText: "Cross-fermentation:\nOrchestrated transformation",
    tags: ["Science", "Fermentation", "Technical"]
  },
  {
    id: "app1",
    pillar: "application",
    author: "Nabila Rodríguez Valerón",
    role: "Head of Flavor Fermentation, SUMM",
    avatarBg: GOLD,
    avatarInit: "NR",
    persona: "R&D / Innovation",
    format: "Before/After",
    hook: "Taste Test",
    text: `I asked 12 food scientists to try two versions of the same tomato sauce.

Version A: Standard formulation. Bouillon, flavor additives, starch for body.
Version B: FermiPro at 3%. Nothing else changed.

Blind test. No context given.

Results:

→ 11/12 preferred Version B on depth of flavor
→ 10/12 said B had "better mouthfeel"
→ 8/12 guessed B had dairy in it (it didn't)
→ 3 people asked if B had been "slow-cooked longer"

It hadn't. Same process. One ingredient difference.

Here's what's happening chemically:

FermiPro's fermentation-derived peptides trigger the kokumi receptors. These aren't about taste exactly — they're about continuity, richness, fullness. The sensation of "something has been cooking for hours."

You don't need more hours. You need the right biochemistry.

The label for Version B?
"Tomato, onion, garlic, olive oil, fermented faba bean protein, sea salt."

That's it.

The future of clean-label food doesn't taste like a compromise.

It tastes like this.

DM me if you want to run your own tasting.`,
    imageText: "Version B.\nSame process.\nDifferent world.",
    tags: ["Application", "Tasting", "Science"]
  },
  {
    id: "trend1",
    pillar: "trends",
    author: "Kasper Bus",
    role: "CCO, SUMM Ingredients",
    avatarBg: MAROON,
    avatarInit: "KB",
    persona: "Innovation / Procurement",
    format: "Industry Take",
    hook: "Trend Commentary",
    text: `The EU's proposed updates to "natural flavoring" definitions are going to reshape a lot of formulas.

Here's what that means practically:

Right now, a lot of "clean label" products are clean-looking but not clean in any meaningful sense. The labels are short because certain complex additives can hide behind umbrella terms.

That window is closing.

For food manufacturers, this means two things:

1. Reformulation is coming whether you plan for it or not.
2. The companies that get ahead of it now will have a competitive edge.

What's the alternative to complex additive stacks?

Ingredients that do multiple jobs by nature — not by chemical modification.

Fermentation-derived ingredients are particularly well-positioned here because:
→ The "work" is done by biology, not chemistry
→ The label reads as recognizable whole foods
→ The function is intrinsic to the ingredient, not added

We're not predicting the future here. We're watching the regulation and building accordingly.

If your team is thinking about this — happy to share what we're seeing from an ingredient development perspective.

What categories do you think will feel this most?`,
    imageText: null,
    tags: ["Regulation", "Clean Label", "EU", "Industry"]
  },
  {
    id: "proof1",
    pillar: "proof",
    author: "Chuchu Huang",
    role: "CTO & Co-Founder, SUMM Ingredients",
    avatarBg: GOLD_DARK,
    avatarInit: "CH",
    persona: "R&D / Technical",
    format: "Data Post",
    hook: "Proof Point",
    text: `We ran FermiPro head-to-head against a standard yeast extract + sodium glutamate combination in a snack seasoning.

Same target flavor profile. Same processing conditions. Same application rate.

Results (sensory panel, n=24, double-blind):

Umami intensity: FermiPro 7.8/10 vs control 7.2/10 ✓
Kokumi / lingering richness: FermiPro 8.1/10 vs control 5.4/10 ✓✓
Off-note / metallic finish: FermiPro 1.1/10 vs control 3.8/10 ✓✓✓
Sodium content: FermiPro 40% lower ✓✓✓

Label count: FermiPro = 1 ingredient. Control = 3 ingredients.

The part I find most interesting is the kokumi score.

Yeast extracts deliver glutamates well. But they don't deliver the kokumi effect — that persistent, full, rich sensation that makes food craveable in a way that's hard to explain.

That's where fermentation-derived peptides earn their place.

If your snack or seasoning team is battling the "good initial hit but no finish" problem — this is what's missing.

Raw data available on request. Happy to run a specific application test with your team.`,
    imageText: "40% less sodium.\nSame craveability.\nOne ingredient.",
    tags: ["Data", "Snacks", "Proof", "Technical"]
  },
  {
    id: "human1",
    pillar: "team",
    author: "Frederik Østergaard Jensen",
    role: "CEO & Founder, SUMM Ingredients",
    avatarBg: MAROON,
    avatarInit: "FJ",
    persona: "All",
    format: "Honest Take",
    hook: "Counterintuitive POV",
    text: `Hot take: the ingredient industry is partly responsible for the UPF problem.

Not because manufacturers are evil.
Because the system rewarded specialization.

You want umami? Here's an extract for that.
You want texture? Here's a gum for that.
You want shelf life? Here's a stabilizer for that.

Each one solved one problem. Together, they created a new one: a 25-ingredient list that no consumer trusts.

The answer isn't to demonize the ingredients that got us here. A lot of them were genuine innovations solving real problems.

The answer is to ask a different question.

Instead of "what ingredient fixes this?" — ask "what ingredient could do all of this?"

That's the question SUMM is built on. Multifunctional ingredients aren't just a cleaner option. They're a smarter architecture.

One ingredient with deep biology does what five specialized ones do — without the cumulative complexity.

It's not a moralizing position. It's an engineering one.

The food system doesn't need a villain. It needs better tools.

FermiPro is one of them.`,
    imageText: null,
    tags: ["POV", "Founder", "Industry", "UPF"]
  }
];

const CONTENT_CALENDAR = [
  {
    week: "W1",
    mon: { text: "Frederik: Origin story post", type: "team" },
    tue: null,
    wed: { text: "FermiPro application: Bouillon Creamer tasting", type: "gold" },
    thu: null,
    fri: { text: "Kasper: Industry trend take (salt reduction regulation)", type: "dark" }
  },
  {
    week: "W2",
    mon: null,
    tue: { text: "Chuchu: Cross-fermentation explainer (article)", type: "team" },
    wed: null,
    thu: { text: "Nabila: Before/after sensory test results", type: "gold" },
    fri: { text: "SUMM Co: FermiPro proof point — sodium reduction data", type: "dark" }
  },
  {
    week: "W3",
    mon: { text: "Frederik: Counterintuitive industry POV", type: "team" },
    tue: null,
    wed: { text: "Application showcase: Snack Booster craveability", type: "gold" },
    thu: { text: "Chuchu: Technical Q&A on fermentation science", type: "team" },
    fri: null
  },
  {
    week: "W4",
    mon: null,
    tue: { text: "Kasper: Clean label regulation update + take", type: "dark" },
    wed: { text: "Nabila: Kokumi — the flavor science most people miss", type: "gold" },
    thu: null,
    fri: { text: "SUMM Co: Month wrap + what's coming in product", type: "dark" }
  }
];

const VOICE_DIMS = [
  { label: "Technical", fill: 75, vs: "not impenetrable" },
  { label: "Confident", fill: 85, vs: "not arrogant" },
  { label: "Specific", fill: 90, vs: "not vague" },
  { label: "Warm", fill: 65, vs: "not corporate" },
  { label: "Playful", fill: 45, vs: "not flippant" },
  { label: "Edgy", fill: 35, vs: "not safe" },
];

const POST_FORMULAS = [
  {
    name: "The Contrast Hook",
    code: `[Surprising observation about food/industry]

Most people assume [conventional belief].
But [counter-evidence or personal experience].

Here's why that matters for [specific application]:

→ [Implication 1]
→ [Implication 2]
→ [Implication 3]

[Bridge to FermiPro/SUMM — never the first mention]

[Genuine question to invite engagement]`,
    when: "When you have a genuine contrarian insight. Best for trend/industry posts.",
    author: "Frederik, Kasper"
  },
  {
    name: "The Process Reveal",
    code: `Most people think [process] works like [oversimplification].

It doesn't. Here's what actually happens:

Step 1: [Real description]
Step 2: [What that creates]
Step 3: [The emergent effect]

The result is [concrete outcome].

You cannot get this from [simpler alternative] because [specific reason].

[1-2 sentences on why this matters commercially]

Nerdy questions welcome 👇`,
    when: "When explaining the science. Best from Chuchu or Nabila. Never sells — always teaches.",
    author: "Chuchu, Nabila"
  },
  {
    name: "The Sensory Story",
    code: `I gave [number] [type of people] two versions of [product].

Version A: [standard formulation description]
Version B: [FermiPro formulation description]

Blind. No context. Just taste.

Results:

→ [Specific sensory finding with numbers]
→ [Specific sensory finding with numbers]
→ [Surprising or counterintuitive result]

Here's what's happening [scientifically]:

[1-2 sentence accessible explanation]

The label for Version B?
[Short clean label — the reveal]

[Call to action: DM for sample / tasting]`,
    when: "When you have real tasting data or sensory results. Creates credibility fast.",
    author: "Nabila, Frederik"
  },
  {
    name: "The Data Drop",
    code: `We ran [FermiPro] head-to-head against [conventional alternative].

Same [conditions]. Same [application]. Different ingredient.

Results ([methodology]):

[Metric]: FermiPro [score] vs control [score] [emoji verdict]
[Metric]: FermiPro [score] vs control [score] [emoji verdict]
[Metric]: FermiPro [score] vs control [score] [emoji verdict]

[The most interesting/surprising finding explained in 2 sentences]

[Practical implication for a specific team or problem]

Raw data available on request.`,
    when: "Monthly or when you have new test data. Speaks directly to R&D and procurement.",
    author: "Chuchu, Kasper"
  },
  {
    name: "The Honest Industry Take",
    code: `Hot take: [bold framing of industry situation]

Not because [obvious villain]. But because [structural/systemic explanation].

[1-2 sentences on how the current situation developed — without pointing fingers]

The answer isn't [obvious/wrong solution].
The answer is [reframe the question].

Instead of "[old question]" — ask "[new question]."

That's [what we're doing / the direction we're headed].

[1-line bridge to SUMM's approach without a sales pitch]

[Question that invites real discussion]`,
    when: "When you have a genuine POV on industry direction. Not about us — about the industry.",
    author: "Frederik"
  }
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      className={`copy-btn ${copied ? "copied" : ""}`}
      onClick={handleCopy}
    >
      {copied ? "✓ Copied" : "Copy Post"}
    </button>
  );
}

function LinkedInPost({ post }) {
  const [expanded, setExpanded] = useState(false);
  const preview = post.text.slice(0, 220);
  const hasMore = post.text.length > 220;
  const displayText = expanded ? post.text : (hasMore ? preview + "…" : post.text);

  return (
    <div className="li-post">
      <div className="li-post-header">
        <div className="li-avatar" style={{ background: post.avatarBg, color: CREAM }}>
          {post.avatarInit}
        </div>
        <div>
          <div className="li-name">{post.author}</div>
          <div className="li-role">{post.role}</div>
          <div className="li-time">Now · 🌐</div>
        </div>
      </div>
      <div className="li-body">
        {displayText}
        {hasMore && (
          <span
            onClick={() => setExpanded(!expanded)}
            style={{ color: "#0a66c2", cursor: "pointer", fontWeight: 600, display: "block", marginTop: 4 }}
          >
            {expanded ? "…see less" : "…see more"}
          </span>
        )}
      </div>
      {post.imageText && (
        <div className="li-image">
          {post.imageText}
        </div>
      )}
      <div className="li-reactions">
        <button className="li-react-btn">👍 Like</button>
        <button className="li-react-btn">💬 Comment</button>
        <button className="li-react-btn">🔁 Repost</button>
        <button className="li-react-btn">📤 Send</button>
      </div>
    </div>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <div
            className={`accordion-header ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="accordion-title">{item.title}</span>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: 18 }}>
              {open === i ? "−" : "+"}
            </span>
          </div>
          {open === i && (
            <div className="accordion-body">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────

function PillarsTab() {
  const [selected, setSelected] = useState("science");
  const pillar = CONTENT_PILLARS.find(p => p.id === selected);

  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Content Strategy</div>
        <h1 className="section-title">The Five Pillars</h1>
        <p className="section-desc">Every piece of SUMM content maps to one of these pillars. Each one serves a different buyer stage and builds a different kind of trust.</p>
      </div>

      <div className="pill-group">
        {CONTENT_PILLARS.map(p => (
          <button
            key={p.id}
            className={`pill ${selected === p.id ? "active" : ""}`}
            onClick={() => setSelected(p.id)}
          >
            {p.emoji} {p.label}
          </button>
        ))}
      </div>

      <div className="grid-2" style={{ gap: 32, alignItems: "start" }}>
        <div>
          <div className="card" style={{ borderLeft: `4px solid ${pillar.color}`, borderRadius: "0 4px 4px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{pillar.emoji}</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: MAROON, marginBottom: 6 }}>
                  {pillar.title}
                </h2>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 4 }}>Cadence</div>
                <span className="tag tag-gold">{pillar.frequency}</span>
              </div>
            </div>
            <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.6, marginBottom: 20, opacity: 0.85 }}>
              {pillar.desc}
            </p>
            <div className="divider-gold" />
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Best Formats</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {pillar.formats.map(f => (
                  <span key={f} className="tag tag-cream">{f}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Primary Authors</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {pillar.authors.map(a => (
                  <span key={a} className="persona-badge">👤 {a}</span>
                ))}
              </div>
            </div>
            <div className="highlight">
              <strong>Why this pillar works:</strong> {pillar.why}
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            Content Mix Across All Pillars
          </div>
          {CONTENT_PILLARS.map(p => (
            <div key={p.id} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: p.id === selected ? MAROON : TEXT }}>
                  {p.emoji} {p.label}
                </span>
                <span style={{ fontSize: 12, color: "#888" }}>{p.frequency}</span>
              </div>
              <div style={{ height: 6, background: "rgba(181,146,42,0.1)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  background: p.id === selected ? MAROON : "rgba(181,146,42,0.4)",
                  borderRadius: 3,
                  width: { science: "30%", application: "65%", trends: "60%", team: "35%", proof: "35%" }[p.id]
                }} />
              </div>
            </div>
          ))}

          <div className="divider" />

          <div className="card card-maroon" style={{ color: CREAM }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
              The Golden Rule
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.65, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
              "Every post should teach something, show something, or change how someone thinks. Never just announce. Never just promote. If it's not useful to the reader, it's not worth posting."
            </p>
            <div style={{ marginTop: 12, fontSize: 12, opacity: 0.6 }}>— SUMM Content Principle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostsTab() {
  const [filter, setFilter] = useState("all");
  const filters = ["all", "team", "science", "application", "trends", "proof"];
  const filtered = filter === "all" ? POST_EXAMPLES : POST_EXAMPLES.filter(p => p.pillar === filter);

  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Ready-to-Use Content</div>
        <h1 className="section-title">Post Examples</h1>
        <p className="section-desc">Six fully-written LinkedIn posts across different pillars, authors, and objectives. These are starting points — edit to match the moment.</p>
      </div>

      <div className="pill-group">
        {filters.map(f => (
          <button key={f} className={`pill ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f === "all" ? "All Posts" : CONTENT_PILLARS.find(p => p.id === f)?.emoji + " " + f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.map(post => (
        <div key={post.id} style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                <span className="tag tag-gold">{post.format}</span>
                <span className="tag tag-cream">{post.hook}</span>
                <span className="persona-badge">For: {post.persona}</span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {post.tags.map(t => (
                  <span key={t} className="tag tag-outline">{t}</span>
                ))}
              </div>
            </div>
            <CopyButton text={post.text} />
          </div>

          <div className="grid-2" style={{ alignItems: "start" }}>
            <LinkedInPost post={post} />
            <div>
              <div className="card card-cream" style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD_DARK, marginBottom: 10 }}>What Makes This Work</div>
                <div style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.6 }}>
                  {post.pillar === "team" && post.id === "story1" && "Starts with a relatable human moment (daughter, food). Builds to the business insight. Never pitches — leads with the problem. Ends with an invitation."}
                  {post.pillar === "science" && "Opens with a misconception to correct. Uses a step-by-step reveal that makes complex science feel logical. Earns credibility before mentioning FermiPro."}
                  {post.pillar === "application" && "Uses real tasting data (specific numbers = credibility). The label reveal at the end is the payoff — clean label as a surprise, not a boast."}
                  {post.pillar === "trends" && "No product mention. Pure insight and positioning. Builds top-of-funnel follows from people not yet ready to buy."}
                  {post.pillar === "proof" && post.id === "proof1" && "Data-forward but humanized. Explains the interesting finding, not just the numbers. Ends with a clear CTA for the right buyer."}
                  {post.pillar === "team" && post.id === "human1" && "Bold opening that earns attention. Takes a systemic view, not a moral one. Avoids finger-pointing while making a strong point. Very shareable."}
                </div>
              </div>
              <div className="card card-cream">
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD_DARK, marginBottom: 10 }}>When to Post This</div>
                <div style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.6 }}>
                  {post.pillar === "team" && post.id === "story1" && "First month of new LinkedIn presence. Sets the foundation and gets followers for future technical content."}
                  {post.pillar === "science" && "After building some following from application or founder posts. Rewards early followers with depth."}
                  {post.pillar === "application" && "Anytime. Great for pre-trade-show awareness or when targeting snack/sauce manufacturers."}
                  {post.pillar === "trends" && "When a regulatory update, news story, or industry report gives you a hook to react to."}
                  {post.pillar === "proof" && post.id === "proof1" && "When targeting snack/seasonings R&D teams. Pair with a sample kit outreach campaign."}
                  {post.pillar === "team" && post.id === "human1" && "When there's industry conversation about UPF or clean label. Positions SUMM as a thoughtful, non-preachy voice."}
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}

function FormulasTab() {
  const [selected, setSelected] = useState(0);
  const formula = POST_FORMULAS[selected];

  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Repeatable Frameworks</div>
        <h1 className="section-title">Post Formulas</h1>
        <p className="section-desc">Five reusable structures that match SUMM's voice. Pick the formula, fill in the specifics, and you have a post that works.</p>
      </div>

      <div className="grid-2" style={{ alignItems: "start", gap: 32 }}>
        <div>
          {POST_FORMULAS.map((f, i) => (
            <div
              key={i}
              className="accordion-item"
              style={{ cursor: "pointer", marginBottom: 8 }}
              onClick={() => setSelected(i)}
            >
              <div className={`accordion-header ${selected === i ? "open" : ""}`}>
                <span className="accordion-title">
                  {selected === i ? "▶ " : "○ "}{f.name}
                </span>
                <span className="persona-badge" style={{ marginBottom: 0 }}>By: {f.author}</span>
              </div>
              {selected === i && (
                <div className="accordion-body">
                  <div style={{ marginBottom: 10, fontSize: 13, color: "#666", fontStyle: "italic" }}>
                    {f.when}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="divider" />

          <div className="card card-maroon">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(245,237,216,0.5)", marginBottom: 14 }}>
              Universal Rules
            </div>
            {[
              "Never open with 'I'. Open with a fact, observation, or bold claim.",
              "Never mention FermiPro or SUMM in the first 3 paragraphs.",
              "Always end with a question or a genuine invitation.",
              "Max 3 hashtags. Choose specific ones: #CleanLabel #FoodInnovation #FermentedFood",
              "Write shorter sentences than feels right. Then cut 20% more.",
              "One emoji max. Use it at the end of a list, not the beginning of a sentence."
            ].map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                <span style={{ fontSize: 13.5, color: CREAM, lineHeight: 1.55, opacity: 0.9 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
            {formula.name} — Template
          </div>
          <div className="formula" style={{ marginBottom: 16 }}>
            {formula.code.split("\n").map((line, i) => {
              const isVar = line.includes("[");
              const isOp = line.trim() === "";
              return (
                <div key={i} style={{ minHeight: isOp ? 8 : "auto" }}>
                  {isVar ? (
                    <span className="formula-var">{line}</span>
                  ) : (
                    <span className="formula-val">{line}</span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="card card-cream">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD_DARK, marginBottom: 8 }}>
              Use When
            </div>
            <div style={{ fontSize: 14, color: TEXT, lineHeight: 1.6, marginBottom: 12 }}>
              {formula.when}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD_DARK, marginBottom: 8, marginTop: 12 }}>
              Best Author
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {formula.author.split(", ").map(a => (
                <span key={a} className="persona-badge">👤 {a}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
              Anatomy of a Great SUMM Hook
            </div>
            {[
              { type: "Observation", ex: "\"My daughter is 4. She eats everything.\"", why: "Human. Unexpected. Earns 2 more seconds." },
              { type: "Misconception", ex: "\"Most people think fermentation = adding a probiotic.\"", why: "Creates tension. The reader wants the correction." },
              { type: "Bold Claim", ex: "\"Hot take: the ingredient industry is partly responsible for the UPF problem.\"", why: "Polarizing enough to stop scrolling. Fair enough not to alienate." },
              { type: "Data Tease", ex: "\"I asked 12 food scientists to try two versions of the same sauce.\"", why: "Implicit promise of a reveal. Readers stay for the result." },
            ].map((item, i) => (
              <div key={i} className="card" style={{ marginBottom: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: 1 }}>{item.type.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: 13, fontStyle: "italic", color: MAROON, marginBottom: 6, lineHeight: 1.4 }}>
                  {item.ex}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>{item.why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Brand Voice</div>
        <h1 className="section-title">How SUMM Sounds</h1>
        <p className="section-desc">A precise guide to the SUMM voice — so every post, from every team member, sounds unmistakably like SUMM.</p>
      </div>

      <div className="grid-2" style={{ gap: 32, alignItems: "start" }}>
        <div>
          <div className="card" style={{ marginBottom: 24, padding: "32px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
              The One-Line Brief
            </div>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontStyle: "italic",
              color: MAROON,
              lineHeight: 1.5,
              borderLeft: `4px solid ${GOLD}`,
              paddingLeft: 20,
              margin: 0
            }}>
              "SUMM sounds like a brilliant food scientist who also grew up in a restaurant kitchen — precise, curious, confident, and never boring."
            </blockquote>
          </div>

          <div className="card" style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 18 }}>
              Voice Calibration
            </div>
            {VOICE_DIMS.map(d => (
              <div key={d.label} className="voice-bar">
                <div className="voice-label">{d.label}</div>
                <div className="voice-track">
                  <div className="voice-fill" style={{ width: `${d.fill}%` }} />
                </div>
                <div className="voice-vs">{d.vs}</div>
              </div>
            ))}
          </div>

          <div className="card card-maroon">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(245,237,216,0.5)", marginBottom: 16 }}>
              What SUMM Never Sounds Like
            </div>
            {[
              ["❌ Preachy", "We don't lecture manufacturers about additives. They know. We solve."],
              ["❌ Vague", "No \"innovative solutions\" or \"game-changing ingredients\". Be specific."],
              ["❌ Sales-y", "Never lead with product. Always lead with insight or proof."],
              ["❌ Defensive", "We don't position against competitors. We define a new category."],
              ["❌ Corporate", "No \"we are excited to announce\". Real people, real language."],
            ].map(([type, rule]) => (
              <div key={type} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 13, color: CREAM, flexShrink: 0, marginTop: 1 }}>{type}</span>
                <span style={{ fontSize: 13, color: CREAM, opacity: 0.75, lineHeight: 1.5 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            Voice by Author
          </div>
          {[
            {
              name: "Frederik", role: "CEO",
              voice: "Visionary, warm, slightly provocative. Comfortable with big claims if backed by honest logic. The storyteller.",
              topics: ["Industry direction", "Company origins", "Counterintuitive POVs", "Human stories"],
              dont: "Get too technical. Frederik's job is to inspire, not explain the chemistry.",
              tone: "Like a smart chef who reads the FT."
            },
            {
              name: "Chuchu", role: "CTO",
              voice: "Precise, educational, genuinely nerdy in the best way. Explains complexity accessibly. The scientist.",
              topics: ["Fermentation science", "Technical data", "Process reveals", "Protein chemistry"],
              dont: "Be too cold or clinical. Chuchu's enthusiasm for the science should show.",
              tone: "Like a science communicator who could also win a Michelin star."
            },
            {
              name: "Nabila", role: "Head of Flavor",
              voice: "Sensory-first, precise about taste, bridges science and experience beautifully. The flavor poet.",
              topics: ["Sensory results", "Taste science", "Application showcases", "Kokumi/umami education"],
              dont: "Be abstract. Nabila makes flavor tangible — use specific sensory language.",
              tone: "Like Harold McGee wrote copy for a Copenhagen restaurant."
            },
            {
              name: "Kasper", role: "CCO",
              voice: "Commercial, credible, connects industry trends to practical implications. The translator.",
              topics: ["Regulation", "Industry trends", "Procurement angles", "Market data"],
              dont: "Get too academic. Kasper's value is making things commercially relevant.",
              tone: "Like a trusted advisor from the industry, not a salesperson."
            },
          ].map(author => (
            <div key={author.name} className="card" style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 15, color: MAROON }}>{author.name}</span>
                  <span style={{ fontSize: 12, color: "#888", marginLeft: 8 }}>{author.role}</span>
                </div>
                <span style={{ fontSize: 11, fontStyle: "italic", color: "#999" }}>"{author.tone}"</span>
              </div>
              <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.55, marginBottom: 10 }}>{author.voice}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {author.topics.map(t => <span key={t} className="tag tag-cream">{t}</span>)}
              </div>
              <div style={{ fontSize: 12, color: "#888", borderTop: "1px solid rgba(181,146,42,0.15)", paddingTop: 8, marginTop: 4 }}>
                <strong style={{ color: MAROON }}>Avoid: </strong>{author.dont}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Planning Framework</div>
        <h1 className="section-title">Monthly Content Rhythm</h1>
        <p className="section-desc">A repeatable 4-week drumbeat. Approximately 3 posts/week across personal profiles and the company page. Sustainable and strategic.</p>
      </div>

      <div style={{ overflowX: "auto", marginBottom: 36 }}>
        <div style={{ minWidth: 700 }}>
          {/* Header */}
          <div className="cal-week" style={{ marginBottom: 1 }}>
            <div className="cal-day-header" style={{ gridColumn: 1 }}>WEEK</div>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(d => (
              <div key={d} className="cal-day-header">{d}</div>
            ))}
          </div>
          {/* Weeks */}
          {CONTENT_CALENDAR.map((week, wi) => (
            <div key={wi} className="cal-week">
              <div className="cal-week-label">{week.week}</div>
              {["mon", "tue", "wed", "thu", "fri"].map(day => (
                <div key={day} className="cal-cell">
                  {week[day] ? (
                    <div className={`cal-item ${week[day].type}`}>
                      {week[day].text}
                    </div>
                  ) : (
                    <div className="cal-empty">—</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
        {[
          { label: "Human / Team Post", type: "team", bg: CREAM, border: GOLD },
          { label: "Application / Taste", type: "gold", bg: "rgba(181,146,42,0.08)", border: GOLD },
          { label: "Industry Insight", type: "dark", bg: "rgba(138,110,26,0.1)", border: GOLD_DARK },
        ].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, background: l.bg, borderLeft: `3px solid ${l.border}`, borderRadius: "0 2px 2px 0" }} />
            <span style={{ fontSize: 12, color: "#666" }}>{l.label}</span>
          </div>
        ))}
      </div>

      <div className="grid-3">
        {[
          {
            label: "Volume Target",
            stat: "3–4",
            unit: "posts/week",
            detail: "Across all authors. Never more than 1/day from the same person.",
            color: GOLD
          },
          {
            label: "Personal vs Company",
            stat: "80/20",
            unit: "ratio",
            detail: "80% from personal profiles (Frederik, Chuchu, etc.). Company page amplifies and reposts.",
            color: MAROON
          },
          {
            label: "Best Posting Windows",
            stat: "Tue–Thu",
            unit: "7-9am or 12-1pm",
            detail: "Central European time. Avoid Monday morning and Friday afternoon for long-form posts.",
            color: GOLD_DARK
          }
        ].map((s, i) => (
          <div key={i} className="card" style={{ borderTop: `3px solid ${s.color}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.stat}</div>
            <div style={{ fontSize: 13, color: MAROON, fontWeight: 600, marginBottom: 8 }}>{s.unit}</div>
            <div style={{ fontSize: 12.5, color: "#666", lineHeight: 1.55 }}>{s.detail}</div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="grid-2" style={{ gap: 24 }}>
        <div className="card">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
            Monthly Must-Haves
          </div>
          {[
            "1× founder origin / personal story post (Frederik)",
            "2× application showcase with sensory detail (Nabila/Frederik)",
            "1× technical deep-dive on fermentation science (Chuchu)",
            "2× industry trend or regulation commentary (Kasper/Frederik)",
            "1× proof point or data post (Chuchu/Kasper)",
            "1× team culture / behind-the-scenes moment"
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.45 }}>{item}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: MAROON, marginBottom: 16 }}>
            Reactive Triggers — Post When This Happens
          </div>
          {[
            "📰 EU regulation update on clean label or natural flavoring",
            "📊 New research on salt reduction, plant protein, or fermentation",
            "🏆 Award, milestone, or media mention (keep it brief — share the original)",
            "🔬 New tasting result or formulation breakthrough internally",
            "🗣️ Conference you attended — share your one key takeaway",
            "❓ Interesting question from a prospect or customer (anonymized)",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.45 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricsTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Success Framework</div>
        <h1 className="section-title">What Good Looks Like</h1>
        <p className="section-desc">LinkedIn metrics for a B2B ingredient company. What to track, what actually matters, and what's a vanity trap.</p>
      </div>

      <div className="grid-4" style={{ marginBottom: 32 }}>
        {[
          { label: "Follower Growth", target: "+15%/mo", when: "Months 1-6", color: GOLD },
          { label: "Engagement Rate", target: "3-6%", when: "Per post", color: MAROON },
          { label: "Profile Views", target: "↑ trend", when: "After each post", color: GOLD_DARK },
          { label: "Sample Requests", target: "1+ /mo", when: "From LinkedIn", color: MAROON }
        ].map((m, i) => (
          <div key={i} className="card stat-box" style={{ borderTop: `3px solid ${m.color}` }}>
            <div className="stat-num" style={{ color: m.color }}>{m.target}</div>
            <div className="stat-label">{m.label}</div>
            <div className="stat-sub">{m.when}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ gap: 32 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            The Metrics That Actually Matter (B2B)
          </div>
          <Accordion items={[
            {
              title: "Profile Visits from Target Companies",
              content: <div style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                LinkedIn analytics shows who's viewing profiles. If the right companies (mid-large food manufacturers in savory/snacks/plant-based) are visiting after a post, that's a qualified signal. Check this within 48 hours of each post.
              </div>
            },
            {
              title: "Comments from Decision-Makers",
              content: <div style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                A comment from an R&D director or innovation lead is worth 100 likes. Respond within 2 hours. Always. This is relationship-building, not broadcast media.
              </div>
            },
            {
              title: "DMs and Connection Requests",
              content: <div style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                Track inbound DMs that reference a specific post. These are warm leads. Every month, count how many conversations started from LinkedIn vs. cold outreach. That ratio tells you if content is working.
              </div>
            },
            {
              title: "Sample Kit Requests from LinkedIn",
              content: <div style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                The ultimate B2B LinkedIn metric. Ask every sample requester: "How did you find us?" If even 1-2/month come from LinkedIn within 6 months, the content program is working.
              </div>
            },
            {
              title: "Saves on Technical Posts",
              content: <div style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                When someone saves a post, they're treating it as a resource — not just entertainment. Track saves on the science and proof-point posts. High saves = content people trust enough to keep.
              </div>
            }
          ]} />
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            What Not to Chase
          </div>
          <div className="card card-cream" style={{ marginBottom: 16 }}>
            {[
              ["Follower count", "A scientist with 400 followers who comments on your post is more valuable than 4,000 follows from career coaches."],
              ["Likes from peers", "Likes from other food startups feel good. DMs from R&D directors change the business."],
              ["Viral posts", "A post with 50k impressions from general public does nothing for B2B sales. Targeted reach beats broad reach."],
              ["Posting frequency", "3 great posts/week beats 7 mediocre ones. Quality signals expertise. Volume signals desperation."],
            ].map(([trap, why]) => (
              <div key={trap} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(181,146,42,0.2)" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: MAROON, fontWeight: 700 }}>✗</span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: MAROON }}>{trap}</span>
                </div>
                <div style={{ fontSize: 13, color: "#666", paddingLeft: 20, lineHeight: 1.5 }}>{why}</div>
              </div>
            ))}
          </div>

          <div className="card card-gold" style={{ color: CREAM }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.7, marginBottom: 12 }}>
              6-Month Milestone Targets
            </div>
            {[
              "500+ followers across all 4 personal profiles",
              "3+ inbound conversations from target companies per month",
              "1 co-development inquiry traceable to LinkedIn",
              "At least 2 posts with 1,000+ impressions from qualified audience",
              "SUMM appearing in search results for 'fermented faba protein' and 'clean label umami'"
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ color: CREAM, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.45 }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

const TABS = [
  { id: "pillars", label: "Content Pillars" },
  { id: "posts", label: "Post Examples" },
  { id: "formulas", label: "Post Formulas" },
  { id: "voice", label: "Brand Voice" },
  { id: "calendar", label: "Content Calendar" },
  { id: "metrics", label: "What to Measure" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("pillars");

  return (
    <div className="app">
      <style>{styles}</style>

      <div className="header">
        <div className="header-brand">
          <span className="header-summ">SUMM</span>
          <span className="header-sub">ingredients</span>
        </div>
        <div className="header-title">LinkedIn Content Framework</div>
      </div>

      <div className="nav">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="main">
        {activeTab === "pillars" && <PillarsTab />}
        {activeTab === "posts" && <PostsTab />}
        {activeTab === "formulas" && <FormulasTab />}
        {activeTab === "voice" && <VoiceTab />}
        {activeTab === "calendar" && <CalendarTab />}
        {activeTab === "metrics" && <MetricsTab />}
      </div>
    </div>
  );
}
