import React, { useState, useCallback } from 'react';
import { ChampModel } from './../../../model/championModel';
type Props = { ChampData: ChampModel };

const ChampionCard: React.FC<Props> = ({ ChampData }) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);
  return (
    <div className="my-1/2 p-1 w-1/2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:w-1/5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ChampData.id}_0.jpg`} alt={ChampData.name} />
      <article className="flex bg-black text-white">
        {ChampData.name}
        {hover && <div className="text-white">{ChampData.title}</div>}
      </article>
    </div>
  );
};

export default ChampionCard;
