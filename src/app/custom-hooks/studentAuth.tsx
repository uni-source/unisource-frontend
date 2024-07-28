"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const studentAuth = (WrappedComponent: React.ComponentType) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const user =
      typeof window !== "undefined"
        ? localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")!)
          : null
        : null;

    useEffect(() => {
      setMounted(true);
      if (token && user) {
        if (user?.role === "STUDENT") {
          setIsAuthorized(true);
        } else {
          toast.error("Unauthorized access");
          router.push("/getstart");
        }
      } else {
        toast.error("User not found");
        router.push("/");
      }
    }, [token, user, router]);

    if (!mounted) {
      return null;
    }

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default studentAuth;
