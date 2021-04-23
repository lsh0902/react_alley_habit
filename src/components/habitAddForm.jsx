import React, { memo,useCallback } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.useRef();
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
    inputRef.current.focus();
  })

  return (
    <form className="add-form" onSubmit={onSubmit}>
      {console.log('render.....')}
      <input ref={inputRef} type="text" className="add-input" placeholder="습관을 입력해라."></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// class HabitAddForm extends PureComponent {
  
  