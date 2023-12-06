import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Posts from './Posts';
import Button from '@/app/components/button/Button';


export default async function Admin() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div className=''>
      <header className='flex mx-auto gap-2 max-w-[70rem] py-6 px-[1rem]'>
        <div className='flex w-full  justify-between'>
          <h1 className='text-2xl'>Olá {session?.user.name}</h1>
          <Button/>

        </div>
      </header>
      <Posts session={session} />
    </div>
  );
}