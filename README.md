[![Coolshapes](https://coolshap.es/preview.jpg)](https://coolshap.es)

# <p align=center>Coolshapes Demo</p>



A simple, fun project for the sake of creating some cool-looking abstract shapes with little grainy gradients crafted by [@realvjy](https://x.com/realvjy). Coolshapes is a completely open-source set of 100+ abstract shapes crafted for any design and development projects. Free for both commercial and personal use. Licensed under MIT.

## What is this?
This repository contains the source code for the landing page of [coolshap.es](https://coolshap.es)
Coded in **Nextjs** and deployed on **vercel**

----
## Usage: Designer
You can directly copy from website or download figma file
### Figma Community

Grab this figma file fromt he community

### Copy or Download
Copy or download the `svg`/ `png` file from website [coolshap.es](https://coolshap.es)

---
## Usage: Developer



### 🛠️ Installation

```sh
npm install coolshapes-react
```

or

```sh
yarn add coolshapes-react
```

### ⭐️ How to use


##### Global component example

Just import the Global component `Coolshape` and it will work.

```js
import { Coolshape } from "coolshapes-react";

const App = () => {
  return <Coolshape type="star" index={0} size={48} noise={true} />;
};

export default App;
```

##### Component with shape category example

You can import the component for specific category - `Star`,`Ellipse`... etc - and simply pass the index of the shape.

```js
import { Star } from "coolshapes-react";

const App = () => {
  return <Star index={0} size={48} />;
};

export default App;
```


#### Check this [detailed Documentations](https://github.com/realvjy/coolshapes-react?tab=readme-ov-file#readme) for all props details

----

## Contribution & Feedback

Created by [@realvjy](https://x.com/realvjy). You are always welcome to share your feedback on twitter or any social media platform.

If you want to contribute. Just create a pull request.

## Support & Donation

**Coffee fuels coding ☕️**

<a href="https://www.buymeacoffee.com/realvjy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>