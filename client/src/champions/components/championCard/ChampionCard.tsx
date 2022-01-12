import React from 'react';
import { ChampModel } from './../../../model/championModel';

type Props = { ChampData: ChampModel };

const ChampionCard: React.FC<Props> = ({ ChampData }) => {
  return (
    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
      <article className="bg-black text-white">{ChampData.name}</article>
    </div>
  );
};

export default ChampionCard;
