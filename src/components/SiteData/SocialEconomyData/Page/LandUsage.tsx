import { useEffect, useState } from 'react';
import useRender from 'hooks/page/useRender';
import { BE_URL } from 'utils/config';

interface LandUsageData {
  image: string | null;
  description: string;
  content: string;
}

const LandUsage = () => {
  const [data, setData] = useState<LandUsageData[]>([]);
  const { getSocialObservationContent } = useRender();

  useEffect(() => {
    getSocialObservationContent({
      url: 'social_observation/land_usage',
      setList: (responseData: LandUsageData[]) => {
        const modfiedData = responseData.map((item) => ({
          ...item,
          image: item.image ? `${BE_URL}${item.image}` : null,
        }));
        setData(modfiedData);
      },
    });
  }, []);

  if (!data) {
    return <div>無法獲取資料，請稍後再試或聯絡系統管理員。</div>;
  }

  const renderedContent = data.map((item, index) => (
    <div key={index} className="img-container">
      {item.image && (
        <img
          src={item.image}
          alt={`土地利用 Land Usage of Green Isand ${index + 1}`}
        />
      )}

      {item.description && <div className="img-text">{item.description}</div>}
      {item.content && <div>{item.content}</div>}
    </div>
  ));

  return <>{renderedContent}</>;
};

export default LandUsage;
