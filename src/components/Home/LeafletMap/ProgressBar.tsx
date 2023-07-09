import React, { useState, useEffect } from 'react';

import { useDownload } from 'hooks/api/useDownload';

interface ProgressBarProps {
  downloading: boolean;
  id: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { downloading, id } = props;
  const [progressWidth, setProgressWidth] = useState(0);
  const { handleDownload } = useDownload();

  const isDownloaded = progressWidth === 100;

  const handleDownloadStart = () => {
    handleDownload({ url: 'site', id });
  };

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
        <div
          className="link-more e-btn e-btn--outline c-progress__bar"
          onClick={handleDownloadStart}
        >
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
