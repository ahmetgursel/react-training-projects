import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from '../../redux/quotesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import QuoteItem from '../../components/QuoteItem/QuoteItem';

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error}></Error>;
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Quotes</h1>
      {status === 'loading' && <Loading />}
      {status === 'succeeded' &&
        data.map((item) => <QuoteItem key={item.quote_id} item={item} />)}
      {status === 'succeeded' && (
        <div style={{ padding: 30, textAlign: 'center' }}>
          {data.length} quotes
        </div>
      )}
    </div>
  );
}

export default Quotes;
