import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Bora!!!."
      subtitle="Bora trabalhar...🚶‍♂️"
      button={
        <Link href="/">
          <a>
            <Button>Começar</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
