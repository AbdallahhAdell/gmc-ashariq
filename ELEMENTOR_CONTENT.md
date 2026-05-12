# GMC Ashariq — Website Content & Elementor Build Guide

This document contains all final copy, section structure, and design specifications for the GMC Ashariq corporate website. Use it as the source of truth when populating the Elementor template.

A working static reference of the full design is available alongside this file at `website/index.html`. Open it in a browser to see the intended look, spacing, and behaviour.

---

## DESIGN SYSTEM

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Navy 900 | `#06101E` | Page backgrounds, footer |
| Navy 800 | `#0A1628` | Default body background |
| Navy 700 | `#0F1E33` | Cards, panels |
| Navy 600 | `#152841` | Card hover state |
| Gold 500 | `#C9A961` | Primary accent — buttons, headings, dividers |
| Gold 400 | `#D9BE7E` | Hover / lighter accent |
| Ivory | `#F4F1EA` | Headings on dark |
| Bone | `#E8E4DA` | Body text on dark |
| Stone | `#B6B0A1` | Muted secondary text |
| Slate mute | `#8A93A8` | Captions, labels |

### Typography
- **Display / headings:** Cormorant Garamond, weights 400–500. Light letter-spacing (-0.01em). Use italic gold for emphasis words in headlines.
- **Body / UI:** Inter, weights 300–500. Generous line-height (1.65). Eyebrows and buttons are uppercase, letter-spacing 0.18–0.22em, size 0.72–0.82rem.
- **H1:** clamp(2.6rem, 5.2vw, 4.6rem)
- **H2:** clamp(2.0rem, 3.8vw, 3.2rem)
- **H3:** clamp(1.5rem, 2.4vw, 2.0rem)

### Spacing
8-point grid. Section padding: 96px desktop / 64px mobile. Container max-width: 1280px. Generous whitespace — sections should feel calm, never crowded.

### Component patterns
- **Eyebrow:** small uppercase gold label with a 32px gold line in front of it
- **Buttons:** Square (no border radius), uppercase, generous padding
  - Primary: solid gold background, dark navy text
  - Ghost: transparent with thin border, ivory text → gold on hover
- **Cards:** Navy 700 background, thin slate border, lift + gold border on hover
- **Dividers:** 56px gold line, used after eyebrow→heading
- **Project tiles:** Image with dark gradient overlay; tag + heading + description over image

### Imagery direction
Large, cinematic industrial photography — quarries, drilling rigs, basalt formations, machinery in landscape. Desaturated slightly. Always covered with a dark navy gradient overlay to maintain text legibility and the brand mood. No people-as-subject unless they are working operators (hard hats, equipment).

---

## SITE STRUCTURE & NAVIGATION

**Header (sticky, transparent until scroll, then dark frosted):**
- Logo: monogram "GA" in a gold-bordered box + wordmark "GMC Ashariq / Mining & Industrial"
- Links: Home · About · Services · Projects · Leadership · Contact
- CTA button (right): "Get in Touch" (ghost style)

**Footer (always present):**
- Brand block (left): logo + tagline "A strategic alliance of GMC Group Middle East and Ashariq Group. Delivering integrated mining services across Tanzania and Africa."
- Company column: About, Leadership, Projects, Contact
- Services column: Geological Studies, Drilling & Blasting, Quarry Management, Rehabilitation
- Contact column: emails + phone numbers
- Base bar: © 2026 GMC Ashariq · Tanzania · Egypt

---

## PAGE 1 — HOME

### Hero
- **Eyebrow:** GMC Group · Ashariq Group
- **H1:** Shaping the future of *mining* in Africa.  *(italicise "mining" in gold)*
- **Lede:** A strategic alliance combining three decades of mining expertise across Egypt, the Middle East and Tanzania — delivering geological excellence, operational rigour and responsible stewardship of the land.
- **Primary CTA:** Explore Our Services → /services
- **Secondary CTA:** About GMC Ashariq → /about
- **Hero meta strip** (bottom of hero, 4 columns):
  - Founded — 2024
  - Combined Expertise — 30 Years
  - Annual Production — 10M+ Tons
  - Headquarters — Tanzania · Egypt
- **Background image:** Wide quarry / open pit, dark navy gradient overlay

### Values Bar
Inline pipe-separated values: Geological Integrity · Operational Excellence · Environmental Stewardship · Community Partnership

### About Preview (split: text + image)
- **Eyebrow:** About GMC Ashariq
- **H2:** A strategic merger built on three decades of African mining.
- **Body:**
  > GMC Ashariq is the result of a powerful alliance between **GMC Group** — a recognised authority in cement-grade mining and quarry management across Egypt and the Middle East — and **Ashariq Group**, a Tanzanian operator with deep local presence and commercial expertise.
  >
  > Together we bring international engineering standards and local operational intelligence to one of Africa's most promising mining markets, with a focus on cement raw materials, industrial minerals, and sustainable quarry development.
- **Link:** Discover Our Story → /about

### Services Grid (4 × 2)
- **Eyebrow:** What we do
- **H2:** Eight disciplines. *One integrated operation.*
- **Subhead:** From first geological survey to final land rehabilitation, GMC Ashariq operates the complete mining value chain under one engineering culture.

| # | Title | Summary |
|---|---|---|
| 01 | Geological Studies | Comprehensive geological investigations, raw material assessment and deposit characterisation. |
| 02 | Ore Body Modeling | High-resolution 3D block modelling integrating chemistry, structure, and topography. |
| 03 | Reserve Estimation | Bench-by-bench reserve calculations and volume analyses grounded in geostatistical rigour. |
| 04 | Drilling | Core drilling grid design and rotary drilling operations with 95%+ core recovery. |
| 05 | Blasting | Advanced blast design, monitoring and VOD measurement — held to the highest safety standards. |
| 06 | Quarry Management | End-to-end quarry operations — extraction, crushing, screening and logistics optimisation. |
| 07 | Rehabilitation | Mine rehabilitation studies and land restoration plans that return operational areas to ecological balance. |
| 08 | Technical Consultation | Expert advisory across mine planning, process optimisation and minerals processing. |

### Projects Preview (3 tiles)
- **Eyebrow:** Selected Projects
- **H2:** Trusted by the operators shaping Africa's industrial future.
- **Tile 1:** Sinai Cement — Total Quarry Management *(Current · Sinai, Egypt)*
- **Tile 2:** Basalt Supply — Glass Rock *(Active · Wadi Hagoul)*
- **Tile 3:** Lafarge Holcim — Quarry Management *(Legacy · Egypt)*
- **CTA:** View All Projects → /projects

### Statistics (4 columns, animated counters)
- 30+ — Years of expertise — Across the African continent
- 10M+ — Tons produced annually — Across active operations
- 10.1% — Tanzania mining GDP, 2024 — Sector surpassing 2025 target
- 95% — Core recovery standard — On all drilling programmes

### Leadership Preview (3 cards)
- **Eyebrow:** Leadership
- **H2:** Directed by veterans of *global mining.*
- **Subhead:** A leadership team with combined experience across LafargeHolcim, Heidelberg, GSK, and Africa's largest cement operators.
- Cards for: Eng. Mohamed Hosney (Chairman), Mr. Rashed (CEO), Eng. Ayman Abdelaal (VP) — short bios on Leadership page

### Contact CTA strip
- **Eyebrow:** Get in touch
- **H2:** Ready to discuss your project?
- **Subtext:** From geological survey to total quarry management — talk to our engineering team about your operation.
- **CTA:** Contact GMC Ashariq → /contact

---

## PAGE 2 — ABOUT

### Page Hero
- **Eyebrow:** Our Company
- **H1:** Built on legacy. *Built for the future.*
- **Lede:** GMC Ashariq is a strategic alliance between GMC Group Middle East and Ashariq Group — uniting three decades of mining and industrial leadership across Egypt, the Middle East and Tanzania.

### The Strategic Merger (split)
- **Eyebrow:** The Strategic Merger
- **H2:** Two heritages. One operational vision.
- **Body:**
  > The merger of GMC Group and Ashariq Group creates a premier mining entity for Tanzania — with the technical depth of an international cement-quarry operator and the on-the-ground expertise of a trusted Tanzanian commercial partner.
  >
  > The result is a single organisation capable of executing the full value chain: from initial geological assessment through extraction, processing, and rehabilitation, all to international engineering standards.

### Three Pillars (3 cards)
- **Eyebrow:** Why GMC Ashariq
- **H2:** Three pillars of competitive advantage.
- **01 / Heritage — 30 Years of Expertise:** Three decades of proven success in mining and industrial activities across the African continent — with a portfolio that includes work for LafargeHolcim, Suez Cement (Heidelberg), Egyptian Cement, El Sewedy and Orascom.
- **02 / Synergy — Global Standards, Local Insight:** International best practice from the Middle East fused with deep-rooted local expertise in Tanzania — ensuring every project meets global engineering benchmarks while remaining commercially grounded in regional realities.
- **03 / Excellence — Operational Excellence:** Strategic growth driven by technological innovation, rigorous geostatistics, modern blast monitoring (MDL, MREL) and a relentless focus on the quality and consistency of the materials we deliver.

### Our Vision (split, reversed)
- **Eyebrow:** Our Vision
- **H2:** A model for responsible mining.
- **Body:**
  > GMC Ashariq stands at the forefront of a transformative journey in Tanzania's mining sector. By integrating sustainable practices and technological advancement, we strive to enhance economic contribution while ensuring environmental stewardship.
  >
  > Our vision is to create a mining model that not only drives profitability but also fosters community engagement and ecological responsibility — setting a benchmark for future operations across the continent.

Three sub-pillars:
- **Sustainable Innovation:** Integrating cutting-edge practices and technological advancement to drive efficiency at every operational stage.
- **Economic Impact:** Enhancing national contributions while ensuring rigorous environmental stewardship.
- **Global Benchmarking:** Creating a model for mining that prioritises community engagement and ecological integrity.

### Tanzania's Mining Landscape (3 cards)
- **Eyebrow:** Tanzania's Mining Landscape
- **H2:** An exceptional moment for African resources.
- **Subhead:** Tanzania's mining sector has surpassed government targets ahead of schedule — and now sits at the heart of one of the most ambitious resource development programmes on the continent.
- **10.1% of GDP** — Mining sector contribution to GDP reached 10.1% in 2024 — surpassing the 2025 target ahead of schedule.
- **16% → 50%** — Government focus on value addition and local content aims to increase mineral revenue contribution from 16% to 50%.
- **50% by 2030** — Tanzania's ambitious goal is to expand mineral exploration coverage to 50% of the country's landmass by 2030.
- **Source line:** Source: Tanzania Ministry of Minerals / TICGL 2025 Outlook

### Stats
30+ years of expertise · 10M+ tons / yr · 8 service disciplines · 2 countries of operation

### CTA strip — Partner with us
- **H2:** Bring our expertise to your operation.

---

## PAGE 3 — SERVICES

### Page Hero
- **Eyebrow:** What we do
- **H1:** The complete mining *value chain.*
- **Lede:** Eight integrated disciplines delivered under a single engineering culture — from first survey to final rehabilitation.

### Services Index Grid (4×2)
*Same as Home services grid — each tile anchor-linked to the detail section below.*

### Detailed sections (one per service, alternating split layouts)

#### 01 / Geological Studies
**H2:** Raw material exploration with engineering precision.
**Body:** Comprehensive understanding of the geological features within the deposit area — producing precise information on quality, quantity, and the long-term suitability of the resource for industrial use.

Feature list:
- **Geological Insight** — Detailed characterisation of stratigraphy, lithology and structural geology.
- **Data Reliability** — Precise information on the deposit's quality and quantity for confident investment decisions.
- **Supply Assurance** — A steady and consistent flow of raw materials for downstream industrial operations.
- **Resource Optimisation** — Maximised utilisation with respect to lifetime, cost and waste reduction.
- **Critical Alignment** — Mining plans rigorously matched to environmental assessment and sustainability commitments.

#### 02 / Ore Body Modeling
**H2:** 3D block modelling of the deposit.
**Body:** The deposit body is modelled in three-dimensional space using topographic survey data, packed into a series of blocks with precise dimensions — aligned to expected bench heights and annual material consumption during operations.

Spec list:
- Topographic Survey: Up to 1:1000
- Block Dimensions: Bench-aligned
- Modeling Inputs: Chemistry · Structure · DTM
- Estimation Method: Geostatistical

#### 03 / Reserve Estimation
**H2:** Reserve calculation & volume analysis.
**Body:** The 3D block model is used to calculate reserves with high precision — bench-by-bench, above or below specific levels, or for any defined part of the deposit body. Cut-and-fill activity modelling supports accurate planning of equipment, budget and timeframes.

Feature list:
- **Precision Reserve Calculation** — Selective reporting by bench, elevation or zone.
- **Cut & Fill Modelling** — Pre- and post-activity terrain models for material volume calculations.
- **Strategic Planning** — Accurate estimates for equipment requirements, budget allocation and project timeframes.

#### 04 / Drilling
**H2:** Core drilling, precisely engineered.
**Body:** Core drilling grids designed with spacing typically between 100 and 400 metres. Infill drilling is strategically deployed where initial results reveal quality fluctuation. Continuous sampling along the complete borehole, with air or freshwater circulation to flush cuttings and preserve sample integrity.

Spec list:
- Sample Diameter: Minimum 76 mm
- Recovery Rate: Not less than 95%
- Sampling Method: Continuous Core Recovery
- Borehole Protection: Cased to prevent collapse

#### 05 / Advanced Blasting
**H2:** Engineered blasting under the strictest safety regime.
**Subhead:** Strict adherence to high safety rules and regulations. Specialist consultancy and on-the-ground execution — supported by industry-leading instrumentation from MDL and MREL.

Two columns:

*Core Operations — Design & Execution:*
- Management of explosives magazines
- Design of blast hole patterns
- Blast hole charging & detonation
- Drilling and blasting proposals
- Specialised blasting consultancy

*Precision & Monitoring — Instrumented Quality Control:*
- Quarry bench profiling (MDL LaserAce)
- Blast hole deviation (MDL Boretrak)
- Blast monitoring (MREL high-speed video)
- Velocity of Detonation (VOD) measurement
- Vibration & air pressure measurement
- Comprehensive cost optimisation studies

#### 06 / Quarry Management
**H2:** End-to-end quarry operations.
**Body:** GMC Ashariq operates the complete quarry value chain on behalf of major cement and industrial partners — from raw material extraction through crushing, screening, processing and logistics optimisation.

Feature list:
- **Total Management** — Operational responsibility for the full quarry lifecycle.
- **Processing** — Crushing, screening and grinding to industrial specifications.
- **Logistics Optimisation** — Coordinated extraction, haulage and dispatch.
- **Long-term Planning** — Long-, medium- and short-term mining plans tied to market demand.

#### 07 / Rehabilitation
**H2:** Land restoration & environmental stewardship.
**Body:** We are committed to returning land in our operational areas to its former state, ensuring long-term ecological stability. Rehabilitation plans aim to minimise and mitigate environmental effects — integrated into every phase of our mining model from initial exploration to final closure.

Feature list:
- **Land Restoration** — Returning operational areas to pre-mining ecological condition.
- **Environmental Mitigation** — Plans that minimise impact from large-scale rock movement.
- **Responsible Operations** — Stewardship integrated across the full mining lifecycle.

#### 08 / Technical Consultation
**H2:** Advisory grounded in operational reality.
**Body:** Expert technical assistance for quarry operations — equipment selection, process optimisation and operational efficiency. Minerals processing services and strategic industrial alignment from cement to heavy building materials.

Feature list:
- **Mine Planning & Cost Optimisation** — Strategic planning across short-, medium- and long-term horizons.
- **Process Optimisation** — Throughput, quality and energy efficiency improvements.
- **Minerals Processing** — Crushing, screening and grinding to industrial specifications.
- **Safety & Resource Development** — Standards and capability building grounded in best practice.

---

## PAGE 4 — PROJECTS

### Page Hero
- **Eyebrow:** Selected Work
- **H1:** Trusted by the operators *building Africa.*
- **Lede:** Long-term contracts and project mandates from the world's leading cement producers and industrial groups.

### Current Operations (4 large tiles)

| Tile | Tag | Title | Description |
|---|---|---|---|
| 1 | Sinai, Egypt · Total Management | Sinai Cement Plant | Comprehensive quarry management for global industry leaders — raw material extraction, crushing and logistical optimisation. |
| 2 | Wadi Hagoul · Basalt Supply | Glass Rock Company | Basalt supply from our Wadi Hagoul quarry to a leading specialist glass and industrial mineral operator. |
| 3 | Egypt · Specialised Operations | Lafarge Egypt (Holcim) | Specialised extraction and processing operations supporting one of the world's foremost cement and building materials groups. |
| 4 | Egypt · Basalt Supply | Suez Cement (Heidelberg) | Long-term basalt supply agreement with Suez Cement, part of the Heidelberg Materials global cement group. |

### Supporting Cards (3 columns)
- **Bahariya Oasis — Orascom Company:** Supply of crushed basalt from the Bahariya Oasis quarry.
- **Production Scale — 10M+ Tons / Year:** Combined annual production across all active operations and supply agreements.
- **Service Scope — End-to-End:** From geological assessment through extraction, processing and rehabilitation.

### Project Heritage (4 cards)
- **Lafarge Holcim — Basalt & Clay Quarries:** Total management of the Basalt and Clay quarries supporting one of the world's largest cement and building materials groups.
- **Egyptian Cement Plant — Geology & Mining Plan:** Geological investigation, raw material assessment and mining plan for the Egyptian Cement Factory.
- **Reliance Company — Attaqa Mountain Dolomite:** Geological investigation, raw material assessment and mining plan for the Dolomite quarry at Attaqa Mountain.
- **El Sewedy Cement — Basalt Supply:** Long-term basalt supply agreement to the El Sewedy Cement Factory.

---

## PAGE 5 — LEADERSHIP

### Page Hero
- **Eyebrow:** Leadership Team
- **H1:** Directed by veterans of *global mining.*
- **Lede:** A leadership team with combined experience across LafargeHolcim, Heidelberg, GSK, ICMI and Africa's largest cement producers — backed by 30 years of operational track record.

### Leader Cards (6, 3-column grid)

**Eng. Mohamed Hosney — Chairman & Co-Founder**
A seasoned mining executive with over two decades of international experience in the cement and heavy building materials industry. Distinguished career leading geology, raw material sourcing and mining operations for global cement producers across the Middle East and Africa. Founder and Managing Director of GMC, driving industry innovation through sustainable practices.

**Mr. Rashed — CEO & Co-Founder**
CEO & Co-Founder of ASHARIQ Company since 2010. Former CEO of the International Company for Mining & Industries (ICMI). Former Commercial Director at ECM for Gold and Hiring Equipment. Expert in P&L leadership, strategic planning, and commercial operations across the mining and industrial sectors.

**Eng. Ayman Abdelaal — Vice President**
Results-driven executive with over 34 years of experience in the cement and heavy building materials industry. Expert in exploration, process optimisation, and operational strategy. Contributing to GMC's growth as a senior executive since 2016.

**Eng. Hagag — Operation Director**
Operations veteran with a background at LafargeHolcim and GSK. Specialist in mine planning, cost optimisation, safety standards and resource development — ensuring every operation meets engineering, commercial and safety objectives.

**Mr. Mohamed Hanafy — Management Director**
GMC Ashariq Management Director. Previously Credit Manager at Mantrac East Africa (2018–present). Former Business Development Director at Geo-metallic for Mining. Expertise: revenue growth, contract negotiation, market expansion and customer relations.

**Mr. Ahmed Abdelwahab — Business Development**
Business Development Leader. Co-Founder & CEO of GSK for Mining (2018–present). Former Business Development Director at Geo-metallic for Mining. Expertise: sales strategy, client management, and operational efficiency.

### Experience Stats
- 34+ Years — Eng. Abdelaal
- 20+ Years — Eng. Hosney
- 15+ Years — Mr. Rashed at Ashariq
- 6 Senior leadership members

### Leadership Philosophy (3 cards)
- **Engineering Rigour** — Every plan is grounded in geostatistics, instrumented monitoring, and the engineering standards of global cement producers.
- **P&L Ownership** — Leadership that has operated the commercial reality of mining — not just the technical one. Decisions are economic as well as engineering.
- **Long-term Mindset** — We design operations for the full lifecycle of the deposit — including rehabilitation, community impact, and ecological restoration.

---

## PAGE 6 — CONTACT

### Page Hero
- **Eyebrow:** Get in Touch
- **H1:** Driving the future of *mining in Africa.*
- **Lede:** Speak directly to our engineering, operations or commercial teams. We respond to all enquiries within two business days.

### Contact Channels (3 cards)

**Headquarters — GMC Group**
Operating across Egypt and Tanzania, with active sites at Wadi Hagoul, Bahariya Oasis, Sinai, and Tanzania.
- Egypt: GMC Group HQ
- Tanzania: GMC Ashariq Operations

**Email — Direct Lines**
- Management Director: mhanfy@gmcashariq.com
- Operations: hagag@gmcashariq.com

**Phone — Tanzania Office**
- Primary: +255 760 221 122
- Secondary: +255 741 998 899

### Contact Form (with copy on the left)
**H2:** Let's discuss your operation.
**Body:** Whether you're scoping a new deposit, planning a quarry development, or assessing rehabilitation for an existing site — share a few details and our engineering team will get back to you with the right point of contact.

For confidential strategic conversations, reach out to leadership directly via the email addresses above.

Spec list:
- Response Time: Within 2 business days
- Working Hours: Mon–Fri · 8–5 EAT
- Languages: English · Arabic · Swahili

**Form fields:** First Name · Last Name · Email · Company · Enquiry Type (dropdown: Geological Studies, Drilling & Blasting, Quarry Management, Reserve Estimation, Rehabilitation, Technical Consultation, Partnership / Investment, Media / Press, Other) · Message

### Closing Statement (centered)
- **Eyebrow:** Strategic Partnership
- **H2:** Driving the future of mining in Africa.
- **Body:** GMC Ashariq stands at the forefront of a transformative journey in Tanzania's mining sector. By integrating sustainable practices and technological advancement, we strive to enhance economic contribution while ensuring environmental stewardship — setting a benchmark for future operations across the continent.

---

## ELEMENTOR IMPLEMENTATION NOTES

1. **Global colors / fonts** — Set the palette and typography under *Site Settings → Global Colors / Fonts* so they apply consistently across every page widget.
2. **Header & Footer** — Build once as Elementor Theme Templates (Theme Builder → Header / Footer) so all six pages share them.
3. **Spacing** — Default section padding 96px top/bottom on desktop, 64px on mobile. Inner element gap 24–32px.
4. **Section backgrounds** — Alternate Navy 800 ↔ Navy 900 between sections for vertical rhythm. Use the subtle 60×60px grid pattern (CSS in static reference) on darker sections.
5. **Buttons** — Square corners, uppercase, letter-spacing ~0.15em, padding 16×28px. Primary = gold solid; ghost = transparent thin border.
6. **Images** — Use the included Unsplash references as placeholders, or replace with GMC Ashariq's own site photography when available. Every hero image must have a navy gradient overlay (top 55% opacity → bottom 92%) for text legibility.
7. **Animation** — Apply Elementor's "Fade In Up" entrance animation to repeated card grids, with 100–200ms stagger per item.
8. **Mobile** — Stack grids to single column below 600px; halve section padding; keep hero meta strip wrapping (4 → 2 → 1).
9. **Form submission** — Wire the contact form to send to `mhanfy@gmcashariq.com` and `hagag@gmcashariq.com` as recipients; enable Elementor Pro's email notification action.
10. **SEO meta** — Page titles and descriptions are set in each HTML file's `<head>` — mirror them in Yoast / Rank Math when publishing.

---

## ASSETS CHECKLIST

- [ ] Replace placeholder Unsplash imagery with GMC Ashariq site photography
- [ ] Source / commission proper headshots for each leadership card (replace current monogram avatars)
- [ ] Obtain official client logos for Lafarge Holcim, Suez Cement (Heidelberg), Orascom, El Sewedy etc. for an optional logo wall section
- [ ] Map embed for Tanzania HQ on Contact page (use Google Maps or Mapbox)
- [ ] Favicon (suggest: monogram "GA" in gold on navy)
- [ ] Open Graph / social share image (suggest: hero photo with logo overlay)
