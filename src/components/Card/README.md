# Heading
A React Component that returns a card component.

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
|disabled    |false    |boolean    |Specifies if the component is disabled
|focusable    |true    |boolean    |Enables tab focus
|el   	|h1   	|string    |Specifies the heading h1 thru h6  
|onClick    |none    |func    |A callback for card onClick

---

### Usage
```$xslt
import { Card, CardNodeType } from 'src/components';

export const Page = ({title, classList}) => {
  const [classes, setClasses] = React.useState([...classList]);

  return (
    <Card
      el={CardNodeType.ARTICLE}
      classes={classes}
    >
      {title}
    </Card>
  );
};
```
---
---
---

#### classHooks 
If classHooks is set the component renders the following HTML markup and adds the two default classes which contain minimal and opinionated styles.

```$xslt
<div class="pulse-card">
  children
</div>
```

If the callback function is passed and classHooks is enabled the additional class is added:

```$xslt
'pulse-card--clickable'
```

---

#### classes 
When class names are added to the classes prop array, those class names are added to the elements class list.

```$xslt
const customClassList = ['one', 'two', 'three'];

<Card
  el={CardNodeType.ARTICLE}
  classes={customClassList}
>
  {title}
</Card>

Renders:

<article class="pulse-card one two three">
  children
</article>
```

---

#### el 
El prop takes in a string value of type ***CardNodeType***. CardNodeType allows ***NodeType.DIV & NodeType.ARTICLE***. If no value is passed into el prop the component will return the div element by default. CardNodeType type def can be imported from the components directory.



```$xslt
import { Card, CardNodeType } from 'src/components';
```

---
---

### Notes:
