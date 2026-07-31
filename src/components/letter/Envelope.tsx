export function Envelope({ open = false }: { open?: boolean }) {
  const line = "color-mix(in srgb, var(--lp-primary) 28%, transparent)";

  return (
    <div
      className="relative mx-auto h-[9.5rem] w-56 [perspective:900px]"
      aria-hidden="true"
    >
      {/* letter */}
      <div
        className="absolute bottom-0 left-1/2 z-10 h-24 w-44 -translate-x-1/2 rounded-md border transition-transform duration-700 ease-out"
        style={{
          borderColor: "var(--lp-border)",
          background: "color-mix(in srgb, white 97%, var(--lp-bg))",
          transform: open
            ? "translateX(-50%) translateY(-4.5rem)"
            : "translateX(-50%) translateY(0)",
        }}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-5">
          {[85, 100, 65].map((w) => (
            <span
              key={w}
              className="block h-1.5 rounded-full"
              style={{ width: `${w}%`, background: line }}
            />
          ))}
        </div>
      </div>

      {/* envelope back */}
      <div
        className="absolute bottom-0 left-0 h-24 w-56 rounded-lg border"
        style={{
          borderColor: "var(--lp-border)",
          background: "color-mix(in srgb, white 92%, var(--lp-primary))",
        }}
      />

      {/* envelope front pocket */}
      <div
        className="absolute bottom-0 left-0 z-20 h-24 w-56 rounded-lg border"
        style={{
          borderColor: "var(--lp-border)",
          background: "color-mix(in srgb, white 88%, var(--lp-primary))",
          clipPath: "polygon(0 100%, 0 4%, 50% 58%, 100% 4%, 100% 100%)",
        }}
      />

      {/* flap */}
      <div
        className="absolute left-0 top-[3.4rem] h-12 w-56 origin-top transition-transform duration-700 ease-out"
        style={{
          background: "color-mix(in srgb, white 82%, var(--lp-primary))",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          transform: open ? "rotateX(-172deg)" : "rotateX(0deg)",
          zIndex: open ? 5 : 30,
        }}
      />

      {/* seal */}
      <div
        className="absolute bottom-6 left-1/2 z-40 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-sm text-white transition-all duration-500"
        style={{
          background: "var(--lp-primary)",
          opacity: open ? 0 : 1,
          transform: `translateX(-50%) scale(${open ? 0.5 : 1})`,
        }}
      >
        {"\u2661"}
      </div>
    </div>
  );
}
