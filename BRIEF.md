# BRIEF — orangepeel-iagent.fr
> Fichier de mémoire projet. À lire en début de chaque session Claude Code.
> Dernière mise à jour : 2026-03-31

---

## Identité

- **Auteur :** Manuel, handle OrangePeel (GitHub : man-orangepeel)
- **Repo public iAgent :** https://github.com/man-orangepeel/iagent
- **Repo site :** https://github.com/man-orangepeel/orangepeel-iagent (à créer)
- **Domaine :** https://www.orangepeel-iagent.fr

---

## Ce que ce site est

Un site one-page (avec ancres) qui remplit trois fonctions dans cet ordre de priorité :

1. **Proof of work technique** → crédibilité auprès des entreprises Bitcoin
2. **Capture email contre runbook** → lead magnet vers bootcamp partenaire (965$)
3. **Qualification automatique** → seuls les leads Bitcoin nécessitent une intervention manuelle

iAgent est un **proof of work, pas un produit SaaS**. Le visiteur doit repartir convaincu qu'il y a derrière ce repo quelqu'un capable de résoudre des problèmes IA réels en production.

---

## Ce que ce site n'est PAS

- Un produit SaaS à vendre
- Un projet open source communautaire à maintenir
- Une vitrine généraliste IA

---

## Deux audiences simultanées (tension de design)

| Audience | Profil | Ce qu'elle cherche | CTA final |
|---|---|---|---|
| **CTO / Tech Bitcoin** | Évalue une compétence technique | Voir du code réel, une architecture sérieuse, une approche sécurité | LinkedIn ou Telegram → discussion → RDV si pertinent |
| **Executive non-tech** | Veut déléguer son IA sans coder | Comprendre ce que ça fait concrètement, obtenir un guide | Runbook par email automatique → séquence bootcamp |

Le design et le copy doivent adresser les deux **sans diluer le message**.

---

## Contexte OpenClaw — axe de communication majeur

**OpenClaw** est un projet IA personnel connu dans la communauté. iAgent en est l'évolution directe — plus robuste, mieux documenté, sans les limitations d'OpenClaw.

Le site capitalise sur la notoriété d'OpenClaw pour attirer deux profils :
- **Migrants OpenClaw** : déjà équipés, cherchent une migration propre
- **Nouveaux** : point d'entrée 0, cherchent à installer un agent IA personnel

Le comparatif iAgent vs OpenClaw est un **axe de communication visible**, pas un détail interne.

---

## Architecture fonctionnelle (sections dans l'ordre)

1. **Hero** — pitch iAgent + CTA principal "Get the Runbook"
2. **What it does** — proof of work concret (brief matinal, vocal, PDF, newsletter Bitcoin)
3. **iAgent vs OpenClaw** — tableau comparatif visible, deux entrées funnel (migration / départ 0)
4. **Who is this for** — bifurcation explicite des deux audiences
5. **Qualification form** — 3 champs : nom, email, profil (Tech / Non-tech / Bitcoin company)
6. **Footer** — GitHub + orangepeel.fr

---

## Flux de qualification

```
Formulaire soumis
├── Profil : Tech ou Non-tech → Runbook envoyé par Brevo (automatique) → séquence email bootcamp (965$, Charlotte/Neon&Slate)
└── Profil : Bitcoin company  → Page de remerciement avec liens LinkedIn + Telegram (discussion directe, pas de RDV automatique)
```

---

## Stack technique

| Composant | Choix |
|---|---|
| Framework | Next.js (App Router) |
| Hosting | Vercel |
| Email | Brevo (transactionnel + séquence) |
| Formulaire | Tally.so (iframe embarqué, sans bordures) |
| Bitcoin leads | Redirection vers LinkedIn + Telegram (pas de Calendly) |
| Runbook | Fichier .md joint à l'email Brevo — **jamais dans le repo public** |
| Analytics | À décider (Vercel Analytics par défaut) |
| Repo | GitHub public (man-orangepeel) |

---

## Décisions prises (ne pas remettre en question sans raison)

- **Tally.so en iframe embarqué** — rendu propre, pas de redirect, standard Next.js
- **Runbook gratuit contre email** — fichier .md envoyé par Brevo, jamais exposé publiquement
- **Bitcoin leads → pas de Calendly** — redirection vers LinkedIn + Telegram pour discussion qualifiée d'abord
- **Langue du site : anglais intégral**
- **One-page avec ancres** (pas de routing multi-pages)
- **Formulaire = seul point de collecte email** (pas de double optin ailleurs)

---

## Branding

- Handle public : **OrangePeel**
- Site personnel : orangepeel.fr
- Liens sociaux : Telegram `https://t.me/OrangePeel_Flow` · LinkedIn `https://www.linkedin.com/in/manuelproquin/`
- Ton : expert, direct, pas de jargon marketing, crédibilité technique

### Direction UX/UI

**Principe :** UX depuis la cible d'abord, branding OrangePeel en second filtre.

Audience principale : Bitcoiners + devs → fond sombre, sobre, dense. Le site doit **sentir** Bitcoiner-native, pas "startup IA".

**Aesthetic retenu : Cyphers (design system OrangePeel)**
- Fond : `#0d0d0d` / `#111518`
- Accent unique : `#ed760a` (orange OrangePeel)
- Texte : `#f5f5f5`
- Texte secondaire : `#6b7280`
- Typo headlines : Playfair Display (élégance narrative)
- Typo labels techniques : Orbitron (signal tech/Bitcoiner)
- Typo corps : Inter Tight

**Gradient hero :**
```
radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)
```

**Bouton CTA principal :**
```
bg-[#ed760a] text-black font-bold px-8 py-3 text-sm rounded-sm hover:bg-[#efa813]
```

**Label de section :**
```
text-[#ed760a] text-sm tracking-widest uppercase font-medium
```

**Hover images/cards :** `scale-[1.02]` uniforme

---

## Partenaire bootcamp

- **Charlotte** (Neon&Slate) — AI Chief of Staff Bootcamp
- Prix : 965$
- Stack bootcamp : Claude, Notion, Make, Perplexity
- Relation : Manuel peut être référent, closer, ou facilitateur cohorte française
- Le runbook est le pont : non-tech obtient le guide → entre dans la séquence → découvre le bootcamp

---

## Ce que Claude Code doit faire en priorité à chaque session

1. Lire ce fichier BRIEF.md
2. Lire TASKS.md pour connaître l'état d'avancement
3. Ne jamais remettre en question les décisions listées ci-dessus sans le signaler explicitement
4. Signaler toute ambiguïté avant de coder

---

## Fichiers de référence dans ce repo

| Fichier | Rôle |
|---|---|
| `BRIEF.md` | Ce fichier — contexte et décisions |
| `SITEMAP.md` | Architecture détaillée section par section |
| `COPY.md` | Tous les textes EN finalisés |
| `TASKS.md` | État d'avancement (à créer et maintenir) |