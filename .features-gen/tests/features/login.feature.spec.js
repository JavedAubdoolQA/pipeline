// Generated from: tests/features/login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Successfully login to the saucedemo site', async ({ Given, When, Then, And, page }) => { 
    await Given('the user navigates to "/"', null, { page }); 
    await When('the user enters "standard_user" in the "username" field', null, { page }); 
    await And('the user enters "secret_sauce" in the "password" field', null, { page }); 
    await And('the user clicks on the "Login" button', null, { page }); 
    await Then('validate that the "inventory_list" is visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to \"/\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/\"","children":[{"start":23,"value":"/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user enters \"standard_user\" in the \"username\" field","stepMatchArguments":[{"group":{"start":16,"value":"\"standard_user\"","children":[{"start":17,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"username\"","children":[{"start":40,"value":"username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user enters \"secret_sauce\" in the \"password\" field","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"password\"","children":[{"start":39,"value":"password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Login\" button","stepMatchArguments":[{"group":{"start":23,"value":"\"Login\"","children":[{"start":24,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then validate that the \"inventory_list\" is visible","stepMatchArguments":[{"group":{"start":18,"value":"\"inventory_list\"","children":[{"start":19,"value":"inventory_list","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end