import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { toast } from "sonner";
import { ContentEditor } from "./ContentEditor";
import { AppearanceEditor } from "./AppearanceEditor";
import { ImageManager } from "./ImageManager";
import { useLetter } from "./LetterProvider";

export function CustomizationPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { persist, reset } = useLetter();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[86vh] overflow-y-auto rounded-t-3xl">
        <SheetHeader>
          <SheetTitle className="text-left">Customize your letter {"\u2661"}</SheetTitle>
        </SheetHeader>

        <div className="px-4 pb-8">
          <Tabs defaultValue="content">
            <TabsList className="w-full">
              <TabsTrigger value="content" className="flex-1">
                Words
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex-1">
                Photos
              </TabsTrigger>
              <TabsTrigger value="style" className="flex-1">
                Style
              </TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="mt-5">
              <ContentEditor />
            </TabsContent>
            <TabsContent value="photos" className="mt-5">
              <ImageManager />
            </TabsContent>
            <TabsContent value="style" className="mt-5">
              <AppearanceEditor />
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                persist();
                toast.success("Saved \u2661");
                onOpenChange(false);
              }}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Save changes
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                toast("Reset to the original letter");
              }}
              className="rounded-full border border-border px-6 py-3 text-sm"
            >
              Reset to default
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
