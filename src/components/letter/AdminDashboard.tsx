import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentEditor } from "./ContentEditor";
import { AppearanceEditor } from "./AppearanceEditor";
import { ImageManager } from "./ImageManager";
import { LetterExperience } from "./LetterExperience";
import { useLetter } from "./LetterProvider";

export function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { data, updateAdmin, persist, reset } = useLetter();
  const [email, setEmail] = useState(data.admin.email);
  const [password, setPassword] = useState(data.admin.password);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 flex flex-wrap items-center gap-3 border-b border-border bg-card/90 px-5 py-4 backdrop-blur">
        <h1 className="text-lg font-semibold">Letter editor</h1>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="rounded-full border border-border px-4 py-2 text-xs hover:bg-accent"
          >
            View letter
          </Link>
          <button
            type="button"
            onClick={() => {
              persist();
              toast.success("Changes saved \u2661");
            }}
            className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground"
          >
            Save changes
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-full border border-border px-4 py-2 text-xs hover:bg-accent"
          >
            Log out
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <Tabs defaultValue="content">
          <TabsList className="flex-wrap">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-6">
            <ContentEditor />
          </TabsContent>
          <TabsContent value="images" className="mt-6">
            <ImageManager />
          </TabsContent>
          <TabsContent value="appearance" className="mt-6">
            <AppearanceEditor />
          </TabsContent>
          <TabsContent value="account" className="mt-6 max-w-sm space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Admin email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Admin password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="button"
              onClick={() => {
                if (!email.trim() || !password.trim()) {
                  toast.error("Email and password can't be empty");
                  return;
                }
                updateAdmin({ email: email.trim(), password });
                toast.success("Login updated");
              }}
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground"
            >
              Update login
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                toast("Everything reset to default");
              }}
              className="ml-2 rounded-full border border-border px-5 py-2.5 text-xs"
            >
              Reset everything
            </button>
          </TabsContent>
        </Tabs>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Live preview</p>
          <div className="overflow-hidden rounded-[2.25rem] border-[6px] border-foreground/10 shadow-lg">
            <div className="max-h-[70vh] overflow-y-auto">
              <LetterExperience showChrome={false} className="!min-h-[38rem]" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
