# intro-guide
A library for creating a step-by-step introduction GUI, showing and describing functionality in a web application. A stand-alone lib based on the custom implementation I made for: http://equakenepal.sustainablemap.org which I wanted to use for [another project](https://github.com/getsmap/smap-responsive/issues/176).

# Techniques used
- [React](https://facebook.github.io/react/)
- [Redux](redux.js.org)
- [Popper.js](https://popper.js.org/documentation.html)

Yes, it does feel a bit overkill to use Redux, and even React (unless your project is written with React). But the aim of this project was also learn those techniques – as well as being able to use this library from React.


# Usage

**Note! The library is under development and below may not be implemented yet.**

You can use it either from a React app or non-React app. In both cases you need to define a configuration:
```
let introConfig = {
  stepIndex: 0, // starting step index (optional)
	steps: [
		{
			title: "The title",
			description: "The description",
			selector: ".some-selector"
		},
		{
			title: "The title 2",
			description: "The description 2",
			selector: "#some-selector"
		},
		{
			title: "The title 3",
			description: "The description 3",
			selector: ".some-selector button"
		}
	]  // (required)
}
```

####Usage in a React application:
```
import { IntroGuideComponent } from "introguide"

// Use as usual in your render function, providing the config as a parameter.
render() {
	  // let config = { ... }
	  const container = document.querySelector("#intro");
		return (
			<IntroGuideComponent config={config} />,
			container
    )
```

####Usage in a non-React application:

The old-way of including js/css:
```
<link rel="stylesheet" href="the-path/dist/css/bundle.css" />
<script src="the-path/dist/js/bundle.js"></script>
<script>
  // let introConfig = { … }
  const container = document.querySelector("#intro"); // This is where the intro-guide will reside
  const myIntroGuide = introGuide.create(container, introConfig);
</script>
```


# Feedback
Don't hesitate to create an issue or give me feedback.
