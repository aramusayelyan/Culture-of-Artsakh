const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



function performTranslation() {
    var armenianInput = document.getElementById("armenianInput").value.toLowerCase();
    var artsakhInput = document.getElementById("artsakhInput");

    // JavaScript code for transliteration
    var armenianToLatin = {
       'ոնցես': 'հունցս', 'լույս': 'լուս',
      'բարև': 'բարև', 'ոնցես': 'հունցս', 'լույս': 'լուս',
      'բարև': 'պարիօր', 'ողջույն': 'պարիօր', 'բարի առավոտ': 'Պար լուս',
      'բարի օր': 'պարիօր', 'բարի երեկո': 'պարի գշեր', 'ինչպես ես': 'հունցս՞',
      'լավ': 'լյավ', 'վատ չէ': 'պիս չի', 'այո': 'հա', 'ոչ': 'չէ',
      'միգուցե': 'բալի', 'խնդրում եմ': 'խնդրում', 'շնորհակալություն': 'սպասիբա',
      'ներեցեք': 'ներղություն', 'իհարկե': 'պա հինչ', 'բացարձակապես': 'վոշմին եկրպ',
      'եւ': 'ու', 'ինչու': 'խե', 'ինչ': 'հինչ', 'երբ': 'հիբ', 'որտեղ': 'շտեղ',
      'որ': 'վեր', 'ինչպես': 'հունց', 'արեք': 'ըրեք', 'արեց': 'ըրավ', 'կարող է': 'կարե',
      'կարող էր': 'կրար', 'պետք է': 'պետքա', 'կկամենա': 'կոզի', 'կարող է': 'կկար',
      'անհրաժեշտություն': 'պարտադիր', 'ունենալ': 'ոնիմ', 'ունի': 'ոնե', 'եղել է': 'իլալա',
      'եղել են': 'իլալն', 'լինելով': 'ինիլավ', 'եղել է': 'իլալա', 'դուք': 'տուք',
      'այն': 'են', 'մենք': 'մունք', 'նրանք': 'ուրանք', 'դուք': 'տուք', 'նրան': 'ուրան',
      'նրա': 'ուրան', 'մեզ': 'մզ', 'նրանց': 'ուրանք', 'իմ': 'իմ', 'ձեր': 'ծեր', 'նրան': 'ուրան',
      'նրա': 'ուրան', 'դրան': 'դրան', 'իրենց': 'ուրանց', 'դա': 'տա', 'սրանք': 'սրանք',
      'նրանք': 'ուրանք', 'այնտեղ': 'դղ', 'այստեղ': 'ստղ','հիմա': 'մեհենգ', 'շուտով': 'էսա', 'ավելի ուշ': 'ավելի ետե',
      'կրկին': 'նորից', 'այսօր': 'սօր', 'վաղը': 'եքուծ', 'երեկ': 'յիրկե', 'այնուամենայնիվ': 'մինա','ավել': 'ավիլ', 'ապա': 'ու', 'հաջորդը': 'էմինը', 'հաջորդ': 'էմին',
      'առաջին': 'պերվի', 'երկրորդ': 'վտարոյ', 'բացի այդ': 'բացի տրանից', 'եզրափակելով': 'պրծնելավ',
      'համառոտ': 'կարճ', 'այլ կերպ ասած': 'որիշ ձև ասած', 'տվյալ դեպքում': 'էս դեպքում', 'երբ': 'հիբ',
      'նախկինում': 'առաջ', 'ինչպես': 'հունց', 'ասես': 'ասիս', 'ինչպես': 'հունց', 'ճիշտ ասած': 'դուզն ասած',
      'իսկապես': 'իրոք', 'ակնհայտ է': 'աչեվիդնիա', 'ուստի': 'տրա հտե', 'հաջորդը': 'էմինը', 'բացի այդ': 'բացի տրանից',
      'արդյունքում': 'ի տոգի', 'երբ': 'հիբ',  'ընթացքում': 'դաղումը', 'ասես': 'ասիս',
      'հավանել': 'տուր կյալ', 'պարզ է': 'պարզա', 'այդ ընթացքում': 'ետ ընթացքում', 'հետագայում': 'հետո',
      'էսա': 'էսա', 'Վերջերս': 'էս օրերին', 'Ներկայումս': 'մեհենգ', 'Երբեմն': 'ղաթումը',
      'Հաճախակի': 'շուշուտ', 'Սովորաբար': 'հիմնականում', 'Հաճախ': 'շուշուտ', 'Հազվադեպ': 'ղաթումը',
      'Մի անգամ': 'մեհետե', 'համար': 'հտե', 'երեկվա': 'յիրկվա', 'գեղեցիկ': 'ղաշանգ', 'սիրուն': 'ղաշանգ','ուզում եմ':'ոզումում','ապրես':'ապրիս','դու':'տու','դուք':'տուք','ասեմ':'ասիմ','բան':'պեն','ոնցես': 'հունցս',
        'լույս': 'լուս',
        'բարև': 'պարիօր',
        'ողջույն': 'պարիօր',
        'բարի առավոտ': 'Պար լուս',
        'բարի օր': 'պարիօր',
        'բարի երեկո': 'պարի գշեր',
        'ինչպես ես': 'հունցս՞',
        'լավ': 'լյավ',
        'վատ չէ': 'պիս չի',
        'այո': 'հա',
        'ոչ': 'չէ',
        'միգուցե': 'բալի',
        'խնդրում եմ': 'խնդրում',
        'շնորհակալություն': 'սպասիբա',
        'ներեցեք': 'ներղություն',
        'իհարկե': 'պա հինչ',
        'բացարձակապես': 'վոշմին եկրպ',
        'եւ': 'ու',
        'ինչու': 'խե',
        'ինչ': 'հինչ',
        'երբ': 'հիբ',
        'որտեղ': 'շտեղ',
        'որ': 'վեր',
        'ինչպես': 'հունց',
        'արեք': 'ըրեք',
        'արեց': 'ըրավ',
        'կարող է': 'կարե',
        'կարող էր': 'կրար',
        'պետք է': 'պետքա',
        'կկամենա': 'կոզի',
        'կարող է': 'կկար',
        'անհրաժեշտություն': 'պարտադիր',
        'ունենալ': 'ոնիմ',
        'ունի': 'ոնե',
        'եղել է': 'իլալա',
        'եղել են': 'իլալն',
        'լինելով': 'ինիլավ',
        'եղել է': 'իլալա',
        'դուք': 'տուք',
        'այն': 'են',
        'մենք': 'մունք',
        'նրանք': 'ուրանք',
        'դուք': 'տուք',
        'նրան': 'ուրան',
        'նրա': 'ուրան',
        'մեզ': 'մզ',
        'նրանց': 'ուրանք',
        'իմ': 'իմ',
        'ձեր': 'ծեր',
        'նրան': 'ուրան',
        'նրա': 'ուրան',
        'դրան': 'դրան',
        'իրենց': 'ուրանց',
        'դա': 'տա',
        'սրանք': 'սրանք',
        'նրանք': 'ուրանք',
        'այնտեղ': 'դղ',
        'այստեղ': 'ստղ',
        'հիմա': 'մեհենգ',
        'շուտով': 'էսա',
        'ավելի ուշ': 'ավելի ետե',
        'կրկին': 'նորից',
        'այսօր': 'սօր',
        'վաղը': 'եքուծ',
        'երեկ': 'յիրկե',
        'այնուամենայնիվ': 'մինա',
        'ավել': 'ավիլ',
        'ապա': 'ու',
        'հաջորդը': 'էմինը',
        'հաջորդ': 'էմին',
        'առաջին': 'պերվի',
        'երկրորդ': 'վտարոյ',
        'բացի այդ': 'բացի տրանից',
        'եզրափակելով': 'պրծնելավ',
        'համար': 'հտե',
        'երեկվա': 'յիրկվա',
        'գեղեցիկ': 'ղաշանգ',
        'սիրուն': 'ղաշանգ',
        'ուզում եմ': 'ոզումում',
        'ապրես': 'ապրիս',
        'դու': 'տու',
        'դուք': 'տուք',
        'ասեմ': 'ասիմ',
        'բան': 'պեն',
        'դուրս': 'տուս',
        'ներս ու դուրս': 'տուսուտոռնը',
        'ցերեկ': 'ցիրեկ',
        'սառը': 'ցորտցորտ',
        'փայտ': 'փադ',
        'առաջկապան': 'փարթուկ',
        'գլխարկ': 'փափաղ',
        'ոտով /քայլելու մասին է/': 'փիյադա կամ վենավ',
        'վառարան': 'փիչ',
        'աստիճան /սանդուղք/': 'փլիքյան',
        'զրուցել (հադրութ)': 'քաթ անել',
        'ետ': 'քամակ',
        'ճաղատ': 'քաչալ',
        'կոճղ': 'քեթուկ',
        'տիկնոջ քույր': 'քենի',
        'քչփչոց': 'քըթըփըթի',
        'գթան': 'քթոլ',
        'գդալով ուտել': 'քթոլհարել',
        'գնալ': 'քինալ',
        'գնում ես': 'քինամ ըմ',
        'քաղցրախոս': 'քխծրպերան',
        'կողպեք': 'քյլիդ',
        'հին': 'քյոհնա',
        'օգնություն': 'քյոմագ',
        'օգնել': 'քյոմագ անել',
        'հնահոտ': 'քյուհնավետ',
        'գիշեր': 'քշեր',
        'վաղ առավոտյան': 'քշերավ',
        'հանգույց': 'քշկոռ',
        'թուփ': 'քոլ',
        'կաչաղակ': 'քչեղակ',
        'կոպիտ ծիծաղել': 'քռքռալ',
        'ութ': 'օթ',
        'օձ': 'օխծ֨ը',
        'յոթ': 'օխտը',
        'ուղտ': 'օղտը',
        'սթափվել': 'օյամիշ լինել',
        'ժանգ': 'օնֻջ',
        'ունք': 'օնք',
        'հայացքը դեպի գերեզմանոց': 'օշը տեն',
        'ուրագ': 'օրաղ','սունկ': 'սոյնը',
    'սուտ': 'սոտ',
    'այսօր': 'սորե',
    'տավարի փափուկ միսը': 'սուկի',
    'անհամ': 'սունի',
    'սևորակ': 'սվսվենե',
    'սատկել': 'ստակել',
    'այսֺօր': 'ստի',
    'սերկեւիլ': 'սրկեվուլ',
    'ժամանակ': 'վախտ',
    'ոտ': 'վենը',
    'ոտք': 'վենը',
    'ոչինչ': 'վեֹքիչ',
    'որ': 'վեր',
    'աքլոր': 'վերցակ',
    'հող': 'վըղ',
    'ոտնաման': 'վընաման',
    'կոշիկ': 'վընաման',
    'վայրի': 'վիրի',
    'արմատ': 'տակռե',
    'դաս': 'տաս',
    'գետին': 'տափ',
    'հատակ': 'տափ',
    'ամուսնու եղբայր': 'տաքիր',
    'դանակ': 'տենակ',
    'բոբիկ': 'տեպեգ',
    'դիմանալ': 'տըմացալ',
    'դռնեդուռ ընկնել': 'տըռնըտոռնը ընգել',
    'այդպես': 'տի',
    'տերեւ': 'տիրեւ',
    'պնդուկ': 'տկողեն',
    'դիմացկուն': 'տմացկուն',
    'դհոլ': 'տմբլա',
    'լինդ': 'տմտեմուկ',
    'դուռ': 'տոռնը',
    'դուռ': 'տոռնը, մղակ',
    'չարաճճի': 'տուլաշ',
    'բութ հայացքով նայել': 'տումար',
    // More Armenian to Artsakhian mappings
    'հագուստ': 'շոր',
    'կատակը մի կողմ': 'շուլուղը տեն',
    'կատակասեր': 'շուլուղչի',
    'հով': 'շոք',
    'ուրախանալ': 'ուրխանալ',
    'իրիկուն': 'ուրուգյուն',
    'շնագայլ': 'չաղալ',
    'պատառաքաղ': 'չանգյալ',
    'դուրս': 'չոլ',
    'ծառաշիվերի կտորտանք': 'չոփ',
    'ինչ անեմ': 'պահունցանիմ',
    'կտոր': 'պատառ',
    'կեսրայր': 'պարոն',
    'պարել': 'պար կյալ',
    'բարելամ': 'պարիկամ',
    'ողջույն': 'պրիօր',
    'քավոր': 'պելի',
    'բերան': 'պերան',
    'պղտոր': 'պըրտող',
    'քավորակին': 'պիլակեն',
    'փոքր': 'պիծի',
    'պարտացնել': 'պիհել',
    'բուրդ': 'պրոթ',
    'կոկորդ': 'պոկ',
    'վիզ': 'պոկ',
    'ծայր': 'պտոկ',
    'պարզ ջրով լվանալ': 'պրզըճրել',
    'բրինձ': 'պրինձ',
    'թառս ու շիտակ': 'պրտտող',
    'ուսեր': 'ջնղներ',
    'բերան': 'ռեխ',
    'կափարիչ': 'ռըխկալի',
    'թեթևսոլիկ': 'սահլիգ',
    'առողջ': 'սաղ',
    'սանր': 'սանդր',
    'ձայն': 'սաս',
    'սպիտակ': 'սիպտակ',
    'լքտի': 'սլեթա',
    'լսել': 'սկանալ',
    'կիսուր': 'սկեսուր',
    'կիսուր': 'սկեսուր',
    'ոչինչ': 'սկի',
    'ժամացույց': 'սհաթ',
    'սոխ': 'սողան',
    'սունկ': 'սոյն',
    // More Armenian to Artsakhian mappings
    'ե՞րբ': 'հի՞բ',
    'ալեւոր': 'հլեվուր',
    'ամաչել': 'հմանչիլ',
    'ով': 'հու',
    'հոն': 'հուն',
    'ոնց': 'հունց',
    'ում': 'հուր',
    'սագ': 'ղազ',
    'մեկ': 'ղատումը',
    'ուղարկել': 'ղարկել',
    'եղունգ': 'ղեյնը',
    'ղազան': 'ղըզղան',
    'աղմուկ': 'ղըլմըղալ',
    'ողողել': 'ղողել',
    'կապուտաչյա': 'ճաղար',
    'մադար': 'ճար',
    'գտնել': 'ճարել',
    'ճյուղ': 'ճեղնը',
    'ջիղ': 'ճիլ',
    'շատախոս': 'ճիճի',
    'վիզ': 'ճիտ',
    'հիրկ': 'ճիտ',
    'ընկույզ': 'ճղոպուր',
    'ծայր': 'ճոնդ',
    'ճուտ': 'ճոտ',
    'պոպոք': 'ճուր',
    'աչքի կեղտ': 'ճպոռ',
    'թրջված': 'ճրըթաթախ',
    'քմահաճույք': 'մաթտաբ',
    'եւ քայլել, եւ փնտրել': 'ման կյալ',
    'սղոց': 'մաշառ',
    'նիհար': 'մաշված',
    'սարդոստայն': 'մըկըլմանդիլ',
    'մութ': 'մթեն',
    'մեկ': 'մին',
    'մենակ': 'մինակ',
    'մեկը': 'մինը',
    'քիչ': 'մինխրեգ,պատառ,միկա',
    'հնդկահավ': 'միսիրի',
    'շատ': 'մխիլա',
    'մասուր': 'մհասուր',
    'հիմա': 'մհենգ',
    'հենց նոր': 'մհենգի',
    'այսուհետ': 'մհենգյաս ետ',
    'դուռ': 'մղակ',
    'գռազ': 'մյարջ',
    'մուկ': 'մոկուն',
    // More Armenian to Artsakhian mappings
    'ել': 'մորե',
    'սարդոստայն': 'մուկլիմենդիլ',
    'պայմանավորվածություն': 'մսլըհաթ',
    'վերցնել': 'յեր օնել',
    'տեմպ': 'յերիշ',
    'եկեղեցի': 'յըղեցի',
    'ձվածեղ': 'յուղուր',
    'հետ': 'նհետ',
    'սխալվել,մոլորվել': 'շաղվել',
    'դեղձ': 'շավթալ',
    'գյուղ': 'շեն',
    'փնտրել': 'շըրըշուղ անել','ձմեռ': 'ծըմեռնը',
    'անտառ': 'ծմակ',
    'ձոր': 'ծյոր',
    'ձուկ': 'ծուկուն',
    'ձայն': 'ծպուտ',
    'ծառի հասած պտուղը, որ ընկնում է գետնին': 'կաթուկ',
    'շատ տաք': 'կածկած',
    'փշաբույսեր': 'կածուկ',
    'փափուկ': 'կակուղ',
    'շուտ': 'կանուխ',
    'գազար': 'կեզար',
    'բամբասել': 'կենգատ անել',
    'գեշ': 'կեշ',
    'ատամ': 'կերեք',
    'հագցնել': 'կեց տալ',
    'ջղայնանալ': 'կզնվել',
    'ջղայնացնել': 'կըզնըվցընել',
    'գլուխկոնծի': 'կըլըկոնձի',
    'մեկ': 'կընդըկաթյուկ',
    'գինի': 'կինի',
    'գերեզմանոց': 'կիրիզմատոն, հանգիստարան',
    'շաբաթ': 'կիրկամոտ',
    'գլուխը վեր': 'կլխիեր',
    'գլուխ': 'կլոխ',
    'գալ': 'կյալ',
    'գալիս ես': 'կյամ ըմ',
    'կապույտ': 'կյապուտ',
    'կարմիր': 'կյարմուր',
    'կանաչի': 'կնանչի',
    'կին': 'կնեգ',
    'գայլ': 'կուլ',
    'պստիկ': 'կուճիր',
    'բաղնիք': 'համամ',
    'նույն': 'համին',
    'ամոթ': 'համոթ',
    'մինչեւ': 'հանգուհունգ',
    'այն, այս է': 'հանե',
    'աներ': 'հաներ',
    'աներ': 'հաներ',
    'ափ': 'հափուռ',
    'բուռ': 'հափուռ',
    'պոչ': 'հաքյու',
    'հորաքույր': 'հաքու',
    'հինգ': 'հենգ',
    'ետեւից': 'հետան',
    'ճանապարհ': 'հըղեց',
    'ընկեր': 'հընգեր',
    'աներձագ': 'հընըրտղա',
    'չե՞ս հավատում': 'հըվա՞տըմ չըս',
    'հարսնաքույր': 'հըրթնաքուր',
    'հարսանիք': 'հըրսանեք',
    'ինչ իմանամ': 'հին',
    'գիդամ': 'հիշտ',
    'ինչ': 'հինչ',
    'հեշտ': 'հիշտ',
    // More Armenian to Latin mappings
    'այնպիսի': 'ընդի',
    'կարգին': 'ըրմակեն, սերուն',
    'ծեծել': 'թակել',
    'շտապ': 'թայդի',
    'գովել': 'թարիփ անել',
    'ձեռք': 'թենթուլ',
    'եղջերաթաղանթ': 'թեփուկ',
    'խփում': 'թխում',
    'նայել': 'թմաշա անել',
    'թութ': 'թոթ',
    'գոտի': 'թոխկա',
    'անձրև': 'թոּռ',
    'թոնիր': 'թուրուն',
    'գոլ': 'թքուչի',
    'ժամ': 'ժեմ',
    'կանաչեղեն': 'ժենգալ',
    'դեպի': 'ժմաժանք',
    'ինձ': 'ի',
    'երես': 'իրես',
    'երեք': 'իրեք',
    'արեւ': 'իրիքնակ',
    'լոշտրակ': 'լաշտրակ',
    'լացել': 'լաց ինիլ',
    'հենց': 'լհանդի',
    'նիհար': 'լղար',
    'լուսին': 'լյուսնինգա',
    'բոլորը': 'լո֭խ',
    'շիկահող': 'լուսնավեղ',
    'ցատկել': 'լոք տալ',
    'կեղտոտել': 'լպատել',
    'խխունջ': 'խաթանբիբի',
    'սավոկ': 'խաթանգյազ',
    'բնավորություն': 'խասյաթ',
    'խելացի': 'խելունք',
    'վիզ': 'խզակոթ',
    'լրատու': 'խըբըրբիզա',
    'երեխա': 'խոխա',
    'ծուռ': 'խուտուրու',
    'անարդարացի': 'խուտուրու',
    'ձեռքս': 'ծերք','կրունկ': 'դաբան',
    'քեռի': 'դայի',
    'հորթ': 'դանա',
    'իսկույն': 'դաստի',
    'կրունկ': 'դբներ',
    'դեպի երեկո': 'դբրիգյուն',
    'պապիկ': 'դեդո',
    'դարպաս': 'դըրբըզա',
    'կիսվել,դարդ պատմել': 'դըրդըհան',
    'հանգստանալ': 'դինջանալ',
    'զառիվայր': 'դիք',
    'ճիշտ': 'դյուզ',
    'բժիշկ': 'դոխտուր',
    'կեղտ': 'եխտ',
    'կեղտոտ': 'եխտուտ',
    'յուղ': 'եղ',
    'նայել': 'եշել',
    'ես քեզ սիրում եմ': 'ես քե սիր ըմ',
    'վեր': 'եր',
    'վեր կենալ': 'եր կենալ',
    'բարձր': 'երե',
    'երեկ': 'երեգի',
    'երեկ': 'երկե',
    'զոքանչ': 'զեմքուչ',
    'առնվազ': 'զերթուն',
    'աղբ': 'զիբիլ',
    'արթնանալ': 'զուրթնանալ',
    'հսկա': 'զռփի',
    'հաջորդ օրը': 'էքսը',
    'նապաստակ': 'ըլբաստրակ',
    'եղբոր կին': 'ըխպրակեն',
  };
  

 var result = '';
    var words = armenianInput.split(' ');

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.endsWith('եք') && i > 0) {
            // If the current word ends with "եք" and it's not the first word
            var previousWord = words[i - 1];
            result = result.slice(0, -previousWord.length); // Remove the previous word from the result
            result += armenianToLatin[previousWord] || previousWord; // Add the transliterated previous word
            result += 'ք'; // Append "ք"
        } else {
            result += armenianToLatin[word] || word;
        }
        result += ' ';
    }

    artsakhInput.value = result.trim();
}

