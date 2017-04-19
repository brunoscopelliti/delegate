# delegate
Lightweight [event delegation](http://stackoverflow.com/questions/1687296/what-is-dom-event-delegation).

## CI reports

Every commit gets tested across different browsers, and OS.

Here's the [latest report](https://travis-ci.org/brunoscopelliti/delegate)

## how to use

Consider the following DOM tree

```html
<ul id='favourites'>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
  <!-- a long list ... -->
</ul>
```

That's one of the possible way to register an event handler that is executed every time a list entry is clicked

```js
function pickFavourite(event){
  // do stuff
}

document.getElementById('favourites')
  .addEventListener('click', delegate('li', pickFavourite));
```

## support

It internally uses [`Element#matches`](https://developer.mozilla.org/it/docs/Web/API/Element/matches). You have to provide a polyfill on [*very* old browsers](http://caniuse.com/#feat=matchesselector).
