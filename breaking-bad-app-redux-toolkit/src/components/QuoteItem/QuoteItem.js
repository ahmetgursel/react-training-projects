import React from 'react';
import './QuoteItem.css';

function QuoteItem({ item }) {
  return (
    <div className='quote_item'>
      <q>{item.quote}</q> <strong>{item.author}</strong>
    </div>
  );
}

export default QuoteItem;
