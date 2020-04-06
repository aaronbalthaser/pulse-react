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
|el   	|h1   	|string    |Specifies the heading h1 thru h6   	
|classes   	|none   	|array   	|Adds custom class/s to the element 

---

### Usage
```
import { Heading, NodeType } from 'src/components';

export const Page = ({title, classList}) => {
  const [classes, setClasses] = React.useState([...classList]);

  return (
    <Heading
      el={NodeType.H3}
      classes={classes}
    >
      {title}
    </Heading>
  );
};
```
