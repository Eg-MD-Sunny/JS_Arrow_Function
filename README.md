### </> Javascript Arrow Function

### </> Description:
Arrow function expressions <br>
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.<br>

There are differences between arrow functions and traditional functions, as well as some limitations:<br>

Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.<br>
Arrow functions don't have access to the new.target keyword.<br>
Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.<br>
Arrow functions cannot be used as constructors.<br>
Arrow functions cannot use yield, within its body.<br>
