第二篇译文地址：https://ponyfoo.com/articles/setting-up-angular-2-development-environment

翻译人：31701353 林豪 软工1701

# 译文：

Angular 2是一个现代JavaScript框架，具有许多很棒的功能。实际上，Angular 2现在不仅仅是一个框架，它还是一个用于开发Web，移动和桌面应用程序的平台。2是对Angular 1的完全重写，它利用了ES6的新功能、TypeScript、服务器端渲染、RxJS以及当前最新JavaScript的功能。



Angular 2需要一些设置才能开始。为了避免与安装相关的麻烦，Angular团队提出了[Angular CLI](https://cli.angular.io/)。Angular 2 CLI使创建即用的应用程序变得容易。

全局安装Angular 2 CLI：

npm install -g angular-cli



**注意：** Angular团队已决定从名称中删除2。因此，它现在称为**Angular**而不是**Angular 2**。为了防止混淆的缘故，我将使用Angular 2来防止开发人员在第一次尝试该框架时感到困惑。



使用以下命令可以简单地创建并运行您的应用程序：

ng new myapp // creates a new app 

ng generate // generates components, routes, services and pipes 

ng serve // serves your application in the browser



### 设置您的基础项目

快速继续并创建一个新目录`newapp`。进入目录并创建一个`index.html`。

<!DOCTYPE html> 
<html lang="en"> 
    <head>  
        <meta charset="UTF-8">  
        <title>Angular 2 app</title> 
    </head> 
    <body>  
        <h2>Setting up my development environment</h2> 
    </body> 
</html>

`package.json`通过`npm init`从终端运行命令来创建另一个文件。您只需在要求输入的所有问题中多次键入Enter即可快速创建文件。



让我们安装一个插件包，`lite-server`这个插件包可以为我们的应用程序提供服务，如下所示：

npm install --save-dev lite-server

**注意：** `lite-server`随附的捆绑包[`browser-sync`](https://www.browsersync.io/)可在文件更改时自动重新加载浏览器。



像这样打开`package.json`配置`lite-server`：

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lite": "lite-server"
}
```

现在`npm run lite`从终端运行，您的浏览器将打开，显示您的应用程序，并且在终端中，您应该看到以下内容：



![3](D:\TNext\kuabig\31701353_林豪_翻译\3.png)

使用lite-server启动并运行

更改`index.html`文件中的内容，您会发现浏览器会自动刷新并反映出这一变化！



### 配置TypeScript语言

您可以决定使用TypeScript还是使用普通JavaScript。就个人而言，我更喜欢TypeScript，因为它是JavaScript，并且添加了一些语法糖（例如类型检查）。因此，让我们继续安装TypeScript，如下所示：

npm install --save-dev typescript



tsconfig.json在目录中创建一个文件。我们所有的TypeScript配置都位于此处。



打开您的tsconfig.json并添加以下内容：

{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}

多亏了该"target": "es5"选项，TypeScript会将我们的ES6代码转换为ES5，以便所有浏览器都可以理解我们编写的JavaScript代码。然后，我们还需要sourcemap和decorator。在Angular 2中，使用了许多装饰器。

继续安装如下范围的npm软件包：



npm install @types/node @types/core-js @types/jasmine --save-dev



安装这些软件包的原因是要在我们的项目中添加类型定义。这将使我们的编辑器支持Type-hint，TypeScript，JavaScript和我们在代码中使用的节点模块中的语言突出显示。



package.json再次打开文件，让我们在脚本部分添加新命令，如下所示：

"scripts": {
  "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
  "test": "echo \"Error: no test specified\" && exit 1",
  "lite": "lite-server",
  "tsc": "tsc",
  "tsc:w": "tsc -w"
},



因此，tsc是启动TypeScript编译器，tsc:w也是要监视文件更改。我们还添加了start将同时运行三个命令的命令。但是，您可以利用Angular的AOT编译器。它tsc用Angc模板编译器ngc 代替了ngc 的用法（的替代品tsc）。





等一下！我们如何同时运行三个命令？可以通过同时打包来解决。

#### 同时设置

存在一个nodejs程序包，它允许我们同时运行多个命令。让我们安装一下。

npm install concurrently --save-dev



现在，npm start从终端运行以启动您的应用程序，lite-server并使其typescript并发运行，如下所示：



![4](D:\TNext\kuabig\31701353_林豪_翻译\4.png)

再次运行精简服务器。
您的应用现在正在本地提供。

![5](D:\TNext\kuabig\31701353_林豪_翻译\5.png)

Lite服务器正在运行



#### 安装Angular 2依赖关系和软件包



强大的力量带来巨大的依赖。Angular 2依赖于某些库和工具来发挥这种功能。

1、zone.js只是使我们的调试高效而已，并支持代码中的更改检测
2、JavaScript的core-js标准库，其中包括浏览器中ES5，ES6，ES7功能的polyfill
3、rxjs向我们提供了可观察和异步数据流

因此，让我们继续安装这些工具，如下所示：



npm install zone.js core-js rxjs@5.0.3 systemjs --save

安装完这些依赖项后，让我们引入一些我们需要的软件包，以建立基本的Angular 2应用程序。

npm install --save \
  @angular/platform-browser \
  @angular/platform-browser-dynamic \
  @angular/core \
  @angular/common \
  @angular/compiler \
  @angular/http \
  @angular/forms \
  @angular/router

#### 使用SystemJS包加载器

我们需要一个加载器来帮助加载我们在应用程序中使用的所有包。Angular需要一个工具来将其指向每个程序包在调用程序包功能时所处的位置。SystemJS是通用的动态加载程序。它在浏览器和NodeJS中加载ES6模块，CommonJS，AMD和全局脚本。

systemjs.config.js在根目录中创建一个新文件SystemSystem配置文件，并将其要点添加到其中。也先看看要点。您会看到类似以下内容：





map: {
  // our app is within the app folder
  app: 'dist',

  // angular bundles
  '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
  '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
  '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
  '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
  '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

  // other libraries
  'rxjs':                      'npm:rxjs',
  'ng2-file-upload':           'npm:ng2-file-upload',
  'cloudinary-core':           'npm:cloudinary-core',
  '@cloudinary/angular':       'npm:@cloudinary/angular',
  'Angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
},

...



它在app目录中查找要运行的应用程序文件，您可以将其更改为所需的任何目录。您还可以看到它指定了要查找角度软件包的目录node_modules/@angular。

还要对本节做一个很好的了解：

...

// `packages` tells the System loader how to load when no filename and/or no extension
packages: {
  app: {
    main: './main.js', defaultExtension: 'js'
  },
  rxjs: {
    defaultExtension: 'js'
  },
  'ng2-file-upload': {
    main: 'ng2-file-upload.js', defaultExtension: 'js'
  },
  'cloudinary-core': {
    main: 'cloudinary-core-shrinkwrap.js', defaultExtension: 'js'
  },
  '@cloudinary/angular': {
    main: 'index.js', defaultExtension: 'js'
  }
}

...

此配置使SystemJS知道如何以及在应用程序中加载什么。

现在转到您的位置，index.html并参考我们之前安装的polyfills。然后SystemJS像这样加载：

<!DOCTYPE html> 
<html lang="en"> 
    <head>   
        <meta charset="UTF-8">   
        <title>Angular 2 app</title>    
        <script src="node_modules/core-js/client/shim.min.js"></script>   			<script src="node_modules/zone.js/dist/zone.js"></script>    
        <!-- Load our angular app with Systemjs -->   
        <script src="node_modules/systemjs/dist/system.src.js"></script>   			<script src="systemjs.config.js"></script>   
        <script>     System.import('app').catch(function(err) { console.error(err); });   </script> 
    </head> 
    <body>   
    <h2>Setting up my development environment</h2> 
    </body> 
</html>



### 使用Webpack替代

Webpack是SystemJS的绝佳替代品。它是一种流行的模块加载器和捆绑程序，可帮助将代码从服务器加载到浏览器并生成静态资产。

配置Webpack以在Angular 2应用程序中使用的方式有多种。一种这样的方法是安装webpack及其dev-server。

注意：此处使用了Webpack1.x。

npm install webpack webpack-dev-server --save-dev



然后，您可以安装webpack加载程序。加载程序可帮助预处理不同类型的文件，因此有用于不同文件的加载程序。

npm install --save-dev \
  angular2-template-loader \
  awesome-typescript-loader \
  CSS-loader \
  file-loader \
  html-loader \
  null-loader \
  raw-loader \
  style-loader \
  to-string-loader



使用Webpack的另一个优势是插件的存在。Webpack插件可针对不同场景改变Webpack的行为。例如：

1、Defineplugin 用于定义我们可以在我们的应用程序中引用的环境变量
2、UglifyJSPlugin 缩小捆绑
3、NoErrorsPlugin 如果有任何错误，停止构建
4、ExtractTextPlugin 提取嵌入式CSS作为外部文件
因此，让我们安装一些插件，如下所示：



npm install --save-dev \
  html-webpack-plugin \
  webpack-merge \
  extract-text-webpack-plugin



让我们配置Webpack。我们将为我们的应用程序代码提供一个捆绑包，为供应商（已导入的角度库）代码提供一个捆绑包，并为polyfills提供一个捆绑包。因此，vendor.ts    根目录中创建一个文件。

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/forms';
import 'rxjs';





polyfills.ts    在根目录中创建另一个文件，如下所示：

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // production
} else {
  // development
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}





webpack.config.js     在根目录中创建一个新文件Webpack配置文件，如下所示：

module.exports = require('./config/webpack.dev.js');



使用Webpack的另一个优势是能够为测试，开发和生产提供单独的配置。因此，继续创建一个config文件夹。webpack配置将位于此处。



 在 config目录内创建一个文件webpack.common.js，并将此代码添加到其中：



const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader']
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};





同样在config文件夹内创建一个文件webpack.dev.js，如下所示：





const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});





在上面的代码中，您可以看到webpack.dev.js导入了webpack.common.js和并定义了一些额外的配置，例如为构建输出设置目录，定义如何创建源映射以及从捆绑软件中删除已编译的CSS并将其放置在单独的文件中。





使用SystemJS的优点是设置不像Webpack那样复杂和冗长。它很简单明了，但是Webpack提供了更多的功能，并且它可以随着您的应用程序变得越来越复杂，所以它是必需的。

### 使用Cloudinary构建示例应用

Cloudinary提供了用于将图像和任何其他类型的文件上传到云的API。这些文件通过安全备份和修订历史记录安全地存储在云中。

通过提供一个新的开源Angular 2 SDK，Cloudinary已经消除了编写大量代码与其API进行交互的麻烦，该SDK随附了简单易用的辅助方法，可用于：





1、图片上传
2、图像管理和精灵生成
3、图像嵌入
4、图像转换和处理



使用Angular 2 SDK，您还可以调整图像以在任何设备上交付。可以实时处理上传的图像，以为每个用户提供适合查看设备要求的版本，同时优化性能。Cloudinary可以自动裁剪图像以聚焦于最重要的区域，选择最佳的质量和格式，并以任何分辨率或像素密度将图像以响应方式交付到任何设备上。

所以在拥有一个Cloudinary帐户后，我们可以继续进行，

详情见译文一。

1.注册一个Cloudinary帐户

\2. 在Cloudinary控制台的[“上传设置”](https://cloudinary.com/console/settings/upload)中启用*“未签名的上传”*

![6](D:\TNext\kuabig\31701353_林豪_翻译\6.png)

您需要`cloud_name`从控制台获取

3.我们将仅在利用SystemJS的现有开发环境上构建，并使用一些新软件包。

1 @cloudinary/angular 是Cloudinary Angular 2 SDK，它依靠cloudinary JavaScript库运行。
2 cloudinary-core 是Cloudinary JavaScript核心库。
3 ng2-file-upload 是一个Angular 2软件包，允许我们上传文件。



因此，继续安装cloudinary软件包和文件上传软件包，如下所示：



npm install --save \
  @cloudinary/angular \
  cloudinary-core \
  ng2-file-upload



一旦你完成，更新systemjs.config.js到这个要点文件的内容。之后，打开tsconfig.json文件并添加以下内容：



...

"outDir" : "dist"



这是为了确保.js从TypeScript文件生成的所有文件和源映射都在一个目录中，而不是在其他目录中占据空间。



4.创建app.component.ts，app.module.ts，app.routing.ts，app.component.css，app.component.html，config.ts，main.ts和填充它们。



在app.module.ts文件中，我们像这样导入了Cloudinary模块：



// Cloudinary module
import {
  CloudinaryModule,
  CloudinaryConfiguration,
  provideCloudinary
} from '@cloudinary/angular';



现在config.ts像这样添加您的Cloudinary详细信息：



export default {
  cloud_name: 'xxxxxxx',
  upload_preset: 'xxxxxx'
};



5.我们将处理照片上传，列出照片并在Cloudinary的帮助下对其进行一些转换。因此，继续在app目录中创建两个文件夹，照片列表和照片上传。



在photo-list目录中，添加photo-list.component.css，photo-list.component.html和照片list.component.ts。



在photo-upload目录中，添加photo-upload.component.html和photo-upload.component.ts。



另外，不要忘记为您的照片创建模型！models在app目录中创建一个文件夹，然后添加photo.ts和photo-album.service.ts。



注意：添加<base href="/">到您的index.html文件。

因此，Cloudinary为我们提供了一些现成的Angular 2指令，例如：



1  <cl-image> 允许您轻松地从外部服务（如facebook）中获取并显示网页上的图像
2  <cl-transformation>允许您添加各种效果并变换图像。有关图像处理选项的完整列表，请参见图像转换参考。
3  <cl-video> 允许您在网页上嵌入视频元素



一个典型的例子是：



<cl-image public-id="{some_public_id}" class="thumbnail inline" angle="20" format="jpg">
  <cl-transformation height="150" width="150" crop="fill" gravity="north" effect="sepia" radius="20"/>
</cl-image>



6.尝试运行您的应用程序。您应该能够上传，列出图像并对其进行一些转换



可以在GitHub上找到使用SystemJS的应用程序的完整源代码。可在此处找到带有Webpack的应用程序的源代码。

网址：https://github.com/unicodeveloper/angular-2-cloudinary

该应用程序也已经与Ahead of Time Compilation（AOT）和汇总集成在一起。查看相关源代码。

网址：https://github.com/cloudinary/cloudinary_angular/tree/angular_next/samples/photo_album_aot



## 结论！ ⚡

我们研究了为Angular 2设置开发环境的不同方法，并且采用了一种最简单，非常有效的方法来管理Angular 2应用程序中的文件上传。使用Cloudinary来进行文件管理（图像，视频等），相关应用的开发将更加便捷。