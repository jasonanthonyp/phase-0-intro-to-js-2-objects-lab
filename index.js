// Write your solution in this file!
const employee = { 
    name: "Jessica Burns",
    streetAdress: "54 E 7th street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    
    return obj

  }

function deleteFromEmployeeByKey (obj, key) {
    let copyObj = {...obj}

    delete copyObj[key]

    return copyObj

}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key]

    return obj

}


