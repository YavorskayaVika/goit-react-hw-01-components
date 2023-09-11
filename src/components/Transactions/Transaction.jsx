import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
} from './Transaction.styled';

const Transaction = ({ items = [] }) => {
  return (
    <div>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Type</StyledTh>
            <StyledTh>Amount</StyledTh>
            <StyledTh>Currency</StyledTh>
          </StyledTr>
        </thead>
        {items.map(item => (
          <tbody key={item.id}>
            <StyledTr>
              <StyledTd>{item.type}</StyledTd>
              <StyledTd>{item.amount}</StyledTd>
              <StyledTd>{item.currency}</StyledTd>
            </StyledTr>
          </tbody>
        ))}
      </StyledTable>
    </div>
  );
};

Transaction.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default Transaction;