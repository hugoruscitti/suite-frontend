import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/grupos/detalle", "Unit | Route | app/grupos/detalle", {
  needs: ["service:ajax", "service:analytics"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
