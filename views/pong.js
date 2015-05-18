define(["require", "exports"], function (require, exports) {
    var Pong = (function () {
        function Pong() {
            var _this = this;
            this.x = 50;
            this.y = 50;
            setInterval(function () { _this.x++; }, 1000);
        }
        return Pong;
    })();
    exports.Pong = Pong;
});
