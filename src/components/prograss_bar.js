import React from 'react';

const PrograssBar = ({ percentage }) => {
  if (!percentage) {
    return <div>
      loading...
    </div>
  }

  return (
    <div className="bar_container">
      <div id="main_container">
        <div id="pbar" className="progress-pie-chart" data-percent="0">
          <div className="ppc-progress">
            <div className="ppc-progress-fill"></div>
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>%</span>
            </div>
          </div>
        </div>

        <progress style="display: none" id="progress_bar" value="0" max="100"></progress>
      </div>
    </div>
  );
}

export default PrograssBar;
