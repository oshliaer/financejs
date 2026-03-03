import { expect, test } from "vitest";
import { rate } from "../src/rate.js";

/** @type {[number, number, number, number | undefined, 0 | 1 | undefined, number | undefined, number][]} */
const rateSuccessCases = [];
/** @type {[number, number, number, number | undefined, 0 | 1 | undefined, number | undefined][]} */
const rateErrorCases = [];

{
  /** @param {number} nper @param {number} pmt @param {number} pv @param {number} [fv] @param {0 | 1} [type] @param {number} [guess] */
  const captureRate = (nper, pmt, pv, fv, type, guess) => [
    nper,
    pmt,
    pv,
    fv,
    type,
    guess,
  ];
  /** @param {any} actual */
  const captureExpect = (actual) => ({
    /** @param {number} expected @param {number} [_precision] */
    toBeCloseTo(expected, _precision) {
      if (typeof actual === "function") {
        throw new TypeError("Expected value comparison capture.");
      }

      const [nper, pmt, pv, fv, type, guess] =
        /** @type {[number, number, number, number | undefined, 0 | 1 | undefined, number | undefined]} */ (
          actual
        );
      rateSuccessCases.push([nper, pmt, pv, fv, type, guess, expected]);
    },
    /** @param {unknown} _expectedError */
    toThrow(_expectedError) {
      if (typeof actual !== "function") {
        throw new TypeError("Expected throw capture.");
      }

      const [nper, pmt, pv, fv, type, guess] =
        /** @type {[number, number, number, number | undefined, 0 | 1 | undefined, number | undefined]} */ (
          actual()
        );
      rateErrorCases.push([nper, pmt, pv, fv, type, guess]);
    },
  });

  (function (expect, rate) {
    expect(rate(60, 500, -25000)).toBeCloseTo(0.00618341316125388, 8);
    expect(rate(312, 5113, -1501935, 2368, 0, 0.198)).toBeCloseTo(
      0.000398266895514718,
      8,
    );
    expect(rate(276, 1991, -446386, 3135, 1, 0.047)).toBeCloseTo(
      0.00160511310935709,
      8,
    );
    expect(rate(223, 13549, -2888300, 1933, 1, 0.092)).toBeCloseTo(
      0.00041475010529662,
      8,
    );
    expect(rate(126, 20238, -2140351, 7442, 1, 0.081)).toBeCloseTo(
      0.00293553013208551,
      8,
    );
    expect(rate(214, 21362, -4182079, 7276, 0, 0.141)).toBeCloseTo(
      0.000854961958127848,
      8,
    );
    expect(rate(180, 23960, -3649167, 1522, 0, 0.116)).toBeCloseTo(
      0.00190536379381439,
      8,
    );
    expect(rate(164, 15459, -2192401, 775, 0, 0.108)).toBeCloseTo(
      0.00181051005231611,
      8,
    );
    expect(rate(217, 8596, -1734632, 3621, 1, 0.136)).toBeCloseTo(
      0.000698349389820266,
      8,
    );
    expect(rate(311, 15144, -4029036, 383, 1, 0.089)).toBeCloseTo(
      0.00103602795818093,
      8,
    );
    expect(rate(276, 7505, -2015447, 9386, 0, 0.057)).toBeCloseTo(
      0.000230511998597642,
      8,
    );
    expect(rate(11, 22492, -229079, 5524, 1, 0.144)).toBeCloseTo(
      0.0199023449392075,
      8,
    );
    expect(rate(177, 8311, -1384409, 1432, 1, 0.049)).toBeCloseTo(
      0.000707836232406421,
      8,
    );
    expect(rate(198, 19389, -3074559, 9872, 0, 0.115)).toBeCloseTo(
      0.00234465904271924,
      8,
    );
    expect(rate(200, 5958, -1039506, 4342, 1, 0.126)).toBeCloseTo(
      0.0014395827447051,
      8,
    );
    expect(rate(138, 21076, -2432309, 6287, 1, 0.036)).toBeCloseTo(
      0.00272546449141395,
      8,
    );
    expect(rate(330, 15044, -4486044, 8313, 0, 0.148)).toBeCloseTo(
      0.000632614705765373,
      8,
    );
    expect(rate(331, 7598, -2356970, 5476, 0, 0.15)).toBeCloseTo(
      0.000407683800118725,
      8,
    );
    expect(rate(134, 15758, -1895172, 4934, 0, 0.069)).toBeCloseTo(
      0.00166475629935309,
      8,
    );
    expect(rate(33, 5147, -146194, 1578, 0, 0.002)).toBeCloseTo(
      0.00957576368703414,
      8,
    );
    expect(rate(344, 17589, -5523277, 649, 0, 0.063)).toBeCloseTo(
      0.000537595095864107,
      8,
    );
    expect(rate(22, 5932, -123577, 6580, 0, 0.086)).toBeCloseTo(
      0.00881917963733835,
      8,
    );
    expect(rate(155, 20842, -3102968, 4446, 1, 0.137)).toBeCloseTo(
      0.000544239861100565,
      8,
    );
    expect(rate(285, 1216, -321116, 8776, 1, 0.023)).toBeCloseTo(
      0.000708268029668575,
      8,
    );
    expect(rate(336, 9961, -3108668, 9163, 0, 0.078)).toBeCloseTo(
      0.000459213529829167,
      8,
    );
    expect(rate(122, 9812, -1004763, 5725, 0, 0.154)).toBeCloseTo(
      0.00300716250813055,
      8,
    );
    expect(rate(199, 16086, -2994548, 6580, 1, 0.187)).toBeCloseTo(
      0.000701558154195127,
      8,
    );
    expect(rate(99, 10266, -1004920, 7226, 0, 0.027)).toBeCloseTo(
      0.000366219744423884,
      8,
    );
    expect(rate(26, 7904, -184960, 329, 1, 0.007)).toBeCloseTo(
      0.00874829226787922,
      8,
    );
    expect(rate(243, 9330, -1970357, 5884, 0, 0.157)).toBeCloseTo(
      0.00119814752062934,
      8,
    );
    expect(rate(103, 11912, -1066742, 0, 1, 0.07)).toBeCloseTo(
      0.00281578100633434,
      8,
    );
    expect(rate(86, 17673, -1474605, 1223, 1, 0.007)).toBeCloseTo(
      0.000734028318250167,
      8,
    );
    expect(rate(4, 1727, -5869, 2511, 0, 0.05)).toBeCloseTo(
      0.185406220575096,
      8,
    );
    expect(rate(287, 4151, -1060234, 2650, 1, 0.168)).toBeCloseTo(
      0.000846548723340286,
      8,
    );
    expect(rate(302, 11603, -3286101, 7871, 0, 0.189)).toBeCloseTo(
      0.000442844796976862,
      8,
    );
    expect(rate(243, 2170, -526404, 7031, 1, 0.067)).toBeCloseTo(
      0.000122376059185961,
      8,
    );
    expect(rate(225, 4009, -734378, 6774, 0, 0.2)).toBeCloseTo(
      0.00194474982177568,
      8,
    );
    expect(rate(2, 24990, -44133, 5111, 1, 0.181)).toBeCloseTo(
      0.485204835437238,
      8,
    );
    expect(rate(273, 23745, -6205929, 4999, 1, 0.064)).toBeCloseTo(
      0.000328398503338196,
      8,
    );
    expect(rate(99, 15832, -1299562, 6818, 0, 0.059)).toBeCloseTo(
      0.00395329828164559,
      8,
    );
    expect(rate(220, 24954, -4675157, 9526, 0, 0.199)).toBeCloseTo(
      0.00150966102259892,
      8,
    );
    expect(rate(273, 16430, -3632791, 6724, 1, 0.083)).toBeCloseTo(
      0.00161997024323132,
      8,
    );
    expect(rate(296, 22275, -5421542, 6321, 1, 0.097)).toBeCloseTo(
      0.00137991050304564,
      8,
    );
    expect(rate(139, 23048, -2671570, 7518, 0, 0.193)).toBeCloseTo(
      0.00271016227878625,
      8,
    );
    expect(rate(79, 2121, -144517, 1507, 1, 0.039)).toBeCloseTo(
      0.00410778535283133,
      8,
    );
    expect(rate(17, 16761, -284078, 2694, 1, 0.077)).toBeCloseTo(
      0.00154228528490546,
      8,
    );
    expect(rate(200, 12278, -2010763, 613, 0, 0.19)).toBeCloseTo(
      0.00206310002884818,
      8,
    );
    expect(rate(295, 24390, -6593028, 0, 1, 0.168)).toBeCloseTo(
      0.000603586362696535,
      8,
    );
    expect(rate(140, 18819, -2303179, 6159, 0, 0.069)).toBeCloseTo(
      0.00198347493026944,
      8,
    );
    expect(rate(176, 4961, -863645, 13, 1, 0.065)).toBeCloseTo(
      0.000125316577590557,
      8,
    );
    expect(rate(178, 2843, -422325, 8178, 0, 0.022)).toBeCloseTo(
      0.00224350641577668,
      8,
    );
    expect(rate(358, 19887, -6295746, 3244, 1, 0.05)).toBeCloseTo(
      0.000706304002422249,
      8,
    );
    expect(rate(96, 21424, -1860660, 6952, 1, 0.181)).toBeCloseTo(
      0.00221461071778762,
      8,
    );
    expect(rate(111, 12246, -1208646, 2746, 1, 0.028)).toBeCloseTo(
      0.00221639698498289,
      8,
    );
    expect(rate(292, 16874, -4640236, 6337, 0, 0.051)).toBeCloseTo(
      0.000422262379056628,
      8,
    );
    expect(rate(278, 5183, -1345769, 1910, 1, 0.144)).toBeCloseTo(
      0.000508056995605632,
      8,
    );
    expect(rate(177, 6605, -1092172, 2425, 1, 0.036)).toBeCloseTo(
      0.000805162847578353,
      8,
    );
    expect(rate(29, 8774, -232902, 6774, 0, 0.058)).toBeCloseTo(
      0.0076356150275949,
      8,
    );
    expect(rate(222, 6570, -1440544, 9778, 1, 0.178)).toBeCloseTo(
      0.000172237006664784,
      8,
    );
    expect(rate(355, 18057, -5696196, 7741, 0, 0.009)).toBeCloseTo(
      0.000683459074363383,
      8,
    );
    expect(rate(308, 11291, -3470454, 0, 1, 0.084)).toBeCloseTo(
      1.34577251657501e-5,
      8,
    );
    expect(rate(224, 1860, -350204, 7664, 1, 0.01)).toBeCloseTo(
      0.0017503573417316,
      8,
    );
    expect(rate(218, 5718, -1106688, 6454, 1, 0.096)).toBeCloseTo(
      0.00116381496000191,
      8,
    );
    expect(rate(34, 20800, -640522, 3092, 1, 0.043)).toBeCloseTo(
      0.00637600284560152,
      8,
    );
    expect(rate(274, 16705, -4536671, 8707, 0, 0.125)).toBeCloseTo(
      7.84530576385179e-5,
      8,
    );
    expect(rate(102, 22496, -2008279, 4146, 0, 0.172)).toBeCloseTo(
      0.00268237833127317,
      8,
    );
    expect(rate(298, 23953, -6626784, 9002, 0, 0.05)).toBeCloseTo(
      0.000511479154773292,
      8,
    );
    expect(rate(168, 17160, -2451409, 9530, 1, 0.06)).toBeCloseTo(
      0.00203498648437955,
      8,
    );
    expect(rate(150, 2571, -334290, 1076, 0, 0.068)).toBeCloseTo(
      0.00197499650556869,
      8,
    );
    expect(rate(82, 19136, -1324237, 5946, 1, 0.118)).toBeCloseTo(
      0.00441103998256208,
      8,
    );
    expect(rate(245, 10758, -2112477, 318, 0, 0.007)).toBeCloseTo(
      0.0018726933690712,
      8,
    );
    expect(rate(39, 16533, -530409, 0, 0, 0.05)).toBeCloseTo(
      0.0101362834500316,
      8,
    );
    expect(rate(317, 14418, -4248981, 2071, 0, 0.146)).toBeCloseTo(
      0.000467271056656737,
      8,
    );
    expect(rate(263, 15443, -4010723, 7410, 1, 0.055)).toBeCloseTo(
      0.000110039707289779,
      8,
    );
    expect(rate(207, 18694, -3812444, 7914, 1, 0.159)).toBeCloseTo(
      0.000164599539324632,
      8,
    );
    expect(rate(162, 6546, -936454, 9829, 0, 0.167)).toBeCloseTo(
      0.00166295784573264,
      8,
    );
    expect(rate(215, 20521, -4270566, 5711, 1, 0.188)).toBeCloseTo(
      0.000318084395048042,
      8,
    );
    expect(rate(147, 24624, -3611509, 2972, 1, 0.088)).toBeCloseTo(
      4.23702182303982e-5,
      8,
    );
    expect(rate(190, 1996, -333318, 9378, 1, 0.187)).toBeCloseTo(
      0.0016301344362312,
      8,
    );
    expect(rate(285, 1429, -374184, 562, 1, 0.163)).toBeCloseTo(
      0.000614663464400106,
      8,
    );
    expect(rate(135, 18521, -2097734, 4981, 0, 0.081)).toBeCloseTo(
      0.00269031322642675,
      8,
    );
    expect(rate(197, 3032, -534447, 5740, 0, 0.07)).toBeCloseTo(
      0.0012342096488345,
      8,
    );
    expect(rate(29, 14238, -352866, 3315, 0, 0.011)).toBeCloseTo(
      0.0112854557669366,
      8,
    );
    expect(rate(196, 23909, -3813108, 1284, 0, 0.004)).toBeCloseTo(
      0.00217422329200727,
      8,
    );
    expect(rate(68, 23751, -1419023, 4026, 0, 0.053)).toBeCloseTo(
      0.00390656064241712,
      8,
    );
    expect(rate(83, 13770, -957714, 1891, 0, 0.065)).toBeCloseTo(
      0.00438192844551867,
      8,
    );
    expect(rate(329, 6925, -2146036, 0, 1, 0.193)).toBeCloseTo(
      0.0003685458175287,
      8,
    );
    expect(rate(283, 8736, -2284339, 1256, 0, 0.068)).toBeCloseTo(
      0.000567843069743539,
      8,
    );
    expect(rate(90, 11767, -979823, 7750, 1, 0.046)).toBeCloseTo(
      0.00192680878928167,
      8,
    );
    expect(rate(93, 11249, -911497, 8312, 0, 0.033)).toBeCloseTo(
      0.00315805963348429,
      8,
    );
    expect(rate(166, 17474, -2331611, 581, 1, 0.118)).toBeCloseTo(
      0.00275822654220477,
      8,
    );
    expect(rate(235, 10816, -2044793, 3455, 0, 0.109)).toBeCloseTo(
      0.00192683328162759,
      8,
    );
    expect(rate(241, 1447, -348427, 804, 0, 0.006)).toBeCloseTo(
      2.60992548339763e-5,
      8,
    );
    expect(rate(12, 16747, -163135, 9594, 0, 0.17)).toBeCloseTo(
      0.0400297812717098,
      8,
    );
    expect(rate(308, 2803, -810600, 8122, 0, 0.168)).toBeCloseTo(
      0.000469983346064798,
      8,
    );
    expect(rate(170, 6479, -998907, 9141, 0, 0.013)).toBeCloseTo(
      0.00125239919399876,
      8,
    );
    expect(rate(204, 24311, -4417707, 8616, 0, 0.054)).toBeCloseTo(
      0.00116721529757816,
      8,
    );
    expect(rate(38, 10106, -353349, 443, 1, 0.032)).toBeCloseTo(
      0.00463765117638594,
      8,
    );
    expect(rate(299, 23116, -6874901, 1331, 0, 0.055)).toBeCloseTo(
      3.68849122449443e-5,
      8,
    );
    expect(rate(194, 12560, -2231576, 8557, 0, 0.067)).toBeCloseTo(
      0.000949357454944168,
      8,
    );
    expect(rate(154, 10955, -1585617, 5692, 0, 0.001)).toBeCloseTo(
      0.000850529280201041,
      8,
    );
    expect(rate(274, 13347, -3279101, 8840, 1, 0.154)).toBeCloseTo(
      0.000831133684832732,
      8,
    );
    expect(rate(264, 8526, -1940591, 6081, 0, 0.033)).toBeCloseTo(
      0.00116729444344216,
      8,
    );
    expect(rate(132, 6746, -871966, 7825, 1, 0.052)).toBeCloseTo(
      0.000452613072577277,
      8,
    );
    expect(rate(201, 18794, -3204422, 0, 1, 0.045)).toBeCloseTo(
      0.00169523874360444,
      8,
    );
    expect(rate(281, 12738, -2958062, 7420, 0, 0.044)).toBeCloseTo(
      0.00141149645443432,
      8,
    );
    expect(rate(335, 2279, -638649, 1207, 0, 0.183)).toBeCloseTo(
      0.0011048595374237,
      8,
    );
    expect(rate(318, 24054, -6660746, 4334, 1, 0.004)).toBeCloseTo(
      0.000897856990200117,
      8,
    );
    expect(rate(272, 19121, -4214494, 9999, 1, 0.155)).toBeCloseTo(
      0.00162449098764767,
      8,
    );
    expect(rate(156, 3361, -455469, 7011, 0, 0.107)).toBeCloseTo(
      0.00199083999331736,
      8,
    );
    expect(rate(250, 11048, -2645055, 1043, 0, 0.119)).toBeCloseTo(
      0.000350211028188046,
      8,
    );
    expect(rate(343, 5509, -1793411, 1349, 1, 0.098)).toBeCloseTo(
      0.000312287287048883,
      8,
    );
    expect(rate(148, 10148, -1238183, 4836, 1, 0.025)).toBeCloseTo(
      0.00276046868694027,
      8,
    );
    expect(rate(18, 1513, -23074, 2530, 1, 0.196)).toBeCloseTo(
      0.0291750575562952,
      8,
    );
    expect(rate(3, 13327, -35170, 8253, 1, 0.057)).toBeCloseTo(
      0.301775339308948,
      8,
    );
    expect(rate(40, 23011, -850458, 8953, 1, 0.047)).toBeCloseTo(
      0.00458881338534384,
      8,
    );
    expect(rate(162, 10085, -1611330, 8017, 1, 0.156)).toBeCloseTo(
      0.000232231763828347,
      8,
    );
    expect(rate(250, 18383, -4170000, 4777, 1, 0.04)).toBeCloseTo(
      0.00080214926621778,
      8,
    );
    expect(rate(295, 3356, -809929, 9797, 1, 0.194)).toBeCloseTo(
      0.0014738436492741,
      8,
    );
    expect(rate(333, 19421, -5951216, 0, 1, 0.01)).toBeCloseTo(
      0.000508195140731337,
      8,
    );
    expect(rate(358, 18653, -6283186, 1031, 0, 0.017)).toBeCloseTo(
      0.000343697766991371,
      8,
    );
    expect(rate(63, 22743, -1285375, 7580, 0, 0.03)).toBeCloseTo(
      0.00361422142500317,
      8,
    );
    expect(rate(148, 2248, -298202, 6733, 0, 0.059)).toBeCloseTo(
      0.0017444982670201,
      8,
    );
    expect(rate(238, 14048, -2790389, 7945, 0, 0.128)).toBeCloseTo(
      0.00157987893347862,
      8,
    );
    expect(rate(131, 5974, -688583, 3871, 1, 0.167)).toBeCloseTo(
      0.00208472130286573,
      8,
    );
    expect(rate(212, 15608, -2904479, 1849, 0, 0.108)).toBeCloseTo(
      0.00125715130764662,
      8,
    );
    expect(rate(78, 16983, -1210806, 329, 0, 0.047)).toBeCloseTo(
      0.00231826891079059,
      8,
    );
    expect(rate(138, 16963, -2211253, 4960, 0, 0.029)).toBeCloseTo(
      0.000857215756588474,
      8,
    );
    expect(rate(140, 8648, -1093098, 3862, 0, 0.19)).toBeCloseTo(
      0.00151801334664837,
      8,
    );
    expect(rate(66, 7039, -450186, 8119, 1, 0.132)).toBeCloseTo(
      0.00148864318927152,
      8,
    );
    expect(rate(334, 21773, -6495786, 7652, 0, 0.09)).toBeCloseTo(
      0.000693187549242507,
      8,
    );
    expect(rate(49, 7838, -364485, 2210, 1, 0.103)).toBeCloseTo(
      0.00243237609252972,
      8,
    );
    expect(rate(260, 3213, -805840, 6932, 0, 0.106)).toBeCloseTo(
      0.000339006246727423,
      8,
    );
    expect(rate(175, 13484, -2266292, 4717, 0, 0.076)).toBeCloseTo(
      0.000484238226264152,
      8,
    );
    expect(rate(124, 10818, -1143520, 7239, 0, 0.162)).toBeCloseTo(
      0.00270502567772839,
      8,
    );
    expect(rate(208, 1087, -181753, 4724, 0, 0.091)).toBeCloseTo(
      0.00234008359704698,
      8,
    );
    expect(rate(307, 1643, -452626, 9865, 0, 0.092)).toBeCloseTo(
      0.000831825949827345,
      8,
    );
    expect(rate(240, 13862, -3182541, 0, 0, 0.19)).toBeCloseTo(
      0.000370898654357767,
      8,
    );
    expect(rate(104, 22230, -2222989, 1619, 1, 0.104)).toBeCloseTo(
      0.000780335445768033,
      8,
    );
    expect(rate(64, 7317, -403952, 0, 0, 0.169)).toBeCloseTo(
      0.00467217191171349,
      8,
    );
    expect(rate(184, 24557, -4237329, 6730, 1, 0.018)).toBeCloseTo(
      0.000725698341393931,
      8,
    );
    expect(rate(213, 5529, -967194, 0, 0, 0.095)).toBeCloseTo(
      0.00190596968998648,
      8,
    );
    expect(rate(267, 19450, -4405068, 524, 0, 0.002)).toBeCloseTo(
      0.0012650748178011,
      8,
    );
    expect(rate(236, 24246, -5609652, 0, 0, 0.112)).toBeCloseTo(
      0.000167988559008855,
      8,
    );
    expect(rate(323, 19394, -5622392, 9624, 1, 0.136)).toBeCloseTo(
      0.000693154716118348,
      8,
    );
    expect(rate(323, 24515, -7388465, 2226, 0, 0.167)).toBeCloseTo(
      0.000434313953903733,
      8,
    );
    expect(rate(230, 4072, -770328, 3328, 1, 0.044)).toBeCloseTo(
      0.00179497243795338,
      8,
    );
    expect(rate(302, 19266, -5801819, 8113, 1, 0.085)).toBeCloseTo(
      2.81241798927375e-5,
      8,
    );
    expect(rate(130, 14003, -1516279, 4875, 1, 0.17)).toBeCloseTo(
      0.00296808568570917,
      8,
    );
    expect(rate(300, 13403, -3355734, 858, 0, 0.195)).toBeCloseTo(
      0.00124183794007236,
      8,
    );
    expect(rate(213, 5529, -967194)).toBeCloseTo(0.00190596968998648, 8);
    expect(rate(267, 19450, -4405068, 524)).toBeCloseTo(0.0012650748178011, 8);
    expect(rate(236, 24246, -5609652)).toBeCloseTo(0.000167988559008855, 8);
    expect(rate(323, 19394, -5622392, 9624, 1)).toBeCloseTo(
      0.000693154716118348,
      8,
    );
    expect(rate(323, 24515, -7388465, 2226)).toBeCloseTo(
      0.000434313953903733,
      8,
    );
    expect(rate(230, 4072, -770328, 3328, 1)).toBeCloseTo(
      0.00179497243795338,
      8,
    );
    expect(rate(302, 19266, -5801819, 8113, 1)).toBeCloseTo(
      2.81241798927375e-5,
      8,
    );
    expect(rate(130, 14003, -1516279, 4875, 1)).toBeCloseTo(
      0.00296808568570917,
      8,
    );
    expect(rate(300, 13403, -3355734, 858)).toBeCloseTo(0.00124183794007236, 8);
    expect(() => rate(-1, 333, -1000, 22)).toThrow(RangeError);
  })(captureExpect, captureRate);
}

test.each(rateSuccessCases)(
  "rate() matches Excel to 8 decimal places",
  (nper, pmt, pv, fv, type, guess, expected) => {
    expect(rate(nper, pmt, pv, fv, type, guess)).toBeCloseTo(expected, 8);
  },
);

test.each(rateErrorCases)(
  "rate() throws RangeError for invalid inputs",
  (nper, pmt, pv, fv, type, guess) => {
    expect(() => rate(nper, pmt, pv, fv, type, guess)).toThrow(RangeError);
  },
);
