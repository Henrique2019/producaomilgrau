import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Mantenha o Foco"
    description="Tudo em um so lugar para ajudar você nos processos diários."
  >
    <VerticalFeatureRow
      title="Estoque Mínimo"
      description="O controle de produção veio para ajudar nos momentos mais criticos. possibilitando sempre ter um estoque minimo"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Economia de gastos"
      description="Alcance resultados supreendentes!!!, com  100% do controle você evita disperdícios e perdas,  economizando nos gastos."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Comemore"
      description="Sucesso garantido, matenha o gerenciamento da produção em um nível mais elevado... "
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
