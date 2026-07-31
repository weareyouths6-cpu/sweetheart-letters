import { createFileRoute } from "@tanstack/react-router";
import { LetterProvider } from "@/components/letter/LetterProvider";
import { LetterExperience } from "@/components/letter/LetterExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Little Love Letter for You \u2661" },
      {
        name: "description",
        content:
          "An interactive digital love letter: open the envelope, read the message and celebrate National Girlfriend Day.",
      },
      { property: "og:title", content: "A Little Love Letter for You \u2661" },
      {
        property: "og:description",
        content: "Open the envelope and read a personal, handmade digital love letter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LetterProvider>
      <main>
        <LetterExperience />
      </main>
    </LetterProvider>
  );
}
