第一篇译文地址：https://ponyfoo.com/articles/make-all-images-on-your-website-responsive-in-3-easy-steps

翻译人：31701353 林豪 软工1701



# 译文：

图片对网站的性能至关重要，但大多数图片仍未实现响应式图片。这不仅是要在屏幕上显示图像，还要使图像尺寸相对于设备合理。在srcset和sizes选项，这是一般的自动匹配是很难实现的。而Cloudinary提供了一种更简单的方法，我们将在本文中进行讨论。



在这篇文章中，我将分享一种有价值的快捷方式，可以帮助您将所有图像变为响应式。但是首先，让我们谈谈什么是响应式图像：如果图像在各种设备尺寸上都保持其质量而又不影响性能，则该图像被认为是响应式的。

为了更好地理解这个概念，让我们看一下一些设备尺寸：



### 屏幕尺寸可能的全角图像尺寸

- **大型/超大型商用屏幕**：2000+像素

- **网站**：760-1200像素

- **手机**：<760像素

  

假设您有一个构建响应式应用程序并且以移动设备优先的策略。您可能会决定整个使用760px图像，而不考虑更大的屏幕。但是如果这些图像要占据渲染它们的设备的整个宽度，那么图片的内容在网站或商业屏幕上看起来会失真并且不够专业。

所以您的下一个尝试是使用最大的图像（2000px）并根据显示该图像的屏幕尺寸将其缩小。



### 缩小图像

使用CSS或JavaScript缩小图像*尺寸*只能使其具有*尺寸*响应性。下图更好地说明了这一点：

下方图为自配：

![1](D:\TNext\kuabig\1.jpg)



![2](D:\TNext\kuabig\2.jpg)



上面2张是我操作后缩小后的图片，可以发现的是虽然像素缩小了，但是图片的大小是不会变的。

所以仅使用缩小比例的方法并不理想，因为它不能解决图像的大小。只是它的尺寸问题。

考虑到手机一般比PC拥有更少的资源，我们还有很多工作要做。



### 尺寸拟合

最好的选择是根据屏幕尺寸生成图像并进行渲染。这个过程可能非常复杂，但是有一条捷径可以帮助您自动化大部分过程。使用[Cloudinary，](https://cloudinary.com/)您可以通过三个简单的步骤使所有图像响应：

#### 1.在您的项目中包括Cloudinary

只需使用脚本标记将Cloudinary SDK包含在index.html中，即可将其添加到您的项目中：

<script   src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.3.0/cloudinary-core-shrinkwrap.min.js"> 
</script>

#### 2.添加图像 data-src

您不希望图像立即呈现，直到JavaScript运行。因此，请使用`data-src`属性而非来添加图片`src`：

<img
  data-src="//图片链接"
  alt=""
  class="cld-responsive" />

使用这种方法，Cloudinary首先分析您的浏览器屏幕，按调整提供在Cloudinary存储中`data-src`的图像大小，然后使用JavaScript以适当的大小和尺寸呈现图像。

标签要注意的两件事：

- `w_auto,c_scale` 转换参数告诉Cloudinary根据检测到的包含元素中的图像实际可用宽度，动态生成缩放为正确宽度值的图像URL。
- `cld-responsive`该类会告诉Cloudinary哪些图像也要应用此功能。



3. #### JavaScript调用

最后，在您的JavaScript文件中初始化Cloudinary实例，然后`responsive`在该实例上调用方法：

const cl = cloudinary.Cloudinary.new({ cloud_name: 'YOUR_CLOUD_NAME' }) cl.responsive()



请记住**创建一个免费的Cloudinary**帐户，以便您可以接收用于配置此实例的云名称。

这段代码将遍历DOM，找到具有该类的所有图像标签，以在cld-responsive其上应用尺寸和尺寸适合的图像。



[创建账户地址]: https://cloudinary.com/users/register/free



### 最后的话

请始终牢记，当您使用CSS（如以下代码）使图像响应时，并不能保证良好的用户体验：

img {  width: 100%;  height: auto; }

这些图像的大小保持不变。而再移动设备上的大图像会占用大量资源（如分配的内存和正在运行的进程），导致下载缓慢或用户设备上的意外行为。

而响应式图像可确保用户节省大量数据带宽，并在使用图像丰富的网站或应用程序时获得出色的体验。

最后，请记住，srcset和sizes`必须启用浏览器的javaScript才能使用。而在这基础上可能牺牲原有的预加载功能。