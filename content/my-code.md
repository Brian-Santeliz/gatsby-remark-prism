# Hello World

Here are some code blocks with custom language tabs!

```js
const hola = ()=>{
  return new Promise((resolve,rejeted)=>{
    if(true){
      return setTimeput(()=>{
        resolve('Promesa resuelta')
      },3000)
    }
    return rejeted('Promesa rechazada')
  })
}
hola()
  .then(console.log)
  .catch(console.log)
```

Or something like:

```html
<div>Hello World</div>
```

Or maybe:

```css
.imperio {
  color: blue;
}
```

Undefined language:

```yaml
- test: 01
  hi: number two
```

Or without any label:

```
test 123
```
