require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//获取图片相关的数据
let imageDatas = require('../data/imagesData.json');
/*
	只执行一次，采用自执行函数,
	将图片名信息转成图片URL路径信息
	@imageDatasArr 传入的图片数据 -- array格式
 */
imageDatas = ((imageDatasArr) => {
	for(let i in imageDatasArr){
		i.imageURL = require('../images/' + i.fileName);
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
				<section className="img-sec"></section>
      	<nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
