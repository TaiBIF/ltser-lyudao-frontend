import { useEffect, useState } from 'react';
import useRender from 'hooks/page/useRender';
import { BE_URL } from 'utils/config';

interface MemorabiliaData {
  image: string;
  description: string;
}

const Memorabilia = () => {
  const [data, setData] = useState<MemorabiliaData[]>([]);
  const { getSocialObservationContent } = useRender();

  useEffect(() => {
    getSocialObservationContent({
      url: 'social_observation/memorabilia',
      setList: (responseData: MemorabiliaData[]) => {
        const modfiedData = responseData.map((item) => ({
          ...item,
          image: `${BE_URL}${item.image}`, // 拼接完整的圖片 URL
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
      <img
        src={item.image}
        alt={`綠島時間表 Memorabilia of Green Isand ${index + 1}`}
      />
      <div className="img-text">{item.description}</div>
    </div>
  ));

  return <>{renderedContent}</>;
};

export default Memorabilia;
