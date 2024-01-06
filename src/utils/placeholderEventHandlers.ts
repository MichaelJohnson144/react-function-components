import { MouseEvent, ChangeEvent } from 'react';

/* Is the event cancelable?
 If so, then prevent the default action that belongs to the event from occurring: */
export const handleOnClickPlaceholder = (event: MouseEvent): void => event.preventDefault();

/* Is the event cancelable?
 If so, then prevent the default action that belongs to the event from occurring: */
export const handleOnChangePlaceholder = (event: ChangeEvent) => event.preventDefault();
