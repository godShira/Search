# Search
angularJs百度搜索功能
##使用方法
###载入 CSS 文件
```css
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
```

###DOM头部载入 JavaScript 文件
```javascript
<script type="text/javascript" src="js/jquery-1.12.3.js" ></script>
<script type="text/javascript" src="js/angular.min.js"></script>
<script  type="text/javascript" src="js/index.js"></script>
```

###DOM 结构
```html
<div id="suggest-align" class="search-input">
							    <!--关闭自动生成的历史记录 autocomplete="off"-->
							    <!--记得name等于搜索地址码后键值对的值-->
								<input type="text" autocomplete="off" class="placeholder" id="input"  name="q" placeholder="陈坤删光赵薇照片" ng-model="name" ng-change="getData(name)"/>
								<ul id="news-list">
									<li ng-repeat="item in items">
									    <em class="hot">{{$index + 1}}</em>
									    <span ng-class="selectLast($index)">{{item}}</span>
									</li>
								</ul>
							</div>
```

###调用 
```javascript
var app=angular.module('myApp',[]);
	app.controller('firstController',function($scope,$http,$timeout){
		$scope.selectLast ="";
		$scope.name = '';
		var timer = '';
		$scope.getData=function(name){
			$timeout.cancel(timer);
			timer=$timeout(function(){
				var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+name+'&cb=JSON_CALLBACK'; //检索库
				$http.jsonp(url).success(
						function(data){
							$scope.items = data.s;
							console.log(data);
							$scope.selectLast = function (index) {
								if(index <= 2){
									return 'new';
								}else{
									return '';
								}
							}
						}
				).error(function(){
					alert('请求数据失败，请在服务器环境运行');
				});

			},300)

		};
	})
```
