import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Hello Rhys. This is a test';
  greetUser(name);
});
