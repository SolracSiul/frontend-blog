import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Posts from './Posts';


export default async function Admin() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div>
      <h1 className='text-2xl mb-8'>Olá {session?.user.name}</h1>
      <h1>Conteúdo do lado do servidor</h1>
      <Posts session={session} />
    </div>
  );
}