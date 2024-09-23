import { Link } from 'react-router-dom';
import {
  SocialObservationLiteratureCategoryList,
  LiteratureItemList,
} from 'data/siteData';

const Researches = () => {
  const renderedContent = SocialObservationLiteratureCategoryList.map(
    (item, index) => {
      const filteredLiteratures = LiteratureItemList.filter(
        (LiteratureItem) => LiteratureItem.theme === item.theme
      );
      return (
        <div key={index} className="literature-container">
          <div className="title-box">
            <div className="title">
              <h2>{item.category}</h2>
              <div className="line"></div>
            </div>
            <p>{item.content}</p>
          </div>
          <ul>
            {filteredLiteratures.map((literature) => (
              <li key={literature.id} className="detail-box">
                <Link
                  key={literature.id}
                  to={literature.url}
                  className="literature-title"
                >
                  {literature.title}
                </Link>
                <div className="literature-detail">
                  <div>
                    {literature.author} ({literature.publish_date})
                  </div>
                  <div>{literature.citation}</div>
                </div>
                <div>{literature.abstract}</div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  );
  return <div>{renderedContent}</div>;
};

export default Researches;
