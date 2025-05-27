import React from 'react';
import { DonationBarProps } from './types';

const DonationBar: React.FC<DonationBarProps> = ({ current, goal, checkpoints = [] }) => {
  const fillPercent = Math.min((current / goal) * 100, 100);
  const complete = current >= goal;

  return (
    <div className="donation-bar-container">
      <div className="donation-bar-track">

        <div className="donation-bar-fill" style={{ height: `${fillPercent}%` }} />

        {checkpoints.map((cp, i) => {
          const topOffset = (cp.amount / goal) * 100;
          const isReached = current >= cp.amount;

          return (
            <div
              key={i}
              className={`donation-checkpoint ${isReached ? 'reached' : ''}`}
              style={{ bottom: `${topOffset}%` }}
            >
              <span className={`checkpoint-text ${isReached ? 'reached' : ''}`}>
                ${cp.amount.toLocaleString()}
              </span>
            </div>
          );
        })}

        <div style={{ bottom: `100%`}} className={`donation-checkpoint-goal ${complete ? 'reached' : ''}`}>
          <span className={`checkpoint-goal ${complete ? 'reached' : ''}`}>
            ${goal.toLocaleString()}
          </span>
        </div>

        <div style={{ bottom: `0%`}} className={'donation-checkpoint-goal'}>
          <p className={`checkpoint-goal ${complete ? 'reached' : ''}`}>
            Current Counter: ${current.toLocaleString()}
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default DonationBar;
