import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LetterProvider } from "@/components/letter/LetterProvider";
import { AdminLogin } from "@/components/letter/AdminLogin";
import { AdminDashboard } from "@/components/letter/AdminDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Letter Editor \u2014 Customize Your Love Letter" },
      {
        name: "description",
        content:
          "Private editor to customize the words, photos and colors of your interactive digital love letter.",
      },
      { property: "og:title", content: "Letter Editor" },
      { property: "og:description", content: "Customize your interactive digital love letter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);

  return (
    <LetterProvider>
      {authed ? (
        <AdminDashboard onLogout={() => setAuthed(false)} />
      ) : (
        <AdminLogin onSuccess={() => setAuthed(true)} />
      )}
    </LetterProvider>
  );
}
