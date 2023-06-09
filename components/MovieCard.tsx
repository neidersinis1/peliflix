import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from 'react-icons/bi';
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModalStore"; 
import Image from 'next/image'

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-gray-100 col-span relative sm:h-[20vw] h-[50vw]">
      <Image width={200}height={200}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        sm:h-[20vw]
        w-full
        h-[50vw]
      "
        src={data.thumbnailUrl}
        alt="Caratula"
      />
      <div
        className="
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          visible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-110
          group-hover:-translate-y-[-1vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
        "
      >
        <Image width={200}height={200}
          className="
               cursor-pointer
               object-cover
               transition
               duration
               shadow-xl
               rounded-t-md
               w-full
               sm:h-[20vw]
               h-[30vw]
             "
          src={data.thumbnailUrl}
          alt="caratula"
        />
        <div
          className="
               z-10
               bg-zinc-800
               p-2
               lg:p-4
               absolute
               w-full
               transition
               shadow-md
               rounded-b-md
             "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
                      cursor-pointer
                      w-6
                      h-6
                      lg:w-10
                      lg:h-10
                      bg-white
                      rounded-full
                      flex
                      justify-center
                      items-center
                      transition
                      hover:bg-gray-300
                    "
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={20} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div 
              onClick={() => openModal(data?.id)}
            className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BiChevronDown size={20} className="text-white group-hover/item:text-gray-300" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
