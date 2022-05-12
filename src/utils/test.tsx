import { fireEvent } from '@testing-library/react';

type UserEventType = 'value' | 'checked';
export const userEvent = {
  click: (field: HTMLElement | Element) => fireEvent.click(field),

  blur: (field: HTMLElement) => fireEvent.blur(field),

  change: (field: HTMLElement, value: any, type: UserEventType = 'value') =>
    fireEvent.change(field, {
      target: { [type]: value },
    }),

  changeThenBlur: (
    field: HTMLElement,
    value: any,
    type: UserEventType = 'value',
  ) => {
    fireEvent.change(field, {
      target: { [type]: value },
    });

    fireEvent.blur(field);
  },
};
