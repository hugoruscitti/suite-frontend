import Ember from "ember";

export function plusOne(params) {
  return +params + 1;
}

export default Ember.Helper.helper(plusOne);
