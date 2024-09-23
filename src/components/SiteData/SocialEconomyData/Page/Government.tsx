import { Link } from 'react-router-dom';
import { GovernmentLiteratureItemList } from 'data/siteData';

const Governemnt = () => {
  const renderedContent = GovernmentLiteratureItemList.map((item, index) => {
    return (
      <div key={index} className="government-literature-container">
        <ul>
          <li key={item.id} className="detail-box">
            <Link key={item.id} to={item.url} className="literature-title">
              {item.title}
            </Link>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{renderedContent}</div>;
};

export default Governemnt;
