import { useState } from "react";
import { toast } from "sonner";
import { useLetter } from "./LetterProvider";

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const { data } = useLetter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            email.trim().toLowerCase() === data.admin.email.toLowerCase() &&
            password === data.admin.password
          ) {
            onSuccess();
          } else {
            toast.error("Wrong email or password");
          }
        }}
        className="w-full max-w-sm space-y-4 rounded-3xl border border-border bg-card p-7 shadow-sm"
      >
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-semibold">Letter editor</h1>
          <p className="text-sm text-muted-foreground">Sign in to customize the gift</p>
        </div>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Sign in
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Demo login: admin@loveletter.com / admin123
        </p>
      </form>
    </div>
  );
}
