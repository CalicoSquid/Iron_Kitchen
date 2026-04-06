import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import imgClassicSmash from '../assets/classic-smash-2.png';
import imgDryAged from '../assets/dry-aged-double-2.png';
import imgGreenChile from '../assets/green-chile-2.png';
import imgTruffle from '../assets/truffle-umami-2.png';
import imgBaconSwiss from '../assets/bacon-swiss-2.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const RECIPES = [
    {
        id: "tk001",
        code: "TK-001",
        name: ["Classic", "Smash"],
        sub: "Maximum Maillard Protocol",
        theme: "#FF6D00",
        themeLabel: "Tangerine",
        image: imgClassicSmash,
        desc: [
            "Baseline formula. Single-smash, high-heat,",
            "no flip until full plate release.",
            "Optimized for maximum crust-to-interior ratio.",
            "Reference standard for all subsequent formulas.",
        ],
        vitals: [
            { key: "Surface Temp", val: "450", unit: "°F", accent: true },
            { key: "Press Force", val: "35", unit: "lbs input", accent: true },
            { key: "Dwell Time", val: "45", unit: "seconds", accent: true },
            { key: "Patty Mass", val: "4", unit: "oz" },
            { key: "Blend", val: "80/20", unit: "chuck" },
            { key: "Output MA", val: "4.2×", unit: "mech adv" },
        ],
        schematicTitle: "Thermal Profile // TK-001 // Single Smash Sequence",
        schematicCode: "CROSS_01",
        svgPoints: "60,200 120,100 160,80 200,80 230,115 280,95 310,82 360,80 420,80 480,80 540,80",
        svgSmash: { x: 200, label: "SMASH" },
        svgFlip: { x: 380, label: "FLIP+RELEASE" },
        svgYAxis: ["350°F", "400°F", "430°F", "450°F"],
        svgTitle: "SURFACE TEMP — °F vs TIME",
        steps: [
            { action: "Preheat", detail: "Cast iron or griddle to surface temp. Verify with IR thermometer.", param: "450°F // confirmed", paramAccent: true },
            { action: "Form Puck", detail: "4oz 80/20 chuck, loose pack. No compression pre-smash.", param: "4oz // loose form" },
            { action: "Place + Smash", detail: "Single press, 35 lbs input. Hold for full 3s. No re-smash.", param: "35 lbs // 3s hold", paramAccent: true },
            { action: "Dwell", detail: "No flip until crust release. Press plate remains on patty.", param: "45s // no early flip", paramAccent: true },
            { action: "Flip + Cheese", detail: "Flip on release. Apply American. Tent 20s for melt.", param: "20s // tented" },
            { action: "Dress + Serve", detail: "Toasted brioche. Sauce on bun only. Immediate service." },
        ],
        ingredients: [
            { name: "Chuck Patty", spec: "4oz // 80/20 // loose" },
            { name: "American Cheese", spec: "1 slice // singles-grade" },
            { name: "Brioche Bun", spec: "toasted // butter-side down" },
            { name: "Yellow Mustard", spec: "5g // on heel" },
            { name: "Diced White Onion", spec: "15g // raw" },
            { name: "Dill Pickle", spec: "3 slices // crinkle-cut" },
            { name: "Kosher Salt", spec: "applied at smash // 1.5g" },
            { name: "Neutral Oil", spec: "griddle coat // 2ml" },
        ],
        notes: [
            { tag: "Critical", tagAccent: true, text: "Salt applied at moment of smash — not before. Pre-salting draws moisture, inhibits crust formation." },
            { tag: "Thermal", text: "Press plate thermal mass sustains Maillard above 140°C for full dwell window. No re-heat required between consecutive smashes ≤90s." },
            { tag: "Geometry", text: "6.0\"×3.0\" plate covers full 4oz patty at peak spread. Edge relief prevents blowout on standard 80/20." },
            { tag: "Yield", text: "Target internal temp: 160°F at center at flip. Single-side Maillard is by design — second side finish 15–20s only." },
        ],
    },
    {
        id: "tk002",
        code: "TK-002",
        name: ["Bacon", "Swiss"],
        sub: "Fat Render Priority Protocol",
        theme: "#E91E8C",
        themeLabel: "Dragonfruit",
        image: imgBaconSwiss,
        desc: [
            "Fat render optimization. Reduced press force",
            "prevents premature fat expulsion.",
            "Swiss melt timed to final 15s of dwell.",
            "Bacon rendered separately, applied at build.",
        ],
        vitals: [
            { key: "Surface Temp", val: "435", unit: "°F", accent: true },
            { key: "Press Force", val: "32", unit: "lbs input", accent: true },
            { key: "Dwell Time", val: "40", unit: "seconds", accent: true },
            { key: "Patty Mass", val: "4", unit: "oz" },
            { key: "Cheese Add", val: "30s", unit: "dwell mark" },
            { key: "Bacon Temp", val: "375", unit: "°F render" },
        ],
        schematicTitle: "Fat Render Profile // TK-002 // Bacon + Patty Sequence",
        schematicCode: "FAT_02",
        svgPoints: "60,200 130,110 170,88 210,88 240,120 290,100 330,88 540,88",
        svgSmash: { x: 215, label: "SMASH" },
        svgFlip: { x: 355, label: "CHEESE+FLIP" },
        svgYAxis: ["350°F", "390°F", "415°F", "435°F"],
        svgTitle: "FAT RENDER PROFILE — °F vs TIME",
        steps: [
            { action: "Bacon Pre-Render", detail: "Render bacon strips separately at 375°F. Rest on rack. No paper towel — retain surface fat.", param: "375°F // 4–5 min", paramAccent: true },
            { action: "Preheat Surface", detail: "Griddle to 435°F. Lower than baseline — fat render sensitive to excess heat.", param: "435°F confirmed", paramAccent: true },
            { action: "Smash at 32 lbs", detail: "Reduced force. Prevents premature fat expulsion from patty.", param: "32 lbs // 3s hold", paramAccent: true },
            { action: "Dwell 30s — Add Swiss", detail: "At 30s dwell mark, apply 1.5oz Swiss. Tent with cover for last 10s.", param: "t+30s // swiss on", paramAccent: true },
            { action: "Flip + Bacon", detail: "Flip at 40s. Layer bacon on melted Swiss. 10s finish side 2." },
            { action: "Build + Serve", detail: "Brioche heel, Dijon, caramelized onion, patty stack, crown. Immediate." },
        ],
        ingredients: [
            { name: "Chuck Patty", spec: "4oz // 80/20 // loose" },
            { name: "Swiss Cheese", spec: "1.5oz // gruyère alt accepted" },
            { name: "Thick-Cut Bacon", spec: "2 strips // pre-rendered" },
            { name: "Caramelized Onion", spec: "30g // low/slow // no shortcut" },
            { name: "Brioche Bun", spec: "toasted // butter both faces" },
            { name: "Dijon Mustard", spec: "8g // heel only" },
            { name: "Kosher Salt", spec: "applied at smash // 1.5g" },
        ],
        notes: [
            { tag: "Critical", tagAccent: true, text: "Fat expulsion is irreversible — too much force at high temp depletes flavor compounds into the pan, not the patty." },
            { tag: "Bacon", text: "Rack rest (not paper) preserves rendered fat coating on bacon surface — critical for texture on bite." },
            { tag: "Swiss Timing", text: "Swiss applied at 30s dwell: enough time to melt without overcooking. 20s leaves cheese cold-center." },
            { tag: "Onion", text: "Caramelized onion cannot be rushed. 40 min low/slow minimum. Shortcut versions read sweet but lack depth — disqualified." },
        ],
    },
    {
        id: "tk003",
        code: "TK-003",
        name: ["Green", "Chile"],
        sub: "Moisture Control Protocol",
        theme: "#8BC34A",
        themeLabel: "Lime",
        image: imgGreenChile,
        desc: [
            "Moisture-critical formula. Hatch chiles roasted,",
            "peeled, and dry-pressed before application.",
            "Pepper jack applied 20s before flip.",
            "Steam-tent mandatory for full melt.",
        ],
        vitals: [
            { key: "Surface Temp", val: "445", unit: "°F", accent: true },
            { key: "Press Force", val: "35", unit: "lbs input", accent: true },
            { key: "Dwell Time", val: "42", unit: "seconds", accent: true },
            { key: "Chile Prep", val: "dry", unit: "pressed" },
            { key: "Cheese Add", val: "22s", unit: "dwell mark" },
            { key: "Steam Tent", val: "15s", unit: "mandatory" },
        ],
        schematicTitle: "Moisture Map // TK-003 // Chile + Patty Interaction",
        schematicCode: "MOIST_03",
        svgPoints: "60,200 130,100 165,80 200,80 235,110 280,90 320,80 540,80",
        svgSmash: { x: 205, label: "SMASH" },
        svgFlip: { x: 370, label: "FLIP+TENT" },
        svgYAxis: ["360°F", "400°F", "425°F", "445°F"],
        svgTitle: "MOISTURE CONTROL — °F vs TIME",
        steps: [
            { action: "Roast + Peel Chiles", detail: "Hatch green chiles. Direct flame char, steam 10 min in bag, peel. Seed for mild, retain for heat.", param: "direct char // 10s steam", paramAccent: true },
            { action: "Dry Press", detail: "Lay chiles flat between paper towels. 10 min press under weight. Mandatory — excess moisture ruins crust.", param: "10 min press // critical", paramAccent: true },
            { action: "Preheat + Smash", detail: "445°F surface. 35 lbs, 3s hold.", param: "445°F // 35 lbs", paramAccent: true },
            { action: "Dwell 22s — Add Chile + Cheese", detail: "At 22s, layer dry-pressed chile, then pepper jack on top. Cover.", param: "t+22s // chile on", paramAccent: true },
            { action: "Steam Tent 15s", detail: "Covered steam for 15s. Melts cheese completely. Do not extend — patty overcooks.", param: "15s // tented" },
            { action: "Dress + Serve", detail: "Mayo + hot sauce on heel. Tomato, red onion. Sesame bun. No delay." },
        ],
        ingredients: [
            { name: "Chuck Patty", spec: "4oz // 80/20 // loose" },
            { name: "Hatch Green Chile", spec: "1 large // roasted // dry-pressed" },
            { name: "Pepper Jack", spec: "1.5oz // sliced" },
            { name: "Sesame Bun", spec: "toasted // butter heel only" },
            { name: "Chipotle Mayo", spec: "12g // heel" },
            { name: "Tomato", spec: "2 slices // ¼\" cut" },
            { name: "Red Onion", spec: "thin rings // 15g" },
            { name: "Kosher Salt", spec: "at smash // 1.5g" },
        ],
        notes: [
            { tag: "Critical", tagAccent: true, text: "Skipping dry-press causes steam pocket under cheese — patty surface rehydrates, crust layer collapses." },
            { tag: "Chile", text: "Hatch season: Aug–Sep. Off-season substitution: Anaheim, poblano. Canned rejected — moisture uncontrollable." },
            { tag: "Tent", text: "15s steam tent is precision. 20s = overcooked patty edge. Timer required." },
            { tag: "Seed Choice", text: "Seeded = Scoville 1,000–2,000. Unseeded = 1,500–4,000. Match to service context." },
        ],
    },
    {
        id: "tk004",
        code: "TK-004",
        name: ["Truffle", "Umami"],
        sub: "Aromatic Compound Protocol",
        theme: "#3B82F6",
        themeLabel: "Blueberry",
        image: imgTruffle,
        desc: [
            "Umami-forward formula. Mushroom duxelles",
            "as structural topping layer.",
            "Truffle oil applied post-press only.",
            "High-heat volatilizes aromatics pre-smash.",
        ],
        vitals: [
            { key: "Surface Temp", val: "440", unit: "°F", accent: true },
            { key: "Press Force", val: "35", unit: "lbs input", accent: true },
            { key: "Dwell Time", val: "42", unit: "seconds", accent: true },
            { key: "Duxelles", val: "full", unit: "moisture reduction" },
            { key: "Truffle", val: "post", unit: "press only" },
            { key: "Cheese", val: "fontina", unit: "not gruyère" },
        ],
        schematicTitle: "Umami Stack // TK-004 // Aromatic Compound Map",
        schematicCode: "AROM_04",
        svgPoints: "60,200 125,105 165,82 200,82 235,112 280,92 315,82 540,82",
        svgSmash: { x: 205, label: "SMASH" },
        svgFlip: { x: 370, label: "DUXELLES+FLIP" },
        svgYAxis: ["350°F", "395°F", "420°F", "440°F"],
        svgTitle: "AROMATIC PROFILE — °F vs TIME",
        steps: [
            { action: "Duxelles Prep", detail: "Cremini mushrooms, fine mince. Cook with shallot, thyme, white wine. Full moisture reduction — 20–25 min.", param: "full reduction // mandatory", paramAccent: true },
            { action: "Preheat Surface", detail: "440°F. Slightly below max — fontina melt sensitive to excess heat.", param: "440°F verified", paramAccent: true },
            { action: "Smash", detail: "35 lbs, 3s hold. Standard smash protocol.", param: "35 lbs // 3s", paramAccent: true },
            { action: "Dwell — Add Fontina", detail: "At 28s dwell, layer fontina. Tent for final 14s.", param: "t+28s // tent on", paramAccent: true },
            { action: "Flip + Duxelles", detail: "Flip at 42s. Layer warm duxelles on melted fontina. No tent after flip.", param: "duxelles warm // not hot" },
            { action: "Truffle Oil + Serve", detail: "3–4 drops truffle oil applied to duxelles post-build. Immediate service — 90s window max.", param: "post-build only" },
        ],
        ingredients: [
            { name: "Chuck Patty", spec: "4oz // 80/20 // loose" },
            { name: "Fontina Cheese", spec: "1.5oz // not gruyère" },
            { name: "Mushroom Duxelles", spec: "35g // full moisture reduction" },
            { name: "Truffle Oil", spec: "3–4 drops // post-press only" },
            { name: "Brioche Bun", spec: "toasted // butter both faces" },
            { name: "Dijon Mustard", spec: "6g // heel only" },
            { name: "Arugula", spec: "8g // crown side" },
            { name: "Kosher Salt", spec: "at smash // 1.5g" },
        ],
        notes: [
            { tag: "Critical", tagAccent: true, text: "Truffle oil applied exclusively post-press. High heat (440°F surface) immediately volatilizes aromatic compounds — all umami character lost if applied pre-smash." },
            { tag: "Duxelles", text: "Full moisture reduction mandatory. Any residual liquid re-steams patty undercarriage on build — crust failure at bottom." },
            { tag: "Fontina", text: "Fontina over gruyère for this formula — higher melt point gruyère requires longer tent time, risks overcooking patty." },
            { tag: "Service", text: "90s maximum service window from flip. Truffle oil aroma peak degrades rapidly — do not hold." },
        ],
    },
    {
        id: "tk005",
        code: "TK-005",
        name: ["Dry-Aged", "Double"],
        sub: "High-Intensity Crust Protocol",
        theme: "#E53935",
        themeLabel: "Watermelon",
        image: imgDryAged,
        desc: [
            "Advanced formula. Dry-aged trim, double stack.",
            "Sequential smash with 15s recovery between.",
            "Maximum thermal mass utilization.",
            "Not recommended for consecutive runs >4 units.",
        ],
        vitals: [
            { key: "Surface Temp", val: "450", unit: "°F", accent: true },
            { key: "Press Force", val: "35", unit: "lbs × 2", accent: true },
            { key: "Dwell Each", val: "38", unit: "sec per patty", accent: true },
            { key: "Recovery", val: "15", unit: "sec between" },
            { key: "Blend", val: "28-day", unit: "dry-aged" },
            { key: "Stack", val: "×2", unit: "patties" },
        ],
        schematicTitle: "Sequential Smash // TK-005 // Dual Patty Thermal",
        schematicCode: "SEQ_05",
        svgPoints: "60,200 110,80 150,70 185,70 215,118 255,95 285,70 360,70",
        svgPoints2: "380,200 420,95 450,75 470,70 500,100 530,82 560,70",
        svgSmash: { x: 185, label: "SMASH 1" },
        svgSmash2: { x: 470, label: "SMASH 2" },
        svgFlip: null,
        svgRecov: { x: 360, label: "recov" },
        svgYAxis: ["400°F", "420°F", "435°F", "450°F"],
        svgTitle: "DUAL SMASH SEQUENCE — SURFACE °F vs TIME",
        steps: [
            { action: "Dry-Aged Grind", detail: "28-day dry-aged chuck trim. Grind coarse day-of. Do not refreeze. Loose 3.5oz pucks × 2.", param: "28-day // coarse grind", paramAccent: true },
            { action: "Preheat Max", detail: "Full 450°F. Verify twice — thermal mass drop per dual smash sequence is higher than baseline.", param: "450°F // verified", paramAccent: true },
            { action: "Smash Patty 1", detail: "35 lbs, 3s hold, 38s dwell. Full press plate coverage.", param: "35 lbs // 38s dwell", paramAccent: true },
            { action: "15s Recovery", detail: "Remove patty 1 to rack. Surface temp recovery. Do not skip — second smash on cold surface fails crust.", param: "15s // no shortcut", paramAccent: true },
            { action: "Smash Patty 2", detail: "Same parameters. American cheese applied at 30s. Tent to full melt.", param: "35 lbs // 38s // cheese", paramAccent: true },
            { action: "Stack + Serve", detail: "Double stack. Special sauce, white onion, pickles. Seeded brioche. Serve at 90s max." },
        ],
        ingredients: [
            { name: "Dry-Aged Chuck", spec: "28-day // 3.5oz × 2 // coarse grind" },
            { name: "American Cheese", spec: "2 slices // one per patty" },
            { name: "Seeded Brioche", spec: "toasted // butter both sides" },
            { name: "Special Sauce", spec: "mayo + ketchup + pickle brine + paprika" },
            { name: "White Onion", spec: "15g // raw // fine dice" },
            { name: "Dill Pickle", spec: "4 slices // between patties + top" },
            { name: "Kosher Salt", spec: "applied at each smash // 1g per patty" },
        ],
        notes: [
            { tag: "Critical", tagAccent: true, text: "15s recovery between smashes is thermally validated — skip it and surface temp drops below Maillard threshold on patty 2. Crust fails." },
            { tag: "Dry-Age", text: "Dry-aged trim has lower moisture content than fresh — handles higher thermal stress without steam. Do not substitute with fresh-ground for this formula." },
            { tag: "Stack", text: "Pickle layer placed between patties — acts as thermal break, prevents carryover cooking of bottom patty from top patty heat." },
            { tag: "Limit", text: "Maximum 4 consecutive dual-smash runs on the IKI-01 press before full surface recovery required (3–5 min). Thermal mass depletes beyond compensation range." },
        ],
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ThermalChart({ recipe }) {
    const { theme, svgPoints, svgPoints2, svgSmash, svgSmash2, svgFlip, svgRecov, svgYAxis, svgTitle } = recipe;
    return (
        <svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 580 }}>
            <line x1="60" y1="20" x2="60" y2="200" stroke="#27272a" strokeWidth=".5" />
            <line x1="60" y1="200" x2="560" y2="200" stroke="#27272a" strokeWidth=".5" />
            {[160, 120, 80].map((y) => (
                <line key={y} x1="60" y1={y} x2="560" y2={y} stroke="#27272a" strokeWidth=".5" strokeDasharray="3,4" />
            ))}
            {svgYAxis.map((label, i) => (
                <text key={i} x="50" y={204 - i * 40} fontFamily="IBM Plex Mono" fontSize="9" fill="#52525b" textAnchor="end">{label}</text>
            ))}
            <text x="64" y="16" fontFamily="IBM Plex Mono" fontSize="8" fill="#3f3f46">{svgTitle}</text>
            <polyline points={svgPoints} fill="none" stroke={theme} strokeWidth="2" />
            {svgPoints2 && <polyline points={svgPoints2} fill="none" stroke={theme} strokeWidth="2" strokeDasharray="8,3" />}
            <line x1="60" y1="104" x2="560" y2="104" stroke={theme} strokeWidth=".8" strokeDasharray="6,4" opacity=".35" />
            <text x="565" y="107" fontFamily="IBM Plex Mono" fontSize="8" fill={theme} opacity=".5">140°C</text>
            {svgRecov && (
                <>
                    <rect x={svgRecov.x} y="60" width="20" height="150" fill={theme} opacity=".04" />
                    <text x={svgRecov.x + 4} y="55" fontFamily="IBM Plex Mono" fontSize="7" fill={theme} opacity=".6">{svgRecov.label}</text>
                </>
            )}
            {svgSmash && (
                <>
                    <line x1={svgSmash.x} y1="20" x2={svgSmash.x} y2="200" stroke={theme} strokeWidth=".8" strokeDasharray="3,3" opacity=".5" />
                    <text x={svgSmash.x + 4} y="30" fontFamily="IBM Plex Mono" fontSize="8" fill={theme}>{svgSmash.label}</text>
                </>
            )}
            {svgSmash2 && (
                <>
                    <line x1={svgSmash2.x} y1="20" x2={svgSmash2.x} y2="200" stroke={theme} strokeWidth=".8" strokeDasharray="3,3" opacity=".35" />
                    <text x={svgSmash2.x + 4} y="30" fontFamily="IBM Plex Mono" fontSize="8" fill={theme} opacity=".7">{svgSmash2.label}</text>
                </>
            )}
            {svgFlip && (
                <>
                    <line x1={svgFlip.x} y1="20" x2={svgFlip.x} y2="200" stroke="#71717a" strokeWidth=".8" strokeDasharray="3,3" opacity=".4" />
                    <text x={svgFlip.x + 4} y="30" fontFamily="IBM Plex Mono" fontSize="8" fill="#71717a">{svgFlip.label}</text>
                </>
            )}
        </svg>
    );
}

function VitalCell({ vital, theme }) {
    return (
        <div className="tk-vital-cell">
            <div className="tk-vital-key">{vital.key}</div>
            <div className="tk-vital-val" style={{ color: vital.accent ? theme : "#fff", fontSize: vital.val.length > 4 ? 16 : 22 }}>
                {vital.val}
            </div>
            <div className="tk-vital-unit">{vital.unit}</div>
        </div>
    );
}

function StepRow({ step, index, theme }) {
    return (
        <div className="tk-step">
            <div className="tk-step-num">{String(index + 1).padStart(2, "0")}</div>
            <div className="tk-step-body">
                <div className="tk-step-action">{step.action}</div>
                <div className="tk-step-detail">{step.detail}</div>
                {step.param && (
                    <div className="tk-step-param" style={{
                        border: `1px solid ${step.paramAccent ? theme : "#3f3f46"}`,
                        color: step.paramAccent ? theme : "#71717a",
                    }}>
                        {step.param}
                    </div>
                )}
            </div>
        </div>
    );
}

function RecipePanel({ recipe, visible }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (visible) {
            const t = setTimeout(() => setMounted(true), 30);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => setMounted(false), 0);
            return () => clearTimeout(t);
        }
    }, [visible]);

    const { theme } = recipe;

    return (
        <div style={{
            display: visible ? "block" : "none",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            paddingTop: 32,
        }}>
            {/* ── Top: Identity + Vitals ── */}
            <div className="tk-two-col" style={{ marginBottom: 1 }}>
                <div className="tk-block" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                    {/* Image */}
                    {recipe.image && (
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            overflow: 'hidden',
                            position: 'relative',
                            flexShrink: 0,
                        }}>
                            <img
                                src={recipe.image}
                                alt={`${recipe.name[0]} ${recipe.name[1]}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    display: 'block',
                                }}
                            />
                            {/* Subtle bottom fade into the text block */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0, left: 0, right: 0,
                                height: '40%',
                                background: 'linear-gradient(to bottom, transparent, #17171A)',
                                pointerEvents: 'none',
                            }} />
                        </div>
                    )}
                    {/* Text */}
                    <div style={{ padding: '24px 28px', flex: 1 }}>
                        <div className="tk-label">{recipe.code} // {recipe.themeLabel} Theme // Savor Integration Active</div>
                        <div className="tk-name" style={{ color: theme }}>{recipe.name[0]}<br />{recipe.name[1]}</div>
                        <div className="tk-sub">{recipe.sub}</div>
                        <div className="tk-desc" style={{ borderLeft: `2px solid ${theme}` }}>
                            {recipe.desc.map((line, i) => <div key={i}>{line}</div>)}
                        </div>
                    </div>
                </div>
                <div className="tk-block">
                    <div className="tk-label">Formula Vitals // {recipe.code}</div>
                    <div className="tk-vitals-grid">
                        {recipe.vitals.map((v, i) => <VitalCell key={i} vital={v} theme={theme} />)}
                    </div>
                </div>
            </div>

            {/* ── Middle: Chart + Steps ── */}
            <div className="tk-chart-row" style={{ marginBottom: 1 }}>
                <div className="tk-block tk-chart-block">
                    <div className="tk-chart-header">
                        <span>{recipe.schematicTitle}</span>
                        <span style={{ color: theme, opacity: 0.6 }}>⊕ {recipe.schematicCode}</span>
                    </div>
                    <div className="tk-chart-wrap">
                        <ThermalChart recipe={recipe} />
                    </div>
                </div>
                <div className="tk-block tk-steps-block">
                    <div className="tk-label">Execution Protocol // {recipe.code}</div>
                    {recipe.steps.map((step, i) => (
                        <StepRow key={i} step={step} index={i} theme={theme} />
                    ))}
                </div>
            </div>

            {/* ── Bottom: Ingredients + Notes ── */}
            <div className="tk-two-col">
                <div className="tk-block">
                    <div className="tk-label">Ingredient Spec // {recipe.code}</div>
                    {recipe.ingredients.map((ing, i) => (
                        <div key={i} className="tk-ing-row" style={{ borderBottom: i < recipe.ingredients.length - 1 ? "1px solid #18181b" : "none" }}>
                            <span className="tk-ing-name">{ing.name}</span>
                            <span className="tk-ing-spec">{ing.spec}</span>
                        </div>
                    ))}
                </div>
                <div className="tk-block">
                    <div className="tk-label">Engineering Notes // {recipe.code}</div>
                    {recipe.notes.map((note, i) => (
                        <div key={i} className="tk-note-row" style={{ borderBottom: i < recipe.notes.length - 1 ? "1px solid #18181b" : "none" }}>
                            <span className="tk-note-tag" style={{
                                border: `1px solid ${note.tagAccent ? theme : "#3f3f46"}`,
                                color: note.tagAccent ? theme : "#71717a",
                            }}>
                                {note.tag}
                            </span>
                            <span className="tk-note-text">{note.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TestKitchen() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState(() => {
        if (id) {
            const match = RECIPES.find(r => r.id === id);
            return match ? match.id : "tk001";
        }
        return "tk001";
    });

    const activeRecipe = RECIPES.find(r => r.id === activeId);

    useEffect(() => {
        // This specifically forces the window to the top 
        // only when this component mounts
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // 'instant' prevents the weird halfway-up "sliding" look
        });
    }, []); // Empty dependency array means "only run on page load"

    return (
        <div className="tk-root pt-24">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

                .tk-root {
                    background: #101012;
                    color: #fff;
                    font-family: 'Space Grotesk', sans-serif;
                    min-height: 100vh;
                
                    position: relative;
                }

                /* ── Grid bg ── */
                .tk-grid-bg {
                    position: fixed;
                    inset: 0;
                    background-image:
                        linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

              
                .tk-page-header {
                    position: relative;
                    z-index: 1;
                    padding: 32px 40px 28px;
                    border-bottom: 1px solid #27272a;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .tk-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 14px;
                }
                .tk-eyebrow-line {
                    height: 1px;
                    width: 28px;
                    flex-shrink: 0;
                    transition: background 0.4s;
                }
                .tk-eyebrow-text {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 9px;
                    text-transform: uppercase;
                    letter-spacing: .4em;
                    color: #52525b;
                }
                .tk-h1 {
                    font-size: clamp(38px, 5.5vw, 80px);
                    font-weight: 700;
                    line-height: .92;
                    text-transform: uppercase;
                    letter-spacing: -.04em;
                }
                .tk-h1-dim {
                    color: #3f3f46;
                    font-style: italic;
                }
                .tk-meta-row {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-top: 18px;
                    row-gap: 6px;
                }
                .tk-meta-item {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    text-transform: uppercase;
                    letter-spacing: .3em;
                    color: #52525b;
                    padding-right: 16px;
                }
                .tk-meta-sep {
                    width: 1px;
                    height: 12px;
                    background: #27272a;
                    margin-right: 16px;
                    flex-shrink: 0;
                }

                /* ── Tabs ──
                 * top: 64px = standard app Navbar height.
                 * If your Navbar uses a different height, change this value.
                 */
                    .tk-tabs {
                    position: sticky;
                    top: 6rem; /* match navbar height */
                    z-index: 90;
                    background: rgba(16, 16, 18, 0.95);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid #27272a;
                    display: flex;
                    overflow-x: auto;
                    scrollbar-width: none;
                    -webkit-overflow-scrolling: touch;
                    padding: 0 40px;
                }
                .tk-tabs::-webkit-scrollbar { display: none; }

                .tk-tab {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    padding: 13px 18px;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 9px;
                    text-transform: uppercase;
                    letter-spacing: .3em;
                    background: none;
                    border: none;
                    border-bottom: 2px solid transparent;
                    cursor: pointer;
                    position: relative;
                    top: 1px;
                    transition: color 0.2s, border-color 0.2s;
                    white-space: nowrap;
                }
                .tk-tab-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    transition: opacity 0.2s;
                }

                /* ── Main ── */
                                .tk-main {
                        max-width: 1400px;
                        margin: 0 auto;
                        padding: 40px 40px 80px; /* Added top padding */
                        position: relative;
                        z-index: 1;
                        /* Ensure this doesn't have a height or overflow-y: hidden */
                    }

                /* ── Layout grids ── */
                .tk-two-col {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px;
                    background: #27272a;
                }
                .tk-chart-row {
                    display: grid;
                    grid-template-columns: 1fr 360px;
                    gap: 1px;
                    background: #27272a;
                }
                .tk-block {
                    background: #17171A;
                    padding: 24px 28px;
                }
                .tk-chart-block {
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                }
                .tk-steps-block { overflow: hidden; }
                .tk-chart-header {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    text-transform: uppercase;
                    letter-spacing: .4em;
                    color: #52525b;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .tk-chart-wrap {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* ── Atoms ── */
                .tk-label {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    text-transform: uppercase;
                    letter-spacing: .45em;
                    color: #52525b;
                    margin-bottom: 14px;
                }
                .tk-name {
                    font-size: clamp(26px, 3.2vw, 46px);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: -.03em;
                    line-height: 1;
                    margin-bottom: 6px;
                }
                .tk-sub {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .3em;
                    color: #71717a;
                    margin-bottom: 14px;
                }
                .tk-desc {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 9px;
                    line-height: 1.9;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: .1em;
                    padding-left: 14px;
                }

                /* ── Vitals ── */
                .tk-vitals-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1px;
                    background: #27272a;
                }
                .tk-vital-cell {
                    background: #17171A;
                    padding: 14px 10px;
                    border-right: 1px solid #27272a;
                    border-bottom: 1px solid #27272a;
                }
                .tk-vital-key {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 7px;
                    text-transform: uppercase;
                    letter-spacing: .35em;
                    color: #52525b;
                    margin-bottom: 5px;
                }
                .tk-vital-val {
                    font-family: 'IBM Plex Mono', monospace;
                    font-weight: 500;
                    line-height: 1;
                    margin-bottom: 4px;
                }
                .tk-vital-unit {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 7px;
                    color: #52525b;
                    text-transform: uppercase;
                    letter-spacing: .25em;
                }

                /* ── Steps ── */
                .tk-step {
                    display: flex;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid #1E1E22;
                }
                .tk-step:last-child { border-bottom: none; }
                .tk-step-num {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    color: #3f3f46;
                    width: 18px;
                    flex-shrink: 0;
                    padding-top: 2px;
                }
                .tk-step-body { flex: 1; min-width: 0; }
                .tk-step-action {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .04em;
                    margin-bottom: 3px;
                }
                .tk-step-detail {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: .1em;
                    line-height: 1.6;
                }
                .tk-step-param {
                    display: inline-block;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 7px;
                    padding: 2px 6px;
                    margin-top: 4px;
                    letter-spacing: .18em;
                    text-transform: uppercase;
                }

                /* ── Ingredients ── */
                .tk-ing-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    padding: 8px 0;
                    gap: 10px;
                }
                .tk-ing-name {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .04em;
                    flex-shrink: 0;
                }
                .tk-ing-spec {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: .15em;
                    text-align: right;
                }

                /* ── Notes ── */
                .tk-note-row {
                    display: flex;
                    gap: 10px;
                    padding: 9px 0;
                    align-items: flex-start;
                }
                .tk-note-tag {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 7px;
                    text-transform: uppercase;
                    letter-spacing: .25em;
                    padding: 3px 6px;
                    flex-shrink: 0;
                    white-space: nowrap;
                    line-height: 1.4;
                }
                .tk-note-text {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    color: #a1a1aa;
                    text-transform: uppercase;
                    letter-spacing: .1em;
                    line-height: 1.7;
                }

                /* ── Footer ── */
                .tk-footer {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 14px 40px;
                    border-top: 1px solid #27272a;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                    flex-wrap: wrap;
                }
                .tk-footer-meta {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 8px;
                    text-transform: uppercase;
                    letter-spacing: .3em;
                    color: #3f3f46;
                }
                .tk-footer-cta {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 9px;
                    text-transform: uppercase;
                    letter-spacing: .3em;
                    color: #52525b;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #27272a;
                    padding-bottom: 2px;
                    cursor: pointer;
                    transition: color 0.2s;
                    white-space: nowrap;
                }

                /* ─────────────────────────────────────────
                   RESPONSIVE
                ───────────────────────────────────────── */

                /* Tablet: collapse chart sidebar */
                @media (max-width: 960px) {
                    .tk-chart-row {
                        grid-template-columns: 1fr;
                    }
                }

                /* Mobile landscape / small tablet */
                @media (max-width: 768px) {
                    .tk-page-header {
                        padding: 24px 20px 20px;
                    }
                    .tk-tabs {
                        padding: 0 20px;
                        /* Match your mobile Navbar height here if different from 64px */
                        top: 64px;
                    }
                    .tk-main {
                        padding: 0 0 60px;
                    }
                    .tk-footer {
                        padding: 14px 20px;
                    }
                    .tk-block {
                        padding: 20px 16px;
                    }
                    .tk-eyebrow-text {
                        font-size: 7px;
                        letter-spacing: .3em;
                    }
                }

                /* Mobile portrait */
                @media (max-width: 600px) {
                    /* Stack all two-column grids */
                    .tk-two-col {
                        grid-template-columns: 1fr;
                    }

                    .tk-page-header {
                        padding: 20px 16px 18px;
                    }
                    .tk-tabs {
                        padding: 0 12px;
                        top: 96px; /* matches navbar h-24 */
        justify-content: center; /* Center the tabs group */
        z-index: 100; /* Ensure tabs are above other content when centered */
                    }
                    .tk-tab {
                    flex: 1;
                        padding: 11px 12px;
                        font-size: 8px;
                        letter-spacing: .2em;
                        gap: 6px;
                    }
                    .tk-tab-dot {
                        width: 5px;
                        height: 5px;
                    }
                    .tk-main {
                        padding: 0 0 48px;
                    }
                    .tk-block {
                        padding: 16px 14px;
                    }

                    /* Header */
                    .tk-eyebrow { gap: 8px; margin-bottom: 10px; }
                    .tk-eyebrow-text { font-size: 7px; letter-spacing: .25em; }
                    .tk-meta-row { margin-top: 12px; row-gap: 4px; }
                    .tk-meta-item { font-size: 7px; letter-spacing: .2em; padding-right: 10px; }
                    .tk-meta-sep { margin-right: 10px; }

                    /* Recipe name */
                    .tk-name { font-size: clamp(28px, 7vw, 40px); }
                    .tk-sub { font-size: 9px; letter-spacing: .2em; }
                    .tk-desc { font-size: 8px; padding-left: 10px; }

                    /* Vitals: keep 3-col but tighter */
                    .tk-vital-cell { padding: 10px 8px; }
                    .tk-vital-key { font-size: 6px; letter-spacing: .2em; }
                    .tk-vital-val { font-size: 16px !important; }
                    .tk-vital-unit { font-size: 6px; letter-spacing: .18em; }

                    /* Chart */
                    .tk-chart-block { min-height: 200px; }

                    /* Steps */
                    .tk-step-action { font-size: 10px; }
                    .tk-step-detail { font-size: 8px; }

                    /* Ingredients: stack name above spec */
                    .tk-ing-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2px;
                        padding: 9px 0;
                    }
                    .tk-ing-spec { text-align: left; }

                    /* Notes */
                    .tk-note-text { font-size: 8px; }

                    /* Footer */
                    .tk-footer {
                        padding: 12px 14px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }
                    .tk-footer-meta { font-size: 7px; letter-spacing: .2em; }
                }

                /* Very small (iPhone SE, 375px wide) */
                @media (max-width: 390px) {
                    .tk-tab {
                        padding: 10px 9px;
                        font-size: 7px;
                        letter-spacing: .12em;
                    }
                    /* 2-col vitals at very narrow widths */
                    .tk-vitals-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .tk-vital-val { font-size: 18px !important; }
                }
            `}</style>

            {/* Grid bg */}
            <div className="tk-grid-bg" />

            {/* Page Header */}
            <div className="tk-page-header">
                <div className="tk-eyebrow">
                    <div className="tk-eyebrow-line" style={{ background: activeRecipe.theme }} />
                    <span className="tk-eyebrow-text">IKI Test Kitchen // Engineered Burger Formulas // Maillard-Optimized</span>
                </div>
                <h1 className="tk-h1">
                    Burger<br />
                    <span className="tk-h1-dim">Protocols.</span>
                </h1>
                <div className="tk-meta-row">
                    {[
                        "Press: SKU-IKI-01",
                        "Temp: 450°F",
                        "Maillard: 140°C",
                        "Blend: 80/20",
                        "5 Formulas",
                    ].map((item, i, arr) => (
                        <span key={i} style={{ display: "flex", alignItems: "center" }}>
                            <span className="tk-meta-item">{item}</span>
                            {i < arr.length - 1 && <span className="tk-meta-sep" />}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="tk-tabs ">
    {RECIPES.map(r => (
        <button
            key={r.id}
            className="tk-tab"
            onClick={() => {
                setActiveId(r.id);
                // This updates the URL to /protocol/TK001, etc.
                navigate(`/protocol/${r.id}`); 
            }}
            style={{
                color: activeId === r.id ? "#fff" : "#52525b",
                borderBottomColor: activeId === r.id ? r.theme : "transparent",
            }}
        >
            <span
                className="tk-tab-dot"
                style={{ background: r.theme, opacity: activeId === r.id ? 1 : 0.3 }}
            />
            {r.code} <span className="hidden sm:inline">{r.name[0]}</span>
        </button>
    ))}
</div>

            {/* Content */}
            <div className="tk-main">
                {RECIPES.map(r => (
                    <RecipePanel key={r.id} recipe={r} visible={activeId === r.id} />
                ))}
            </div>

            {/* Footer */}
            <div className="tk-footer">
                <span className="tk-footer-meta">
                    IKI Test Kitchen // TK Series // Rev 1.0 // 5 Formulas Active // Savor Integration Pending
                </span>
                <a
                    href="/test-kitchen"
                    className="tk-footer-cta"
                    onMouseEnter={e => e.currentTarget.style.color = activeRecipe.theme}
                    onMouseLeave={e => e.currentTarget.style.color = "#52525b"}
                >
                    Open All in Savor →
                </a>
            </div>
        </div>
    );
}