import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.greetingReducer)
  const { greeting } = data;
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default Greeting;