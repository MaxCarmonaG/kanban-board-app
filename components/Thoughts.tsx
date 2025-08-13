import { FC } from "react";
import Image from "next/image";

const Thoughts: FC = () => (
  <div className="mx-2.5 pt-9 px-5 pb-5 bg-whitesmoke rounded-2xl relative text-center">
    <div className="bg-whitesmoke rounded-full overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex justify-center items-center w-16.5 h-16.5">
        <Image src="/lamp-on.svg" alt="Thoughts" width={24} height={24} />
        <div className="absolute bg-radial opacity-30  from-golden from-10% to-transparent to-70% top-0 right-0 bottom-0 left-0"></div>
      </div>
    </div>
    <h4 className="text-black font-medium text-sm mb-3">Thoughts Time</h4>
    <p className="text-xs mb-3.5">
      We don’t have any notice for you, till then you can share your thoughts
      with your peers.
    </p>
    <button className="text-black font-medium text-sm/10 bg-white rounded-sm w-full">
      Write a message
    </button>
  </div>
);

export default Thoughts;
