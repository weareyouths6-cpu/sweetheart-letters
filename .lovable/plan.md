# Interactive Romantic Digital Letter

A soft-pink, mobile-first interactive love letter that unfolds screen by screen, plus a full customization panel and admin editor. Everything saves locally in the browser, so no accounts or backend are needed.

## The experience

One centered phone-style card sits on an animated pastel background of slowly drifting hearts, tiny flowers and sparkles. The user moves forward by tapping, with fade/slide/scale transitions between steps.

1. **Welcome** — small round photo, "HAPPY NATIONAL GIRLFRIEND DAY", cute subtitle, big pink "Start ♡" button.
2. **Question** — envelope illustration, "Do you want to open it? (｡•́‿•̀｡)", buttons "Open ♡" and "Not yet". "Not yet" playfully hops to a new spot and cycles sweet nudge messages; after a few dodges it gently gives in.
3. **Envelope opening** — ~1s animation: flap lifts, letter slides up, sparkles burst.
4. **Photo + letter** — large photo, "Dear my love ♡", the personal message in letter-style typography with generous line spacing and a faint ruled/paper texture, signed off with "HAPPY NATIONAL GIRLFRIEND DAY ♡".
5. **Final message** — closing note with a small "replay" option.

A subtle dot progress indicator sits under the card.

**Background music**: a soft romantic loop with a small floating mute/unmute heart-note toggle. Playback starts on the first tap (browsers block autoplay), and the choice is remembered.

## Customize (front-end panel)

A "Customize" button at the bottom opens a soft-pink modal with live preview updates for: girlfriend's name, sender's name, greeting, subtitle, question text, photo (upload from device), letter title, letter body, button labels, decoration style, final message.

## Admin editor

Route `/admin`, login `admin@loveletter.com` / `admin123` (changeable inside the panel). Dashboard tabs:

- **Content** — greeting, subtitle, question, button labels, letter title, letter body, final message
- **Images** — cover image, letter image, extra photos (device upload)
- **Appearance** — primary pink, background, text and border colors, font choice, decoration style
- **Preview** — live phone-frame preview of the whole flow
- **Account** — change admin email/password
- **Save Changes** button, plus reset-to-defaults

## Technical notes

- Components: `WelcomeScreen`, `QuestionScreen`, `EnvelopeAnimation`, `LetterScreen`, `FinalScreen`, `FloatingDecor`, `MusicToggle`, `CustomizationPanel`, `AdminLogin`, `AdminDashboard`, `ContentEditor`, `ImageUploader`, `AppearanceEditor`.
- Single `LetterContent` data structure in a React context provider, persisted to localStorage; appearance values applied as CSS variables so theme changes are instant everywhere.
- Uploaded images stored as base64 data URLs in localStorage (with size guard + compression on upload).
- Routes: `/` (experience) and `/admin`; both get their own SEO titles/descriptions.
- Design tokens (pinks, cream, blush, soft shadows, romantic serif + soft sans pairing) defined in `src/styles.css`; no hardcoded colors in components.
- Animations via Motion for React; reduced-motion respected.
- Note: the demo admin login is client-side only — fine for a personal gift, not real security. Say the word if you want real accounts later.
