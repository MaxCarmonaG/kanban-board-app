import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] max-w-[1440px]  bg-white rounded-[30px] overflow-hidden">
      <Header />
      <nav className="flex row justify-between items-center px-12 py-6 border-b border-gainsboro gap-x-14">
        <label className="flex items-center gap-x-4 px-4 py-3 bg-whitesmoke rounded-[6px]">
          <Image
            src="/search-normal.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <input
            name="search"
            type="text"
            placeholder="Search for anything..."
            className="placeholder:text-foreground"
          />
        </label>
        <div className="flex items-center gap-x-14">
          <div className="flex items-center gap-x-6">
            <Image
              src="/calendar-2.svg"
              alt="Calendar Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <Image
              src="/message-question.svg"
              alt="Message Question Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <Image
              src="/notification.svg"
              alt="Notification Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <div className="flex items-center gap-x-6">
            <div>
              <div className="text-dark">Anima Agrawal</div>
              <div>U.P, India</div>
            </div>
            <div className="flex items-center justify-between gap-x-2.5">
              <Image
                src="/user-1.png"
                alt="User 1 Icon"
                width={38}
                height={38}
                className="h-[38px] w-[38px] rounded-full"
              />
              <Image
                src="/arrow-down.svg"
                alt="Arrow Down Icon"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
            </div>
          </div>
        </div>
      </nav>
      <aside className="flex row gap-x-[46px]">Sidebar</aside>
      <main className="flex row gap-x-[46px]">Main</main>
    </div>
  );
}
