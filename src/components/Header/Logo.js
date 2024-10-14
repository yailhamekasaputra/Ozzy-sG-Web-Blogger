import Image from 'next/image';
import Link from 'next/link';
import profileImg from '@/public/profile-img.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-16 md:w-20 rounded-full overflow-hidden mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="CodeBucks logo"
          className="w-full h-auto rounded-full dark:filter dark:invert"
          sizes="30vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl"></span>
    </Link>
  );
};

export default Logo;
