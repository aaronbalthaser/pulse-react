# Heading
A React Component that returns a heading element.
```$xslt
h1 h2 h3 h4 h5 h6
```
---
### Props (Required)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|N/A   	|N/A   	|N/A     |N/A  	  |
---

### Props (Optional)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|classHooks    |disabled    |boolean    |Sets the default class hooks to the element	
|classes   	|none   	|array   	|Adds custom class/s to the element 
|el   	|h1   	|string    |Specifies the heading h1 thru h6  

---

### Usage
```
import { Heading, NodeType } from 'src/components';

export const Page = ({title, classList}) => {
  const [classes, setClasses] = React.useState([...classList]);

  return (
    <Heading
      el={NodeType.H2}
      classes={classes}
    >
      {title}
    </Heading>
  );
};
```
---
---
---

#### classHooks 
If classHooks is set the component renders the following HTML markup and adds the two default classes which contain minimal and opinionated styles.

```$xslt
<h2 class="pulse-heading pulse-h2">Some title text</h2>
```

---

#### classes 
When class names are added to the classes prop array, those class names are added to the elements class list.

```$xslt
const customClassList = ['one', 'two', 'three'];

<Heading
  el={NodeType.H2}
  classes={customClassList}
>
  {title}
</Heading>

Renders:

<h2 class="pulse-heading pulse-h2 one two three">Some title text</h2>
```

---

#### el 
El prop takes in a string value of type ***NodeType***. NodeType ranges from ***NodeType.H1 thru NodeType.H6***. If no value is passed into el prop the component will return the h1 element by default. NodeType type def can be imported from the components directory.



```$xslt
import { Heading, NodeType } from 'src/components';
```

---
---
---

### Notes:

1. Currently the component allows for a ref to be added and will be forwarded to the heading element. This feature may be removed if there is no practical use case determined.
