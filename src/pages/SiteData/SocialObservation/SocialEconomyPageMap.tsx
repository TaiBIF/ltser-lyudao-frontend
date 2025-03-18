import Fishing from 'pages/SiteData/SocialObservation/Fishing';
import Industry from 'components/SiteData/SocialEconomyData/Page/Industry';
import Books from 'components/SiteData/SocialEconomyData/Page/Books';
import Researches from 'components/SiteData/SocialEconomyData/Page/Researches';
import { PopulationProvider } from 'context/SocialEconomyData/PopulationContext';
import Memorabilia from 'components/SiteData/SocialEconomyData/Page/Memorabilia';
import LandUsage from 'components/SiteData/SocialEconomyData/Page/LandUsage';
import OceanUsage from 'components/SiteData/SocialEconomyData/Page/OceanUsage';
import TemporalVariation from 'components/SiteData/SocialEconomyData/Page/TemporalVariation';
import Government from 'components/SiteData/SocialEconomyData/Page/Government';
import Economy from 'components/SiteData/SocialEconomyData/Page/Population';

export const SocialEconomyPageMap: Record<string, JSX.Element> = {
  memorabilia: <Memorabilia />,
  'land-usage': <LandUsage />,
  'ocean-usage': <OceanUsage />,
  'temporal-variation': <TemporalVariation />,
  population: (
    <PopulationProvider>
      <Economy />
    </PopulationProvider>
  ),
  industry: <Industry />,
  books: <Books />,
  researches: <Researches />,
  government: <Government />,
};
