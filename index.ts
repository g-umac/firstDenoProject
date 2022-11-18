import { bgBlue, red, bold,   green, underline, blue, } from "https://deno.land/std@0.165.0/fmt/colors.ts";

let myName: string; 

myName = "Gamze";
 
 
  console.log(`My name is ${green(myName)}`);
  console.log(`My name is ${blue(myName)}`);
  console.log(`My name is ${bold(myName)}`);
  console.log(`My name is ${underline(green(myName))}`);