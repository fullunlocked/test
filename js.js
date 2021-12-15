	$(function(){
		$("#gotop").click(function(){
			jQuery("html,body").animate({
				scrollTop:0
			},1000);
		});
		$(window).scroll(function() {
			if ( $(this).scrollTop() > 300){
				$('#gotop').fadeIn("fast");
			} else {
				$('#gotop').stop().fadeOut("fast");
			}
		});
	});
	function mdata(id, name, hp, mp, str, end, dex, agi, mag){
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.mp = mp;
		this.str = str;
		this.end = end;
		this.dex = dex;
		this.agi = agi;
		this.mag = mag;
	}
	function pdata(pStr, pEnd, pDex, pAgi, pMag, pKiller){
		this.pStr = pStr;
		this.pEnd = pEnd;
		this.pDex = pDex;
		this.pAgi = pAgi;
		this.pMag = pMag;
		this.pKiller = pKiller;
	}
	function sdata(id, name, hp, mp, str, end, dex, agi, mag){
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.mp = mp;
		this.str = str;
		this.end = end;
		this.dex = dex;
		this.agi = agi;
		this.mag = mag;
	}
	
	//冒險者
	mNull = new mdata("mNull", "", 0, 0, 0, 0, 0, 0, 0);
	p_mNull = new pdata(0, 0, 0, 0, 0, "");
	mBell_1 = new mdata("mBell_1", "貝爾【英雄願望】", 3601, 259, 1464, 568, 427, 954, 1149);
	p_mBell_1 = new pdata(0.47, 0.11, 0.05, 0.11, 0.47, "猛牛殺手");
	mBell_2 = new mdata("mBell_2", "貝爾【專心納涼】", 2450, 200, 848, 390, 375, 878, 1271);
	p_mBell_2 = new pdata(0.11, 0.11, 0.11, 0.11, 0.61, "---");
	mBell_3 = new mdata("mBell_3", "貝爾【夢想白兔】", 2448, 203, 371, 382, 546, 759, 1317);
	p_mBell_3 = new pdata(0.05, 0.11, 0.05, 0.11, 0.1, "---");
	mBell_4 = new mdata("mBell_4", "貝爾【新春白兔】", 2426, 194, 1407, 439, 519, 812, 353);
	p_mBell_4 = new pdata(0.11, 0.11, 0.05, 0.11, 0.05, "---");
	mBell_5 = new mdata("mBell_5", "貝爾【繼承英裝】", 3695, 263, 1831, 614, 615, 881, 410);
	p_mBell_5 = new pdata(0.15, 0.1, 0.1, 0.1, 0.1, "---");
	mBell_6 = new mdata("mBell_6", "貝爾【立體機動戰】", 3585, 288, 420, 530, 679, 836, 1708);
	p_mBell_6 = new pdata(0.1, 0.1, 0.1, 0.1, 0.15, "---");
	mBell_7 = new mdata("mBell_7", "貝爾【紅燕白兔】", 3609, 282, 420, 538, 660, 832, 1724);
	p_mBell_7 = new pdata(0.1, 0.1, 0.1, 0.1, 0.15, "---");
	mBell_8 = new mdata("mBell_8", "貝爾【月下誓言】", 3691, 264, 1956, 620, 633, 940, 427);
	p_mBell_8 = new pdata(0.25, 0.15, 0.15, 0.15, 0.15, "猛牛殺手");
	mBell_9 = new mdata("mBell_9", "貝爾【超中二病】", 2520, 208, 854, 358, 532, 413, 838);
	p_mBell_9 = new pdata(0.05, 0.05, 0.05, 0.05, 0.05, "---");
	mBell_10 = new mdata("mBell_10", "貝爾【狂野白兔】", 3515, 318, 454, 557, 729, 875, 1869);
	p_mBell_10 = new pdata(0.2, 0.2, 0.2, 0.2, 0.2, "巨人殺手");
	mBell_11 = new mdata("mBell_11", "貝爾【真理領悟者】", 3519, 317, 471, 573, 701, 1047, 1850);
	p_mBell_11 = new pdata(0.25, 0.25, 0.25, 0.25, 0.25, "亡靈殺手");
	mBell_12 = new mdata("mBell_12", "貝爾【正裝一途】", 3585, 303, 1933, 655, 727, 1071, 447);
	p_mBell_12 = new pdata(0.25, 0.25, 0.25, 0.25, 0.25, "---");
	mBell_13 = new mdata("mBell_13", "貝爾【解放之劍】", 3525, 318, 1970, 648, 665, 1104, 447);
	p_mBell_13 = new pdata(0.25, 0.25, 0.25, 0.25, 0.25, "蠕蟲殺手");
	mAis_1 = new mdata("mAis_1", "艾絲【英雄憧憬】", 3755, 256, 1520, 561, 559, 871, 377);
	p_mAis_1 = new pdata(0.1, 0.1, 0, 0.1, 0, "昆蟲殺手");
	mAis_2 = new mdata("mAis_2", "艾絲【絢爛戰姬】", 2456, 206, 1023, 449, 695, 597, 636);
	p_mAis_2 = new pdata(0.7, 0.1, 0.1, 0.1, 0.1, "---");
	mAis_3 = new mdata("mAis_3", "艾絲【聖誕劍姬】", 2580, 266, 357, 387, 516, 755, 1319);
	p_mAis_3 = new pdata(0, 0.1, 0, 0.1, 0.11, "魔獸殺手");
	mAis_4 = new mdata("mAis_4", "艾絲【浴室戰姬】", 2448, 200, 905, 407, 687, 451, 1219);
	p_mAis_4 = new pdata(0, 0.1, 0.1, 0, 0.2, "---");
	mAis_5 = new mdata("mAis_5", "艾絲【煌風戰姬】", 3807, 261, 1911, 660, 663, 945, 431);
	p_mAis_5 = new pdata(0.2, 0.2, 0.2, 0.2, 0.2, "仙精殺手");
	mAis_6 = new mdata("mAis_6", "艾絲【英裝戰姬】", 3825, 257, 1831, 618, 615, 877, 378);
	p_mAis_6 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mAis_7 = new mdata("mAis_7", "艾絲【夏風戰姬】", 3823, 257, 1894, 658, 665, 949, 378);
	p_mAis_7 = new pdata(0.2, 0.2, 0.2, 0.2, 0, "---");
	mAis_8 = new mdata("mAis_8", "艾絲【飢餓喪心】", 3859, 248, 1836, 643, 635, 907, 378);
	p_mAis_8 = new pdata(0.15, 0.15, 0.15, 0.15, 0, "---");
	mAis_9 = new mdata("mAis_9", "艾絲【進擊的劍姬】", 3875, 244, 1843, 602, 596, 900, 378);
	p_mAis_9 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mAis_10 = new mdata("mAis_10", "艾絲【豪花劍爛】", 2636, 270, 336, 391, 566, 743, 1400);
	p_mAis_10 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mAis_11 = new mdata("mAis_11", "艾絲【蜜味劍姬】", 3717, 361, 387, 535, 686, 820, 1713);
	p_mAis_11 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "硬材殺手");
	mAis_12 = new mdata("mAis_12", "艾絲【魔王劍姬】", 3827, 256, 1853, 610, 609, 889, 378);
	p_mAis_12 = new pdata(0.15, 0.15, 0.1, 0.1, 0, "---");
	mAis_13 = new mdata("mAis_13", "艾絲【超天使長】", 2556, 210, 1083, 370, 451, 627, 286);
	p_mAis_13 = new pdata(0.05, 0.05, 0, 0.05, 0, "---");
	mAis_14 = new mdata("mAis_14", "艾絲【美姬】", 3556, 349, 1040, 515, 696, 1149, 1596);
	p_mAis_14 = new pdata(0, 0, 0, 0.4, 0.4, "水棲殺手");
	mAis_15 = new mdata("mAis_15", "艾絲【翠裝劍姬】", 3689, 303, 1906, 563, 720, 1103, 368);
	p_mAis_15 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mAis_16 = new mdata("mAis_16", "艾絲【舞裝劍姬】", 3741, 290, 1996, 558, 776, 963, 368);
	p_mAis_16 = new pdata(0.25, 0, 0.25, 0.25, 0, "昆蟲殺手");
	mLefiya_1 = new mdata("mLefiya_1", "蕾菲亞【圓環絕唱】", 2801, 351, 394, 532, 645, 759, 1582);
	p_mLefiya_1 = new pdata(0, 0.1, 0.1, 0, 0.07, "硬材殺手");
	mLefiya_2 = new mdata("mLefiya_2", "蕾菲亞【害羞的精靈】", 1676, 271, 347, 371, 564, 748, 1285);
	p_mLefiya_2 = new pdata(0, 0.1, 0.1, 0.1, 0.1, "---");
	mLefiya_3 = new mdata("mLefiya_3", "蕾菲亞【精靈幻冬】", 2406, 204, 919, 402, 626, 436, 1316);
	p_mLefiya_3 = new pdata(0, 0.08, 0, 0, 0.3, "---");
	mLefiya_4 = new mdata("mLefiya_4", "蕾菲亞【覺醒輪唱】", 3757, 351, 460, 588, 695, 895, 1787);
	p_mLefiya_4 = new pdata(0.2, 0.2, 0.2, 0.2, 0.2, "仙精殺手");
	mLefiya_5 = new mdata("mLefiya_5", "蕾菲亞【精靈英裝】", 3769, 348, 387, 547, 653, 839, 1716);
	p_mLefiya_5 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mLefiya_6 = new mdata("mLefiya_6", "蕾菲亞【藍沖精靈】", 3769, 348, 387, 584, 705, 908, 1773);
	p_mLefiya_6 = new pdata(0, 0.2, 0.2, 0.2, 0.2, "---");
	mLefiya_7 = new mdata("mLefiya_7", "蕾菲亞【暴杖精靈】", 3681, 370, 392, 578, 694, 922, 1770);
	p_mLefiya_7 = new pdata(0, 0.2, 0.2, 0.2, 0.2, "---");
	mLefiya_8 = new mdata("mLefiya_8", "蕾菲亞【花魁精靈】", 3781, 345, 387, 548, 659, 833, 1713);
	p_mLefiya_8 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mLefiya_9 = new mdata("mLefiya_9", "蕾菲亞【優美精靈】", 3412, 295, 898, 441, 645, 535, 1176);
	p_mLefiya_9 = new pdata(0, 0, 0.15, 0.15, 0.15, "---");
	mLefiya_10 = new mdata("mLefiya_10", "蕾菲亞【愛之魔法少女】", 2576, 285, 330, 397, 456, 651, 1055);
	p_mLefiya_10 = new pdata(0, 0.05, 0.05, 0.05, 0.05, "---");
	mLefiya_11 = new mdata("mLefiya_11", "蕾菲亞【秀才優等生】", 3627, 396, 387, 491, 702, 965, 1931);
	p_mLefiya_11 = new pdata(0, 0, 0.25, 0.25, 0.25, "幽魔殺手");
	mLefiya_12 = new mdata("mLefiya_12", "蕾菲亞【千歌精靈】", 3563, 412, 388, 491, 702, 1004, 1891);
	p_mLefiya_12 = new pdata(0, 0, 0.25, 0.25, 0.25, "昆蟲殺手");
	mLiliruca_1 = new mdata("mLiliruca_1", "莉莉露卡【獸人偽裝】", 3391, 338, 568, 490, 889, 681, 1350);
	p_mLiliruca_1 = new pdata(0, 0.055, 0.1, 0.1, 0.055, "---");
	mLiliruca_2 = new mdata("mLiliruca_2", "莉莉露卡【享盡溫泉】", 2510, 270, 345, 381, 568, 767, 1373);
	p_mLiliruca_2 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mLiliruca_3 = new mdata("mLiliruca_3", "莉莉露卡【可憐旅行】", 2516, 300, 337, 385, 556, 775, 1383);
	p_mLiliruca_3 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mLiliruca_4 = new mdata("mLiliruca_4", "莉莉露卡【盡享常夏】", 3753, 352, 387, 593, 713, 905, 1759);
	p_mLiliruca_4 = new pdata(0, 0.2, 0.2, 0.2, 0.2, "---");
	mLiliruca_5 = new mdata("mLiliruca_5", "莉莉露卡【雪見聖夜服】", 2492, 215, 903, 352, 607, 545, 1185);
	p_mLiliruca_5 = new pdata(0, 0, 0, 0.15, 0.15, "---");
	mLiliruca_6 = new mdata("mLiliruca_6", "莉莉露卡【天鳴一矢】", 3799, 263, 1828, 581, 662, 890, 378);
	p_mLiliruca_6 = new pdata(0.15, 0, 0.15, 0.15, 0, "蠕蟲殺手");
	mLiliruca_7 = new mdata("mLiliruca_7", "莉莉露卡【超合金機器人】", 2488, 216, 789, 336, 539, 429, 864);
	p_mLiliruca_7 = new pdata(0, 0.05, 0.05, 0.05, 0.05, "---");
	mLiliruca_8 = new mdata("mLiliruca_8", "莉莉露卡【白慕婚衣】", 3645, 379, 387, 528, 641, 977, 1716);
	p_mLiliruca_8 = new pdata(0, 0.1, 0.1, 0.25, 0.15, "植物殺手");
	mLiliruca_9 = new mdata("mLiliruca_9", "莉莉露卡【批灰少年】", 3631, 395, 387, 491, 705, 1087, 1806);
	p_mLiliruca_9 = new pdata(0, 0, 0.25, 0.25, 0.25, "幽魔殺手");
	mLiliruca_10 = new mdata("mLiliruca_10", "莉莉露卡【堅韌之心】", 3702, 315, 1453, 514, 932, 963, 1052);
	p_mLiliruca_10 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mWelf_1 = new mdata("mWelf_1", "韋爾夫【咆哮魔刃】", 4414, 263, 1039, 962, 694, 335, 516);
	p_mWelf_1 = new pdata(0, 0.05, 0.1, 0, 0.1, "---");
	mWelf_2 = new mdata("mWelf_2", "韋爾夫【鍛火鐵匠】", 3582, 330, 1040, 528, 719, 606, 1578);
	p_mWelf_2 = new pdata(0, 0, 0, 0.25, 0.25, "蠕蟲殺手");
	mRyuu_1 = new mdata("mRyuu_1", "琉【疾風】", 3576, 306, 733, 613, 794, 622, 955);
	p_mRyuu_1 = new pdata(0, 0.1, 0.1, 0.1, 0.1, "---");
	mRyuu_2 = new mdata("mRyuu_2", "琉【聖誕夜疾風】", 2470, 271, 354, 383, 515, 765, 1317);
	p_mRyuu_2 = new pdata(0, 0.1, 0, 0.1, 0.11, "---");
	mRyuu_3 = new mdata("mRyuu_3", "琉【男裝疾風】", 3622, 320, 1040, 573, 789, 506, 1438);
	p_mRyuu_3 = new pdata(0, 0.1, 0.1, 0.1, 0.1, "---");
	mRyuu_4 = new mdata("mRyuu_4", "琉【蒼煌精靈】", 2592, 281, 336, 371, 556, 830, 1340);
	p_mRyuu_4 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mRyuu_5 = new mdata("mRyuu_5", "琉【佳麗淑女】", 3755, 274, 1819, 562, 628, 955, 378);
	p_mRyuu_5 = new pdata(0.15, 0, 0.15, 0.15, 0, "硬材殺手");
	mRyuu_6 = new mdata("mRyuu_6", "琉【咆荒疾風】", 3652, 315, 1426, 515, 787, 575, 1130);
	p_mRyuu_6 = new pdata(0.15, 0, 0.15, 0.15, 0, "---");
	mRyuu_7 = new mdata("mRyuu_7", "琉【精靈騎士】", 3827, 256, 1961, 675, 673, 1003, 378);
	p_mRyuu_7 = new pdata(0.25, 0.25, 0.25, 0.25, 0, "龍系殺手");
	mRyuu_8 = new mdata("mRyuu_8", "琉【穿刺雷火】", 3737, 291, 1906, 560, 735, 1091, 368);
	p_mRyuu_8 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mRyuu_9 = new mdata("mRyuu_9", "琉【紅衣精靈】", 3575, 409, 387, 510, 800, 910, 1865);
	p_mRyuu_9 = new pdata(0, 0, 0.25, 0.25, 0.25, "蠕蟲殺手");
	mMikoto_1 = new mdata("mMikoto_1", "命【女忍武士】", 3606, 294, 985, 617, 972, 562, 734);
	p_mMikoto_1 = new pdata(0.1, 0.11, 0.1, 0, 0, "---");
	mMikoto_2 = new mdata("mMikoto_2", "命【遠東的和裝】", 2436, 201, 919, 406, 626, 446, 1100);
	p_mMikoto_2 = new pdata(0, 0.11, 0, 0, 0.09, "巨人殺手");
	mMikoto_3 = new mdata("mMikoto_3", "命【戀心撫子】", 3564, 337, 310, 462, 573, 712, 1459);
	p_mMikoto_3 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mMikoto_4 = new mdata("mMikoto_4", "命【女忍】", 3691, 380, 387, 491, 739, 1010, 1850);
	p_mMikoto_4 = new pdata(0, 0, 0.25, 0.25, 0.25, "水棲殺手");
	mMikoto_5 = new mdata("mMikoto_5", "命【扭轉乾坤】", 3801, 275, 1915, 570, 720, 1085, 368);
	p_mMikoto_5 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mFinn_1 = new mdata("mFinn_1", "芬恩【戴面具的勇者】", 3626, 294, 989, 575, 792, 617, 730);
	p_mFinn_1 = new pdata(0.1, 0, 0.1, 0.1, 0, "---");
	mFinn_2 = new mdata("mFinn_2", "芬恩【華麗紳士】", 2542, 189, 1172, 349, 530, 750, 327);
	p_mFinn_2 = new pdata(0.1, 0, 0.1, 0.05, 0, "---");
	mFinn_3 = new mdata("mFinn_3", "芬恩【閃劍勇者】", 2676, 180, 1423, 430, 548, 901, 315);
	p_mFinn_3 = new pdata(0.1, 0.1, 0.1, 0.1, 0, "---");
	mFinn_4 = new mdata("mFinn_4", "芬恩【異鄉羽織】", 3484, 279, 1184, 476, 621, 510, 908);
	p_mFinn_4 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mRiveria_1 = new mdata("mRiveria_1", "里維莉亞【王族精靈】", 3381, 341, 571, 474, 811, 625, 1407);
	p_mRiveria_1 = new pdata(0, 0, 0, 0, 0.11, "---");
	mRiveria_2 = new mdata("mRiveria_2", "里維莉亞【聖白之王族】", 2452, 225, 900, 405, 610, 490, 1042);
	p_mRiveria_2 = new pdata(0, 0.1, 0, 0.1, 0, "---");
	mRiveria_3 = new mdata("mRiveria_3", "里維莉亞【王族正裝】", 3733, 357, 387, 495, 656, 954, 1736);
	p_mRiveria_3 = new pdata(0, 0, 0.15, 0.15, 0.2, "龍系殺手");
	mRiveria_4 = new mdata("mRiveria_4", "里維莉亞【女王】", 3675, 384, 387, 490, 812, 911, 1876);
	p_mRiveria_4 = new pdata(0, 0, 0.25, 0.25, 0.25, "水棲殺手");
	mRiveria_5 = new mdata("mRiveria_5", "里維莉亞【賀新王族】", 3583, 407, 387, 491, 702, 1085, 1811);
	p_mRiveria_5 = new pdata(0, 0, 0.25, 0.25, 0.25, "魔獸殺手");
	mTione_1 = new mdata("mTione_1", "蒂奧涅【流麗艷舞】", 2461, 204, 1026, 471, 631, 625, 576);
	p_mTione_1 = new pdata(0.7, 0.15, 0, 0.15, 0, "---");
	mTione_2 = new mdata("mTione_2", "蒂奧涅【薔薇色之華】", 3811, 260, 1828, 614, 619, 879, 378);
	p_mTione_2 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mTione_3 = new mdata("mTione_3", "蒂奧涅【紅牡丹】", 2552, 291, 336, 402, 581, 759, 1357);
	p_mTione_3 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "魔獸殺手");
	mTione_4 = new mdata("mTione_4", "蒂奧涅【熱情暴走】", 3715, 384, 1898, 615, 628, 865, 378);
	p_mTione_4 = new pdata(0.2, 0.1, 0.1, 0.1, 0, "植物殺手");
	mTione_5 = new mdata("mTione_5", "蒂奧涅【學院教師】", 3486, 369, 310, 456, 574, 770, 1531);
	p_mTione_5 = new pdata(0, 0.15, 0.15, 0.15, 0.15, "幽魔殺手");
	mTiona_1 = new mdata("mTiona_1", "蒂奧娜【百華亂舞】", 2461, 204, 1083, 452, 632, 598, 575);
	p_mTiona_1 = new pdata(0.8, 0.1, 0, 0.1, 0, "---");
	mTiona_2 = new mdata("mTiona_2", "蒂奧娜【琥珀色之華】", 2540, 203, 1101, 402, 685, 482, 981);
	p_mTiona_2 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mTiona_3 = new mdata("mTiona_3", "蒂奧娜【喧噪優美】", 3692, 305, 1363, 520, 851, 568, 1130);
	p_mTiona_3 = new pdata(0.15, 0, 0.15, 0.15, 0, "---");
	mBete_1 = new mdata("mBete_1", "伯特【月光黯淡的白狼】", 3785, 253, 1522, 548, 555, 876, 365);
	p_mBete_1 = new pdata(0.1, 0.05, 0, 0.1, 0, "魔獸殺手");
	mBete_2 = new mdata("mBete_2", "伯特【魔屠月狼】", 3871, 245, 1905, 650, 657, 955, 378);
	p_mBete_2 = new pdata(0.2, 0.2, 0.2, 0.2, 0, "---");
	mBete_3 = new mdata("mBete_3", "伯特【一匹狼人】", 3777, 281, 1912, 555, 688, 1138, 368);
	p_mBete_3 = new pdata(0.25, 0, 0.25, 0.25, 0, "魔獸殺手");
	mGareth_1 = new mdata("mGareth_1", "格瑞斯【初旭戰斧】", 3154, 186, 922, 797, 538, 319, 349);
	p_mGareth_1 = new pdata(0.1, 0.04, 0, 0, 0, "---");
	mAsfi_1 = new mdata("mAsfi_1", "亞絲菲【美麗的海姬】", 2401, 209, 643, 445, 697, 592, 1025);
	p_mAsfi_1 = new pdata(0.1, 0.1, 0.1, 0.1, 0.7, "---");
	mAsfi_2 = new mdata("mAsfi_2", "亞絲菲【湯治海姬】", 2570, 189, 1465, 432, 552, 808, 324);
	p_mAsfi_2 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mAsfi_3 = new mdata("mAsfi_3", "亞絲菲【萬能鬥士】", 2512, 210, 919, 400, 619, 500, 1010);
	p_mAsfi_3 = new pdata(0, 0.1, 0, 0.1, 0, "---");
	mAsfi_4 = new mdata("mAsfi_4", "亞絲菲【閃雷萬能】", 3668, 311, 1518, 522, 797, 678, 1130);
	p_mAsfi_4 = new pdata(0.3, 0, 0.15, 0.3, 0, "昆蟲殺手");
	mOttar_1 = new mdata("mOttar_1", "奧它【猛者】", 2630, 185, 1397, 427, 482, 711, 317);
	p_mOttar_1 = new pdata(0.1, 0.1, 0, 0, 0, "---");
	mOttar_2 = new mdata("mOttar_2", "奧它【頂點君臨】", 2652, 186, 1431, 440, 562, 768, 317);
	p_mOttar_2 = new pdata(0.1, 0.1, 0.1, 0.1, 0, "---");
	mOttar_3 = new mdata("mOttar_3", "奧它【猛者豪壯】", 3787, 266, 1993, 557, 803, 782, 378);
	p_mOttar_3 = new pdata(0.3, 0, 0.3, 0, 0, "昆蟲殺手");
	mTsubaki_1 = new mdata("mTsubaki_1", "椿【鍛鐵倒千】", 2566, 190, 1382, 446, 545, 718, 319);
	p_mTsubaki_1 = new pdata(0.08, 0.1, 0.08, 0, 0, "龍系殺手");
	mTsubaki_2 = new mdata("mTsubaki_2", "椿【無雙巨師】", 3725, 294, 1961, 553, 701, 1079, 368);
	p_mTsubaki_2 = new pdata(0.25, 0, 0.25, 0.25, 0, "蠕蟲殺手");
	mArnya_1 = new mdata("mArnya_1", "阿妮雅【貓人槍兵】", 2580, 186, 1394, 423, 481, 788, 323);
	p_mArnya_1 = new pdata(0.1, 0.1, 0, 0.1, 0, "---");
	mArnya_2 = new mdata("mArnya_2", "阿妮雅【聖夜貓人】", 2600, 279, 336, 385, 603, 741, 1370);
	p_mArnya_2 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mArnya_3 = new mdata("mArnya_3", "阿妮雅【果敢活劇】", 2468, 221, 1062, 387, 667, 553, 981);
	p_mArnya_3 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mArnya_4 = new mdata("mArnya_4", "阿妮雅【貓出鬼沒】", 3601, 325, 1992, 553, 747, 1001, 368);
	p_mArnya_4 = new pdata(0.25, 0, 0.25, 0.25, 0, "魔獸殺手");
	mChloe_1 = new mdata("mChloe_1", "可蘿伊【黑貓暗殺者】", 2426, 209, 1113, 448, 634, 599, 576);
	p_mChloe_1 = new pdata(0.85, 0.1, 0, 0.1, 0, "---");
	mChloe_2 = new mdata("mChloe_2", "可蘿伊【聖夜花冠】", 3432, 292, 1170, 478, 623, 520, 908);
	p_mChloe_2 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mChloe_3 = new mdata("mChloe_3", "可蘿伊【颯爽活劇】", 3637, 381, 387, 531, 684, 816, 1724);
	p_mChloe_3 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mChloe_4 = new mdata("mChloe_4", "可蘿伊【黑貓】", 3765, 284, 1907, 556, 768, 1061, 368);
	p_mChloe_4 = new pdata(0.25, 0, 0.25, 0.25, 0, "水棲殺手");
	mLunoire_1 = new mdata("mLunoire_1", "露諾娃【黑拳】", 3815, 259, 1824, 607, 609, 900, 378);
	p_mLunoire_1 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mChigusa_1 = new mdata("mChigusa_1", "千草【風花豔麗】", 2231, 238, 431, 355, 724, 661, 1122);
	p_mChigusa_1 = new pdata(0, 0.1, 0, 0.1, 0.1, "---");
	mChigusa_2 = new mdata("mChigusa_2", "千草【秘湯見聞】", 248, 189, 1131, 405, 685, 452, 980);
	p_mChigusa_2 = new pdata(0.2, 0.1, 0.1, 0, 0, "---");
	mChigusa_3 = new mdata("mChigusa_3", "千草【風姿華傳】", 2492, 215, 898, 400, 605, 470, 1133);
	p_mChigusa_3 = new pdata(0, 0.1, 0, 0, 0.1, "---");
	mChigusa_4 = new mdata("mChigusa_4", "千草【霜逝萌芽】", 3633, 317, 1928, 576, 743, 1040, 368);
	p_mChigusa_4 = new pdata(0.25, 0, 0.25, 0.25, 0, "蠕蟲殺手");
	mOuka_1 = new mdata("mOuka_1", "櫻花【鐵心武者】", 3216, 171, 818, 797, 590, 342, 332);
	p_mOuka_1 = new pdata(0.1, 0, 0.1, 0.1, 0, "---");
	mFilvis_1 = new mdata("mFilvis_1", "菲兒葳絲【開運巫女】", 2490, 269, 341, 375, 508, 784, 1320);
	p_mFilvis_1 = new pdata(0, 0.1, 0, 0.15, 0.13, "---");
	mFilvis_2 = new mdata("mFilvis_2", "菲兒葳絲【淑裝精靈】", 2600, 279, 336, 390, 570, 754, 1325);
	p_mFilvis_2 = new pdata(0, 0.1, 0.1, 0.1, 0.1, "---");
	mFilvis_3 = new mdata("mFilvis_3", "菲兒葳絲【加護裝精靈】", 3630, 318, 1040, 576, 773, 520, 1489);
	p_mFilvis_3 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mFilvis_4 = new mdata("mFilvis_4", "菲兒葳絲【黑暗暴走】", 3547, 416, 387, 494, 756, 909, 1930);
	p_mFilvis_4 = new pdata(0, 0, 0.25, 0.25, 0.25, "幽魔殺手");
	mFilvis_5 = new mdata("mFilvis_5", "菲兒葳絲【輝裝精靈】", 3631, 395, 388, 501, 702, 1014, 1868);
	p_mFilvis_5 = new pdata(0, 0, 0.25, 0.25, 0.25, "昆蟲殺手");
	mAirmid_1 = new mdata("mAirmid_1", "阿蜜德【戰場的聖女】", 2231, 241, 434, 321, 716, 660, 1097);
	p_mAirmid_1 = new pdata(0, 0.05, 0, 0.1, 0.11, "---");
	mAirmid_2 = new mdata("mAirmid_2", "阿蜜德【渚之聖女】", 3622, 320, 1040, 615, 837, 567, 1585);
	p_mAirmid_2 = new pdata(0, 0.2, 0.2, 0.2, 0.25, "---");
	mAirmid_3 = new mdata("mAirmid_3", "阿蜜德【臨時治療師】", 3492, 365, 1040, 545, 697, 1013, 1689);
	p_mAirmid_3 = new pdata(0, 0, 0, 0.4, 0.4, "---");
	mFels_1 = new mdata("mFels_1", "費爾斯【支援之影】", 3401, 339, 569, 536, 953, 746, 1498);
	p_mFels_1 = new pdata(0, 0.2, 0.2, 0.2, 0.2, "---");
	mMord_1 = new mdata("mMord_1", "摩多【流氓作風】", 3654, 239, 1520, 616, 532, 738, 316);
	p_mMord_11 = new pdata(0.15, 0.15, 0.15, 0.15, 0, "妖鬼殺手");
	mAnakitty_1 = new mdata("mAnakitty_1", "安娜琪蒂【白刃一閃】", 3672, 310, 1556, 651, 907, 599, 1130);
	p_mAnakitty_1 = new pdata(0.3, 0.3, 0.3, 0.3, 0, "---");
	mAnakitty_2 = new mdata("mAnakitty_2", "安娜琪蒂【黃昏貴貓】", 3649, 313, 1906, 554, 707, 1126, 368);
	p_mAnakitty_2 = new pdata(0.25, 0, 0.25, 0.25, 0, "昆蟲殺手");
	mRiine_1 = new mdata("mRiine_1", "莉涅【獻身導師】", 3606, 324, 1040, 584, 817, 528, 1529);
	p_mRiine_1 = new pdata(0, 0.15, 0.15, 0.1, 0.2, "---");
	mRiine_2 = new mdata("mRiine_2", "莉涅【黃昏侍者】", 3510, 363, 1229, 515, 739, 1110, 1413);
	p_mRiine_2 = new pdata(0, 0, 0, 0.4, 0.4, "昆蟲殺手");
	mRaul_1 = new mdata("mRaul_1", "勞爾【惡夜退治】", 3538, 341, 1040, 579, 815, 491, 1472);
	p_mRaul_1 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "---");
	mNaaza_1 = new mdata("mNaaza_1", "娜扎【藥師射手】", 2472, 220, 1061, 418, 619, 514, 977);
	p_mNaaza_1 = new pdata(0.15, 0.1, 0, 0.1, 0, "---");
	mShakti_1 = new mdata("mShakti_1", "夏克提【賭場麗人】", 3672, 310, 1365, 576, 723, 510, 1130);
	p_mShakti_1 = new pdata(0.1, 0.1, 0, 0.1, 0, "---");
	mShakti_2 = new mdata("mShakti_2", "夏克提【青蓮華】", 3596, 241, 1310, 567, 537, 733, 326);
	p_mShakti_2 = new pdata(0, 0.2, 0.1, 0.1, 0, "---");
	mArtemis_1 = new mdata("mArtemis_1", "阿緹蜜絲【三大處女神】", 3716, 299, 1507, 521, 861, 570, 1130);
	p_mArtemis_1 = new pdata(0.25, 0, 0.25, 0.15, 0, "昆蟲殺手");
	mArgonaut_1 = new mdata("mArgonaut_1", "阿爾戈【跳樑小丑】", 3650, 240, 1479, 519, 569, 877, 316);
	p_mArgonaut_1 = new pdata(0.15, 0, 0.15, 0.3, 0, "魔獸殺手");
	mArgonaut_2 = new mdata("mArgonaut_2", "阿爾戈【始源英雄】", 3717, 296, 1968, 687, 683, 1048, 368);
	p_mArgonaut_2 = new pdata(0.25, 0.25, 0.25, 0.25, 0, "猛牛殺手");
	mElmina_1 = new mdata("mElmina_1", "埃爾米納【死舞刻絕】", 3853, 262, 1971, 552, 733, 1038, 368);
	p_mElmina_1 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mCrozzo_1 = new mdata("mCrozzo_1", "克羅佐【始源血脈】", 3873, 257, 1961, 566, 751, 1013, 368);
	p_mCrozzo_1 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mYuri_1 = new mdata("mYuri_1", "尤里【狼牙榮傲】", 3793, 277, 1987, 562, 785, 958, 368);
	p_mYuri_1 = new pdata(0.25, 0, 0.25, 0.25, 0, "魔獸殺手");
	mGalmus_1 = new mdata("mGalmus_1", "格爾穆斯【剛鎚嚴軀】", 3706, 314, 1712, 767, 696, 441, 1130);
	p_mGalmus_1 = new pdata(0.4, 0.4, 0, 0, 0, "龍系殺手");
	mFina_1 = new mdata("mFina_1", "菲娜【精靈詠才】", 3731, 370, 387, 492, 774, 946, 1877);
	p_mFina_1 = new pdata(0, 0, 0.25, 0.25, 0.25, "魔獸殺手");
	mHyakinthos_1 = new mdata("mHyakinthos_1", "雅辛托斯【高傲光寵】", 3885, 254, 1896, 684, 701, 957, 368);
	p_mHyakinthos_1 = new pdata(0.2, 0.2, 0.2, 0.2, 0, "---");
	mDaphne_1 = new mdata("mDaphne_1", "達芙妮【靜艦的指揮】", 3670, 323, 1426, 514, 788, 1169, 1052);
	p_mDaphne_1 = new pdata(0.15, 0, 0.15, 0.5, 0, "---");
	mDaphne_2 = new mdata("mDaphne_1", "達芙妮【月桂揮風】", 3598, 341, 1475, 538, 1001, 942, 1052);
	p_mDaphne_2 = new pdata(0.25, 0, 0.25, 0.4, 0, "魔獸殺手");
	mCassandra_1 = new mdata("mCassandra_1", "卡珊德拉【悲觀者】", 2548, 351, 1040, 680, 771, 675, 1679);
	p_mCassandra_1 = new pdata(0, 0.4, 0, 0, 0.4, "---");
	mLena_1 = new mdata("mLena_1", "蕾娜【猛戀少女】", 3849, 263, 1852, 726, 738, 923, 368);
	p_mLena_1 = new pdata(0.2, 0.2, 0.2, 0.2, 0.2, "---");
	mAisha_1 = new mdata("mAisha_1", "阿伊莎【麗傑】", 3729, 293, 1942, 576, 725, 1048, 368);
	p_mAisha_1 = new pdata(0.25, 0, 0.25, 0.25, 0, "妖鬼殺手");
	mAisha_2 = new mdata("mAisha_2", "阿伊莎【勇姿麗傑】", 3645, 314, 2341, 561, 805, 970, 368);
	p_mAisha_2 = new pdata(0.55, 0, 0.25, 0.25, 0, "蠕蟲殺手");
	mSamila_1 = new mdata("mSamila_1", "薩米拉【鬥體絕戰】", 3889, 253, 1911, 566, 806, 1008, 368);
	p_mSamila_1 = new pdata(0.25, 0, 0.25, 0.25, 0, "---");
	mHaruhime_1 = new mdata("mHaruhime_1", "春姬【妖狐之姬】", 3440, 378, 1040, 514, 848, 838, 1647);
	p_mHaruhime_1 = new pdata(0, 0, 0.25, 0.25, 0.25, "---");
	mHaruhime_2 = new mdata("mHaruhime_2", "春姬【銀雪白狐】", 3444, 377, 1040, 515, 698, 1110, 1633);
	p_mHaruhime_2 = new pdata(0, 0, 0, 0.4, 0.4, "---");
	mMikasa_1 = new mdata("mMikasa_1", "米卡莎【訓練兵首席】", 3843, 252, 1834, 578, 624, 816, 378);
	p_mMikasa_1 = new pdata(0.15, 0, 0.15, 0, 0, "巨人殺手");
	mLevi_1 = new mdata("mLevi_1", "里維【人類最強】", 3855, 249, 1840, 558, 636, 931, 378);
	p_mLevi_1 = new pdata(0.15, 0, 0.15, 0.15, 0, "巨人殺手");
	mEren_1 = new mdata("mEren_1", "艾連【自由之翼】", 3536, 256, 1470, 544, 523, 731, 326);
	p_mEren_1 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mTohka_1 = new mdata("mTohka_1", "十香【公主】", 3783, 267, 1832, 594, 596, 919, 378);
	p_mTohka_1 = new pdata(0.15, 0.1, 0.1, 0.1, 0, "---");
	mOrigami_1 = new mdata("mOrigami_1", "折紙【天使】", 3745, 354, 387, 538, 652, 863, 1674);
	p_mOrigami_1 = new pdata(0, 0.1, 0.1, 0.1, 0.15, "仙精殺手");
	mKurumi_1 = new mdata("mKurumi_1", "狂三【夢魘】", 3676, 309, 1326, 514, 706, 725, 1130);
	p_mKurumi_1 = new pdata(0.1, 0, 0, 0.35, 0, "仙精殺手");

	//支援者
	sNull = new sdata("sNull", "", 0, 0, 0, 0, 0, 0, 0);
	sBell_1 = new sdata("sBell_1", "貝爾【活屍眷族】", 1128, 132, 337, 320, 291, 183, 337);
	sAis_1 = new sdata("sAis_1", "艾絲【都市之外】", 818, 199, 639, 275, 302, 446, 211);
	sAis_2 = new sdata("sAis_2", "艾絲【幕後劍姬】", 1050, 141, 343, 215, 354, 595, 343);
	sHestia_1 = new sdata("sHestia_1", "赫斯緹雅【打工女神】", 918, 154, 548, 281, 312, 367, 214);
	sHestia_2 = new sdata("sHestia_2", "赫斯緹雅【聖鐘女神】", 748, 224, 217, 227, 256, 289, 578);
	sHestia_3 = new sdata("sHestia_3", "赫斯緹雅【初夢的女神】", 768, 221, 220, 229, 352, 286, 580);
	sHestia_4 = new sdata("sHestia_4", "赫斯緹雅【極樂氣氛】", 693, 230, 216, 236, 353, 287, 580);
	sHestia_5 = new sdata("sHestia_5", "赫斯緹雅【出發進行】", 1224, 108, 350, 390, 330, 219, 350);
	sHestia_6 = new sdata("sHestia_6", "赫斯緹雅【祝燈爐神】", 1228, 107, 350, 381, 332, 226, 350);
	sHestia_7 = new sdata("sHestia_7", "赫斯緹雅【女神之夏】", 950, 141, 314, 218, 380, 524, 314);
	sHestia_8 = new sdata("sHestia_8", "赫斯緹雅【聖爐之神】", 898, 154, 321, 224, 364, 520, 321);
	sHestia_9 = new sdata("sHestia_9", "赫斯緹雅【馴鹿女神】", 870, 161, 209, 224, 359, 286, 594);
	sHestia_10 = new sdata("sHestia_10", "赫斯緹雅【本命女神】", 854, 165, 550, 285, 322, 380, 236);
	sHestia_11 = new sdata("sHestia_11", "赫斯緹雅【月下再會】", 902, 153, 566, 279, 353, 363, 212);
	sHestia_12 = new sdata("sHestia_12", "赫斯緹雅【女神司令官】", 950, 141, 568, 280, 303, 410, 212);
	sHestia_13 = new sdata("sHestia_13", "赫斯緹雅【超越演出神】", 1208, 112, 320, 327, 334, 185, 302);
	sHestia_14 = new sdata("sHestia_14", "赫斯緹雅【睡衣女神】", 902, 153, 561, 306, 309, 381, 216);
	sHestia_15 = new sdata("sHestia_15", "赫斯緹雅【絕佳探險日】", 1184, 118, 302, 365, 303, 196, 302);
	sHestia_16 = new sdata("sHestia_16", "赫斯緹雅【神婚願望】", 954, 140, 208, 210, 341, 273, 640);
	sHestia_17 = new sdata("sHestia_17", "赫斯緹雅【蒼之女神】", 906, 177, 352, 214, 353, 579, 352);
	sHestia_18 = new sdata("sHestia_18", "赫斯緹雅【禮繩女神】", 1116, 160, 378, 319, 290, 203, 378);
	sHestia_19 = new sdata("sHestia_19", "赫斯緹雅【萌黃幼鳥】", 838, 194, 579, 277, 304, 501, 212);
	sEina_1 = new sdata("sEina_1", "埃伊娜【精靈的禮物】", 748, 218, 307, 239, 513, 344, 277);
	sEina_2 = new sdata("sEina_2", "埃伊娜【才貌雙全】", 748, 218, 307, 239, 513, 344, 277);
	sEina_3 = new sdata("sEina_3", "埃伊娜【聖森響歌】", 748, 224, 218, 222, 360, 287, 580);
	sEina_4 = new sdata("sEina_4", "埃伊娜【吟遊精靈】", 914, 150, 209, 212, 341, 310, 600);
	sEina_5 = new sdata("sEina_5", "埃伊娜【真夏乙女】", 1120, 134, 300, 358, 292, 218, 300);
	sEina_6 = new sdata("sEina_6", "埃伊娜【手作精靈】", 834, 170, 313, 215, 355, 554, 313);
	sEina_7 = new sdata("sEina_7", "埃伊娜【颯爽精靈】", 894, 155, 209, 212, 343, 328, 580);
	sEina_8 = new sdata("sEina_8", "埃伊娜【自稱秀才】", 838, 194, 208, 213, 402, 326, 623);
	sSyr_1 = new sdata("sSyr_1", "希兒【純白的制服】", 828, 219, 354, 392, 339, 219, 282);
	sSyr_2 = new sdata("sSyr_2", "希兒【雪白的鄰居】", 748, 224, 218, 231, 356, 283, 579);
	sSyr_3 = new sdata("sSyr_3", "希兒【伯爵夫人】", 1248, 102, 350, 383, 342, 214, 350);
	sSyr_4 = new sdata("sSyr_4", "希兒【聖夜聖服】", 1200, 114, 355, 383, 331, 215, 355);
	sSyr_5 = new sdata("sSyr_5", "希兒【純白華嫁】", 818, 174, 301, 215, 353, 580, 301);
	sSyr_6 = new sdata("sSyr_6", "希兒【新年和服】", 922, 173, 355, 216, 355, 575, 349);
	sRyuu_1 = new sdata("sRyuu_1", "琉【錦秀先鋒】", 842, 193, 302, 233, 500, 493, 302);
	sMikoto_1 = new sdata("sMikoto_1", "命【溫泉武士】", 1256, 110, 555, 283, 310, 373, 212);
	sLoki_1 = new sdata("sLoki_1", "洛基【宴之衣裳】", 918, 154, 299, 218, 361, 527, 294);
	sLoki_2 = new sdata("sLoki_2", "洛基【如神添翼】", 878, 159, 353, 385, 339, 224, 288);
	sLoki_3 = new sdata("sLoki_3", "洛基【道化神相】", 902, 153, 209, 225, 354, 285, 599);
	sLoki_4 = new sdata("sLoki_4", "洛基【路邊村民】", 1192, 116, 297, 333, 294, 209, 335);
	sRiveria_1 = new sdata("sRiveria_1", "里維莉亞【抗夜聖裝】", 814, 150, 209, 220, 350, 292, 601);
	sFreya_1 = new sdata("sFreya_1", "芙蕾雅【晚會女王】", 748, 224, 211, 214, 349, 280, 568);
	sFreya_2 = new sdata("sFreya_2", "芙蕾雅【豔姿女王】", 738, 224, 217, 223, 355, 288, 584);
	sFreya_3 = new sdata("sFreya_3", "芙蕾雅【眺望婉美】", 890, 156, 351, 393, 330, 214, 351);
	sFreya_4 = new sdata("sFreya_4", "芙蕾雅【極美致麗】", 1180, 119, 351, 391, 331, 215, 351);
	sFreya_5 = new sdata("sFreya_5", "芙蕾雅【女王美神】", 946, 142, 209, 212, 380, 271, 600);
	sFreya_6 = new sdata("sFreya_6", "芙蕾雅【心醉泳衣】", 1116, 160, 389, 318, 290, 182, 389);
	sHephaestus_1 = new sdata("sHephaestus_1", "赫菲斯托絲【天衣無縫】", 1256, 112, 358, 394, 339, 219, 277);
	sHephaestus_2 = new sdata("sHephaestus_2", "赫菲斯托絲【神之黑薔薇】", 930, 146, 560, 296, 325, 380, 212);
	sArnya_1 = new sdata("sArnya_1", "阿妮雅【貓迷偵探】", 1216, 115, 545, 282, 308, 369, 218);
	sChloe_1 = new sdata("sChloe_1", "可蘿伊【腹黑偵探】", 1216, 115, 548, 279, 310, 369, 216);
	sLunoire_1 = new sdata("sLunoire_1", "露諾娃【迷宮侍應生】", 826, 197, 377, 233, 500, 343, 377);
	sGanesha_1 = new sdata("sGanesha_1", "迦尼薩【大王象神】", 1252, 101, 350, 395, 330, 214, 350);
	sDemeter_1 = new sdata("sDemeter_1", "狄蜜特【盈賓嘉穗】", 946, 142, 209, 239, 360, 277, 587);
	sDemeter_2 = new sdata("sDemeter_2", "狄蜜特【大佐】", 822, 198, 209, 211, 340, 370, 642);
	sHermes_1 = new sdata("sHermes_1", "荷米斯【晚會男神】", 743, 229, 211, 216, 349, 280, 566);
	sHermes_2 = new sdata("sHermes_2", "荷米斯【統策人】", 1124, 158, 387, 319, 292, 183, 387);
	sAsfi_1 = new sdata("sAsfi_1", "亞絲菲【禁物買手】", 1124, 158, 405, 381, 334, 214, 405);
	sMissia_1 = new sdata("sMissia_1", "蜜西亞【夏季休假中】", 950, 141, 314, 242, 356, 524, 314);
	sTakemikazuchi_1 = new sdata("sTakemikazuchi_1", "建御雷【雪日武神】", 902, 178, 603, 318, 322, 418, 212);
	sDionysus_1 = new sdata("sDionysus_1", "狄俄尼索斯【紫穰酒神】", 958, 139, 560, 277, 304, 420, 212);
	sAirmid_1 = new sdata("sAirmid_1", "阿蜜德【白之治療師】", 748, 224, 210, 217, 347, 279, 569);
	sOuranos_1 = new sdata("sOuranos_1", "烏拉諾斯【創設神】", 788, 219, 216, 222, 346, 274, 563);
	sFels_1 = new sdata("sFels_1", "費爾斯【亡靈】", 854, 190, 208, 210, 341, 362, 651);
	sNaaza_1 = new sdata("sNaaza_1", "娜扎【蒼狗】", 838, 194, 209, 233, 392, 302, 636);
	sWelf_1 = new sdata("sWelf_1", "韋爾夫【刀開一打】", 1252, 101, 355, 383, 331, 215, 355);
	sTsubaki_1 = new sdata("sTsubaki_1", "椿【蓮頭紅衣】", 958, 139, 303, 234, 554, 336, 303);
	sArtemis_1 = new sdata("sArtemis_1", "阿緹蜜絲【貞潔純神】", 914, 150, 575, 280, 305, 401, 212);
	sArtemis_2 = new sdata("sArtemis_2", "阿緹蜜絲【睡衣處女神】", 1152, 101, 357, 381, 330, 214, 357);
	sAriadne_1 = new sdata("sAriadne_1", "艾莉亞【支配之鎖】", 1328, 107, 405, 381, 330, 218, 405);
	sAriadne_2 = new sdata("sAriadne_2", "艾莉亞【永遠追憶】", 1192, 141, 407, 381, 330, 214, 407);
	sOrna_1 = new sdata("sOrna_1", "奧娜【到達之人】", 902, 178, 340, 215, 353, 603, 340);
	sRyulu_1 = new sdata("sRyulu_1", "琉露【吟遊樂人】", 918, 174, 381, 233, 500, 335, 381);
	sApollo_1 = new sdata("sApollo_1", "阿波羅【陽眩之神】", 1022, 148, 601, 275, 327, 454, 216);
	sSumo_1 = new sdata("sSumo_1", "蘇摩【神酒之盅】", 938, 169, 213, 213, 400, 336, 612);
	sIshtar_1 = new sdata("sIshtar_1", "伊絲塔【夜之女王】", 854, 190, 384, 214, 353, 515, 384);
	sAres_1 = new sdata("sAres_1", "阿瑞斯【軍神】", 1018, 149, 540, 279, 302, 540, 212);
	sArmin_1 = new sdata("sArmin_1", "阿爾敏【頭腦明晰】", 910, 151, 310, 215, 368, 547, 310);
	sEren_1 = new sdata("sEren_1", "艾連巨人【制御不能】", 958, 139, 580, 315, 303, 363, 212);
	sYamai_1 = new sdata("sYamai_1", "八舞【狂戰士】", 1252, 101, 322, 321, 293, 210, 322);
	sKotori_1 = new sdata("sKotori_1", "五河琴里【炎魔】", 902, 153, 563, 289, 304, 404, 213);
	
	var cpHp = 0;
	var cpMp = 0;
	var cpStr = 0;
	var cpEnd = 0;
	var cpDex = 0;
	var cpAgi = 0;
	var cpMag = 0;
	var m_exist = false;
	var s_exist = false;

	function toPercent(point){
		pfix = point.toFixed(3);
		var tp=Number(pfix*100);
		tp+="%";
		return tp;
	}

	function show(){
		if(m_exist == true && s_exist == true){
			document.getElementById("show_hp").innerHTML = Math.round((mNull.hp + sNull.hp + cpHp*2 + C_hp)*C_war);
			document.getElementById("show_mp").innerHTML = mNull.mp + sNull.mp + cpMp*2;
			document.getElementById("show_str").innerHTML = Math.round(mNull.str + sNull.str + (1+p_mNull.pStr)*cpStr + cpStr + C_str) + " (" + Math.round((p_mNull.pStr*100)*100)/100 + "%)";
			document.getElementById("show_end").innerHTML = Math.round(mNull.end + sNull.end + (1+p_mNull.pEnd)*cpEnd + cpEnd + C_end) + " (" + (p_mNull.pEnd*100) + "%)";
			document.getElementById("show_dex").innerHTML = Math.round(mNull.dex + sNull.dex + (1+p_mNull.pDex)*cpDex + cpDex + C_dex) + " (" + (p_mNull.pDex*100) + "%)";
			document.getElementById("show_agi").innerHTML = Math.round(mNull.agi + sNull.agi + (1+p_mNull.pAgi)*cpAgi + cpAgi + C_agi) + " (" + (p_mNull.pAgi*100) + "%)";
			document.getElementById("show_mag").innerHTML = Math.round(mNull.mag + sNull.mag + (1+p_mNull.pMag)*cpMag + cpMag + C_mag) + " (" + (p_mNull.pMag*100) + "%)";
			document.getElementById("show_killer").innerHTML = p_mNull.pKiller;
			//------------------------------------------------------------------------
			document.getElementById("mImage").src = "media/mImages/"+mNull.id+".jpg";
			document.getElementById("show_mName").innerHTML = mNull.name;
			document.getElementById("sImage").src = "media/sImages/"+sNull.id+".jpg";
			document.getElementById("show_sName").innerHTML = sNull.name;
		}else if(m_exist == true && s_exist == false){
			document.getElementById("show_hp").innerHTML = Math.round((mNull.hp + cpHp + C_hp)*C_war);
			document.getElementById("show_mp").innerHTML = mNull.mp + cpMp;
			document.getElementById("show_str").innerHTML = Math.round(mNull.str + (1+p_mNull.pStr)*cpStr + C_str) + " (" + Math.round((p_mNull.pStr*100)*100)/100 + "%)";
			document.getElementById("show_end").innerHTML = Math.round(mNull.end + (1+p_mNull.pEnd)*cpEnd + C_end) + " (" + (p_mNull.pEnd*100) + "%)";
			document.getElementById("show_dex").innerHTML = Math.round(mNull.dex + (1+p_mNull.pDex)*cpDex + C_dex) + " (" + (p_mNull.pDex*100) + "%)";
			document.getElementById("show_agi").innerHTML = Math.round(mNull.agi + (1+p_mNull.pAgi)*cpAgi + C_agi) + " (" + (p_mNull.pAgi*100) + "%)";
			document.getElementById("show_mag").innerHTML = Math.round(mNull.mag + (1+p_mNull.pMag)*cpMag + C_mag) + " (" + (p_mNull.pMag*100) + "%)";
			document.getElementById("show_killer").innerHTML = p_mNull.pKiller;
			//------------------------------------------------------------------------
			document.getElementById("mImage").src = "media/mImages/"+mNull.id+".jpg";
			document.getElementById("show_mName").innerHTML = mNull.name;
			document.getElementById("sImage").src = "media/Null.jpg";
			document.getElementById("show_sName").innerHTML = "----";
		}else if(m_exist == false && s_exist == true){
			document.getElementById("show_hp").innerHTML = sNull.hp + cpHp;
			document.getElementById("show_mp").innerHTML = sNull.mp + cpMp;
			document.getElementById("show_str").innerHTML = sNull.str + cpStr;
			document.getElementById("show_end").innerHTML = sNull.end + cpEnd;
			document.getElementById("show_dex").innerHTML = sNull.dex + cpDex;
			document.getElementById("show_agi").innerHTML = sNull.agi + cpAgi;
			document.getElementById("show_mag").innerHTML = sNull.mag + cpMag;
			document.getElementById("show_killer").innerHTML = "---";
			//------------------------------------------------------------------------
			document.getElementById("sImage").src = "media/sImages/"+sNull.id+".jpg";
			document.getElementById("show_sName").innerHTML = sNull.name;
			document.getElementById("mImage").src = "media/Null.jpg";
			document.getElementById("show_mName").innerHTML = "----";
		}else{
			document.getElementById("show_hp").innerHTML = "---";
			document.getElementById("show_mp").innerHTML = "---";
			document.getElementById("show_str").innerHTML = "---";
			document.getElementById("show_end").innerHTML = "---";
			document.getElementById("show_dex").innerHTML = "---";
			document.getElementById("show_agi").innerHTML = "---";
			document.getElementById("show_mag").innerHTML = "---";
			document.getElementById("show_killer").innerHTML = "---";
			document.getElementById("mImage").src = "media/Null.jpg";
			document.getElementById("show_mName").innerHTML = "----";
			document.getElementById("sImage").src = "media/Null.jpg";
			document.getElementById("show_sName").innerHTML = "----";
		}
	}

	function m_add(x,y){
		mNull.id = x.id;
		mNull.name = x.name;
		mNull.hp = x.hp;
		mNull.mp = x.mp;
		mNull.str = x.str;
		mNull.end = x.end;
		mNull.dex = x.dex;
		mNull.agi = x.agi;
		mNull.mag = x.mag;
		p_mNull.pStr = y.pStr;
		p_mNull.pEnd = y.pEnd;
		p_mNull.pDex = y.pDex;
		p_mNull.pAgi = y.pAgi;
		p_mNull.pMag = y.pMag;
		p_mNull.pKiller = y.pKiller;
		m_exist = true;

		show();
	}
	function s_add(x){
		sNull.id = x.id;
		sNull.name = x.name;
		sNull.hp = x.hp;
		sNull.mp = x.mp;
		sNull.str = x.str;
		sNull.end = x.end;
		sNull.dex = x.dex;
		sNull.agi = x.agi;
		sNull.mag = x.mag;
		s_exist = true;
		show();
	}
	function cpChange(value){
		if(value==0){
			cpHp = 0;
			cpMp = 0;
			cpStr = 0;
			cpEnd = 0;
			cpDex = 0;
			cpAgi = 0;
			cpMag = 0;
		}else if(value==21){
			cpHp = 150;
			cpMp = 60;
			cpStr = 0;
			cpEnd = 0;
			cpDex = 0;
			cpAgi = 0;
			cpMag = 0;
		}else if(value==23){
			cpHp = 300;
			cpMp = 60;
			cpStr = 36;
			cpEnd = 9;
			cpDex = 48;
			cpAgi = 60;
			cpMag = 36;
		}else if(value==25){
			cpHp = 300;
			cpMp = 60;
			cpStr = 36;
			cpEnd = 9;
			cpDex = 48;
			cpAgi = 60;
			cpMag = 72;
		}else if(value==27){
			cpHp = 300;
			cpMp = 60;
			cpStr = 72;
			cpEnd = 9;
			cpDex = 48;
			cpAgi = 60;
			cpMag = 72;
		}else if(value==31){
			cpHp = 300;
			cpMp = 60;
			cpStr = 72;
			cpEnd = 18;
			cpDex = 48;
			cpAgi = 75;
			cpMag = 72;
		}else if(value==35){
			cpHp = 300;
			cpMp = 60;
			cpStr = 87;
			cpEnd = 33;
			cpDex = 63;
			cpAgi = 75;
			cpMag = 87;
		}else if(value==37){
			cpHp = 315;
			cpMp = 75;
			cpStr = 87;
			cpEnd = 33;
			cpDex = 63;
			cpAgi = 75;
			cpMag = 87;
		}else if(value==39){
			cpHp = 330;
			cpMp = 90;
			cpStr = 87;
			cpEnd = 33;
			cpDex = 63;
			cpAgi = 75;
			cpMag = 87;
		}
		show(); 
	}

	var C_war = 1;
	function warChange(value){
		if(value==1){
			C_war = 1.5;
		}else{
			C_war = 1;
		}
		show();
	}
	var C_hp = 0;
	function hpChange(value){
		C_hp = Number(value);
		show();
	}
	var C_str = 0;
	function strChange(value){
		C_str = Number(value*(1+p_mNull.pStr));
		show();
	}
	var C_end = 0;
	function endChange(value){
		C_end = Number(value*(1+p_mNull.pEnd));
		show();
	}
	var C_dex = 0;
	function dexChange(value){
		C_dex = Number(value*(1+p_mNull.pDex));
		show();
	}
	var C_agi = 0;
	function agiChange(value){
		C_agi = Number(value*(1+p_mNull.pAgi));
		show();
	}
	var C_mag = 0;
	function magChange(value){
		C_mag = Number(value*(1+p_mNull.pMag));
		show();
	}



	function remove(value){
		if(value==1){
			m_exist = false;
		}else if(value==2){
			s_exist = false;
		}
		show();
	}


	function Count(){
		const form = document.forms['cpCounter'];
		var target_hp = Number(form.elements.target_hp.value);
		var mroll_hp = Number(form.elements.mroll_hp.value);
		var sroll_hp = Number(form.elements.sroll_hp.value);
		var p_hp = Number(form.elements.p_hp.value);
		var eq_hp = Number(form.elements.eq_hp.value);
		//---------------------------------------------------
		var target_mp = Number(form.elements.target_mp.value);
		var mroll_mp = Number(form.elements.mroll_mp.value);
		var sroll_mp = Number(form.elements.sroll_mp.value);
		//---------------------------------------------------
		var target_str = Number(form.elements.target_str.value);
		var mroll_str = Number(form.elements.mroll_str.value);
		var sroll_str = Number(form.elements.sroll_str.value);
		var p_str = Number(form.elements.p_str.value)+1;
		var eq_str = Number(form.elements.eq_str.value);
		//---------------------------------------------------
		var target_end = Number(form.elements.target_end.value);
		var mroll_end = Number(form.elements.mroll_end.value);
		var sroll_end = Number(form.elements.sroll_end.value);
		var p_end = Number(form.elements.p_end.value)+1;
		var eq_end = Number(form.elements.eq_end.value);
		//---------------------------------------------------
		var target_dex = Number(form.elements.target_dex.value);
		var mroll_dex = Number(form.elements.mroll_dex.value);
		var sroll_dex = Number(form.elements.sroll_dex.value);
		var p_dex = Number(form.elements.p_dex.value)+1;
		var eq_dex = Number(form.elements.eq_dex.value);
		//---------------------------------------------------
		var target_agi = Number(form.elements.target_agi.value);
		var mroll_agi = Number(form.elements.mroll_agi.value);
		var sroll_agi = Number(form.elements.sroll_agi.value);
		var p_agi = Number(form.elements.p_agi.value)+1;
		var eq_agi = Number(form.elements.eq_agi.value);
		//---------------------------------------------------
		var target_mag = Number(form.elements.target_mag.value);
		var mroll_mag = Number(form.elements.mroll_mag.value);
		var sroll_mag = Number(form.elements.sroll_mag.value);
		var p_mag = Number(form.elements.p_mag.value)+1;
		var eq_mag = Number(form.elements.eq_mag.value);
		//---------------------------------------------------
		if(target_mp-mroll_mp-sroll_mp==180){
			document.getElementById("show_cp").innerHTML = "6隻角色CP>=39";
		}else if(target_hp-(mroll_hp+sroll_hp+eq_hp)*p_hp>=660){
			document.getElementById("show_cp").innerHTML = "6隻角色平均38<=CP<39";
		}else if(target_mp-mroll_mp-sroll_mp>=150){
			document.getElementById("show_cp").innerHTML = "6隻角色平均37<=CP<38";
		}else if(target_hp-(mroll_hp+sroll_hp+eq_hp)*p_hp>=630){
			document.getElementById("show_cp").innerHTML = "6隻角色平均36<=CP<37";
		}else if(target_str-mroll_str-sroll_str-eq_str*p_str>=87*p_str+87){
			document.getElementById("show_cp").innerHTML = "6隻角色平均35<=CP<36";
		}else if(target_mag-mroll_mag-sroll_mag-eq_mag*p_mag>=87*p_mag+87){
			document.getElementById("show_cp").innerHTML = "6隻角色平均34<=CP<35";
		}else if(target_dex-mroll_dex-sroll_dex-eq_dex*p_dex>=63*p_dex+63){
			document.getElementById("show_cp").innerHTML = "6隻角色平均33<=CP<34";
		}else if(target_end-mroll_end-sroll_end-eq_end*p_end>=33*p_end+33){
			document.getElementById("show_cp").innerHTML = "6隻角色平均32<=CP<33";
		}else if(target_agi-mroll_agi-sroll_agi-eq_agi*p_agi>=75*p_agi+75){
			document.getElementById("show_cp").innerHTML = "6隻角色平均31<=CP<32";
		}else if(target_end-mroll_end-sroll_end-eq_end*p_end>=18*p_end+18){
			document.getElementById("show_cp").innerHTML = "6隻角色平均29<=CP<31";
		}else if(target_str-mroll_str-sroll_str-eq_str*p_str>=72*p_str+72){
			document.getElementById("show_cp").innerHTML = "6隻角色平均27<=CP<29";
		}else if(target_mag-mroll_mag-sroll_mag-eq_mag*p_mag>=72*p_mag+72){
			document.getElementById("show_cp").innerHTML = "6隻角色平均25<=CP<27";
		}else if(target_hp-(mroll_hp+sroll_hp+eq_hp)*p_hp>=600){
			document.getElementById("show_cp").innerHTML = "6隻角色平均23<=CP<25";
		}else if(target_mp-mroll_mp-sroll_mp>=120){
			document.getElementById("show_cp").innerHTML = "6隻角色平均21<=CP<23";
		}else if(target_dex-mroll_dex-sroll_dex-eq_dex*p_dex>=39*p_dex+39){
			document.getElementById("show_cp").innerHTML = "6隻角色平均19<=CP<21";
		}else{
			document.getElementById("show_cp").innerHTML = "6隻角色平均CP<19";
		}
	}
	function showNull(){
		document.getElementById("show_cp").innerHTML = "---分析結果---";
	}

	function war_count(){
		const form = document.forms['input_agi'];
		var Ap_agi = Number(form.elements.Ap_agi.value);
		var Bp_agi = Number(form.elements.Bp_agi.value);
		var Aa_agi = Number(form.elements.Aa_agi.value);
		var Ba_agi = Number(form.elements.Ba_agi.value);
		var Ad_agi = Number(form.elements.Ad_agi.value);
		var Bd_agi = Number(form.elements.Bd_agi.value);

		var Atype = Number(form.elements.A_type.value);
		var Btype = Number(form.elements.B_type.value);

		var war_showA_agi = Ap_agi*(1+Aa_agi-Bd_agi);
		war_showA_agi = Number(war_showA_agi.toFixed(1));
		var war_showB_agi = Bp_agi*(1+Ba_agi-Ad_agi);
		war_showB_agi = Number(war_showB_agi.toFixed(1));

		var war_showA_agi_fna = (Ap_agi*Atype)*(1+Aa_agi-Bd_agi);
		war_showA_agi_fna = Number(war_showA_agi_fna.toFixed(1));
		var war_showB_agi_fna = (Bp_agi*Btype)*(1+Ba_agi-Ad_agi);
		war_showB_agi_fna = Number(war_showB_agi_fna.toFixed(1));

		var war_showA_xg = (war_showA_agi/((war_showA_agi+war_showB_agi)/2)-1)*100;
		war_showA_xg = Number(war_showA_xg.toFixed(1));
		var war_showB_xg = (war_showB_agi/((war_showA_agi+war_showB_agi)/2)-1)*100;
		war_showB_xg = Number(war_showB_xg.toFixed(1));

		document.getElementById("war_showA_agi").innerHTML = war_showA_agi;
		document.getElementById("war_showB_agi").innerHTML = war_showB_agi;
		document.getElementById("war_showA_xg").innerHTML = war_showA_xg+"%";
		document.getElementById("war_showB_xg").innerHTML = war_showB_xg+"%";

		var agi_high=0;
		var agi_low=0;
		if(war_showB_agi_fna>war_showA_agi_fna){
			agi_high = war_showB_agi_fna;
			agi_low = war_showA_agi_fna;
		}else{
			agi_high = war_showA_agi_fna;
			agi_low = war_showB_agi_fna;
		}
		//機率
		function C(x){
			var pA_agi = agi_high*(1+x);
			var nA_agi = agi_high*(1-x);
			var pB_agi = agi_low*(1+x);
			var nB_agi = agi_low*(1-x);
			var seeA = (pB_agi-nA_agi)/(pA_agi-nA_agi);
			var seeB = (nA_agi-nB_agi)/(pB_agi-nB_agi);

			var a13=0;
			var a14=0;
			var a15=0;
			var a16=0;
			//x
			if(1-seeA>1){
				a13 = 1;
			}else{
				a13 = 1-seeA;
			}
			//y
			if(seeB>1){
				a14 = 1;
			}else{
				a14 = seeB;
			}
			//no x
			if(1-a13>1){
				a15 = 1;
			}else{
				a15 = 1-a13; 
			}
			//no y
			if(1-a14>1){
				a16 = 1; 
			}else{
				a16 = 1-a14;
			}
			var a17 = a15*a16; //no x,y
			var a18 = 1-a17; //x&&y, x||y
			var a19 = a18+a17*0.5; //winrate
			if(a19>1){
				return 1;
			}else{
				return a19;
			}
		}
		var winA_4 = C(0.04)*100;
		winA_4 = Number(winA_4.toFixed(1));

		var loseA_4 = (1-C(0.04))*100;
		loseA_4 = Number(loseA_4.toFixed(1));

		var winA_5 = C(0.05)*100;
		winA_5 = Number(winA_5.toFixed(1));

		var loseA_5 = (1-C(0.05))*100;
		loseA_5 = Number(loseA_5.toFixed(1));

	
		if(war_showA_agi_fna>war_showB_agi_fna){
			document.getElementById("Awinrate_wayA_4").innerHTML = winA_4+"%";
			document.getElementById("Bwinrate_wayA_4").innerHTML = loseA_4+"%";
			document.getElementById("Awinrate_wayA_5").innerHTML = winA_5+"%";
			document.getElementById("Bwinrate_wayA_5").innerHTML = loseA_5+"%";
		}else{
			document.getElementById("Awinrate_wayA_4").innerHTML = loseA_4+"%";
			document.getElementById("Bwinrate_wayA_4").innerHTML = winA_4+"%";
			document.getElementById("Awinrate_wayA_5").innerHTML = loseA_5+"%";
			document.getElementById("Bwinrate_wayA_5").innerHTML = winA_5+"%";
		}
		//區間
		//+5%
		var ap5 = agi_high*1.05;
		var bp5 = agi_low*1.05;
		//+4%
		var ap4 = agi_high*1.04;
		var bp4 = agi_low*1.04;
		//+3%
		var ap3 = agi_high*1.03;
		var bp3 = agi_low*1.03;
		//+2%
		var ap2 = agi_high*1.02;
		var bp2 = agi_low*1.02;
		//+1%
		var ap1 = agi_high*1.01;
		var bp1 = agi_low*1.01;
		//0%
		var a0 = agi_high*1;
		var b0 = agi_low*1;
		//-1%
		var an1 = agi_high*0.99;
		var bn1 = agi_low*0.99;
		//-2%
		var an2 = agi_high*0.98;
		var bn2 = agi_low*0.98;
		//-3%
		var an3 = agi_high*0.97;
		var bn3 = agi_low*0.97;
		//-4%
		var an4 = agi_high*0.96;
		var bn4 = agi_low*0.96;
		//-5%
		var an5 = agi_high*0.95;
		var bn5 = agi_low*0.95;

		let a_4 = [ap4,ap3,ap2,ap1,a0,an1,an2,an3,an4];
		let a_5 = [ap5,ap4,ap3,ap2,ap1,a0,an1,an2,an3,an4,an5];
		let b_4 = [bp4,bp3,bp2,bp1,b0,bn1,bn2,bn3,bn4];
		let b_5 = [bp5,bp4,bp3,bp2,bp1,b0,bn1,bn2,bn3,bn4,bn5];
		let a_4_blose = [];
		let a_4_draw = [];
		let a_5_blose = [];
		let a_5_draw = [];

		function cif_4(x){
			var rec_w = 0;
			var rec_d = 0;
			for(var i=0;i<a_4.length;i++){
				if(Number(a_4[i])>x){
					rec_w++;
				}else if(Number(a_4[i])==x){
					rec_d++;
				}
			}
			a_4_blose.push(rec_w);
			a_4_draw.push(rec_d);
		}
		function cif_5(x){
			var rec_w = 0;
			var rec_d = 0;
			for(var i=0;i<a_5.length;i++){
				if(Number(a_5[i])>x){
					rec_w++;
				}else if(Number(a_5[i])==x){
					rec_d++;
				}
			}
			a_5_blose.push(rec_w);
			a_5_draw.push(rec_d);
		}
		
		for(var j=0;j<b_4.length;j++){
			cif_4(Number(b_4[j]));
		}
		for(var j=0;j<b_5.length;j++){
			cif_5(Number(b_5[j]));
		}

		var sum_a_4_blose = 0;
		for(var k=0;k<a_4_blose.length;k++){
			sum_a_4_blose += a_4_blose[k];
		}
		var sum_a_4_draw = 0;
		for(var k=0;k<a_4_draw.length;k++){
			sum_a_4_draw += a_4_draw[k];
		}
		var sum_a_5_blose = 0;
		for(var k=0;k<a_5_blose.length;k++){
			sum_a_5_blose += a_5_blose[k];
		}
		var sum_a_5_draw = 0;
		for(var k=0;k<a_5_draw.length;k++){
			sum_a_5_draw += a_5_draw[k];
		}

		var Awin_4 = 0;
		if(sum_a_4_blose/81>1){
			Awin_4 = 1;
		}else{
			Awin_4 = sum_a_4_blose/81;
		}
		var Adraw_4 = sum_a_4_draw/81;
		var Awin_5 = sum_a_5_blose/121;
		var Adraw_5 = sum_a_5_draw/121;

		var winB_4 = (Awin_4+Adraw_4*0.5)*100;
		winB_4 = Number(winB_4.toFixed(1));
		var loseB_4 = (1-(Awin_4+Adraw_4*0.5))*100;
		loseB_4 = Number(loseB_4.toFixed(1));
		var winB_5 = (Awin_5+Adraw_5*0.5)*100;
		winB_5 = Number(winB_5.toFixed(1));
		var loseB_5 = (1-(Awin_5+Adraw_5*0.5))*100;
		loseB_5 = Number(loseB_5.toFixed(1));


		if(war_showA_agi_fna>war_showB_agi_fna){
			document.getElementById("Awinrate_wayB_4").innerHTML = winB_4+"%";
			document.getElementById("Bwinrate_wayB_4").innerHTML = loseB_4+"%";
			document.getElementById("Awinrate_wayB_5").innerHTML = winB_5+"%";
			document.getElementById("Bwinrate_wayB_5").innerHTML = loseB_5+"%";
		}else{
			document.getElementById("Awinrate_wayB_4").innerHTML = loseB_4+"%";
			document.getElementById("Bwinrate_wayB_4").innerHTML = winB_4+"%";
			document.getElementById("Awinrate_wayB_5").innerHTML = loseB_5+"%";
			document.getElementById("Bwinrate_wayB_5").innerHTML = winB_5+"%";
		}

	}
