import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar en pantalla login");

test("visiting /app", function(assert) {
  visit("/app");

  andThen(function() {
    assert.equal(currentURL(), "/login");
    login();
  });

  andThen(function() {
    assert.equal(currentURL(), "/app/escritorio");
  });
});
