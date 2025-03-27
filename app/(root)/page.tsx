import Image from "next/image";
import { GoogleGeminiEffectDemo } from "@/components/ui/GoogleGeminiEffectDemo";

const Page = async () => {
  return (
    <>
      <div className="mt-10">
        <GoogleGeminiEffectDemo />
      </div>

      <div className="max-w-screen mx-10 rounded-xl border border-gray-300 dark:border-gray-700">
        <Image
          src="/testimg3.png"
          alt="Landing page preview"
          className="aspect-[16/9] h-auto w-full object-cover"
          height={1715}
          width={737}
        />
      </div>
    </>
  );
}

export default Page;