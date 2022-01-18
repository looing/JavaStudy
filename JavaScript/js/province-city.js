function provinceCity(province) {
	data = {
		"zhejiang": [
			"杭州",
			"宁波",
			"温州",
			"绍兴",
			"湖州",
			"嘉兴",
			"金华",
			"衢州",
			"舟山",
			"台州",
			"丽水"
		],
		"jiangsu": [
			"南京",
			"无锡",
			"徐州",
			"常州",
			"苏州",
			"南通",
			"连云港",
			"淮安",
			"盐城",
			"扬州",
			"镇江",
			"泰州",
			"宿迁",
		],
		"hunan": [
			"长沙",
			"株洲",
			"湘潭",
			"衡阳",
			"邵阳",
			"岳阳",
			"常德",
			"张家界",
			"益阳",
			"郝洲",
			"永州",
			"怀化",
			"娄底",
			"湘西土家族自治区"	
		],
		"henan": [
			"郑州",
			"开封",
			"洛阳",
			"平顶山",
			"安阳",
			"鹤壁",
			"新乡",
			"焦作",
			"濮阳",
			"许昌",
			"漯河",
			"三门峡",
			"南阳",
			"商丘",
			"信阳",
			"周口",
			"驻马店"
		],
		"liaoning": [
			"沈阳",
			"大连",
			"鞍山",
			"抚顺",
			"本溪",
			"丹东",
			"锦州",
			"盘锦",
			"营口",
			"阜新",
			"铁岭",
			"朝阳",
			"葫芦岛",
			"新民",
			"瓦房店",
			"庄河",
			"海城",
			"东港",
			"凤城",
			"凌海",
			"北镇",
			"盖州",
			"大石桥"
		]
	}
	
	return data[province];
}