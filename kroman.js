(function(exports){
  'use strict';

  var kromanData = {
    ga: 0xac00,
    hih: 0xd7a3,
    headi: 588,
    bodyi: 28,
    taili: 1,
    headj: {
      0: "g",
      1: "gg",
      2: "n",
      3: "d",
      4 : "dd",
      5 : "r",
      6 : "m",
      7 : "b",
      8 : "bb",
      9 : "s",
      10 : "ss",
      11 : "",
      12 : "j",
      13 : "jj",
      14 : "c",
      15 : "k",
      16 : "t",
      17 : "p",
      18 : "h"
    },
    bodyj: {
      0 : "a",
      1 : "ae",
      2 : "ya",
      3 : "yae",
      4 : "eo",
      5 : "e",
      6 : "yeo",
      7 : "ye",
      8 : "o",
      9 : "wa",
      10 : "wae",
      11 : "oe",
      12 : "yo",
      13 : "u",
      14 : "weo",
      15 : "we",
      16 : "wi",
      17 : "yu",
      18 : "eu",
      19 : "eui",
      20 : "i"
    },
    tailj: {
      0 : "",
      1 : "g",
      2 : "gg",
      3 : "gs",
      4 : "n",
      5 : "nj",
      6 : "nh",
      7 : "d",
      8 : "r",
      9 : "rk",
      10 : "rm",
      11 : "rb",
      12 : "rs",
      13 : "rt",
      14 : "rp",
      15 : "rh",
      16 : "m",
      17 : "b",
      18 : "bs",
      19 : "s",
      20 : "ss",
      21 : "ng",
      22 : "j",
      23 : "c",
      24 : "k",
      25 : "t",
      26 : "p",
      27 : "h"
    }
  };

  exports.parse = function(text) {
    var retval = "";
    var lastCharIsHangul = false;
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      if ((charCode >= kromanData.ga) && (charCode <= kromanData.hih)) {
        var head = Math.floor((charCode - kromanData.ga) / kromanData.headi);
        var headl = Math.floor((charCode - kromanData.ga) % kromanData.headi);
        var body = Math.floor(headl / kromanData.bodyi);
        var tail = Math.floor(headl % kromanData.bodyi);
        if (lastCharIsHangul) {
          retval += "-";
        }
        retval += (kromanData.headj[head] + kromanData.bodyj[body] 
          + kromanData.tailj[tail]);
        lastCharIsHangul = true;
      } else {
        lastCharIsHangul = false;
        retval += text[i];
      }
    };
    return retval;
  };

})(typeof exports === 'undefined' ? this['kroman'] = {} : exports);