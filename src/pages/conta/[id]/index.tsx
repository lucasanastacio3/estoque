import { Navbar } from "@/components/navbar/navbar";
import { DropDown } from "@/components/dropDown/dropDown";
import Account from "@/components/account/Account";

export default function Settings() {
  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Navbar />
        </div>
        <div>
          <div className="flex justify-end items-end p-6">
            <DropDown />
          </div>
          <div className="flex justify-center items-center">
            <Account />
          </div>
        </div>
      </div>
    </>
  );
}
