import { ReactNode } from 'react';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';

type ISectionProps = {
  title?: string;
  image?: string;
  imageAlt?: string;
  yPadding?: string;
  children: ReactNode;
};



const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.image) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        
        {props.image && (
         <div className="w-full sm:w-1/2 p-6">
         <VerticalFeatureRow
          title="medral geo"
          description="geo medral"
          image={props.image}
          imageAlt="Medral Geo Produção colaboradores"
           />
       </div>
        )}
        
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
