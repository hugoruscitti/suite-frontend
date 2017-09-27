import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/tareas/crear", "Unit | Route | app/tareas/crear", {
  // Specify the other units that are required for this test.
  needs: [
    "service:perfil",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
