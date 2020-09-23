import React, { useEffect, useRef } from 'react';
import EventBus from '../../utils/eventBus';

export const Button = (props) => {
  let classNames = props.classNames || '';
  if (Array.isArray(classNames)) {
    classNames = `btn ${classNames.join(' ')}`;
  }

  const buttonRef = useRef(null);
  useEffect(() => {
    const eventBus = new EventBus({ el: buttonRef, events: props.events });
    if (eventBus) {
      eventBus.attachEvents();
    }
  }, []);

  return (
    <div ref={buttonRef} className={classNames}>
      {props.dataModel.name}
    </div>
  );
};
