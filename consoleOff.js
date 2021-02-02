// It appears Netflix is following (Facebook's lead)[https://news.ycombinator.com/item?id=7222129].
with ((console && console._commandLineAPI) || {}) {
    Object.defineProperty(window, "console", {
        value: console,
        writable: false,
        configurable: false
    });
    
    var i = 0;
    function showWarningAndThrow() {
        if (!i) {
            setTimeout(function () {
                console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
            }, 1);
            i = 1;
        }
        throw "Console is disabled";
    }
    
    var l, n = {
            set: function (o) {
                l = o;
            },
            get: function () {
                showWarningAndThrow();
                return l;
            }
        };
    Object.defineProperty(console, "_commandLineAPI", n);
    Object.defineProperty(console, "__commandLineAPI", n);
  }
  window.console.log = function(){
    console.error('The developer console is temp...');
    window.console.log = function() {
        return false;
    }
}

console.log('test');
(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on netflix.com";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();
if (window.URL) {
    var ish, _call = Function.prototype.call;
    Function.prototype.call = function () { //Could be wrapped in a setter for _commandLineAPI, to redefine only when the user started typing.
        if (arguments.length > 0 && this.name === "evaluate" && arguments [0].constructor.name === "InjectedScriptHost") { //If thisArg is the evaluate function and the arg0 is the ISH
            ish = arguments[0];
            ish.evaluate = function (e) { //Redefine the evaluation behaviour
                throw new Error ('Rejected evaluation of: \n\'' + e.split ('\n').slice(1,-1).join ("\n") + '\'');
            };
            Function.prototype.call = _call; //Reset the Function.prototype.call
            return _call.apply(this, arguments);  
        }
    };
}