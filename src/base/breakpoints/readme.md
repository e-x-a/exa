## Breakpoints

## The system has three breakpoint ranges

| breakpoint            | range                          |
|-----------------------|--------------------------------|
| Large                 | **1025px** and up              |
| Medium                | Between **768px** - **1024px** |
| Small                 | Between **0px** - **767px**    |


## sass breakpoint mixins

These mixins use sass's [content blocks](https://sass-lang.com/documentation/at-rules/mixin#content-blocks) so you can nest rules inside them.

**Example**

```scss
.my-component{
  width: 100px;
  @include breakpoint-medium(){
    width: 200px;
  }
  @include breakpoint-large(){
    width: 400px;
  }
}
```

| mixin                      | use for                                             |
|----------------------------|-----------------------------------------------------|
| `breakpoint-small-only()`  | Rules restricted to the small breakpoint            |
| `breakpoint-medium()`      | Rules applied at and above the medium breakpoint    |
| `breakpoint-medium-only()` | Rules restricted to the medium breakpoint           |
| `breakpoint-large()`       | Rules applied at and above the large breakpoint     |


---

## Detecting breakpoint changes in javascript

The system has a technique to detect breakpoint changes in js. Here's how it works...

1. In `breakpoints/rules.scss` the name of the current breakpoint is applied to the `body:after` content
2. In `breakpoints/breakpoint-change.event.js` is the logic to evaluate changes whenever the window is resized, rotated or loaded.
3. When a change occurs a custom event, `app_breakpoint_change`, is emitted with the name of the current breakpoint.

```js
// the event.detail will equal `breakpoint-small`, `breakpoint-medium`, or  `breakpoint-large`
document.body.addEventListener('app_breakpoint_change',function(event){
  console.log(`the current breakpoint is...${event.detail}`);
});
```

---

## Maintaining and extending the system

### Adding or editing a breakpoint

1. Update the variables in `breakpoints/vars.scss`
2. Update the mixing in `breakpoints/mixins.scss`
3. Finally go into `breakpoints/rules.scss`
