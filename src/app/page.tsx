import Box from "@/components/_components/Box";
import Code from "@/components/_components/Code";
import Guide from "@/components/_components/Guide";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StarSvg } from "@/utils/IconSvg";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl pt-10 space-y-4">
        <Badge
          variant={"secondary"}
          className="rounded-full gap-2 py-1 px-3 text-sm"
        >
          <StarSvg fill="fill-yellow-400" />
          <h4>New releases every week</h4>
        </Badge>
        <div>
          <h1 className="font-orbit-max text-8xl font-extrabold">
            Beautiful UI components built with Tailwind CSS and Shadcn Ui.
          </h1>
          <p className="text-xl text-white-60 tracking-wide">
            Components UI is an Huge collection of copy and paste components for
            quickly building app, webs UI using tailwind css and shadcn ui for
            the faster building of UI. It‘s free, open-source, and ready to drop
            into your projects.
          </p>
        </div>
        <div className="flex gap-x-4">
          <Link href={"/components"}>
            <Button className="text-lg font-orbit-max py-5">
              Explore Components
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"outline"} className="text-lg font-orbit-max py-5">
              Rate on Github
            </Button>
          </Link>
        </div>

        <div className="flex-center w-full py-6">
          <Separator className="w-3/4 " />
        </div>
        <h1 className="font-orbit-max text-3xl text-center underline underline-offset-4">Docs Guide</h1>

        <Guide />
      </div>
    </>
  );
};

export default Home;
