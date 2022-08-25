/*
  decorators

*/

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}
const registeredValidators: ValidatorConfig = {};

export function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

export function NotEmpty(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['notempty']
  };
}



export function Logger(logString: string) {
  return function (constructor: any) {
    console.log(logString, constructor);
  };
}
export function Log2(
  target: any,
  propertyname: string,
  descr: PropertyDescriptor
) {
  console.log("tar", target);
  console.log("name", propertyname);
  console.log("decr", descr);
}
export function Log3(target: any, name: String | Symbol, position: number) {
  console.log("targetr", target);
  console.log("name", name);
  console.log("position", position);
}
export function Log(target: any, propertyname: string | Symbol) {
  console.log("###", target, propertyname);
}
export function UseHtmlTemplate(templ: string, divId: string) {
  return function (constructor: any) {
    const el = document.getElementById(divId);
    el ? (el.innerHTML = templ) : "";
  };
}
