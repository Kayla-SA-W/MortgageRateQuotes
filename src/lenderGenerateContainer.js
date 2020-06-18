import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateLender } from './redux';
import LenderGenerate from './lenderGenerate';

export const LenderGenerateContainer = () => {
  const dispatch = useDispatch();
  const lender = useSelector(({ lender }) => lender);

  return (
    <LenderGenerate
      lender={lender}
      handleChange={({ target: { name, value } }) =>
        dispatch(updateLender({ [name]: value }))
      }
    />
  );
};
