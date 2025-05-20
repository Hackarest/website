import { UserProfile } from "@clerk/clerk-react";

export default function UserPage() {
  return (
  <div className="flex items-center justify-center min-h-screen">
        <UserProfile
          appearance={{
            variables: {
              colorPrimary: "#00d8ff",       
              colorBackground: "#0e1217",    
              colorText: "#ffffff",          
              colorInputBackground: "#181c23", 
              colorInputText: "#ffffff",
              colorNeutral: "#ffffff",
            },
            elements: {
              card: "shadow-xl rounded-xl border border-[#1f2a36]",
              rootBox: "w-full max-w-2xl", 
            },
          }}
        />
      </div>
    );
  }
