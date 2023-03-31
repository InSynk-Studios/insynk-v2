---
image: "/blog/male_employee.svg"
tag: ["Product", "Developement"]
title: How to scale your product with user feedback and create a PMF
description: The secret to creating designs which is scalable, intuitive and customers love to use is pretty simple. You just have to be observant. Observant to
authorImage: "/blog/author/vishnu.svg"
author: "Vishnu Narayan Malviya"
position: "Co-Founder InSynk Studios"
---

<img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" width="300" height="300"/>

<div>
  This is a blog post about **ReactJs**. <br/>
  We'll learn what new in ReactJs v18.0.
</div>

<br/>

### New Feature: Automatic Batching -

Batching is when React groups multiple state updates into a single re-render for better performance. Without automatic batching, we only batched updates inside React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default. With automatic batching, these updates will be batched automatically:

```js: // Before: only React events were batched.
        setTimeout(() => {
          setCount(c => c + 1);
          setFlag(f => !f);
          // React will render twice, once for each state update (no batching)
        }, 1000);

        // After: updates inside of timeouts, promises,
        // native event handlers or any other event are batched.
        setTimeout(() => {
          setCount(c => c + 1);
          setFlag(f => !f);
          // React will only re-render once at the end (that's batching!)
        }, 1000);
```

### New Feature: Transitions -

A transition is a new concept in React to distinguish between urgent and non-urgent updates.

✅ Urgent updates reflect direct interaction, like typing, clicking, pressing, and so on.<br/>
✅ Transition updates transition the UI from one view to another.

Urgent updates like typing, clicking, or pressing, need immediate response to match our intuitions about how physical objects behave. Otherwise they feel “wrong”. However, transitions are different because the user doesn’t expect to see every intermediate value on screen.

For example, when you select a filter in a dropdown, you expect the filter button itself to respond immediately when you click. However, the actual results may transition separately. A small delay would be imperceptible and often expected. And if you change the filter again before the results are done rendering, you only care to see the latest results.

Typically, for the best user experience, a single user input should result in both an urgent update and a non-urgent one. You can use startTransition API inside an input event to inform React which updates are urgent and which are “transitions”:

```js:
import {startTransition} from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});

```

<div> And this is it!!</div>
