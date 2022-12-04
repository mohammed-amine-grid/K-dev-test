import {DataItem} from "../types";
exports.count = function(people: DataItem[]) {
   return people.map(dataItem => {
        // initiate outerNameCount with 1 as dataItem will always have a name.
        // I'm not sure what dataItem is supoosed to represent exactly, thus the generic name 'dataItem'.
        let outerNameCount = 1;
        let innerNameCount = 1;
        dataItem.people.forEach(person => {
            if(person.animals.length > 0) {
                innerNameCount += person.animals.length ;
                person.name += " " + "[" 
            }
        })

    }) 
    
}


// this function does not work
// given the time constraint I'll skip this for now.