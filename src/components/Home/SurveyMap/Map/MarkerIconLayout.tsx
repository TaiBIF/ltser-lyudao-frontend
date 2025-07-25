import React from 'react';
import { SurveyMapFilterItem } from 'types/home';

type MarkerIconLayoutProps = {
  filter: SurveyMapFilterItem;
  id: string;
};

const MarkerIconLayout = (props: MarkerIconLayoutProps) => {
  const { filter, id } = props;

  const isActive = filter.id === id;

  return (
    <>
      <div className={`pin-icon c-map__marker ${isActive ? 'now' : ''}`}>
        <div className="rel">
          <svg
            className="iconpin"
            xmlns="http://www.w3.org/2000/svg"
            width="36.273"
            height="27.273"
            viewBox="0 0 36.273 27.273"
          >
            <g
              id="Group_240"
              data-name="Group 240"
              transform="translate(0.155 0.155)"
            >
              <g
                id="Group_241"
                data-name="Group 241"
                transform="translate(0.545 0.545)"
              >
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="7.312"
                  cy="7.312"
                  r="7.312"
                  transform="translate(0 11.249)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <circle
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="7.312"
                  cy="7.312"
                  r="7.312"
                  transform="translate(20.249 11.249)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <circle
                  id="Ellipse_5"
                  data-name="Ellipse 5"
                  cx="5.062"
                  cy="5.062"
                  r="5.062"
                  transform="translate(2.25 13.499)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="5.062"
                  cy="5.062"
                  r="5.062"
                  transform="translate(22.498 13.499)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  id="Path_1048"
                  data-name="Path 1048"
                  d="M18.5,6.379V2.655a2.155,2.155,0,0,1,4-1.109l.849,1.416"
                  transform="translate(1.749 -0.5)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  id="Path_1049"
                  data-name="Path 1049"
                  d="M14.039,6.379V2.655a2.155,2.155,0,0,0-4-1.109L9.187,2.962"
                  transform="translate(0.585 -0.5)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  id="Path_1050"
                  data-name="Path 1050"
                  d="M16.812,5.5,9.5,7.75a4.5,4.5,0,0,1,4.5,4.5h5.625a4.5,4.5,0,0,1,4.5-4.5Z"
                  transform="translate(0.624 0.125)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <circle
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  cx="1.125"
                  cy="1.125"
                  r="1.125"
                  transform="translate(16.311 7.874)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  id="Path_1051"
                  data-name="Path 1051"
                  d="M18.5,6.74V6.129a3.628,3.628,0,0,1,6.693-1.943l6.72,10.6"
                  transform="translate(1.749 -0.25)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  y1="6.187"
                  transform="translate(20.249 12.374)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  id="Path_1052"
                  data-name="Path 1052"
                  d="M14.99,6.74V6.129A3.628,3.628,0,0,0,8.3,4.186l-6.721,10.6"
                  transform="translate(-0.366 -0.25)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <line
                  id="Line_4"
                  data-name="Line 4"
                  y1="6.187"
                  transform="translate(14.624 12.374)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MarkerIconLayout;
