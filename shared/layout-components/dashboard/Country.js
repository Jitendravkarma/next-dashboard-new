const countryList = [
    {cnt: "Argentina", reg: /\b(?:54911\d{8}|911\d{8})\b/g, diffReg:/^(?:54|0)?(9\d{9}|15\d{8})$/,  shortCode: "ARG", countryCode: "54"},
    {cnt: "Austria", reg: /\b(?:436[5-9][0-9]\d{7}|6[5-9][0-9]\d{7})\b/g, diffReg: /^(?:43|0)?([1-9]\d{9})$/, shortCode: "AUT", countryCode: "43"},
    {cnt: "Australia", reg: /\b(?:61[4]\d{8}|[4]\d{8})\b/g, diffReg: /^(?:61|0)?([2-4]\d{8})$/, shortCode: "AUS", countryCode: "61"},
    {cnt: "Afghanistan", reg: /\b(?:937[0-9]\d{7}|7[0-9]\d{7})\b/g, diffReg: /^(?:93|0)?(7[1-9]\d{7})$/, shortCode: "AFG", countryCode: "93"},
    {cnt: "Albania", reg: /\b(?:3556[7-9]\d{7}|6[7-9]\d{7})\b/g, diffReg: /^(?:355|0)?(6[7-9]\d{6,7})$/, shortCode: "ALB", countryCode: "355"},
    {cnt: "Algeria", reg: /\b(?:213[5-7,9]\d{8}|[5-7,9]\d{8})\b/g, diffReg: /^(?:213|0)?([5-9]\d{7,8})$/, shortCode: "DZA", countryCode: "213"},
    {cnt: "Andorra", reg: /\b(?:3763\d{5}|3\d{5})\b/g, shortCode: "AND", diffReg: /^(?:376|0)?([3]\d{5})$/, countryCode: "376"},
    {cnt: "Angola", reg: /\b(?:2449[1-3]\d{7}|9[1-3]\d{7})\b/g, diffReg: /^(?:244|0)?(9[1-3]\d{7})$/, shortCode: "AGO", countryCode: "244"},
    {cnt: "Armenia", reg: /\b(?:374[4,5,7,9][1,3,4,5,7-9]\d{6}|[4,5,7,9][1,3,4,5,7-9]\d{6})\b/g, diffReg: /^(?:374|0)?(9[4,5,7,9][1,3-5,7-9]\d{5})$/, shortCode: "ARM", countryCode: "374"},
    {cnt: "Azerbaijan", reg: /\b(?:994[4,5,7,9][0,1,5,7,9]\d{7}|[4,5,7,9][0,1,5,7,9]\d{7})\b/g, diffReg: /^(?:994|0)?([1,5,7,9][0,1,5,7,9]\d{7})$/, shortCode: "AZE", countryCode: "994"},
    {cnt: "Bahrain", reg: /\b(?:9733[1-9]\d{6}|97366\d{6}|3[1-9]\d{6}|66\d{6})\b/g, diffReg: /^(?:973|0)?([3,6][1,3,6,9]\d{7}|[3,6][2,4-9][0,1,3-9]\d{6})$/, shortCode: "BHR", countryCode: "973"},
    {cnt: "Bahamas", reg: /\b(?:124[2]\d{7}|24[2]\d{7})\b/g, diffReg: /^(?:1|0)?(242[3-5][5]\d{5})$/, shortCode: "BHS", countryCode: "1242"},
    {cnt: "Bangladesh", reg: /\b(?:8801[3-9]\d{8}|1[3-9]\d{8})\b/g, diffReg: /^(?:880|0)?(1[3-9]\d{8})$/, shortCode: "BGD", countryCode: "880"},
    {cnt: "Barbados", reg: /\b(?:1246\d{7}|246\d{7})\b/, diffReg: /^(?:1|0)?(246\d{7})$/, shortCode: "BRB", countryCode: "1246"},
    {cnt: "Belarus", reg: /\b(?:375[2-4][3-5,9]\d{7}|[2-4][3-5,9]\d{7})\b/g, diffReg: /^(?:375|0)?([2-4][3-5]\d{7}|29[1-9]\d{6})$/, shortCode: "BLR", countryCode: "375"},
    {cnt: "Belgium", reg: /\b(?:324[5-9]\d{6}|4[5-9]\d{6})\b/g, diffReg: /^(?:32|0)?(4[5-9]\d{7})$/, shortCode: "BEL", countryCode: "32"},
    {cnt: "Belize", reg: /\b(?:5016\d{6}|6\d{6})\b/g, diffReg: /^(?:501|0)?(6\d{6})$/, shortCode: "BLZ", countryCode: "501"},
    {cnt: "Benin", reg: /\b(?:2299\d{7}|9\d{7})\b/g, diffReg: /^(?:229|0)?(9\d{6,8})$/, shortCode: "BEN", countryCode: "229"},
    {cnt: "Bhutan", reg: /\b(?:9751[7]\d{6}|1[7]\d{6})\b/g, diffReg: /^(?:975|0)?(17\d{6})$/, shortCode: "BTN", countryCode: "975"},
    {cnt: "Bolivia", reg: /\b(?:591[6-7]\d{7}|[6-7]\d{7})\b/g, diffReg: /^(?:591|0)?([6-7]\d{7})$/, shortCode: "BOL", countryCode: "591"},
    {cnt: "Bonaire", reg: /\b(?:5997\d{6}|7\d{6})\b/g, diffReg: /^(?:599|0)?(7\d{6})$/, shortCode: "BOL", countryCode: "591"},
    {cnt: "Bosnia and Herzegovina", reg: /\b(?:3876[0,2-6,9]\d{6}|6[0,2-6,9]\d{6})\b/g, diffReg: /^(?:387|0)?(6[0-7]\d{6})$/, shortCode: "BIH", countryCode: "387"},
    {cnt: "Botswana", reg: /\b(?:2677\d{7}|7\d{7})\b/g, diffReg: /^(?:267|0)?(7\d{6})$/, shortCode: "BWA", countryCode: "267"},
    {cnt: "Brazil", reg: /\b(?:55[1-9][1-5,7-9]9[1-9]\d{7}|[1-9][1-5,7-9]9[1-9]\d{7})\b/g, diffReg: /^(?:55|0)?([1-9][1-5,7-9][1-9]\d{8})$/, shortCode: "BRA", countryCode: "55"},
    {cnt: "Brunei", reg: /\b(?:6738\d{6}|8\d{6})\b/g, diffReg: /^(?:673|0)?(8\d{7})$/, shortCode: "BRN", countryCode: "673"},
    {cnt: "Bulgaria", reg: /\b(?:359[4,8-9][7-9]\d{7}|[4,8-9][7-9]\d{7})\b/g, diffReg: /^(?:359|0)?([4,8,9][7-9]\d{7})$/, shortCode: "BGR", countryCode: "359"},
    {cnt: "Burkina Faso", reg: /\b(?:2267[0-2,4,5,7-9]\d{6}|7[0-2,4,5,7-9]\d{6})\b/g, diffReg: /^(?:226|0)?(7[0-9]\d{6})$/, shortCode: "BFA", countryCode: "226"},
    {cnt: "Burundi", reg: /\b(?:2577\d{7}|7\d{7})\b/g, diffReg: /^(?:257|0)?(7\d{6})$/, shortCode: "BDI", countryCode: "257"},
    {cnt: "Cambodia", reg: /\b(?:855[1,6-9][0-3,6-9]\d{6}|[1,6-9][0-3,6-9]\d{6})\b/g, diffReg: /^(?:855|0)?([1,6-9][0-3,6-9]\d{7})$/, shortCode: "KHM", countryCode: "855"},
    {cnt: "Costa Rica", reg: /\b(?:506[6-8]\d{7}|[6-8]\d{7})\b/g, diffReg: /^(?:506|0)?([6-8]\d{7})$/, shortCode: "CRI", countryCode: "506"},
    {cnt: "Cuba", reg: /\b(?:535\d{7}|5\d{7})\b/g, diffReg: /^(?:53|0)?(5\d{7})$/, shortCode: "CUB", countryCode: "53"},
    {cnt: "Curacao", reg: /\b(?:5999\d{7}|9\d{7})\b/g, diffReg: /^(?:599|0)?(9\d{7})$/, shortCode: "CUW", countryCode: "599"},
    {cnt: "Cyprus", reg: /\b(?:3579[4-9]\d{6}|9[4-9]\d{6})\b/g, diffReg: /^(?:357|0)?(9[4-9]\d{6})$/, shortCode: "CYP", countryCode: "357"},
    {cnt: "Czechia (Czech Republic)", reg: /\b(?:420[6-7][0,2,3,7]\d{7}|[6-7][0,2,3,7]\d{7})\b/g, diffReg: /^(?:420|0)?([6-7][0,2,3,7]\d{7}|60[1-8]\d{6})$/, shortCode: "CZE", countryCode: "420"},
    {cnt: "Canada", reg: /\b(?:1[2-9]\d{9}|[2-9]\d{9})\b/g, diffReg: /^(?:1|0)?([2-9][0-9]{2}[0-9]{3}[0-9]{4})$/, shortCode: "CAN", countryCode: "1"},
    {cnt: "Colombia", reg: /\b(?:573[0-2][0-9]\d{7}|3[0-2][0-9]\d{7})\b/g, diffReg: /^(?:57|0)?(3[0-2,5][0-9]\d{7})$/, shortCode: "COL", countryCode: "57"},
    {cnt: "China", reg: /\b(?:862[3-9]\d{8}|861[0-9]\d{8}|2[3-9]\d{8})\b/g, diffReg: /^(?:86|0)?(13\d{9}|14[0,6,8]\d{10}|14[5,7,9]\d{8}|16[1,2,4,7]\d{8}|1[5,7-9]\d{9})$/, shortCode: "CHN", countryCode: "86"},
    {cnt: "Chad", reg: /\b(?:235[6,7,9]\d{7}|[6,7,9]\d{7})\b/g, diffReg: /^(?:235|0)?([6,7,9]\d{7})$/, shortCode: "TCD", countryCode: "235"},
    {cnt: "Croatia", reg: /\b(?:3859[1-9]\d{7}|9[1-9]\d{7})\b/g, diffReg: /^(?:385|0)?(9[1,2,5-9]\d{7})$/, shortCode: "HRV", countryCode: "385"},
    {cnt: "Denmark", reg: /\b(?:452\d{7}|45[3-8][0-3]\d{6}|[3-8][0-3]\d{6}|2\d{7})\b/g, diffReg: /^(?:45|0)?([2-8][0-3]\d{6})$/, shortCode: "DNK", countryCode: "45"},
    {cnt: "Egypt", reg: /\b(?:201[0-5]\d{8}|1[0-5]\d{8})\b/g, diffReg: /^(?:20|0)?(1[0-2,5]\d{8})$/, shortCode: "EGY", countryCode: "20"},
    {cnt: "East Timor", reg: /\b(?:6707[7-8]\d{6}|7[7-8]\d{6})\b/g, diffReg: /^(?:670|0)?(7[7-8]\d{6})$/, shortCode: "TLS", countryCode: "670"},
    {cnt: "Ecuador", reg: /\b(?:5939\d{8}|9\d{8})\b/g, diffReg: /^(?:593|0)?([8-9]\d{8,9})$/, shortCode: "ECU", countryCode: "593"},
    {cnt: "El Salvador", reg: /\b(?:503[6-7]\d{7}|[6-7]\d{7})\b/g, diffReg: /^(?:503|0)?([6-7]\d{7})$/, shortCode: "SLV", countryCode: "503"},
    {cnt: "Equatorial Guinea", reg: /\b(?:240[2,7]\d{8}|[2,7]\d{8})\b/g, diffReg: /^(?:240|0)?([2-7]\d{7})$/, shortCode: "GNQ", countryCode: "240"},
    {cnt: "Estonia", reg: /\b(?:3725[0-9]\d{6}|5[0-9]\d{6})\b/g, diffReg: /^(?:372|0)?(5[1,3-9]\d{6}|5[1-2]\d{5}|5[1,2,5,6][0,4,5,7,8]\d{4})$/, shortCode: "EST", countryCode: "372"},
    {cnt: "Ethiopia", reg: /\b(?:2519\d{8}|9\d{8})\b/g, diffReg: /^(?:251|0)?(9\d{8})$/, shortCode: "ETH", countryCode: "251"},
    {cnt: "Fiji", reg: /\b(?:679[3,7,9]\d{6}|[3,7,9]\d{6})\b/g, diffReg: /^(?:679|0)?(9[2-7]\d{5})$/, shortCode: "FJI", countryCode: "679"},
    {cnt: "Finland", reg: /\b(?:358[4,5][0-9]\d{7}|[4,5][0-9]\d{7})\b/g, diffReg: /^(?:358|0)?(4[0-8]\d{6,7}|)$/, shortCode: "FIN", countryCode: "358"},
    {cnt: "France", reg: /\b(?:33[1-7]\d{8}|337[0-8]\d{7}|7[3-8]\d{7}|6\d{8})\b/g, diffReg: /^(?:33|0)?([6-7]\d{8})$/, shortCode: "FRA", countryCode: "33"},
    {cnt: "Gabon", reg: /\b(?:241[2-7,9]\d{7}|[2-7,9]\d{7})\b/g, diffReg: /^(?:241|0)?([2-7]\d{6})$/, shortCode: "GAB", countryCode: "241"},
    {cnt: "Gambia", reg: /\b(?:220[7,9]\d{6}|[7,9]\d{6})\b/g, diffReg: /^(?:220|0)?([7,9]\d{6,7})$/, shortCode: "GMB", countryCode: "220"},
    {cnt: "Georgia", reg: /\b(?:9955[1,5-7,9][0-9]\d{6}|5[1,5-7,9][0-9]\d{6})\b/g, diffReg: /^(?:995|0)?(5[1,5-7,9][0-9]\d{6})$/, shortCode: "GEO", countryCode: "995"},
    {cnt: "Germany", reg: /\b(?:(491[5-7][0-9]\d{7})|1[5-9][0-9]\d{7})\b/g, diffReg:/^(?:49|0)?(1[5-7][1-9]\d{7})$/, shortCode: "DEU", countryCode: "49"},
    {cnt: "Ghana", reg: /\b(?:233[2,5][0,3-9]\d{7}|[2,5][0,3-9]\d{7})\b/g, diffReg:/^(?:233|0)?([2,5][0,3-9]\d{7})$/, shortCode: "GHA", countryCode: "233"},
    {cnt: "Greece", reg: /\b(?:3069[0-9]\d{7}|30[1-2]\d{9}|[1-2]\d{9}|69[0-9]\d{7})\b/g, diffReg:/^(?:30|0)?([1,6]9[0,3-9]\d{7})$/, shortCode: "GRC", countryCode: "30"},
    {cnt: "Haiti", reg: /\b(?:5093[4-9]\d{6}|5094\d{7}|3[4-9]\d{6}|4\d{7})\b/g, diffReg:/^(?:509|0)?(3[4-9]\d{6})$/, shortCode: "HTI", countryCode: "509"},
    {cnt: "Hawaii", reg: /\b(?:1808\d{7}|808\d{7})\b/g, diffReg:/^(?:1|0)?(808\d{7})$/, shortCode: "USA-HI", countryCode: "1808"},
    {cnt: "Honduras", reg: /\b(?:504[3,7-9]\d{7}|[3,7-9]\d{7})\b/g, diffReg:/^(?:504|0)?([3,7-9]\d{7})$/, shortCode: "HND", countryCode: "504"},
    {cnt: "Hong Kong", reg: /\b(?:852[4-9][0-9][0-8]\d{5}|[4-9][0-9][0-8]\d{5})\b/g, diffReg:/^(?:852|0)?([4-9][0,1,4,6,9]\d{6})$/, shortCode: "HKG", countryCode: "852"},
    {cnt: "Hungary", reg: /\b(?:36[2,3,5-7][0,8]\d{7}|[2,3,5-7][0,8]\d{7})\b/g, diffReg:/^(?:36|0)?([2,3,5-7][0,1,8]\d{7})$/, shortCode: "HUN", countryCode: "36"},
    {cnt: "Iceland", reg: /\b(?:3546\d{6}|6\d{6})\b/g, diffReg:/^(?:354|0)?(6\d{6})$/, shortCode: "ISL", countryCode: "354"},
    {cnt: "India", reg: /\b(?:91[6-8]\d{9}|919[0-9]\d{8}|0\d{10}|9[0-9]\d{8}|[6-8]\d{9})\b/g, diffReg: /^(?:91|0)?([6-9]\d{9})$/, shortCode: "IND", countryCode: "91"},
    {cnt: "Indonesia", reg: /\b(?:628[1-9][0-9]\d{6,8}|8[1-9][0-9]\d{6,8})\b/g, diffReg:/^(?:62|0)?(8[1,3,5,9][2,5-9]\d{7}|8[1,5][2-4,8-9]\d{8}|81[1,6-8]\d{6})$/, shortCode: "IDN", countryCode: "62"},
    {cnt: "Iran", reg: /\b(?:9891\d{8}|989[0-9][0-9]\d{7}|91\d{8}|9[0-9][0-9]\d{7})\b/g, diffReg:/^(?:98|0)?(9[0,1,3,9][0-9]\d{7})$/, shortCode: "IRN", countryCode: "98"},
    {cnt: "Iraq", reg: /\b(?:9647[3-9]\d{8}|7[3-9]\d{8})\b/g, diffReg:/^(?:964|0)?(7[3-9]\d{8})$/, shortCode: "IRQ", countryCode: "964"},
    {cnt: "Ireland", reg: /\b(?:3538[3,5-9]\d{7}|8[3,5-9]\d{7})\b/g, diffReg:/^(?:353|0)?(8[3-9]\d{7})$/, shortCode: "IRL", countryCode: "353"},
    {cnt: "Israel", reg: /\b(?:9725[0-5]\d{7}|5[0-5]\d{7})\b/g, diffReg:/^(?:972|0)?(5[0-5]\d{7})$/, shortCode: "ISR", countryCode: "972"},
    {cnt: "Italy", reg: /\b(?:393[1-9][0-9]\d{7}|3[1-9][0-9]\d{7})\b/g, diffReg:/^(?:39|0)?(3[1-9][1-9]\d{7})$/, shortCode: "ITA", countryCode: "39"},
    {cnt: "Ivory Coast", reg: /\b(?:225[0,6]\d{9}|[0,6]\d{9})\b/g, diffReg:/^(?:225|0)?([0,6]\d{7})$/, shortCode: "CIV", countryCode: "225"},
    {cnt: "Jamaica", reg: /\b(?:1876\d{7}|876\d{7})\b/g, diffReg:/^(?:1|0)?(876\d{7})$/, shortCode: "JAM", countryCode: "1876"},
    {cnt: "Japan", reg: /\b(?:81[6-9][0]\d{8}|[6-9][0]\d{8})\b/g, diffReg:/^(?:81|0)?([6-9]0\d{8})$/, shortCode: "JPN", countryCode: "81"},
    {cnt: "Jersey", reg: /\b(?:4477\d{8}|77\d{8})\b/g, diffReg:/^(?:44|0)?(77\d{8})$/, shortCode: "JPN", countryCode: "81"},
    {cnt: "Jordan", reg: /\b(?:9627[7-9]\d{7}|7[7-9]\d{7})\b/g, diffReg:/^(?:962|0)?(7[7-9]\d{7})$/, shortCode: "JOR", countryCode: "962"},
    {cnt: "Kazakhstan", reg: /\b(?:77[0,4,7][0-2,5-8]\d{7}|7[0,4,7][0-2,5-8]\d{7})\b/g, diffReg:/^(?:7|0)?(7[0,4,7][1,2,5-8]\d{7})$/, shortCode: "KAZ", countryCode: "7"},
    {cnt: "Kenya", reg: /\b(?:254[1,7][0-8]\d{7}|[1,7][0-8]\d{7})\b/g, diffReg:/^(?:254|0)?([1,7][0-8]\d{8})$/, shortCode: "KEN", countryCode: "254"},
    {cnt: "Kosovo", reg: /\b(?:3834[4,5,9]\d{6}|4[4,5,9]\d{6})\b/g, diffReg:/^(?:383|0)?(4[4,5,9]\d{6})$/, shortCode: "XKX", countryCode: "383"},
    {cnt: "Kuwait", reg: /\b(?:965[5,6,9]\d{7}|[5,6,9]\d{7})\b/g, diffReg:/^(?:965|0)?([5,6,9]\d{7})$/, shortCode: "KWT", countryCode: "965"},
    {cnt: "Kyrgyzstan", reg: /\b(?:996[5,9]\d{8}|[5,9]\d{8})\b/g, diffReg:/^(?:996|0)?([5,9]\d{8})$/, shortCode: "KGZ", countryCode: "996"},
    {cnt: "Laos", reg: /\b(?:85620\d{8}|20\d{8})\b/g, diffReg:/^(?:856|0)?(20\d{8})$/, shortCode: "LAO", countryCode: "856"},
    {cnt: "Latvia", reg: /\b(?:3712\d{7}|2\d{7})\b/g, diffReg:/^(?:371|0)?(2\d{7})$/, shortCode: "LVA", countryCode: "371"},
    {cnt: "Lebanon", reg: /\b(?:9613\d{6}|9617[0,1,6]\d{6}|3\d{6}|7[0,1,6]\d{6})\b/, diffReg:/^(?:961|0)?([3,7][0,1,6]\d{6})$/, shortCode: "LBN", countryCode: "961"},
    {cnt: "Lesotho", reg: /\b(?:2666\d{7}|26658\d{6}|6\d{7}|58\d{6})\b/g, diffReg:/^(?:266|0)?([5,6]\d{8})$/, shortCode: "LSO", countryCode: "266"},
    {cnt: "Libya", reg: /\b(?:2189[1,2,4]\d{7}|9[1,2,4]\d{7})\b/g, diffReg:/^(?:218|0)?(9[1,2,4]\d{8})$/, shortCode: "LBY", countryCode: "218"},
    {cnt: "Lithuania", reg: /\b(?:3706\d{7}|6\d{7})\b/g, diffReg:/^(?:370|0)?(6\d{7})$/, shortCode: "LTU", countryCode: "370"},
    {cnt: "Luxembourg", reg: /\b(?:3526[2,6,9][1,8]\d{6}|6[2,6,9][1,8]\d{6})\b/g, diffReg:/^(?:352|0)?(6[2,6,9][1,8]\d{6})$/, shortCode: "LUX", countryCode: "352"},
    {cnt: "Macau", reg: /\b(?:8536\d{7}|6\d{7})\b/g, diffReg:/^(?:853|0)?(6\d{7})$/, shortCode: "MAC", countryCode: "853"},
    {cnt: "Madagascar", reg: /\b(?:2613\d{8}|3\d{8})\b/g, diffReg:/^(?:261|0)?(3\d{9})$/, shortCode: "MDG", countryCode: "261"},
    {cnt: "Madeira", reg: /\b(?:3519\d{8}|9\d{8})\b/g, diffReg:/^(?:351|0)?(9\d{8})$/, shortCode: "PRT-MD", countryCode: "351"},
    {cnt: "Malaysia", reg: /\b(?:601[0-9]\d{7,8}|1[0-9]\d{7,8})\b/g, diffReg:/^(?:60|0)?([1,0-9]\d{6,7})$/, shortCode: "MYS", countryCode: "60"},
    {cnt: "Malawi", reg: /\b(?:265[8-9]\d{8}|[8-9]\d{8})\b/g, diffReg:/^(?:265|0)?([8-9]\d{6})$/, shortCode: "MWI", countryCode: "265"},
    {cnt: "Maldives", reg: /\b(?:960[7,9]\d{6}|[7,9]\d{6})\b/g, diffReg:/^(?:960|0)?([7,9]\d{6})$/, shortCode: "MDV", countryCode: "960"},
    {cnt: "Mali", reg: /\b(?:223[3,7]\d{7}|[3,7]\d{7})\b/g, diffReg:/^(?:223|0)?([3-7]\d{6})$/, shortCode: "MLI", countryCode: "223"},
    {cnt: "Malta", reg: /\b(?:356[7,9][7-9]\d{6}|[7,9][7-9]\d{6})\b/g, diffReg:/^(?:356|0)?([7,9][7-9]\d{6})$/, shortCode: "MLT", countryCode: "356"},
    {cnt: "Marshall Islands", reg: /\b(?:6924\d{6}|4\d{6})\b/g, diffReg:/^(?:692|0)?(4\d{6})$/, shortCode: "MHL", countryCode: "692"},
    {cnt: "Martinique", reg: /\b(?:596[6,7][0-9][0,6]\d{6}|[6,7][0-9][0,6]\d{6})\b/g, diffReg:/^(?:596|0)?([6,7][9,0][6,0]\d{6})$/, shortCode: "MTQ", countryCode: "596"},
    {cnt: "Mauritania", reg: /\b(?:2226\d{6}|6\d{6})\b/g, diffReg:/^(?:222|0)?(6\d{6})$/, shortCode: "MRT", countryCode: "222"},
    {cnt: "Mauritius", reg: /\b(?:2305[4,7-9]\d{6}|5[4,7-9]\d{6})\b/g, diffReg:/^(?:230|0)?(5[4,7-9]\d{6})$/, shortCode: "MUS", countryCode: "230"},
    {cnt: "Mexico", reg: /\b(?:5255\d{8}|55\d{8})\b/g, diffReg:/^(?:52|0)?(55\d{8})$/, shortCode: "MEX", countryCode: "52"},
    {cnt: "Micronesia", reg: /\b(?:6919[2,3,5,7]\d{5}|9[2,3,5,7]\d{5})\b/g, diffReg:/^(?:691|0)?(9[2,3,5,7]\d{5})$/, shortCode: "FSM", countryCode: "691"},
    {cnt: "Moldova", reg: /\b(?:373[6-7][0,5,7-9]\d{6}|[6-7][0,5,7-9]\d{6})\b/g, diffReg:/^(?:373|0)?([6,7][0,5,7-9]\d{6})$/, shortCode: "MDA", countryCode: "373"},
    {cnt: "Mongolia", reg: /\b(?:976[7-9][0,1,3,5,6,8,9]\d{6}|[7-9][0,1,3,5,6,8,9]\d{6})\b/g, diffReg:/^(?:976|0)?([7-9][0,1,3,5,6,8,9]\d{6})$/, shortCode: "MNG", countryCode: "976"},
    {cnt: "Montenegro", reg: /\b(?:3826[0,3,6-9]\d{6}|6[0,3,6-9]\d{6})\b/g, diffReg:/^(?:382|0)?(6[0,3,6-9]\d{6})$/, shortCode: "MNE", countryCode: "382"},
    {cnt: "Morocco", reg: /\b(?:2126\d{8}|6\d{8})\b/g, diffReg:/^(?:212|0)?(6\d{9})$/, shortCode: "MAR", countryCode: "212"},
    {cnt: "Mozambique", reg: /\b(?:2588[2-7]\d{7}|[2-7]\d{7})\b/g, diffReg:/^(?:258|0)?(8[2-7]\d{10})$/, shortCode: "MOZ", countryCode: "258"},
    {cnt: "Myanmar", reg: /\b(?:959[2,4,7,9][1-9]\d{7}|9[2,4,7,9][1-9]\d{7})\b/g, diffReg:/^(?:95|0)?(9[2,7,9]\d{8}|9[3,4,7,9]\d{7})$/, shortCode: "MMR", countryCode: "95"},
    {cnt: "Namibia", reg: /\b(?:264[6,8,9][0-8]\d{7}|[6,8,9][0-8]\d{7})\b/g, diffReg:/^(?:264|0)?([6,8][0,1,5]\d{7})$/, shortCode: "NAM", countryCode: "264"},
    {cnt: "Nepal", reg: /\b(?:97798\d{8}|98\d{8})\b/g, shortCode: "NPL", diffReg:/^(?:977|0)?(98\d{8})$/, countryCode: "977"},
    {cnt: "New Zealand", reg: /\b(?:642[0-7]\d{7}|2[0-7]\d{7})\b/g, diffReg:/^(?:64|0)?(2[0-9]\d{7})$/, shortCode: "NZL", countryCode: "64"},
    {cnt: "Netherlands", reg: /\b(?:316\d{8}|6\d{8})\b/g, diffReg:/^(?:31|0)?(6\d{8})$/, shortCode: "NLD", countryCode: "31"},
    {cnt: "Nicaragua", reg: /\b(?:5058\d{7}|8\d{7})\b/g, diffReg:/^(?:505|0)?(8\d{7})$/, shortCode: "NIC", countryCode: "505"},
    {cnt: "Niger", reg: /\b(?:2279\d{7}|9\d{7})\b/g, diffReg:/^(?:227|0)?(9\d{8})$/, shortCode: "NER", countryCode: "227"},
    {cnt: "Nigeria", reg: /\b(?:23480[2-5,9]\d{7}|80[2-5,9]\d{7})\b/g, diffReg:/^(?:234|0)?(80[2-5,9]\d{5})$/, shortCode: "NGA", countryCode: "234"},
    {cnt: "North Macedonia", reg: /\b(?:3897[0-9]\d{6}|7[0-9]\d{6})\b/g, diffReg:/^(?:389|0)?(7[0-9]\d{6})$/, shortCode: "MKD", countryCode: "389"},
    {cnt: "Northern Cyprus", reg: /\b(?:905[3-4][2-3]\d{7}|5[3-4][2-3]\d{7})\b/g, diffReg:/^(?:90|0)?(5[3-4][3,2]\d{5})$/, shortCode: "CYP-N", countryCode: "90-392"},
    {cnt: "Norway", reg: /\b(?:474\d{7}|4\d{7})\b/g, diffReg:/^(?:47|0)?([4,5,9]\d{7}|59\d{6})$/, shortCode: "NOR", countryCode: "47"},
    {cnt: "Oman", reg: /\b(?:9689[1-9]\d{6}|9[1-9]\d{6})\b/g, diffReg:/^(?:968|0)?(9[1-9]\d{6})$/, shortCode: "OMN", countryCode: "968"},
    {cnt: "Pakistan", reg: /\b(?:923[0-5]\d{8}|3[0-5]\d{8})\b/g, diffReg:/^(?:92|0)?(3[0-5]\d{8})$/, shortCode: "PAK", countryCode: "92"},
    {cnt: "Palau", reg: /\b(?:680[4,7]\d{6}|[4,7]\d{6})\b/g, diffReg:/^(?:680|0)?([4,7]\d{6})$/, shortCode: "PLW", countryCode: "680"},
    {cnt: "Panama", reg: /\b(?:5076\d{7}|6\d{7})\b/g, diffReg:/^(?:507|0)?(6\d{7})$/, shortCode: "PAN", countryCode: "507"},
    {cnt: "Papua New Guinea", reg: /\b(?:675[7,8]\d{7}|[7,8]\d{7})\b/g, diffReg:/^(?:675|0)?([7,8]\d{7})$/,  shortCode: "PNG", countryCode: "675"},
    {cnt: "Paraguay", reg: /\b(?:5959[6-8][1-5]\d{6}|9[6-8][1-5]\d{6})\b/g, diffReg:/^(?:595|0)?(9[6-9][1-5]\d{6})$/,  shortCode: "PRY", countryCode: "595"},
    {cnt: "Peru", reg: /\b(?:519\d{8}|9\d{8})\b/g, diffReg:/^(?:51|0)?(9\d{8})$/, shortCode: "PER", countryCode: "51"},
    {cnt: "Philippines", reg: /\b(?:639[0-9][0-9]\d{7}|9[0-9][0-9]\d{7})\b/g, diffReg:/^(?:63|0)?(9[0-9][0-9]\d{7})$/, shortCode: "PHL", countryCode: "63"},
    {cnt: "Poland", reg: /\b(?:48[5-8][0-9]\d{7}|[5-8][0-9]\d{7})\b/g, diffReg:/^(?:48|0)?([4-8][0-9]\d{7})$/, shortCode: "POL", countryCode: "48"},
    {cnt: "Portugal", reg: /\b(?:3519[1,2,6]\d{7}|9[1,2,6]\d{7})\b/g, diffReg:/^(?:351|0)?(9[1-3,6][1-9]\d{6})$/, shortCode: "PRT", countryCode: "351"},
    {cnt: "Qatar", reg: /\b(?:974[3,5-7][3,5-7]\d{6}|[3,5-7][3,5-7]\d{6})\b/g, diffReg:/^(?:974|0)?([3,5-7][3,5-7]\d{6})$/, shortCode: "QAT", countryCode: "974"},
    {cnt: "Romania", reg: /\b(?:407[0-8]\d{7}|7[0-8]\d{7})\b/g, diffReg:/^(?:40|0)?(7[0-8]\d{8})$/, shortCode: "ROU", countryCode: "40"},
    {cnt: "Russia", reg: /\b(?:79[0,5,8][0-9]\d{7}|79[1-3,6]\d{8}|9[0,5,8][0-9]\d{7}|9[1-3,6]\d{8})\b/g, diffReg:/^(?:7|0)?(9[0-3,5,6,8][0-9]\d{7})$/, shortCode: "RUS", countryCode: "7"},
    {cnt: "Rwanda", reg: /\b(?:250[7-8]\d{8}|[7-8]\d{8})\b/g, diffReg:/^(?:250|0)?([7,8]\d{6})$/, shortCode: "RWA", countryCode: "250"},
    {cnt: "Saint Lucia", reg: /\b(?:1758\d{7}|758\d{7})\b/g, diffReg:/^(?:1|0)?(758\d{7})$/, shortCode: "LCA", countryCode: "1758"},
    {cnt: "Samoa", reg: /\b(?:68577\d{5}|77\d{5})\b/g, diffReg:/^(?:685|0)?(77\d{3})$/, shortCode: "WSM", countryCode: "685"},
    {cnt: "Saudi Arabia", reg: /\b(?:9665[0-9]\d{7}|5[0-9]\d{7})\b/g, diffReg:/^(?:966|0)?(5[0-9]\d{7})$/, shortCode: "SAU", countryCode: "966"},
    {cnt: "Senegal", reg: /\b(?:2217[6,7]\d{7}|7[6,7]\d{7})\b/g, diffReg:/^(?:382|0)?(6[0,3,6-9]\d{6})$/, shortCode: "SEN", countryCode: "221"},
    {cnt: "Serbia", reg: /\b(?:3816[0-9]\d{7}|6[0-9]\d{7})\b/g, diffReg:/^(?:381|0)?(6[0-9]\d{7})$/, shortCode: "SRB", countryCode: "381"},
    {cnt: "Seychelles", reg: /\b(?:2482[5,7]\d{5}|2[5,7]\d{5})\b/g, diffReg:/^(?:248|0)?(2[5,7]\d{3})$/, shortCode: "SYC", countryCode: "248"},
    {cnt: "Singapore", reg: /\b(?:65[8,9]\d{7}|[8,9]\d{7})\b/g, diffReg:/^(?:65|0)?([8-9]\d{7})$/, shortCode: "SGP", countryCode: "65"},
    {cnt: "Sri Lanka", reg: /\b(?:947[0-8]\d{7}|7[0-8]\d{7})\b/g, diffReg:/^(?:94|0)?(7[0-8]\d{5})$/, shortCode: "LKA", countryCode: "94"},
    {cnt: "Somalia", reg: /\b(?:2526[1-3,8]\d{7}|6[1-3,8]\d{7})\b/g, diffReg:/^(?:252|0)?(6[1-3,8]\d{5})$/, shortCode: "SOM", countryCode: "252"},
    {cnt: "South Africa", reg: /\b(?:27[6-8][0-9]\d{7}|[6-8][0-9]\d{7})\b/g, diffReg:/^(?:27|0)?([6-8][0-4,6,8,9][0-9]\d{6})$/, shortCode: "ZAF", countryCode: "27"},
    {cnt: "South Korea", reg: /\b(?:821[0-9]\d{7,8}|1[0-9]\d{7,8})\b/g, diffReg:/^(?:82|0)?(1[0-9]\d{7,8}\d{6})$/, shortCode: "KOR", countryCode: "82"},
    {cnt: "Switzerland", reg: /\b(?:417[4-9]\d{7}|7[4-9]\d{7})\b/g, diffReg:/^(?:41|0)?(7[4-9]\d{7})$/, shortCode: "CHE", countryCode: "41"},
    {cnt: "Sweden", reg: /\b(?:467[0-9]\d{7}|7[0-9]\d{7})\b/g, diffReg:/^(?:46|0)?(7[0-9]\d{5})$/, shortCode: "SWE", countryCode: "46"},
    {cnt: "Spain", reg: /\b(?:34[6-7]\d{8}|[6-7]\d{8})\b/g, diffReg:/^(?:34|0)?([6,7]\d{8})$/, shortCode: "ESP", countryCode: "34"},
    {cnt: "Syria", reg: /\b(?:9639[3-9]\d{7}|9[3-9]\d{7})\b/g, diffReg:/^(?:963|0)?(9[3-9]\d{7})$/, shortCode: "SYR", countryCode: "963"},
    {cnt: "Tanzania", reg: /\b(?:255[6-7][2,4-9]\d{7}|[6-7][2,4-9]\d{7})\b/g, diffReg:/^(?:255|0)?([6-7][2,4-9]\d{4})$/, shortCode: "TZA", countryCode: "255"},
    {cnt: "Thailand", reg: /\b(?:66[6-9]\d{8}|[6-9]\d{8})\b/g, diffReg:/^(?:66|0)?([6,8,9]\d{8})$/, shortCode: "THA", countryCode: "66"},
    {cnt: "Togo", reg: /\b(?:2289[0-2,7-9]\d{6}|9[0-2,7-9]\d{6})\b/g, diffReg:/^(?:228|0)?(9[0-2,7-9]\d{6})$/, shortCode: "TGO", countryCode: "228"},
    {cnt: "Tunisia", reg: /\b(?:216[2-5,9]\d{7}|6[2-5,9]\d{7})\b/g, diffReg:/^(?:216|0)?([2-5,9]\d{7})$/, shortCode: "TUN", countryCode: "216"},
    {cnt: "Turkey", reg: /\b(?:905[0-5]\d{8}|5[0-5]\d{8})\b/g, diffReg:/^(?:90|0)?(5[0,3-5]\d{8})$/, shortCode: "TUR", countryCode: "90"},
    {cnt: "Turkmenistan", reg: /\b(?:9936[5-7]\d{6}|6[5-7]\d{6})\b/g, diffReg:/^(?:993|0)?(6[5-7]\d{6})$/, shortCode: "TKM", countryCode: "993"},
    {cnt: "UAE", reg: /\b(?:9715[0-8]\d{7}|5[0-8]\d{7})\b/g, diffReg:/^(?:971|0)?(5[0,2,4-6,8]\d{7})$/, shortCode: "ARE", countryCode: "971"},
    {cnt: "Ukraine", reg: /\b(?:380[5,6,9][0-9]\d{7}|[5,6,9][0-9]\d{7})\b/g, diffReg:/^(?:380|0)?([5,6,7,9][0-9]\d{7})$/, shortCode: "UKR", countryCode: "380"},
    {cnt: "Uganda", reg: /\b(?:2567[0-8]\d{7}|7[0-8]\d{7})\b/g, diffReg:/^(?:256|0)?(7[0-2,5,7,8]\d{7})$/, shortCode: "UGA", countryCode: "256"},
    {cnt: "United States", reg: /\b(?:1[2-9][0-8][2-8]\d{7}|[2-9][0-8][2-8]\d{7})\b/g, diffReg:/^(?:1|0)?([2-9][0-8][0,2-8]\d{7})$/, shortCode: "USA", countryCode: "1"},
    {cnt: "United Kingdom", reg: /\b(?:44[1-7][1-9]\d{8}|[1-7][1-9]\d{8})\b/g, diffReg:/^(?:44|0)?([1-7][1-9]\d{8})$/, shortCode: "GBR", countryCode: "44"},
    {cnt: "Vietnam", reg: /\b(?:84[3-9]\d{8}|[3-9]\d{8})\b/g, diffReg:/^(?:84|0)?([3,5,7-9]\d{8})$/, shortCode: "VNM", countryCode: "84"},
    {cnt: "Zimbabwe", reg: /\b(?:2637[1,3,7]\d{7}|7[1,3,7]\d{7})\b/g, diffReg:/^(?:263|0)?(7[1,3,7]\d{7})$/, shortCode: "ZWE", countryCode: "263"}
];
export default countryList;