/* @see https://codepen.io/patrick-heney/pen/wmPRZO */
////////////////////////////
////  JARGON GENERATOR  ////
////////////////////////////

var JargonGenerator = {
  CONSTANTS: {
    PROMPT: "> ",
    RULE_COMMAND: "{Command}",
    RULE_ELEMENT: "{Element}",
    ITEM_REGISTER: "{Register}",
    ITEM_SYSTEM: "{System}",
    ITEM_TRACE: "{Trace}",
    ITEM_MIPS: "{Mips}",
    ITEM_SWITCH: "{switch}",
    NUMBER_BINARY: "{binary}",
    NUMBER_HEX: "{hex}",
    NUMBER_INT: "{integer}",
    NUMBER_ALPHA: "{alpha}",
    NUMBER_PER: "{percent}",
    JOINER: "{Join}",
    OPENER: "{Open}",
    TERMINATOR: "{Terminate}",
    PLACEHOLDERS: [],
  },

  //  Jargon library
  JARGON: {
    OPENER: [
      "FORCE",
      "HOLD",
      "STATUS",
      "FLUSH",
      "RECALL",
      "SPLIT",
      "RELEASE",
      "LOAD",
      "CONFIG",
      "RECYCLE",
      "DUMP",
      "INVERT",
      "RELAY",
      "ROUTE",
      "LINK",
      "TRACK",
      "REQUEST",
    ],
    JOINER: [
      "SHIFT",
      "REDIRECT",
      "SUB",
      "FLUSH",
      "SPLIT",
      ">",
      ">>",
      "&",
      "|",
      "::",
      "->",
      "<-",
      "SWAP",
      "IN",
      "CONNECT",
      "JOIN",
      "AS",
      "TO",
      "PUSH",
      "PULL",
      "TRY",
      "MERGE",
      "TRACK",
      "SWAP",
    ],
    TERMINATOR: [
      "OK",
      "ACK",
      "SYN",
      "ACCEPT",
      "REJECT",
      "MONITOR",
      "PASS",
      "FAIL",
      "WARN",
      "OUT",
      "RETRY",
      "RESET",
      "SCATTER",
      "CONTINUE",
      "WAIT",
      "DOWN",
      "RELAY",
      "PEND",
      "INIT",
      "PRIME",
    ],
  },

  Init: function() {
    this.CONSTANTS.PLACEHOLDERS = [
      this.CONSTANTS.ITEM_REGISTER,
      this.CONSTANTS.ITEM_SYSTEM,
      this.CONSTANTS.ITEM_TRACE,
      this.CONSTANTS.ITEM_MIPS,
      this.CONSTANTS.JOINER,
      this.CONSTANTS.OPENER,
      this.CONSTANTS.TERMINATOR,
      this.CONSTANTS.NUMBER_BINARY,
      this.CONSTANTS.NUMBER_HEX,
      this.CONSTANTS.NUMBER_INT,
      this.CONSTANTS.NUMBER_ALPHA,
      this.CONSTANTS.NUMBER_PER,
      this.CONSTANTS.ITEM_SWITCH,
    ];

    this.JARGON.TERMINATOR.push("FRAGMENT/" + this.CONSTANTS.NUMBER_HEX);
    this.JARGON.TERMINATOR.push("DELAY " + this.CONSTANTS.NUMBER_INT + "000");
    this.JARGON.TERMINATOR.push("DUMP [" + this.CONSTANTS.NUMBER_HEX + ", " + this.CONSTANTS.NUMBER_HEX + "]");
    this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER + "%");

    this.initRuleset();
  },

  //  Returns a Jargon command string
  Cmd: function() {
    var result = this.commandTemplate();
    this.CONSTANTS.PLACEHOLDERS.forEach(
      function(item, index) {
        result = this.replaceBy(item, result);
      }.bind(this)
    );
    return result;
  },

  //  {Open}, {J}, {End}, {Item}
  //  {Element} -> {S}, {R}, {T}
  ruleset: [],

  initRuleset: function() {
    this.ruleset = [
      //  exit conditions
      [this.CONSTANTS.RULE_ELEMENT, this.CONSTANTS.ITEM_SYSTEM],
      [this.CONSTANTS.RULE_ELEMENT, this.CONSTANTS.ITEM_REGISTER],
      [this.CONSTANTS.RULE_ELEMENT, this.CONSTANTS.ITEM_TRACE],
      [this.CONSTANTS.RULE_ELEMENT, this.CONSTANTS.ITEM_MIPS],

      //  Command expansion rules
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.RULE_ELEMENT],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.RULE_ELEMENT + " " + this.CONSTANTS.ITEM_SWITCH],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.RULE_ELEMENT + " " + this.CONSTANTS.TERMINATOR],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.RULE_ELEMENT + " " + this.CONSTANTS.TERMINATOR],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.OPENER + " " + this.CONSTANTS.RULE_ELEMENT],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.OPENER + " " + this.CONSTANTS.RULE_ELEMENT],
      [
        this.CONSTANTS.RULE_COMMAND,
        this.CONSTANTS.OPENER + " " + this.CONSTANTS.RULE_ELEMENT + " " + this.CONSTANTS.TERMINATOR,
      ],
      [this.CONSTANTS.RULE_COMMAND, this.CONSTANTS.OPENER + " " + this.CONSTANTS.TERMINATOR],

      //  Element expansion rules
      [
        this.CONSTANTS.RULE_ELEMENT,
        this.CONSTANTS.RULE_ELEMENT + " " + this.CONSTANTS.JOINER + " " + this.CONSTANTS.RULE_ELEMENT,
      ],
    ];
  },

  //  Returns a jargon template, e.g.,
  //  ""{Open} {S} {J} {R} {T} {Terminate}""
  commandTemplate: function() {
    var result = this.CONSTANTS.RULE_COMMAND;

    //  Get all command expansions
    var commandExpansions = this.ruleset.filter(r => {
      return r[0].indexOf(this.CONSTANTS.RULE_COMMAND) > -1;
    });

    //  Select a random command exansion
    result = this.RND.rarr(commandExpansions)[1];

    //  Get all element expansions
    var elementExpansions = this.ruleset.filter(r => {
      return r[0].indexOf(this.CONSTANTS.RULE_ELEMENT) > -1;
    });

    //  Process the result template.
    //  Iteratively replace element symbols using the expansions.
    //  Continue until all elements symbols are replaced.
    while (result.indexOf(this.CONSTANTS.RULE_ELEMENT) > -1) {
      var regex = "(?:.*?" + this.CONSTANTS.RULE_ELEMENT + ")";
      result = result.replace(
        RegExp(regex),
        function(x) {
          var swap = this.RND.rarr(elementExpansions)[1];
          return x.replace(RegExp(this.CONSTANTS.RULE_ELEMENT), swap);
        }.bind(this)
      );
    }

    return result;
  },

  //  Replaces all items symbols in the source
  //  with a randomly generated item.
  replaceBy: function(placeholder, source) {
    if (source.indexOf(placeholder) === -1) {
      return source;
    }

    while (source.indexOf(placeholder) > -1) {
      var regex = "(?:.*?" + placeholder + ")";
      source = source.replace(
        RegExp(regex),
        function(x) {
          var swap = "!!";
          switch (placeholder) {
            case this.CONSTANTS.ITEM_REGISTER:
              swap = this.register();
              break;
            case this.CONSTANTS.ITEM_SYSTEM:
              swap = this.system();
              break;
            case this.CONSTANTS.ITEM_TRACE:
              swap = this.trace();
              break;
            case this.CONSTANTS.ITEM_MIPS:
              swap = this.mip();
              break;
            case this.CONSTANTS.JOINER:
              swap = this.RND.rarr(this.JARGON.JOINER);
              break;
            case this.CONSTANTS.OPENER:
              swap = this.RND.rarr(this.JARGON.OPENER);
              break;
            case this.CONSTANTS.TERMINATOR:
              swap = this.RND.rarr(this.JARGON.TERMINATOR);
              break;
            case this.CONSTANTS.NUMBER_BINARY:
              swap = this.RND.rbin();
              break;
            case this.CONSTANTS.NUMBER_HEX:
              swap = this.RND.rhex();
              break;
            case this.CONSTANTS.NUMBER_INT:
              swap = this.RND.r2n();
              break;
            case this.CONSTANTS.NUMBER_ALPHA:
              swap = this.RND.ralpha();
              break;
            case this.CONSTANTS.NUMBER_PER:
              swap = this.RND.rper(1);
              break;
            case this.CONSTANTS.ITEM_SWITCH:
              swap = this.RND.rbool(this.switch());
              break;
          }
          return x.replace(RegExp(placeholder), swap);
        }.bind(this)
      );
    }
    return source;
  },

  ////  GENERATORS  ////

  trace: function() {
    var prefix = ["back", "reverse-", "!", ""];
    var template = "trace-{opt}";
    var opts = ["on", "off", "pause", "resume", "cancel", "log", "commit", "reject", "bypass", "maint"];
    return this.RND.rarr(prefix) + template.replace("{opt}", this.RND.rarr(opts));
  },

  register: function() {
    return this.RND.rbool("de", "") + "reg[" + this.CONSTANTS.NUMBER_HEX + "]";
  },

  system: function() {
    var systemType = [
      "system",
      "core",
      "accelerator",
      "back-scatter",
      "receiver",
      "rtr." + this.CONSTANTS.NUMBER_INT,
      "nucl-" + this.CONSTANTS.NUMBER_ALPHA + "." + this.CONSTANTS.NUMBER_ALPHA,
      "rad" + this.CONSTANTS.NUMBER_INT + "." + this.CONSTANTS.NUMBER_ALPHA,
      "pack",
      "bat:" + this.CONSTANTS.NUMBER_HEX,
      "stabilizer",
      "sector",
      "cycle",
      "OS" + this.CONSTANTS.NUMBER_HEX,
      "plot",
      "gateway",
      "interface",
      "adapt",
    ];
    var template = this.RND.rarr(systemType);

    if (this.RND.rbool()) {
      template = "{prefix}" + template;
    }

    if (this.RND.rbool()) {
      var int = this.CONSTANTS.NUMBER_INT;
      var alpha = this.CONSTANTS.NUMBER_INT + this.CONSTANTS.NUMBER_ALPHA;
      var range = this.CONSTANTS.NUMBER_INT + "-" + this.CONSTANTS.NUMBER_INT;
      template += " " + this.RND.rarg(int, alpha, range);
    }

    if (this.RND.rbool()) {
      template += " ({status})";
    }

    var t = this.RND.rarg("sub", "super-", "backup-", "aux-", "remote-");
    var s = this.RND.rarg("ONLINE", "OFFLINE", "UNK");

    return template.replace("{prefix}", t).replace("{status}", s);
  },

  mip: function() {
    var prefix = ["MiPS", this.CONSTANTS.NUMBER_ALPHA + "-MEM", "CeLL"];
    return this.RND.rarr(prefix) + " (" + this.CONSTANTS.NUMBER_BINARY + ")";
  },

  switch: function() {
    var result = "";
    do {
      result += " /" + this.RND.r36(this.RND.rarg(1, 1, 1, 1, 1, 2, 2, 3)).toLowerCase();
    } while (this.RND.rbool());
    return result.trimStart();
  },

  ////  HELPERS   ////

  RND: {
    //  Returns n * log n
    nlogn: function(n) {
      return n * Math.log(n);
    },

    //  Random integer between min and max
    //  Random integer between 0 and min
    rint: function(min, max) {
      if (arguments.length === 1) {
        max = 0;
      }
      return Math.min(min, max) + Math.floor(Math.random() * Math.abs(min - max));
    },

    //  Backward compatility
    //  Calls rint(min,max)
    rnd: function(min, max) {
      return this.rint.apply(null, arguments);
    },

    //  Random float between min and max
    //  Random float between 0 and min
    //  Random float between 0 and 1
    rdec: function(min, max) {
      if (arguments.length < 2) {
        max = 0;
      }
      if (arguments.length < 1) {
        min = 1;
      }
      return Math.min(min, max) + Math.random() * Math.abs(min - max);
    },

    rper: function(digits) {
      if (arguments.length == 0) {
        digits = 1;
      }
      return (Math.random() * 100).toFixed(digits);
    },

    //  Random boolean value (true/false)
    //  Random selection of the two parameterse (a/b)
    rbool: function(a, b) {
      if (arguments.length > 0) {
        if (b === undefined) {
          b = "";
        }
        return this.rbool() ? a : b;
      }
      return this.rint(0, 2) === 0;
    },

    //  Random element from the array
    rarr: function(array) {
      return array[this.rint(0, array.length)];
    },

    rarg: function() {
      if (arguments === undefined || arguments.length === 0) {
        return null;
      }
      var index = this.rint(arguments.length);
      return arguments[index];
    },

    //  Random binary number from 0 to value
    //  Random binary number from 0 to 256 (0 to 11111111)
    //  Pad result to indicated digits
    rbin: function(max, digits) {
      if (arguments.length < 2) {
        digits = 8;
      }
      if (arguments.length < 1) {
        max = Math.pow(2, digits);
      }
      var result = this.rint(0, max);
      return this.toBinary(result, digits);
    },

    //  Retruns 2 raised to the power of (random value from 0 to max)
    r2n: function(max) {
      if (arguments.length === 0) {
        max = 8;
      }
      return Math.pow(2, this.rnd(0, max)).toString();
    },

    //  Random hex number from 0 to value
    //  Random hex number from 0 to 256 (0x0000 to 0x0100)
    //  Pad result to indicated digits
    rhex: function(max, digits) {
      if (arguments.length < 2) {
        digits = 2;
      }
      if (arguments.length < 1) {
        max = 256;
      }
      var result = this.rint(0, max);
      return this.toHex(result, digits);
    },

    //  Random alpha string of length n
    ralpha: function(n) {
      if (!n) {
        n = 1;
      }
      var result = "";
      for (var i = 0; i < n; i++) {
        result += String.fromCharCode("A".charCodeAt(0) + this.rnd(0, 26));
      }
      return result;
    },

    r36: function(n) {
      if (!n) {
        n = 1;
      }
      var result = "";
      for (var i = 0; i < n; i++) {
        var r = this.rint(36);
        if (r < 26) {
          result += String.fromCharCode("A".charCodeAt(0) + r);
        } else {
          result += r - 26;
        }
      }
      return result;
    },

    rnorm: function(mean, sd) {
      var fidelity = 15;
      var result = 0;
      for (var i = 0; i < fidelity; i++) {
        result += this.rdec(-1, 1);
      }
      result /= fidelity;

      var _mean = 0,
        _sd = 1;

      if (arguments.length > 0) {
        _mean = mean;
      }

      if (arguments.length > 1) {
        _sd = sd;
      }

      return result * _sd + _mean;
    },

    //  Converts the parameter (assumed to be base 10 number)
    //  to a binary number and pads length to digits.
    toBinary: function(value, digits) {
      if (!digits) {
        digits = 0;
      }
      return value.toString(2).padStart(digits, 0);
    },

    //  Converts the parameter (assumed to be base 10 number)
    //  to a hexadecimal number and pads length to digits.
    toHex: function(value, digits) {
      if (!digits) {
        digits = 4;
      }
      return "0x" + value.toString(16).padStart(digits, 0);
    },
  },
};

export const createGenerator = ({ onCommand = () => {}, speed = 1 }) => {
  JargonGenerator.Init();
  let timeout;
  let remaining;
  let delay;
  let startTime;
  let started = false;
  let paused = false;

  const triggerAndSchedlue = () => {
    startTime = Date.now();
    const cmd = JargonGenerator.Cmd();
    onCommand(JargonGenerator.CONSTANTS.PROMPT + cmd);
    delay =
      (1 / (speed !== 0 ? speed : 0.00000001)) *
      JargonGenerator.RND.rnd(2, Math.max(2.5, JargonGenerator.RND.nlogn(cmd.length))) *
      7.5;
    timeout = setTimeout(triggerAndSchedlue, delay);
  };

  const destroy = () => clearTimeout(timeout);
  const start = () => {
    started = true;
    triggerAndSchedlue();
  };

  const pause = () => {
    if (!started) {
      return;
    }
    paused = true;
    clearTimeout(timeout);
    remaining = startTime + delay - Date.now();
  };

  const resume = () => {
    if (!paused) {
      return;
    }
    paused = false;
    timeout = setTimeout(triggerAndSchedlue, remaining);
  };

  return {
    start,
    destroy,
    pause,
    resume,
  };
};
