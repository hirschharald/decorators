/*
  decorators

*/
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
