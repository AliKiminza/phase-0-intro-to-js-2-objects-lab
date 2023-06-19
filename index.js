// Write your solution in this file!
let employee ={
  name : 'Ali',
  streetAddress : 'Mombasa'
  }
  
  
  
  function updateEmployeeWithKeyAndValue(object, key, value){
     return{
  ...object,[key]:value,
     };
  }
  
  const updateObject = updateEmployeeWithKeyAndValue(employee, 'Moses', "Kisumu")
  
  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
       object[key] = value
         return object;
      }
  
  const destructiveObject = destructivelyUpdateEmployeeWithKeyAndValue(employee[streetAdress] = "Nyeri")
  
  function deleteFromEmployeeByKey(employee, key){
    const old = Object.assign({},employee);
    delete old[key];
       return old;
    }
 
    function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee['name'];
        return employee;
     }
  
