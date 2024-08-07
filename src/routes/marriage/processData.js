const fs = require('fs'); // Import the file system module

// Raw data
const rawData = [
	[
		'2016448',
		null,
		'11475',
		null,
		'941596',
		null,
		'14004',
		null,
		'935558',
		null,
		'13851',
		null,
		'6038',
		null,
		'1343',
		null,
		'2351',
		null,
		'723',
		null,
		'3687',
		null,
		'1096',
		null,
		'94735',
		null,
		'6822',
		null,
		'90463',
		null,
		'6665',
		null,
		'4272',
		null,
		'1301',
		null,
		'2105',
		null,
		'919',
		null,
		'2167',
		null,
		'886',
		null,
		'980117',
		null,
		'15602',
		null,
		'0400000US01',
		'Alabama',
		'0400000US01'
	],
	[
		'274574',
		null,
		'3261',
		null,
		'129511',
		null,
		'4096',
		null,
		'128443',
		null,
		'4138',
		null,
		'1068',
		null,
		'551',
		null,
		'467',
		null,
		'388',
		null,
		'601',
		null,
		'362',
		null,
		'25302',
		null,
		'2676',
		null,
		'24149',
		null,
		'2602',
		null,
		'1153',
		null,
		'569',
		null,
		'464',
		null,
		'399',
		null,
		'689',
		null,
		'365',
		null,
		'119761',
		null,
		'4325',
		null,
		'0400000US02',
		'Alaska',
		'0400000US02'
	],
	[
		'2850377',
		null,
		'11519',
		null,
		'1332270',
		null,
		'14065',
		null,
		'1315801',
		null,
		'14130',
		null,
		'16469',
		null,
		'2288',
		null,
		'7190',
		null,
		'1635',
		null,
		'9279',
		null,
		'1777',
		null,
		'238509',
		null,
		'8995',
		null,
		'225115',
		null,
		'8895',
		null,
		'13394',
		null,
		'2493',
		null,
		'6016',
		null,
		'1431',
		null,
		'7378',
		null,
		'1996',
		null,
		'1279598',
		null,
		'15373',
		null,
		'0400000US04',
		'Arizona',
		'0400000US04'
	],
	[
		'1216207',
		null,
		'8435',
		null,
		'572596',
		null,
		'10329',
		null,
		'567367',
		null,
		'10210',
		null,
		'5229',
		null,
		'1207',
		null,
		'2315',
		null,
		'699',
		null,
		'2914',
		null,
		'965',
		null,
		'68190',
		null,
		'5816',
		null,
		'64687',
		null,
		'5706',
		null,
		'3503',
		null,
		'1079',
		null,
		'1553',
		null,
		'898',
		null,
		'1950',
		null,
		'714',
		null,
		'575421',
		null,
		'9258',
		null,
		'0400000US05',
		'Arkansas',
		'0400000US05'
	],
	[
		'13550586',
		null,
		'19485',
		null,
		'6516115',
		null,
		'34316',
		null,
		'6412893',
		null,
		'34044',
		null,
		'103222',
		null,
		'5048',
		null,
		'57828',
		null,
		'3975',
		null,
		'45394',
		null,
		'3140',
		null,
		'1051739',
		null,
		'16537',
		null,
		'992809',
		null,
		'15789',
		null,
		'58930',
		null,
		'3942',
		null,
		'31094',
		null,
		'2655',
		null,
		'27836',
		null,
		'3098',
		null,
		'5982732',
		null,
		'28704',
		null,
		'0400000US06',
		'California',
		'0400000US06'
	],
	[
		'2384584',
		null,
		'7807',
		null,
		'1144446',
		null,
		'10963',
		null,
		'1130763',
		null,
		'11062',
		null,
		'13683',
		null,
		'2010',
		null,
		'5791',
		null,
		'1274',
		null,
		'7892',
		null,
		'1689',
		null,
		'188877',
		null,
		'7575',
		null,
		'177064',
		null,
		'7680',
		null,
		'11813',
		null,
		'2048',
		null,
		'5951',
		null,
		'1561',
		null,
		'5862',
		null,
		'1270',
		null,
		'1051261',
		null,
		'12688',
		null,
		'0400000US08',
		'Colorado',
		'0400000US08'
	],
	[
		'1433635',
		null,
		'7120',
		null,
		'658900',
		null,
		'11174',
		null,
		'650626',
		null,
		'10959',
		null,
		'8274',
		null,
		'1429',
		null,
		'4626',
		null,
		'1142',
		null,
		'3648',
		null,
		'896',
		null,
		'111361',
		null,
		'7238',
		null,
		'104618',
		null,
		'7317',
		null,
		'6743',
		null,
		'1637',
		null,
		'2864',
		null,
		'893',
		null,
		'3879',
		null,
		'1353',
		null,
		'663374',
		null,
		'11810',
		null,
		'0400000US09',
		'Connecticut',
		'0400000US09'
	],
	[
		'402334',
		null,
		'3985',
		null,
		'197223',
		null,
		'5836',
		null,
		'192886',
		null,
		'5648',
		null,
		'4337',
		null,
		'1114',
		null,
		'1828',
		null,
		'758',
		null,
		'2509',
		null,
		'753',
		null,
		'28592',
		null,
		'3192',
		null,
		'27604',
		null,
		'3138',
		null,
		'988',
		null,
		'404',
		null,
		'394',
		null,
		'264',
		null,
		'594',
		null,
		'339',
		null,
		'176519',
		null,
		'5717',
		null,
		'0400000US10',
		'Delaware',
		'0400000US10'
	],
	[
		'326970',
		null,
		'3481',
		null,
		'77550',
		null,
		'4586',
		null,
		'71872',
		null,
		'4496',
		null,
		'5678',
		null,
		'1313',
		null,
		'3755',
		null,
		'1026',
		null,
		'1923',
		null,
		'728',
		null,
		'29794',
		null,
		'3492',
		null,
		'23685',
		null,
		'3105',
		null,
		'6109',
		null,
		'1451',
		null,
		'5186',
		null,
		'1382',
		null,
		'923',
		null,
		'467',
		null,
		'219626',
		null,
		'5477',
		null,
		'0400000US11',
		'District of Columbia',
		'0400000US11'
	],
	[
		'8826394',
		null,
		'23013',
		null,
		'4119638',
		null,
		'29189',
		null,
		'4060629',
		null,
		'29304',
		null,
		'59009',
		null,
		'4733',
		null,
		'33379',
		null,
		'3176',
		null,
		'25630',
		null,
		'3044',
		null,
		'688183',
		null,
		'17221',
		null,
		'649138',
		null,
		'16376',
		null,
		'39045',
		null,
		'3560',
		null,
		'21920',
		null,
		'2886',
		null,
		'17125',
		null,
		'2460',
		null,
		'4018573',
		null,
		'26905',
		null,
		'0400000US12',
		'Florida',
		'0400000US12'
	],
	[
		'4092467',
		null,
		'12679',
		null,
		'1917471',
		null,
		'19807',
		null,
		'1895417',
		null,
		'19530',
		null,
		'22054',
		null,
		'2434',
		null,
		'10600',
		null,
		'1756',
		null,
		'11454',
		null,
		'1894',
		null,
		'246640',
		null,
		'9377',
		null,
		'230017',
		null,
		'9266',
		null,
		'16623',
		null,
		'2623',
		null,
		'7716',
		null,
		'1651',
		null,
		'8907',
		null,
		'1817',
		null,
		'1928356',
		null,
		'19832',
		null,
		'0400000US13',
		'Georgia',
		'0400000US13'
	],
	[
		'494827',
		null,
		'4463',
		null,
		'240727',
		null,
		'5335',
		null,
		'236289',
		null,
		'5220',
		null,
		'4438',
		null,
		'898',
		null,
		'2156',
		null,
		'659',
		null,
		'2282',
		null,
		'651',
		null,
		'34775',
		null,
		'3131',
		null,
		'32509',
		null,
		'3095',
		null,
		'2266',
		null,
		'756',
		null,
		'1192',
		null,
		'583',
		null,
		'1074',
		null,
		'452',
		null,
		'219325',
		null,
		'5901',
		null,
		'0400000US15',
		'Hawaii',
		'0400000US15'
	],
	[
		'717151',
		null,
		'4796',
		null,
		'396372',
		null,
		'7169',
		null,
		'393767',
		null,
		'7017',
		null,
		'2605',
		null,
		'810',
		null,
		'774',
		null,
		'469',
		null,
		'1831',
		null,
		'701',
		null,
		'49683',
		null,
		'3637',
		null,
		'47354',
		null,
		'3519',
		null,
		'2329',
		null,
		'683',
		null,
		'831',
		null,
		'390',
		null,
		'1498',
		null,
		'646',
		null,
		'271096',
		null,
		'6627',
		null,
		'0400000US16',
		'Idaho',
		'0400000US16'
	],
	[
		'5056360',
		null,
		'12532',
		null,
		'2282497',
		null,
		'19532',
		null,
		'2258037',
		null,
		'19014',
		null,
		'24460',
		null,
		'2479',
		null,
		'12514',
		null,
		'1948',
		null,
		'11946',
		null,
		'1516',
		null,
		'359331',
		null,
		'10443',
		null,
		'340473',
		null,
		'10380',
		null,
		'18858',
		null,
		'2931',
		null,
		'9697',
		null,
		'1975',
		null,
		'9161',
		null,
		'1915',
		null,
		'2414532',
		null,
		'18706',
		null,
		'0400000US17',
		'Illinois',
		'0400000US17'
	],
	[
		'2726489',
		null,
		'11359',
		null,
		'1307913',
		null,
		'16414',
		null,
		'1293524',
		null,
		'16123',
		null,
		'14389',
		null,
		'1902',
		null,
		'5215',
		null,
		'1057',
		null,
		'9174',
		null,
		'1541',
		null,
		'196488',
		null,
		'8421',
		null,
		'186374',
		null,
		'7866',
		null,
		'10114',
		null,
		'1737',
		null,
		'3748',
		null,
		'1046',
		null,
		'6366',
		null,
		'1244',
		null,
		'1222088',
		null,
		'16272',
		null,
		'0400000US18',
		'Indiana',
		'0400000US18'
	],
	[
		'1330995',
		null,
		'5631',
		null,
		'646759',
		null,
		'8553',
		null,
		'641479',
		null,
		'8498',
		null,
		'5280',
		null,
		'1125',
		null,
		'2059',
		null,
		'785',
		null,
		'3221',
		null,
		'839',
		null,
		'102286',
		null,
		'4821',
		null,
		'98823',
		null,
		'4764',
		null,
		'3463',
		null,
		'1056',
		null,
		'1241',
		null,
		'546',
		null,
		'2222',
		null,
		'833',
		null,
		'581950',
		null,
		'8801',
		null,
		'0400000US19',
		'Iowa',
		'0400000US19'
	],
	[
		'1175294',
		null,
		'6195',
		null,
		'574286',
		null,
		'9532',
		null,
		'569197',
		null,
		'9569',
		null,
		'5089',
		null,
		'1124',
		null,
		'1958',
		null,
		'725',
		null,
		'3131',
		null,
		'878',
		null,
		'78861',
		null,
		'4445',
		null,
		'74962',
		null,
		'4231',
		null,
		'3899',
		null,
		'1044',
		null,
		'1650',
		null,
		'795',
		null,
		'2249',
		null,
		'763',
		null,
		'522147',
		null,
		'10030',
		null,
		'0400000US20',
		'Kansas',
		'0400000US20'
	],
	[
		'1828680',
		null,
		'8263',
		null,
		'860710',
		null,
		'12785',
		null,
		'852749',
		null,
		'12890',
		null,
		'7961',
		null,
		'1255',
		null,
		'2817',
		null,
		'794',
		null,
		'5144',
		null,
		'1045',
		null,
		'132618',
		null,
		'5729',
		null,
		'124800',
		null,
		'5547',
		null,
		'7818',
		null,
		'1937',
		null,
		'3610',
		null,
		'1125',
		null,
		'4208',
		null,
		'1473',
		null,
		'835352',
		null,
		'12391',
		null,
		'0400000US21',
		'Kentucky',
		'0400000US21'
	],
	[
		'1816902',
		null,
		'10634',
		null,
		'754142',
		null,
		'12873',
		null,
		'745693',
		null,
		'12974',
		null,
		'8449',
		null,
		'1542',
		null,
		'3249',
		null,
		'982',
		null,
		'5200',
		null,
		'1270',
		null,
		'132487',
		null,
		'7325',
		null,
		'124352',
		null,
		'7283',
		null,
		'8135',
		null,
		'1583',
		null,
		'2879',
		null,
		'864',
		null,
		'5256',
		null,
		'1295',
		null,
		'930273',
		null,
		'13199',
		null,
		'0400000US22',
		'Louisiana',
		'0400000US22'
	],
	[
		'605338',
		null,
		'5032',
		null,
		'292681',
		null,
		'5984',
		null,
		'288096',
		null,
		'5921',
		null,
		'4585',
		null,
		'1072',
		null,
		'1896',
		null,
		'829',
		null,
		'2689',
		null,
		'650',
		null,
		'60487',
		null,
		'3794',
		null,
		'57954',
		null,
		'3729',
		null,
		'2533',
		null,
		'870',
		null,
		'956',
		null,
		'454',
		null,
		'1577',
		null,
		'690',
		null,
		'252170',
		null,
		'6991',
		null,
		'0400000US23',
		'Maine',
		'0400000US23'
	],
	[
		'2375984',
		null,
		'8175',
		null,
		'1104626',
		null,
		'13299',
		null,
		'1088115',
		null,
		'13529',
		null,
		'16511',
		null,
		'2150',
		null,
		'5306',
		null,
		'1059',
		null,
		'11205',
		null,
		'1868',
		null,
		'162700',
		null,
		'6879',
		null,
		'155369',
		null,
		'6951',
		null,
		'7331',
		null,
		'1461',
		null,
		'3680',
		null,
		'1009',
		null,
		'3651',
		null,
		'1117',
		null,
		'1108658',
		null,
		'15068',
		null,
		'0400000US24',
		'Maryland',
		'0400000US24'
	],
	[
		'2797776',
		null,
		'8835',
		null,
		'1263224',
		null,
		'13630',
		null,
		'1237487',
		null,
		'13294',
		null,
		'25737',
		null,
		'2611',
		null,
		'11530',
		null,
		'1740',
		null,
		'14207',
		null,
		'2099',
		null,
		'225784',
		null,
		'8083',
		null,
		'209462',
		null,
		'8035',
		null,
		'16322',
		null,
		'2499',
		null,
		'8341',
		null,
		'1803',
		null,
		'7981',
		null,
		'1581',
		null,
		'1308768',
		null,
		'16271',
		null,
		'0400000US25',
		'Massachusetts',
		'0400000US25'
	],
	[
		'4089794',
		null,
		'11504',
		null,
		'1868821',
		null,
		'17438',
		null,
		'1850838',
		null,
		'17283',
		null,
		'17983',
		null,
		'2037',
		null,
		'7839',
		null,
		'1403',
		null,
		'10144',
		null,
		'1652',
		null,
		'300932',
		null,
		'8939',
		null,
		'290217',
		null,
		'8879',
		null,
		'10715',
		null,
		'1738',
		null,
		'4823',
		null,
		'1010',
		null,
		'5892',
		null,
		'1526',
		null,
		'1920041',
		null,
		'16853',
		null,
		'0400000US26',
		'Michigan',
		'0400000US26'
	],
	[
		'2322190',
		null,
		'6929',
		null,
		'1147255',
		null,
		'11307',
		null,
		'1135903',
		null,
		'11057',
		null,
		'11352',
		null,
		'1649',
		null,
		'4743',
		null,
		'1029',
		null,
		'6609',
		null,
		'1327',
		null,
		'182299',
		null,
		'6887',
		null,
		'173978',
		null,
		'6900',
		null,
		'8321',
		null,
		'1362',
		null,
		'4556',
		null,
		'1065',
		null,
		'3765',
		null,
		'913',
		null,
		'992636',
		null,
		'10832',
		null,
		'0400000US27',
		'Minnesota',
		'0400000US27'
	],
	[
		'1148340',
		null,
		'8056',
		null,
		'503356',
		null,
		'9840',
		null,
		'500483',
		null,
		'9994',
		null,
		'2873',
		null,
		'860',
		null,
		'768',
		null,
		'366',
		null,
		'2105',
		null,
		'777',
		null,
		'57370',
		null,
		'4261',
		null,
		'54316',
		null,
		'4200',
		null,
		'3054',
		null,
		'1177',
		null,
		'1127',
		null,
		'570',
		null,
		'1927',
		null,
		'943',
		null,
		'587614',
		null,
		'9044',
		null,
		'0400000US28',
		'Mississippi',
		'0400000US28'
	],
	[
		'2521832',
		null,
		'11480',
		null,
		'1168049',
		null,
		'15509',
		null,
		'1157331',
		null,
		'15352',
		null,
		'10718',
		null,
		'1611',
		null,
		'4595',
		null,
		'1066',
		null,
		'6123',
		null,
		'1255',
		null,
		'184926',
		null,
		'7363',
		null,
		'175051',
		null,
		'7169',
		null,
		'9875',
		null,
		'1296',
		null,
		'4095',
		null,
		'702',
		null,
		'5780',
		null,
		'1135',
		null,
		'1168857',
		null,
		'14608',
		null,
		'0400000US29',
		'Missouri',
		'0400000US29'
	],
	[
		'464072',
		null,
		'4326',
		null,
		'223380',
		null,
		'5140',
		null,
		'222194',
		null,
		'5222',
		null,
		'1186',
		null,
		'491',
		null,
		'112',
		null,
		'111',
		null,
		'1074',
		null,
		'492',
		null,
		'37151',
		null,
		'3129',
		null,
		'35913',
		null,
		'3085',
		null,
		'1238',
		null,
		'551',
		null,
		'685',
		null,
		'435',
		null,
		'553',
		null,
		'346',
		null,
		'203541',
		null,
		'5724',
		null,
		'0400000US30',
		'Montana',
		'0400000US30'
	],
	[
		'803157',
		null,
		'3991',
		null,
		'390540',
		null,
		'6987',
		null,
		'388233',
		null,
		'6983',
		null,
		'2307',
		null,
		'541',
		null,
		'973',
		null,
		'372',
		null,
		'1334',
		null,
		'412',
		null,
		'54454',
		null,
		'3864',
		null,
		'52746',
		null,
		'3820',
		null,
		'1708',
		null,
		'637',
		null,
		'917',
		null,
		'444',
		null,
		'791',
		null,
		'480',
		null,
		'358163',
		null,
		'7291',
		null,
		'0400000US31',
		'Nebraska',
		'0400000US31'
	],
	[
		'1198356',
		null,
		'7074',
		null,
		'530175',
		null,
		'9613',
		null,
		'519721',
		null,
		'9434',
		null,
		'10454',
		null,
		'1401',
		null,
		'5234',
		null,
		'988',
		null,
		'5220',
		null,
		'1217',
		null,
		'102547',
		null,
		'6367',
		null,
		'97352',
		null,
		'6173',
		null,
		'5195',
		null,
		'1307',
		null,
		'2396',
		null,
		'646',
		null,
		'2799',
		null,
		'967',
		null,
		'565634',
		null,
		'10085',
		null,
		'0400000US32',
		'Nevada',
		'0400000US32'
	],
	[
		'557220',
		null,
		'4834',
		null,
		'285354',
		null,
		'5422',
		null,
		'279959',
		null,
		'5421',
		null,
		'5395',
		null,
		'1324',
		null,
		'1589',
		null,
		'570',
		null,
		'3806',
		null,
		'1246',
		null,
		'51928',
		null,
		'3981',
		null,
		'49861',
		null,
		'3952',
		null,
		'2067',
		null,
		'734',
		null,
		'874',
		null,
		'458',
		null,
		'1193',
		null,
		'588',
		null,
		'219938',
		null,
		'5680',
		null,
		'0400000US33',
		'New Hampshire',
		'0400000US33'
	],
	[
		'3516978',
		null,
		'9044',
		null,
		'1753523',
		null,
		'16037',
		null,
		'1734984',
		null,
		'16360',
		null,
		'18539',
		null,
		'2334',
		null,
		'8923',
		null,
		'1615',
		null,
		'9616',
		null,
		'1517',
		null,
		'245942',
		null,
		'9181',
		null,
		'234971',
		null,
		'8972',
		null,
		'10971',
		null,
		'1720',
		null,
		'7538',
		null,
		'1597',
		null,
		'3433',
		null,
		'916',
		null,
		'1517513',
		null,
		'16258',
		null,
		'0400000US34',
		'New Jersey',
		'0400000US34'
	],
	[
		'848218',
		null,
		'4975',
		null,
		'344144',
		null,
		'7331',
		null,
		'338452',
		null,
		'7381',
		null,
		'5692',
		null,
		'1192',
		null,
		'1711',
		null,
		'733',
		null,
		'3981',
		null,
		'944',
		null,
		'73821',
		null,
		'5025',
		null,
		'68651',
		null,
		'4558',
		null,
		'5170',
		null,
		'1701',
		null,
		'3964',
		null,
		'1660',
		null,
		'1206',
		null,
		'447',
		null,
		'430253',
		null,
		'8914',
		null,
		'0400000US35',
		'New Mexico',
		'0400000US35'
	],
	[
		'7774308',
		null,
		'19481',
		null,
		'3288930',
		null,
		'25343',
		null,
		'3237344',
		null,
		'25730',
		null,
		'51586',
		null,
		'4125',
		null,
		'28221',
		null,
		'3406',
		null,
		'23365',
		null,
		'2658',
		null,
		'586369',
		null,
		'13722',
		null,
		'544543',
		null,
		'13072',
		null,
		'41826',
		null,
		'4352',
		null,
		'24843',
		null,
		'3329',
		null,
		'16983',
		null,
		'2654',
		null,
		'3899009',
		null,
		'26409',
		null,
		'0400000US36',
		'New York',
		'0400000US36'
	],
	[
		'4299266',
		null,
		'15150',
		null,
		'2057368',
		null,
		'19109',
		null,
		'2036035',
		null,
		'19351',
		null,
		'21333',
		null,
		'2789',
		null,
		'8558',
		null,
		'1532',
		null,
		'12775',
		null,
		'2120',
		null,
		'277064',
		null,
		'10018',
		null,
		'261230',
		null,
		'9610',
		null,
		'15834',
		null,
		'2102',
		null,
		'7269',
		null,
		'1584',
		null,
		'8565',
		null,
		'1651',
		null,
		'1964834',
		null,
		'19381',
		null,
		'0400000US37',
		'North Carolina',
		'0400000US37'
	],
	[
		'331481',
		null,
		'3670',
		null,
		'156026',
		null,
		'4883',
		null,
		'155033',
		null,
		'4899',
		null,
		'993',
		null,
		'431',
		null,
		'362',
		null,
		'295',
		null,
		'631',
		null,
		'329',
		null,
		'23099',
		null,
		'2582',
		null,
		'22193',
		null,
		'2551',
		null,
		'906',
		null,
		'613',
		null,
		'325',
		null,
		'236',
		null,
		'581',
		null,
		'595',
		null,
		'152356',
		null,
		'4525',
		null,
		'0400000US38',
		'North Dakota',
		'0400000US38'
	],
	[
		'4878206',
		null,
		'13413',
		null,
		'2173755',
		null,
		'19532',
		null,
		'2151234',
		null,
		'19206',
		null,
		'22521',
		null,
		'2541',
		null,
		'10964',
		null,
		'1575',
		null,
		'11557',
		null,
		'1784',
		null,
		'380688',
		null,
		'12598',
		null,
		'362583',
		null,
		'12282',
		null,
		'18105',
		null,
		'2363',
		null,
		'6219',
		null,
		'1161',
		null,
		'11886',
		null,
		'2000',
		null,
		'2323763',
		null,
		'21986',
		null,
		'0400000US39',
		'Ohio',
		'0400000US39'
	],
	[
		'1573180',
		null,
		'5742',
		null,
		'746847',
		null,
		'7970',
		null,
		'738706',
		null,
		'8011',
		null,
		'8141',
		null,
		'1262',
		null,
		'2453',
		null,
		'707',
		null,
		'5688',
		null,
		'1105',
		null,
		'106779',
		null,
		'4625',
		null,
		'100909',
		null,
		'4638',
		null,
		'5870',
		null,
		'1222',
		null,
		'2132',
		null,
		'660',
		null,
		'3738',
		null,
		'1023',
		null,
		'719554',
		null,
		'8601',
		null,
		'0400000US40',
		'Oklahoma',
		'0400000US40'
	],
	[
		'1726340',
		null,
		'6662',
		null,
		'788221',
		null,
		'10754',
		null,
		'775549',
		null,
		'10639',
		null,
		'12672',
		null,
		'1962',
		null,
		'4895',
		null,
		'1131',
		null,
		'7777',
		null,
		'1732',
		null,
		'163568',
		null,
		'7605',
		null,
		'152362',
		null,
		'7351',
		null,
		'11206',
		null,
		'1838',
		null,
		'3645',
		null,
		'1222',
		null,
		'7561',
		null,
		'1527',
		null,
		'774551',
		null,
		'11593',
		null,
		'0400000US41',
		'Oregon',
		'0400000US41'
	],
	[
		'5294065',
		null,
		'14260',
		null,
		'2462324',
		null,
		'19809',
		null,
		'2435518',
		null,
		'19793',
		null,
		'26806',
		null,
		'3543',
		null,
		'12873',
		null,
		'2706',
		null,
		'13933',
		null,
		'2092',
		null,
		'387775',
		null,
		'11478',
		null,
		'366389',
		null,
		'10871',
		null,
		'21386',
		null,
		'2839',
		null,
		'8911',
		null,
		'1886',
		null,
		'12475',
		null,
		'1935',
		null,
		'2443966',
		null,
		'20449',
		null,
		'0400000US42',
		'Pennsylvania',
		'0400000US42'
	],
	[
		'446688',
		null,
		'3663',
		null,
		'188207',
		null,
		'5587',
		null,
		'184851',
		null,
		'5561',
		null,
		'3356',
		null,
		'908',
		null,
		'1729',
		null,
		'807',
		null,
		'1627',
		null,
		'617',
		null,
		'40267',
		null,
		'3867',
		null,
		'37575',
		null,
		'3805',
		null,
		'2692',
		null,
		'930',
		null,
		'827',
		null,
		'498',
		null,
		'1865',
		null,
		'769',
		null,
		'218214',
		null,
		'6765',
		null,
		'0400000US44',
		'Rhode Island',
		'0400000US44'
	],
	[
		'2136080',
		null,
		'11784',
		null,
		'1018293',
		null,
		'15568',
		null,
		'1009450',
		null,
		'15448',
		null,
		'8843',
		null,
		'1609',
		null,
		'3827',
		null,
		'1059',
		null,
		'5016',
		null,
		'1130',
		null,
		'119734',
		null,
		'7201',
		null,
		'112865',
		null,
		'7042',
		null,
		'6869',
		null,
		'1920',
		null,
		'1870',
		null,
		'829',
		null,
		'4999',
		null,
		'1675',
		null,
		'998053',
		null,
		'14443',
		null,
		'0400000US45',
		'South Carolina',
		'0400000US45'
	],
	[
		'368300',
		null,
		'3163',
		null,
		'177786',
		null,
		'4467',
		null,
		'176946',
		null,
		'4499',
		null,
		'840',
		null,
		'401',
		null,
		'427',
		null,
		'260',
		null,
		'413',
		null,
		'305',
		null,
		'28696',
		null,
		'2830',
		null,
		'27999',
		null,
		'2846',
		null,
		'697',
		null,
		'346',
		null,
		'315',
		null,
		'239',
		null,
		'382',
		null,
		'225',
		null,
		'161818',
		null,
		'5138',
		null,
		'0400000US46',
		'South Dakota',
		'0400000US46'
	],
	[
		'2846684',
		null,
		'11934',
		null,
		'1342153',
		null,
		'16381',
		null,
		'1330313',
		null,
		'16377',
		null,
		'11840',
		null,
		'1836',
		null,
		'4658',
		null,
		'1106',
		null,
		'7182',
		null,
		'1387',
		null,
		'195854',
		null,
		'8856',
		null,
		'182970',
		null,
		'8232',
		null,
		'12884',
		null,
		'2615',
		null,
		'5614',
		null,
		'1744',
		null,
		'7270',
		null,
		'1960',
		null,
		'1308677',
		null,
		'17492',
		null,
		'0400000US47',
		'Tennessee',
		'0400000US47'
	],
	[
		'11087708',
		null,
		'20293',
		null,
		'5401546',
		null,
		'28187',
		null,
		'5343364',
		null,
		'28079',
		null,
		'58182',
		null,
		'5215',
		null,
		'26648',
		null,
		'2810',
		null,
		'31534',
		null,
		'3828',
		null,
		'755355',
		null,
		'21443',
		null,
		'706285',
		null,
		'20982',
		null,
		'49070',
		null,
		'4968',
		null,
		'24290',
		null,
		'4041',
		null,
		'24780',
		null,
		'3012',
		null,
		'4930807',
		null,
		'30505',
		null,
		'0400000US48',
		'Texas',
		'0400000US48'
	],
	[
		'1129660',
		null,
		'5750',
		null,
		'672316',
		null,
		'8906',
		null,
		'666472',
		null,
		'8995',
		null,
		'5844',
		null,
		'1187',
		null,
		'2195',
		null,
		'675',
		null,
		'3649',
		null,
		'943',
		null,
		'58705',
		null,
		'3885',
		null,
		'55008',
		null,
		'3482',
		null,
		'3697',
		null,
		'1223',
		null,
		'1329',
		null,
		'784',
		null,
		'2368',
		null,
		'815',
		null,
		'398639',
		null,
		'8438',
		null,
		'0400000US49',
		'Utah',
		'0400000US49'
	],
	[
		'277090',
		null,
		'3178',
		null,
		'131234',
		null,
		'4039',
		null,
		'128456',
		null,
		'3909',
		null,
		'2778',
		null,
		'639',
		null,
		'1018',
		null,
		'375',
		null,
		'1760',
		null,
		'546',
		null,
		'29091',
		null,
		'2875',
		null,
		'26841',
		null,
		'2747',
		null,
		'2250',
		null,
		'965',
		null,
		'696',
		null,
		'486',
		null,
		'1554',
		null,
		'854',
		null,
		'116765',
		null,
		'4475',
		null,
		'0400000US50',
		'Vermont',
		'0400000US50'
	],
	[
		'3380607',
		null,
		'12353',
		null,
		'1642002',
		null,
		'15837',
		null,
		'1625405',
		null,
		'16010',
		null,
		'16597',
		null,
		'2123',
		null,
		'7689',
		null,
		'1425',
		null,
		'8908',
		null,
		'1444',
		null,
		'221705',
		null,
		'9225',
		null,
		'210017',
		null,
		'8813',
		null,
		'11688',
		null,
		'1785',
		null,
		'5913',
		null,
		'1200',
		null,
		'5775',
		null,
		'1245',
		null,
		'1516900',
		null,
		'17240',
		null,
		'0400000US51',
		'Virginia',
		'0400000US51'
	],
	[
		'3079953',
		null,
		'10236',
		null,
		'1499199',
		null,
		'14808',
		null,
		'1475316',
		null,
		'14449',
		null,
		'23883',
		null,
		'2801',
		null,
		'11289',
		null,
		'1587',
		null,
		'12594',
		null,
		'2039',
		null,
		'265651',
		null,
		'8161',
		null,
		'247715',
		null,
		'7859',
		null,
		'17936',
		null,
		'2488',
		null,
		'7742',
		null,
		'1660',
		null,
		'10194',
		null,
		'1988',
		null,
		'1315103',
		null,
		'14980',
		null,
		'0400000US53',
		'Washington',
		'0400000US53'
	],
	[
		'736341',
		null,
		'6960',
		null,
		'338510',
		null,
		'6745',
		null,
		'336215',
		null,
		'6757',
		null,
		'2295',
		null,
		'691',
		null,
		'815',
		null,
		'345',
		null,
		'1480',
		null,
		'657',
		null,
		'49938',
		null,
		'3900',
		null,
		'48415',
		null,
		'3733',
		null,
		'1523',
		null,
		'502',
		null,
		'909',
		null,
		'430',
		null,
		'614',
		null,
		'273',
		null,
		'347893',
		null,
		'7458',
		null,
		'0400000US54',
		'West Virginia',
		'0400000US54'
	],
	[
		'2491121',
		null,
		'7766',
		null,
		'1171977',
		null,
		'12919',
		null,
		'1162138',
		null,
		'13033',
		null,
		'9839',
		null,
		'1216',
		null,
		'3508',
		null,
		'858',
		null,
		'6331',
		null,
		'999',
		null,
		'214304',
		null,
		'8524',
		null,
		'206492',
		null,
		'8485',
		null,
		'7812',
		null,
		'1333',
		null,
		'2716',
		null,
		'815',
		null,
		'5096',
		null,
		'1166',
		null,
		'1104840',
		null,
		'14228',
		null,
		'0400000US55',
		'Wisconsin',
		'0400000US55'
	],
	[
		'243321',
		null,
		'3844',
		null,
		'119329',
		null,
		'4949',
		null,
		'118219',
		null,
		'4993',
		null,
		'1110',
		null,
		'843',
		null,
		'40',
		null,
		'68',
		null,
		'1070',
		null,
		'837',
		null,
		'18398',
		null,
		'2310',
		null,
		'17938',
		null,
		'2254',
		null,
		'460',
		null,
		'390',
		null,
		'145',
		null,
		'183',
		null,
		'315',
		null,
		'315',
		null,
		'105594',
		null,
		'4571',
		null,
		'0400000US56',
		'Wyoming',
		'0400000US56'
	],
	[
		'1289311',
		null,
		'9077',
		null,
		'449853',
		null,
		'9197',
		null,
		'447395',
		null,
		'9243',
		null,
		'2458',
		null,
		'770',
		null,
		'993',
		null,
		'501',
		null,
		'1465',
		null,
		'668',
		null,
		'143552',
		null,
		'6292',
		null,
		'137873',
		null,
		'6441',
		null,
		'5679',
		null,
		'1414',
		null,
		'3157',
		null,
		'1022',
		null,
		'2522',
		null,
		'998',
		null,
		'695906',
		null,
		'9885',
		null,
		'0400000US72',
		'Puerto Rico',
		'0400000US72'
	]
];

// Function to transform data
// @ts-ignore
const transformData = (data) => {
	const topics = [
		'Total',
		'Married couple households',
		'Opposite-sex-married',
		'Same-sex-married',
		'Male householder and male spouse',
		'Female householder and female spouse',
		'Cohabitating couple households',
		'Opposite-sex-co',
		'Same-sex-co',
		'Male householder and male partner',
		'Female householder and female partner',
		'All other households'
	];

	const transformedData = [];

	for (let i = 0; i < data.length; i++) {
		const stateData = {};
		const stateInfo = data[i].slice(-3); // Last three entries for state info
		stateData['stateName'] = stateInfo[1];

		const values = data[i].slice(0, data[i].length - 3); // Rest for the values
		const entry = {};
		topics.forEach((topic, index) => {
			// @ts-ignore
			entry[topic] = values[index * 4] ? parseInt(values[index * 4], 10) : null; // Skip every 4th null
		});
		stateData['data'] = entry;

		transformedData.push(stateData);
	}

	return transformedData;
};

// Transform the data
const marriageData = transformData(rawData);

// Write data to a JSON file
fs.writeFileSync('marriageData.json', JSON.stringify(marriageData, null, 2));

console.log('Data has been written to marriageData.json');
