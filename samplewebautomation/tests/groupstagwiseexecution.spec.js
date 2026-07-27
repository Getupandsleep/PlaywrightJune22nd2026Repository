// 5. Apply Tags & Execute Tests based on Tags
const {test, expect} = require("@playwright/test")
 
test("First Testcase @sanity", async({page})=>{
    console.log("It is a First Sanity Test case")
})
 
test("Second Testcase @sanity", async({page})=>{
    console.log("It is a Second Sanity Test case")
})
 
test("Third Testcase @regression", async({page})=>{
    console.log("It is a Third Regression Test case")
})
 
test("Fourth Testcase @regression", async({page})=>{
    console.log("It is a Fourth Regression Test case")
})
 
 
test("Fifth Testcase @sanity@regression", async({page})=>{
    console.log("It is a Fifth Sanity & Regression Test case")
})
 
test("Sixth Testcase @sanity@regression", async({page})=>{
    console.log("It is a Sixth Sanity & Regression Test case")
})
 
/* Case 1: Execute the tests which have tag @sanity
npx playwright test ./tests/tags1.spec.js --grep '@sanity'
 
Case 2: Execute the tests which have tag @regression
npx playwright test ./tests/tags1.spec.js --grep '@regression'
 
Case 3: Execute the tests which have tag @sanity alone and should not consider the multiple tags
npx playwright test ./tests/tags1.spec.js --grep '@sanity' --grep-invert '@sanity@regression' */