Navigator Js
===============

A simple library allowing navigation between pages and/or actions, for example within mobile or web apps.

## Getting started

Just call this method when you want to move to an *action*, where action is a function:

```
Navigator.to(action);
```

And this when you want to come back:

```
Navigator.back();
```

However, you can also pass some *arguments* if your *action* requires them:

```
Navigator.to(action, argument1, argument2);
```
