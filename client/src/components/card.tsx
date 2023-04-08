import React from 'react';
import { RiMoreFill } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import ProfileImage from './profile-image';
import UserTooltip from './user-tooltip';
import { Link } from 'react-router-dom';
import { AssetsDisplayProps } from '../interface';
import { useThirdWebContext } from '../contexts/thirdweb';
import { FaEthereum } from 'react-icons/fa';
import { useUserContext } from '../contexts/user-context';
import { SiHiveBlockchain } from 'react-icons/si';

interface Props {
  asset: AssetsDisplayProps;
}

const Card = (props: Props) => {
  const [assetOwner, setAssetOwner] = React.useState<AssetsDisplayProps | void>();
  const { handleAddAsset } = useThirdWebContext();
  const { getAllUsers, FindUserWithAddress } = useUserContext();

  console.log('getAllUsers', getAllUsers);

  const allAppreciators = [...props?.asset?.appreciators];
  const addressesOfAllAppreciators = allAppreciators.map(
    (address) => address.appreciator
  );

  const matchingUsers = getAllUsers.filter((user) =>
    addressesOfAllAppreciators.includes(user.address)
  );

  React.useEffect(() => {
    const getUser = async () => {
      const data = await FindUserWithAddress(props?.asset?.owner);
      setAssetOwner(data);
    };
    getUser()
  }, []);

  return (
    <li className='w-full sm:w-[288px]'>
      <header className='w-full flex items-center rounded-t-lg bg-[#141414] px-4 py-2 justify-between'>
        <div className='flex mb-3 -space-x-3'>
          {matchingUsers.length > 0 ? (
            matchingUsers?.map((appreciator, index) => (
              <ProfileImage key={index} data={appreciator} />
            ))
          ) : (
            <div className='w-10 h-10 bg-white rounded-full text-black text-xl inline-flex justify-center items-center'>
              <SiHiveBlockchain />
            </div>
          )}
        </div>

        <div className='inline-flex items-center gap-2 '>
          <FaEthereum
            className='text-3xl hover:text-violet-500 cursor-pointer'
            onClick={() => handleAddAsset(props?.asset)}
          />
          <RiMoreFill className='text-3xl hover:bg-violet-500 rounded-lg' />
        </div>
      </header>

      <Link
        to={`/explore/${props?.asset?.owner}/${props?.asset?.title
          ?.toLowerCase()
          ?.replaceAll(' ', '-')}`}
      >
        <main className='w-full'>
          <img
            title={props?.asset?.title}
            className='w-full h-[18rem] object-cover'
            src={props?.asset?.image}
          />
        </main>
      </Link>

      <footer className='w-full flex flex-col gap-2 bg-[#141414] rounded-b-3xl px-4 py-2'>
        <div className='w-full inline-flex items-center justify-between'>
          <span>{props?.asset?.title}</span>
          <span className='inline-flex items-center gap-1'>
            <AiOutlineHeart /> 54
          </span>
        </div>
        <div className='w-full inline-flex items-center justify-between'>
          <span>Appreciated</span>
          <span>{props?.asset?.amountAppreciated.toString()} ETH</span>
        </div>
        <div className='w-full inline-flex items-center justify-between gap-5'>
          <div className='w-full h-full group relative'>
            <ProfileImage data={assetOwner} />
            <UserTooltip
              data={assetOwner}
              styles='hidden left-0 group-hover:block absolute after:content-[""] after:absolute after:bottom-full after:left-0 after:border-8 after:border-solid after:border-x-transparent after:border-t-transparent after:border-b-white after:translate-y-0.5 after:translate-x-0.5'
            />
          </div>
          <p className='truncate'>
            by <span className='font-semibold'>{props?.asset?.owner}</span>
          </p>
        </div>
      </footer>
    </li>
  );
};

export default Card;
