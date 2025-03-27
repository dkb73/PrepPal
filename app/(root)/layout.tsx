import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated(); 

  if(!isUserAuthenticated){
    redirect('/sign-in');
  }
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between" >
        <Link href="/" className="flex items-center gap-2 mx-20">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepPal</h2>
        </Link>
        <div className="mx-10">
          <Button className="btn-primary max-sm:w-full mx-5">
            <Link href="/interview">Get Started</Link>
          </Button>
          <LogoutButton />
        </div>
        {/* <div className="mx-20">
          <h3 className="text-primary-100">All-Interviews</h3> 
        </div> */}
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;