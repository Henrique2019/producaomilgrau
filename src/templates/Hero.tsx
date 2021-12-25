import { NextComponentType } from 'next';
import { useSession, signIn, signOut } from 'next-auth/client';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero: NextComponentType = () => {
  const [session, ] = useSession();

  return (
    <Background color="">
      <Section yPadding="pt-5 pb-3">
      <NavbarTwoColumns logo={<Logo />} >
          {session ? (
            <>
             
              <button
                className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                onClick={(): Promise<void> => signOut({ callbackUrl: 'https://producaomilgrau.vercel.app/' })}
              >
                Sair
              </button>
            </>
          ) : (
            <button
              className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
              onClick={(): Promise<void> => signIn('auth0',{ callbackUrl: 'https://producaomilgrau.vercel.app/producao' })}
            >
              Login
            </button>
          )}
          
        </NavbarTwoColumns>
        </Section>

<Section yPadding=" mx-auto pb-3">
        <HeroOneButton
          title={
            <>
              {'Produção Mil Grau\n'}
              <span className="text-medra-100">Cadastro de IP-USO MUTUO</span>
            </>
          }
          description="Atualize a produção em segundos"
          button={               
              <Button xl>
                
                {session ?(
            <>
              Seja Bem Vindo {session?.user?.name}!!! <br />              
            </>
          ) : (
            <button
              
              onClick={(): Promise<void> => signIn('auth0',{ callbackUrl: 'https://producaomilgrau.vercel.app/producao' })}
            >
              Acessar aplicação agora
            </button>
          )}
                  </Button>
              
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
