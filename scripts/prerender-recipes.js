// scripts/prerender-recipes.js
// Run after `vite build` to generate per-recipe HTML files with individual JSON-LD.
// Each gets its own file at dist/protocol/tk001/index.html etc.
// Savor's scraper hits a single URL and gets exactly one recipe block.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// ── Recipe data ───────────────────────────────────────────────────────────────
// Mirrors the data in TestKitchen.jsx and the JSON-LD in index.html.
// Image URLs assume files placed in /public/images/ — update extensions if needed.

const BASE_URL = 'https://ironkitcheninc.com';

const RECIPES = [
  {
    id: 'tk001',
    code: 'TK-001',
    name: 'Classic Smash Burger',
    description: 'Baseline formula. Single-smash, high-heat, no flip until full plate release. Optimized for maximum crust-to-interior ratio.',
    keywords: 'smash burger, IKI, iron kitchen, maillard, TK-001, tangerine',
    image: `${BASE_URL}/images/tk-001-classic-smash.jpg`,
    cookTime: 'PT5M',
    prepTime: 'PT5M',
    totalTime: 'PT10M',
    recipeYield: '1 burger',
    recipeIngredient: [
      '4oz 80/20 chuck patty, loose pack',
      '1 slice American cheese, singles-grade',
      '1 brioche bun, toasted butter-side down',
      '5g yellow mustard',
      '15g diced white onion, raw',
      '3 slices crinkle-cut dill pickle',
      '1.5g kosher salt, applied at smash',
      '2ml neutral oil for griddle',
    ],
    recipeInstructions: [
      { name: 'Preheat', text: 'Heat cast iron or griddle to 450°F surface temp. Verify with IR thermometer.' },
      { name: 'Form Puck', text: 'Form 4oz 80/20 chuck into a loose puck. No compression pre-smash.' },
      { name: 'Place and Smash', text: 'Place puck on griddle. Single press at 35 lbs input force using IKI press. Hold for full 3 seconds. No re-smash.' },
      { name: 'Dwell', text: 'Leave press plate on patty. Do not flip until crust releases naturally. Dwell time: 45 seconds.' },
      { name: 'Flip and Cheese', text: 'Flip on crust release. Apply American cheese. Tent for 20 seconds for full melt.' },
      { name: 'Dress and Serve', text: 'Toasted brioche, mustard on heel, diced onion, pickles. Sauce on bun only. Serve immediately.' },
    ],
  },
  {
    id: 'tk002',
    code: 'TK-002',
    name: 'Bacon and Swiss Smash Burger',
    description: 'Fat render optimization. Reduced press force prevents premature fat expulsion. Swiss melt timed to final 10 seconds of dwell. Bacon rendered separately.',
    keywords: 'smash burger, bacon swiss, IKI, iron kitchen, maillard, TK-002, dragonfruit',
    image: `${BASE_URL}/images/tk-002-bacon-swiss.jpg`,
    cookTime: 'PT10M',
    prepTime: 'PT10M',
    totalTime: 'PT20M',
    recipeYield: '1 burger',
    recipeIngredient: [
      '4oz 80/20 chuck patty, loose pack',
      '1.5oz Swiss cheese, gruyère accepted',
      '2 strips thick-cut bacon, pre-rendered',
      '30g caramelized onion, low and slow',
      '1 brioche bun, toasted butter both faces',
      '8g Dijon mustard, heel only',
      '1.5g kosher salt, applied at smash',
    ],
    recipeInstructions: [
      { name: 'Bacon Pre-Render', text: 'Render bacon strips at 375°F. Rest on rack, not paper towel. Retain surface fat.' },
      { name: 'Preheat Surface', text: 'Heat griddle to 435°F. Lower than baseline — fat render is sensitive to excess heat.' },
      { name: 'Smash at 32 lbs', text: 'Press at 32 lbs input force using IKI press. Hold 3 seconds. Reduced force prevents premature fat expulsion.' },
      { name: 'Dwell and Add Swiss', text: 'At 30 seconds dwell, apply 1.5oz Swiss cheese. Tent with cover for final 10 seconds.' },
      { name: 'Flip and Bacon', text: 'Flip at 40 seconds. Layer pre-rendered bacon on melted Swiss. 10 second finish on side 2.' },
      { name: 'Build and Serve', text: 'Brioche heel, Dijon, caramelized onion, patty stack, crown. Serve immediately.' },
    ],
  },
  {
    id: 'tk003',
    code: 'TK-003',
    name: 'Green Chile Smash Burger',
    description: 'Moisture-critical formula. Hatch chiles roasted, peeled, and dry-pressed before application. Pepper jack applied 20 seconds before flip. Steam-tent mandatory.',
    keywords: 'smash burger, green chile, hatch, IKI, iron kitchen, TK-003, lime',
    image: `${BASE_URL}/images/tk-003-green-chile.jpg`,
    cookTime: 'PT15M',
    prepTime: 'PT20M',
    totalTime: 'PT35M',
    recipeYield: '1 burger',
    recipeIngredient: [
      '4oz 80/20 chuck patty, loose pack',
      '1 large Hatch green chile, roasted and dry-pressed',
      '1.5oz pepper jack cheese, sliced',
      '1 sesame bun, toasted butter heel only',
      '12g chipotle mayo, heel',
      '2 slices tomato, quarter inch cut',
      '15g red onion, thin rings',
      '1.5g kosher salt, applied at smash',
    ],
    recipeInstructions: [
      { name: 'Roast and Peel Chiles', text: 'Char Hatch green chiles over direct flame. Steam 10 minutes in sealed bag. Peel. Seed for mild, retain seeds for heat.' },
      { name: 'Dry Press', text: 'Lay chiles flat between paper towels. Press under weight for 10 minutes. Mandatory — excess moisture ruins crust.' },
      { name: 'Preheat and Smash', text: 'Heat griddle to 445°F. Press patty at 35 lbs using IKI press. Hold 3 seconds.' },
      { name: 'Dwell and Add Chile and Cheese', text: 'At 22 seconds dwell, layer dry-pressed chile then pepper jack on top. Cover immediately.' },
      { name: 'Steam Tent', text: 'Steam tent for exactly 15 seconds. Do not extend — patty overcooks beyond this window.' },
      { name: 'Dress and Serve', text: 'Chipotle mayo on heel, tomato, red onion, sesame bun crown. Serve immediately.' },
    ],
  },
  {
    id: 'tk004',
    code: 'TK-004',
    name: 'Truffle Umami Smash Burger',
    description: 'Umami-forward formula. Mushroom duxelles as structural topping layer. Truffle oil applied post-press only — high heat volatilizes aromatics.',
    keywords: 'smash burger, truffle, umami, duxelles, IKI, iron kitchen, TK-004, blueberry',
    image: `${BASE_URL}/images/tk-004-truffle-umami.jpg`,
    cookTime: 'PT10M',
    prepTime: 'PT30M',
    totalTime: 'PT40M',
    recipeYield: '1 burger',
    recipeIngredient: [
      '4oz 80/20 chuck patty, loose pack',
      '1.5oz fontina cheese, sliced',
      '35g mushroom duxelles, fully reduced',
      '3-4 drops truffle oil, applied post-press only',
      '1 brioche bun, toasted butter both faces',
      '6g Dijon mustard, heel only',
      '8g arugula, crown side',
      '1.5g kosher salt, applied at smash',
    ],
    recipeInstructions: [
      { name: 'Duxelles Prep', text: 'Fine-mince cremini mushrooms. Cook with shallot, thyme, and white wine over medium heat. Full moisture reduction required — 20 to 25 minutes.' },
      { name: 'Preheat Surface', text: 'Heat griddle to 440°F. Slightly below max — fontina melt is sensitive to excess heat.' },
      { name: 'Smash', text: 'Press patty at 35 lbs using IKI press. Hold 3 seconds. Standard smash protocol.' },
      { name: 'Dwell and Add Fontina', text: 'At 28 seconds dwell, layer fontina. Tent for final 14 seconds.' },
      { name: 'Flip and Duxelles', text: 'Flip at 42 seconds. Layer warm duxelles on melted fontina. Do not tent after flip.' },
      { name: 'Truffle Oil and Serve', text: 'Apply 3-4 drops truffle oil to duxelles post-build. Serve within 90 seconds — aromatic peak degrades rapidly.' },
    ],
  },
  {
    id: 'tk005',
    code: 'TK-005',
    name: 'Dry-Aged Double Smash Burger',
    description: 'Advanced formula. 28-day dry-aged trim, double stack. Sequential smash with 15 second recovery between patties. Maximum thermal mass utilization.',
    keywords: 'smash burger, dry aged, double smash, IKI, iron kitchen, TK-005, watermelon',
    image: `${BASE_URL}/images/tk-005-dry-aged-double.jpg`,
    cookTime: 'PT10M',
    prepTime: 'PT10M',
    totalTime: 'PT20M',
    recipeYield: '1 double burger',
    recipeIngredient: [
      '3.5oz 28-day dry-aged chuck, coarse ground, times 2',
      '2 slices American cheese, one per patty',
      '1 seeded brioche bun, toasted butter both sides',
      'special sauce: mayo, ketchup, pickle brine, paprika',
      '15g white onion, raw fine dice',
      '4 slices dill pickle, between patties and top',
      '1g kosher salt per patty, applied at each smash',
    ],
    recipeInstructions: [
      { name: 'Dry-Aged Grind', text: 'Coarse-grind 28-day dry-aged chuck trim day-of. Do not refreeze. Form into two loose 3.5oz pucks.' },
      { name: 'Preheat Max', text: 'Heat griddle to full 450°F. Verify twice — thermal mass drop per dual smash sequence is higher than baseline.' },
      { name: 'Smash Patty 1', text: 'Press first patty at 35 lbs using IKI press. Hold 3 seconds. Dwell 38 seconds. Full plate coverage.' },
      { name: '15 Second Recovery', text: 'Remove patty 1 to rack. Allow surface temp to recover for 15 seconds. Do not skip — second smash on depleted surface fails crust.' },
      { name: 'Smash Patty 2', text: 'Press second patty at 35 lbs. Dwell 38 seconds. Apply American cheese at 30 seconds. Tent to full melt.' },
      { name: 'Stack and Serve', text: 'Double stack with pickle between patties. Special sauce, white onion, crown. Serve within 90 seconds.' },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildJsonLd(recipe) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.description,
    keywords: recipe.keywords,
    image: recipe.image,
    recipeCategory: 'Burger',
    recipeCuisine: 'American',
    recipeYield: recipe.recipeYield,
    cookTime: recipe.cookTime,
    prepTime: recipe.prepTime,
    totalTime: recipe.totalTime,
    recipeIngredient: recipe.recipeIngredient,
    recipeInstructions: recipe.recipeInstructions.map(step => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
    author: {
      '@type': 'Organization',
      name: 'Iron Kitchen Inc. x Savor',
    },
    identifier: recipe.code,
  };
}

function injectJsonLd(html, recipe) {
  const jsonLd = buildJsonLd(recipe);
  const scriptTag = `  <script type="application/ld+json">\n  ${JSON.stringify(jsonLd, null, 2)}\n  </script>\n</head>`;
  return html.replace('</head>', scriptTag);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

for (const recipe of RECIPES) {
  const dir = path.join(DIST, 'protocol', recipe.id);
  fs.mkdirSync(dir, { recursive: true });

  const html = injectJsonLd(baseHtml, recipe);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');

  console.log(`✓ /protocol/${recipe.id}/index.html — ${recipe.name}`);
}

console.log('\n✓ Pre-render complete. All 5 recipe pages generated.');