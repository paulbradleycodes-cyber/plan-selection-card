# plan-selection-card

A small demo showing how I'd implement a custom card made by extending the MUI Card component and the subcomponents exposed by MUI

## approach

Essentially, I just extended the Card, CardHeader, CardAction components while using several React contexts to allow easy use of the plan data without needing to drill props.

The plan selection button is keyboard focusable and accepts an enter press which then runs the same function as the click event, allowing users of screen readers and such the ability to submit the event.

## tradoffs

The main tradeoff currently is that the BillingCard is not extensible, that is, to use this in production code, a developer would need to make a BillingCards component that can map over the various plans and create new contexts for each of the plans so that the corresponding cards can fetch the data correctly.

## ai assistance
AI, namely Cursor with Claude, aided me in adding the accessibility requirements implementation and with the knowledge of using useCallback in the button component to reduce the recreation of handlers. It also gave me  some help around setting up ESLint rules.
