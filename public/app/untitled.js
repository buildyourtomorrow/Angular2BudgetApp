UserSchema.methods.calcAssetCategoryTotals = function(){
	this.assetCategoryTotals = [
		{category: "Cash - checking accounts", total: 0},
		{category: "Cash - savings accounts", total: 0},
		{category: "Special deposit accounts", total: 0},
		{category: "Market investments", total: 0},
		{category: "Certificate of deposit", total: 0},
		{category: "Life insurance (cash value)", total: 0},
		{category: "Mutual funds", total: 0},
		{category: "Car", total: 0},
		{category: "Equity in private company", total: 0},
		{category: "Other", total: 0}
	];

	for (i = 0; i < this.assets.length; i++){
		if (this.assets[i].category === "Cash - checking accounts") {
			this.assetsCategoryTotals[0].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Cash - savings accounts") {
			this.assetsCategoryTotals[1].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Special deposit accounts") {
			this.assetsCategoryTotals[2].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Market investments") {
			this.assetsCategoryTotals[3].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Certificate of deposit") {
			this.assetsCategoryTotals[4].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Life insurance (cash value") {
			this.assetsCategoryTotals[5].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Mutual funds") {
			this.assetsCategoryTotals[6].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Car") {
			this.assetsCategoryTotals[7].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Equity in private company") {
			this.assetsCategoryTotals[8].total += this.assets[i].amount;
		};
		if (this.assets[i].category === "Other") {
			this.assetsCategoryTotals[9].total += this.assets[i].amount;
		};
		this.save();
	};
}