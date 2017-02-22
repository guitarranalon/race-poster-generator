const gridConfig = {
	columns: 12,	
	margin: 22,
	gutter: 20,
	column: 58
}

class Grid{
	static widthOfColumns(numColumns){
		return (numColumns*gridConfig.column) + ((numColumns-1)*gridConfig.gutter);
	}
	
	static getMarginWidth(){
		return (gridConfig.margin);
	}
	
	static getGutterWidth(){
		return (gridConfig.gutter);
	}

	static getContentWidth(){
		return Grid.widthOfColumns(gridConfig.columns);
	}
	
	static getTotalWidth(){
		return Grid.getMarginWidth()*2 + Grid.getContentWidth();
	}
}

export default Grid;