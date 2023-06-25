export const chartsColor = {
  tooltip: {
    background: {
      dark: 'rgba(1, 116, 187, 0.8)',
      light: 'rgba(234, 241, 248, 0.9)',
    },
    text: {
      dark: 'rgba(255, 255, 255, 1)',
      light: 'rgba(51, 51, 51, 1)',
    },
  },
  legend: {
    double: ['rgba(1, 116, 187, 1)', 'rgba(177, 75, 75, 1)'],
    multiple: [
      'rgba(84, 112, 198 ,1)',
      'rgba(145, 204, 117 ,1)',
      'rgba(250, 200, 88 ,1)',
      'rgba(238, 102, 102 ,1)',
      'rgba(115, 192, 222 ,1)',
      'rgba(59, 162, 114 ,1)',
      'rgba(252, 132, 82 ,1)',
      'rgba(154, 96, 180 ,1)',
      'rgba(234, 124, 204 ,1)',
    ],
    plain: ['rgba(1, 116, 187, 0.4)', 'rgba(177, 75, 75, 0.4)'],
    border: 'rgba(51, 51, 51, 1)',
    style: {
      basic: {
        primary: 'rgba(68, 160, 201, 1)',
        secondary: 'rgba(1, 116, 187, 1)',
        light: 'rgba(255, 255, 255, 1)',
        accent: 'rgba(231, 162, 145, 1)',
        error: 'rgba(207, 104, 78, 1)',
        gray: {
          4: 'rgba(189, 189, 189, 1)',
          5: 'rgba(224, 224, 224, 1)',
        },
      },
      opacity: {
        primary: 'rgba(68, 160, 201, 0.1)',
        secondary: 'rgba(68, 160, 201, 0.6)',
        hover: 'rgba(55, 145, 53, 0.2)',
        dark: 'rgba(0, 0, 0, 0.5)',
        light: 'rgba(255, 255, 255, 0.6)',
        error: 'rgba(207, 104, 78, 0.2)',
      },
    },
  },
};

export const chartsHeight = {
  lg: 800,
  md: 600,
  default: 400,
};

export const commonOptions = {
  title: {
    show: false,
  },
  legend: {
    show: false,
  },
  toolbox: {
    show: true,
    showTitle: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
        title: {
          zoom: '放大',
          back: '放大還原',
        },
      },
      magicType: {
        type: ['bar', 'line'],
        title: {
          bar: '長條圖',
          line: '折線圖',
        },
      },
      restore: { title: '重新整理' },
      saveAsImage: {
        title: '下載成圖片',
        type: 'jpg',
      },
    },
  },
  dataZoom: [
    {
      type: 'slider',
      selectedDataBackground: {
        areaStyle: {
          color: 'rgba(1, 116, 187, 0.7)',
          opacity: 1,
        },
        lineStyle: {
          color: 'rgba(189, 189, 189, 1)',
        },
      },
      dataBackground: {
        lineStyle: {
          color: 'rgba(189, 189, 189, 1)',
        },
        areaStyle: {
          color: 'rgba(1, 116, 187, 0)',
        },
      },
      borderColor: 'rgba(224, 224, 224, 1)',
      handleStyle: {
        borderColor: 'rgba(224, 224, 224, 1)',
      },
      moveHandleStyle: {
        color: 'rgba(1, 116, 187, 0.5)',
      },
      emphasis: {
        moveHandleStyle: {
          color: 'rgba(1, 116, 187, 1)',
        },
        handleStyle: {
          borderColor: 'rgba(1, 116, 187, 1)',
        },
      },
      backgroundColor: 'rgba(255, 255, 255, 0)',
      fillerColor: 'rgba(1, 116, 187, 0)',
      brushStyle: {
        color: 'rgba(1, 116, 187, 0)',
      },
    },
  ],
  color: chartsColor.legend.multiple,
  tooltip: {
    trigger: 'axis',
    backgroundColor: chartsColor.tooltip.background.dark,
  },
};
