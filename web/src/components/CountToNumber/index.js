import React, { useMemo, useState } from 'react';
import { graphql, useSubscription } from 'react-relay';

export const CountToNumber = () => {
  const [currentCounterVal, setCurrentCounterVal] = useState(1);
  const config = useMemo(() => ({
    variables: { input: { number: 100000 } },
    subscription: graphql `
      subscription CountToNumberSubscription($input:countToNumberInput!){
        countToNumber(input:$input){
          number
        }
      }
    `,
    onNext: payload => {
      setCurrentCounterVal(payload?.countToNumber?.number)
    }
  }), []);
  useSubscription(config);
  return <div>Subscription Example: {currentCounterVal}</div>
};
