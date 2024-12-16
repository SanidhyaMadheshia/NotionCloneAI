import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
export default function Home() {
  return (
      <main className="p-3 flex w-full flex-col gap-8 row-start-2 items-center sm:items-start ">
        <ArrowLeftCircle className="w-12 h-12" />
          <h1>
            Lets build an ai productivity app 

          </h1>
        
        <Button>Click Me </Button>
      </main>
  );
}
