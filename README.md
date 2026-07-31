# Sweetheart Letters

Build a complete interactive romantic digital letter website inspired by the reference video I provided.

The website should feel like a cute, romantic, soft-pink digital love letter made specifically for a girlfriend. It should look polished and intentional, NOT like a generic template.

## OVERALL DESIGN

Use a soft, cute, romantic aesthetic:

* Main colors: pastel pink, blush pink, white, very light cream
* Rounded cards with thin pink borders
* Soft shadows
* Small floating hearts, flowers, sparkles, and subtle decorative elements
* Elegant romantic typography
* Cute but clean UI
* Mobile-first design because the experience should look like a phone screen
* Responsive on desktop and mobile
* Smooth animations and transitions throughout
* Use subtle fade, slide, scale, and floating animations
* Do NOT make the animations excessive or distracting

The main content should appear inside a beautiful centered mobile-style card/container.

## PAGE FLOW

Create this as an interactive multi-step experience rather than one long static page.

### SCREEN 1 — WELCOME

Show a centered white/pink rounded card.

At the top of the card, show a small image/photo placeholder.

Below it:

"HAPPY NATIONAL GIRLFRIEND DAY"

Under that, add a small cute subtitle such as:

"Click the button below... I made something for you ♡"

Add a large pink rounded button:

"Start ♡"

When clicked, smoothly transition to the next screen.

Decorate the background with subtle floating hearts and small flowers.

---

### SCREEN 2 — SPECIAL MESSAGE

Show another centered romantic card.

Display a cute envelope/letter illustration in the upper section.

Below it, show:

"Do you want to open it? (｡•́‿•̀｡)"

Then provide two small buttons:

"Open ♡"
"Not yet"

If the user clicks "Open ♡", continue to the next screen.

If they click "Not yet", make the button move/playfully react and encourage them to open it.

The interaction should feel cute rather than frustrating.

---

### SCREEN 3 — OPENING THE LETTER

Create an animated envelope-opening transition.

The envelope should visually open and reveal a letter.

Use a smooth animation lasting approximately 1 second.

After opening, show the letter content.

---

### SCREEN 4 — PHOTO + LETTER

At the top, show a large rectangular photo.

Make the image easy to replace later through the admin/customization system.

Under the photo show:

"Dear my love ♡"

Then display a heartfelt personalized message in a beautiful letter-style layout.

Example placeholder text:

"You're the best thing that life has given me so far and I know nothing can take your place in my heart. The love I have for you is pure and eternal. You bring so much joy into my life..."

Use a readable font and proper line spacing.

The letter should look like an actual personal handwritten/digital love letter rather than a normal website paragraph.

At the bottom of the letter, show:

"HAPPY NATIONAL GIRLFRIEND DAY ♡"

---

## CUSTOMIZATION SYSTEM

Add a "Customize" button at the bottom.

When clicked, open a beautiful customization panel/modal.

The user should be able to customize:

* Girlfriend's name
* Sender's name
* Main greeting
* Subtitle
* Photo
* Letter title
* Main letter/message
* Button text
* Background decorations
* Final message

Changes should immediately update the preview.

For the photo uploader, allow the user to upload an image from their device.

---

## ADMIN / EDITOR MODE

Create a simple admin/editor interface where the creator can customize the entire digital letter.

Admin login:

Email:
[admin@loveletter.com](mailto:admin@loveletter.com)

Password:
admin123

This is only a demo/default login and must be changeable from the admin panel.

Admin dashboard should contain:

### Content Editor

Allow editing:

* Greeting
* Subtitle
* Question text
* Button labels
* Letter title
* Letter body
* Final message

### Image Manager

Allow uploading/replacing:

* Cover image
* Letter image
* Additional photos

### Appearance

Allow changing:

* Primary pink color
* Background color
* Text color
* Border color
* Font
* Decoration style

### Preview

Show a live preview of the complete experience.

### Save

Include a clear "Save Changes" button.

---

## IMPORTANT INTERACTION DETAILS

The website should feel like an interactive story.

Do NOT immediately show every section.

The user should progress through the experience by clicking buttons.

Use smooth transitions between each stage.

For example:

Start
→ Greeting
→ Open Letter
→ Envelope Animation
→ Photo + Letter
→ Final Message

Add a small progress indicator if it looks good, but keep it subtle.

---

## BACKGROUND

Create a beautiful animated background.

Use:

* Small hearts
* Tiny flowers
* Sparkles
* Soft pink shapes
* Very subtle floating particles

The decorations should slowly move/fade in and out.

Do not overcrowd the screen.

---

## MOBILE EXPERIENCE

This is extremely important.

The reference experience is designed around a phone.

On mobile:

* Content should fit naturally within the viewport
* Buttons should be easy to tap
* Text should remain readable
* Images should not overflow
* The letter should have comfortable padding
* Animations should remain smooth
* No horizontal scrolling

On desktop, center the experience on the screen and make it look like a beautiful interactive mobile card.

---

## TECHNICAL REQUIREMENTS

Build the entire working website, not just a visual mockup.

Use a modern component-based architecture.

Separate components for:

* WelcomeScreen
* QuestionScreen
* EnvelopeAnimation
* LetterScreen
* CustomizationPanel
* AdminLogin
* AdminDashboard
* ContentEditor
* ImageUploader
* AppearanceEditor

Store the editable content in a centralized state/data structure so changing it from the customization/admin panel updates the actual experience.

Use local storage for the demo version so customized content remains after refreshing the page.

Make all buttons functional.

Make all animations functional.

Make image uploads functional.

Make the admin/editor functional.

Do not leave placeholder buttons that do nothing.

---

## VISUAL QUALITY

The final result should feel like a real premium romantic digital gift.

Think:

"cute Pinterest romantic website + interactive digital letter + Valentine's/Girlfriend Day card"

It should be:

* Cute
* Emotional
* Soft
* Romantic
* Personal
* Modern
* Minimal
* Mobile-friendly

Avoid:

* Corporate UI
* Generic dashboard styling in the main experience
* Excessive gradients
* Huge headings
* Too many colors
* Excessive animations
* Clutter
* Generic stock-template appearance

Most importantly, recreate the EXPERIENCE and visual feel of the reference video: a person opens a cute romantic digital card, interacts with it, opens an envelope, and eventually discovers a personalized letter and photos.

Make the first version fully functional and polished rather than giving me a basic prototype.

also add background music

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e0214b83-c1d3-4439-ab08-cc822abec660).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
