import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ percentage }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
      >
      <img src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg" />
				<img src="http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg" />

				<img src="http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg" />

				<img src="http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg" />
				<img src="http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg" />
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;