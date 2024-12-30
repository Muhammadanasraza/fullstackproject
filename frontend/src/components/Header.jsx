import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth/utils/authutils";
import { Columns, User, Home, LayoutDashboard, GraduationCap, LogOut } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import logo from "../assets/images/logo.jpg"


const Header = () => {
  const [user, setUser] = useState(null);
  const users = "admin"

  useEffect(() => {
    const stateChange = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("user", user);
      } else {
        setUser(null);
      }
    });

    return () => stateChange();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-10 w-10 rounded-full object-cover"
            alt="M-System Logo"
          />
          <span className="self-center font-sans font-extrabold text-2xl whitespace-nowrap dark:text-white">
            M-System
          </span>
        </a>
        {user ? (
          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user.photoURL} alt={user.displayName || "User avatar"} />
                <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl font-bold">Profile</SheetTitle>
                <SheetDescription>
                  <div className="flex items-center space-x-4 mt-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.photoURL} alt={user.displayName || "User avatar"} />
                      <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col space-y-4">
              <a href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </a>
                <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
               
                <a href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
                <a href="/student" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Students</span>
                </a>
                <a href="/trainers" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Tainers</span>
                </a>
                <a href="/courses" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Courses</span>
                </a>
                {
                  users? 
                <a href="/requests" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Course Requests</span>
                </a>: ""
                }
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <a href="/login">
            <Button className="text-white">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;

