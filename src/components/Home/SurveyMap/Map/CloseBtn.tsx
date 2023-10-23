import React from 'react';

interface CloseBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const CloseBtn = ({ label, ...props }: CloseBtnProps) => {
  return (
    <>
      <button {...props} className="xx">
        {(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 30 30"
          >
            <g
              id="Group_259"
              data-name="Group 259"
              transform="translate(-1077 -2920)"
            >
              <g
                id="Ellipse_186"
                data-name="Ellipse 186"
                transform="translate(1077 2920)"
                fill="#fff"
                stroke="#529a81"
                strokeWidth={1}
              >
                <circle cx={15} cy={15} r={15} stroke="none" />
                <circle cx={15} cy={15} r="14.5" fill="none" />
              </g>
              <g
                id="Group_254"
                data-name="Group 254"
                transform="translate(17.092 -25.908)"
              >
                <line
                  id="Line_5"
                  data-name="Line 5"
                  x1="8.817"
                  y2="8.817"
                  transform="translate(1070.5 2956.5)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeWidth={1}
                />
                <line
                  id="Line_6"
                  data-name="Line 6"
                  x2="8.817"
                  y2="8.817"
                  transform="translate(1070.5 2956.5)"
                  fill="none"
                  stroke="#529a81"
                  strokeLinecap="round"
                  strokeWidth={1}
                />
              </g>
            </g>
          </svg>
        ) || 'Close'}
      </button>
    </>
  );
};

export default CloseBtn;
