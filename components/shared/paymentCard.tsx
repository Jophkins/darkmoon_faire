import {cn} from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const PaymentCard: React.FC<Props> = ({ className }) => {
  return (
      <div className={cn('border-4 border-amber-900 w-lg h-auto p-4 mx-auto rounded-2xl', className)}>
        <div className='w-[380px] h-[235px] rounded-2xl overflow-hidden'>
          <div className="relative w-full h-full">
              <Image src="/credit-ocean-bg.png" alt="logo" fill objectFit="cover" />
              <span className="absolute inset-0 top-10 left-10 text-white">
                  EJKOVICH EBROCHEVICH
              </span>
              <span className="absolute inset-0 top-40 left-10 text-white text-2xl">
                  **** **** **** 5859
              </span>
              <div className='absolute inset-0 top-40 left-65 text-white text-2xl'>
                  <Image src="/mc-logo.png" alt="system" width={100} height={100} />
              </div>
          </div>
        </div>
      </div>
  );
};