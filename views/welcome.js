var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework', 'views/model'], function (require, exports, aurelia_framework_1, model_1) {
    var Welcome = (function () {
        function Welcome(model) {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.pizzaName = 'Pepperoni';
            this.model = model;
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            //Getters can't be observed with Object.observe, so they must be dirty checked.
            //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
            //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
            //@computedFrom('firstName', 'lastName')
            get: function () {
                return this.firstName + " " + this.lastName + " " + this.model.search;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.runme = function () {
            alert("Welcome, You ran me!");
        };
        Welcome = __decorate([
            aurelia_framework_1.inject(model_1.Model)
        ], Welcome);
        return Welcome;
    })();
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    })();
    exports.UpperValueConverter = UpperValueConverter;
});
