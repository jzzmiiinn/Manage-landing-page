import type { Feature } from "../types/feature";

interface FeatureProps {
  features: Feature[];
}

export const Features = ({ features }: FeatureProps) => {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4">
      {features.map((feature) => (
        <div key={feature.id} className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-l-full bg-[#fff0eb] md:bg-transparent">
            <span className="rounded-full bg-[hsl(12,88%,59%)] px-6 py-2 font-bold text-white">
              {String(feature.id).padStart(2, "0")}
            </span>

            <h3 className="font-bold text-[hsl(228,39%,23%)]">
              {feature.title}
            </h3>
          </div>

          <p className="text-sm leading-7 text-[hsl(227,12%,61%)] md:pl-0">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};
