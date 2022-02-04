import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  // fetchAllQuotes,
  quotesSelector,
  // statusSelector,
  // errorSelector,
} from '../../redux/quotesSlice';

function QuoteDetail() {
  const { quote_id } = useParams();
  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );

  if (!quote) {
    return <Redirect to='/quotes' />;
  }

  return (
    <div>
      <h1>Quote Details</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}

export default QuoteDetail;
