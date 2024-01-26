import NavBar from "@/components/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full ">
      <NavBar />
      {children}
    </div>
  );
}
