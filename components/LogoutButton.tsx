'use client';

import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/client";
import { signOut } from "firebase/auth";
import { logout } from "@/lib/actions/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);
      
      // Call server-side logout
      const result = await logout();
      
      if (result.success) {
        toast.success('Logged out successfully');
        router.push('/sign-in');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  return (
    <Button 
      className="btn-primary max-sm:w-full "
      onClick={handleLogout}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton; 