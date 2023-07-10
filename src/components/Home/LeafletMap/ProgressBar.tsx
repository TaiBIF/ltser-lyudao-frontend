import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  downloading: boolean;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { downloading } = props;
  const [progressWidth, setProgressWidth] = useState(0);

  const isDownloaded = progressWidth === 100;

  useEffect(() => {
    return () => {
      let progressWidth = 0;
      setInterval(() => {
        progressWidth += 10;
        if (progressWidth <= 100) {
          setProgressWidth(progressWidth);
        }
      }, 1000);
    };
  }, [downloading]);
  return (
    <>
      <div className="c-progress">
        <div className="link-more e-btn e-btn--outline c-progress__bar">
          <div
            className="c-progress__deco"
            style={{ width: `${progressWidth}%` }}
          ></div>
          <p className="c-progress__text">
            {isDownloaded ? '下載完成' : '下載中'}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
