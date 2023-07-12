import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress } = props;

  const isDownloaded = progress === 100;

  return (
    <>
      <div className="c-progress">
        <div className="link-more e-btn e-btn--outline c-progress__bar">
          <div
            className="c-progress__deco"
            style={{ width: `${progress}%` }}
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
