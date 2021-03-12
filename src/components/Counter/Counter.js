import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import Value from './Value';

const Counter = ({ step, value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" className="btn btn-count" onClick={() => onDecrement(step)}>
        <span>Уменьшить на {step}</span>
      </button>
      <Value value={value} />
      <button type="button" className="btn btn-count" onClick={() => onIncrement(step)}>
        Увеличить на {step}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
