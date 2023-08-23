/* Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list. */


import React, { useMemo } from "react";



export function FilteredList({list}){
    

    const filteredValues = useMemo(() => {
        return list.filter((item) => item.age > 18)
    }, [list])


    return (
        <ul>
            {filteredValues.map((item) => <li>{<strong>Name:</strong>} {item.name} {<strong>ID:</strong>} {item.id} {<strong>Age:</strong>} {item.age}</li>)}
        </ul>
    )
}
